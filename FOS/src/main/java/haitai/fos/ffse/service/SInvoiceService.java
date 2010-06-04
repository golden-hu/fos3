package haitai.fos.ffse.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceEntryDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceItemDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceNoDAO;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SInvoiceEntry;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fos.ffse.entity.table.SInvoiceNo;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SInvoiceService {
	
	private ISInvoiceDAO dao = null;
	private ISInvoiceEntryDAO entryDao = null;
	private ISInvoiceItemDAO itemDao = null;
	private ISExpenseDAO expenseDao = null;
	private ISInvoiceNoDAO noDao = null;
	private IFConsignDAO consignDao = null;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Integer parentId = null;
		String invoNo = null;
		String invoTaxNo = null;
		Set<Integer> invoiceSet = new HashSet<Integer>();
		boolean invoNoChangeFlag = false;
		boolean isInvoDelFlag = false;
		SInvoice retInvoice = null;
		// handle parent first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof SInvoice) {
				SInvoice entity = (SInvoice) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInvoId(null);
					Map<String, String> paramMap = new HashMap<String, String>();
					paramMap.put(SerialFactory.RULE_RP, entity.getInvoType());
					String no = SerialFactory.getSerial("invoice_no", paramMap);
					entity.setInvoNo(no);
					//应收,且不是debit notes的时候, 自动取税务发票号
					if (ConstUtil.PR_TYPE_RECEIVE.equalsIgnoreCase(entity
							.getInvoType())
							&& ConstUtil.FalseShort.equals(entity
									.getInvoDebitnoteFlag())) {
						getTaxNoAuto(entity);
					}
					checkTaxNoDuplicated(entity);
					entity.setInvoIssuer(SessionManager
							.getStringAttr(SessionKeyType.USERNAME));
					entity.setInvoIssueDate(TimeUtil.getNow());
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					invoTaxNo = entity.getInvoTaxNo();
					checkTaxNoDuplicated(entity);
					SInvoice dbInvoice = dao.findById(entity.getInvoId());
					if(!StringUtil.isEqual(invoTaxNo, dbInvoice.getInvoTaxNo())) {
						invoNoChangeFlag = true;
					}
					retInvoice = dao.update(entity);
					retList.add(retInvoice);
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					cancelInvoice(entity.getInvoId());
					SInvoice delEntity = dao.findById(entity.getInvoId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
					isInvoDelFlag = true;
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				parentId = entity.getInvoId();
				invoNo = entity.getInvoNo();
				invoTaxNo = entity.getInvoTaxNo();
				invoiceSet.add(entity.getInvoId());
				break;
			}
		}

		// handle child
		Set<Integer> expenseSet = new HashSet<Integer>();
		Set<Integer> consignSet = new HashSet<Integer>();
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof SInvoiceEntry) {
				SInvoiceEntry entity = (SInvoiceEntry) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInenId(null);
					entity.setInvoId(parentId);
					entryDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(entryDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					SInvoiceEntry delEntity = entryDao.findById(entity.getInenId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					entryDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
			}else if (obj instanceof SInvoiceItem) {
				SInvoiceItem entity = (SInvoiceItem) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInvoId(parentId);
					entity.setInvoNo(invoNo);
					entity.setInvoTaxNo(invoTaxNo);				
					entity.setInitId(null);
					itemDao.save(entity);
					retList.add(entity);
					
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInvoNo(invoNo);
					entity.setInvoTaxNo(invoTaxNo);					
					retList.add(itemDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					SInvoiceItem delEntity = itemDao.findById(entity.getInitId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					itemDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				expenseSet.add(entity.getExpeId());
				consignSet.add(entity.getConsId());
			}
		}
		//修改发票头, 更新invoiceItem上的税务发票号
		if(invoNoChangeFlag) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("invoId", parentId);
			List<SInvoiceItem> itemList = itemDao.findByProperties(queryMap);
			for (SInvoiceItem invoiceItem : itemList) {
				invoiceItem.setInvoTaxNo(invoTaxNo);
				itemDao.update(invoiceItem);
				expenseSet.add(invoiceItem.getExpeId());
				if(!retList.contains(invoiceItem)) {
					retList.add(invoiceItem);
				}
			}
		}
		for (Integer id : expenseSet) {
			SExpense expense = expenseDao.findById(id);
			syncExpense(expense);
			expenseDao.update(expense);
		}
		FConsign firstConsign = null;
		for (Integer id : consignSet) {
			FConsign consign = consignDao.findById(id);
			syncConsign(consign);
			consignDao.update(consign);
			if (firstConsign == null
					|| firstConsign.getConsId() > consign.getConsId()) {
				firstConsign = consign;
			}
		}
		//委托上的一些信息要刷新到发票上, 取invoiceItem上的consId最小的那个委托
		if(!isInvoDelFlag && firstConsign != null) {
			if (retInvoice == null) {
				retInvoice = dao.findById(parentId);
			}
			copyInfoFromConsign(retInvoice, firstConsign);
			dao.update(retInvoice);
		}
		return retList;
	}

	/**
	 * 检查税务发票号唯一
	 * @param entity
	 */
	private void checkTaxNoDuplicated(SInvoice entity) {
		if(StringUtil.isBlank(entity.getInvoTaxNo())){
			return;
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		List<FosQuery> condition = new ArrayList<FosQuery>();
		condition.add(new FosQuery("invoTaxNo", ConstUtil.SQL_OP_EQUAL, entity
				.getInvoTaxNo()));
		condition.add(new FosQuery("invoStatus", ConstUtil.SQL_OP_NOT_EQUAL,
				String.valueOf(ConstUtil.INVOICE_STATUS_CANCELLED)));
		List<SInvoice> list = dao.complexQuery(condition, queryMap);
		//如果>1, 说明肯定重复了
		//如果=1, 而且主键不等, 说明有另外一个对象有同样的号
		if (list.size() > 1
				|| (list.size() == 1 
						&& !list.get(0).getInvoId().equals(entity.getInvoId()))) {
			throw new BusinessException(
					MessageUtil.FFSE_INVOICE_TAX_NO_DUPLICATED);
		}
	}

	private void copyInfoFromConsign(SInvoice invoice, FConsign firstConsign) {
		invoice.setInvoVessel(firstConsign.getVessName());
		invoice.setInvoVoyage(firstConsign.getVoyaName());
		invoice.setInvoBlNo(firstConsign.getConsMblNo());
		invoice.setInvoSailDate(firstConsign.getConsSailDate());
		invoice.setInvoPol(firstConsign.getConsPolEn());
		invoice.setInvoPod(firstConsign.getConsPodEn());
		invoice.setInvoConsNo(firstConsign.getConsNo());
		invoice.setInvoCargoName(firstConsign.getConsCargoNameEn());
		invoice.setInvoCargoPackages(firstConsign.getConsCargoPackages());
		invoice.setInvoCargoGrossWeight(firstConsign.getConsCargoGrossWeight());
		invoice.setInvoCargoMeasurement(firstConsign.getConsCargoMeasurement());
		invoice.setInvoContainersInfo(firstConsign.getConsContainersInfo());
		invoice.setInvoOperator(firstConsign.getConsOperatorName());
		invoice.setInvoContractNo(firstConsign.getConsContractNo());
	}

	private void getTaxNoAuto(SInvoice entity) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("active", ConstUtil.TrueStr);
		List<SInvoiceNo> taxnoList = noDao.findByProperties(queryMap);
		if(taxnoList != null && taxnoList.size() >= 1){
			SInvoiceNo taxno = taxnoList.get(0);
			Long nextNo = taxno.getInnoNextNo();
			Long endNo = taxno.getInnoEndNo();
			if(nextNo < endNo){
				//小于, 取号, 并+1
				setTaxNo(entity, taxno);
			}else if(nextNo == endNo){
				setTaxNo(entity, taxno);
				taxno.setActive(ConstUtil.FalseShort);
			}else{
				//如果大于, 说明早应该设置为禁用状态
				taxno.setActive(ConstUtil.FalseShort);
			}
			noDao.update(taxno);
		}
	}

	private void setTaxNo(SInvoice entity, SInvoiceNo taxno) {
		Long nextNo = taxno.getInnoNextNo();
		String no = String.valueOf(nextNo);
		if (StringUtil.isNotBlank(taxno.getInnoPrefix())) {
			no = taxno.getInnoPrefix() + no;
		}
		entity.setInvoTaxNo(String.valueOf(no));
		taxno.setInnoNextNo(nextNo + 1);
	}

	/**
	 * @param entity
	 */
	@Transactional
	private void syncExpense(SExpense expense) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("expeId", expense.getExpeId());
		propertyMap.put("initCancelFlag", ConstUtil.FalseShort);
		List<SInvoiceItem> list = itemDao.findByProperties(propertyMap);
		String invoiceNo = "";
		String invoTaxNo = "";
		Double amount = new Double(0);
		Set<String> invoiceNoSet = new HashSet<String>();
		Set<String> invoTaxNoSet = new HashSet<String>();
		for (SInvoiceItem invoiceItem : list) {
			if (invoiceItem.getInvoNo() != null
					&& !invoiceNoSet.contains(invoiceItem.getInvoNo())) {
				invoiceNo += invoiceItem.getInvoNo() + ConstUtil.COMMA;
				invoiceNoSet.add(invoiceItem.getInvoNo());
			}
			if (invoiceItem.getInvoTaxNo() != null
					&& !invoTaxNoSet.contains(invoiceItem.getInvoTaxNo())) {
				invoTaxNo += invoiceItem.getInvoTaxNo() + ConstUtil.COMMA;
				invoTaxNoSet.add(invoiceItem.getInvoTaxNo());
			}
			if (invoiceItem.getInitInvoiceAmountW() != null) {
				amount += invoiceItem.getInitInvoiceAmountOri();
			}
		}
		if(invoiceNo.endsWith(ConstUtil.COMMA)){
			invoiceNo = invoiceNo.substring(0, invoiceNo.length() - 1);
		}
		if(invoTaxNo.endsWith(ConstUtil.COMMA)){
			invoTaxNo = invoTaxNo.substring(0, invoTaxNo.length() - 1);
		}
		expense.setExpeInvoiceNo(invoiceNo);
		expense.setExpeTaxInvoiceNo(invoTaxNo);
		expense.setExpeInvoiceAmount(amount);
		//核销状态		
		Short status = caclInvoiceStatus(expense.getExpeTotalAmount(), amount);
		expense.setExpeInvoiceStatus(status);
		expense.setExpeInvoiceDate(TimeUtil.getNow());
		expense.setExpeInvoiceBy(SessionManager
				.getStringAttr(SessionKeyType.USERNAME));
	}

	/**
	 * 开票, 需要更新委托的开票状态和开票时间
	 * @param consign
	 */
	@Transactional
	private void syncConsign(FConsign consign) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("consId", consign.getConsId());
		List<SExpense> expenseList = expenseDao.findByProperties(queryMap);
		Short statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		Short statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		Date dateAr = null;
		Date dateAp = null;
		
		boolean hasCheckedAr = false;
		boolean hasNotCheckedAr = false;
		boolean hasCheckedAp = false;
		boolean hasNotCheckedAp = false;
		for (SExpense expense : expenseList) {
			if(ConstUtil.PR_TYPE_RECEIVE.equals(expense.getExpeType())){
				if (ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAr = true;
				} else if (ConstUtil.EXPENSE_INVOICE_STATUS_PART.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAr = true;
					hasNotCheckedAr = true;
					break;
				} else {
					hasNotCheckedAr = true;
				}
			}
		}
		for (SExpense expense : expenseList) {
			if(ConstUtil.PR_TYPE_PAY.equals(expense.getExpeType())){
				if (ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAp = true;
				} else if (ConstUtil.EXPENSE_INVOICE_STATUS_PART.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAp = true;
					hasNotCheckedAp = true;
					break;
				} else {
					hasNotCheckedAp = true;
				}
			}
		}
		//有全开票 + 有未开票 = 部分开票
		//有全开票 + 无未开票 = 全部开票
		//其他 = 未开票
		if(hasCheckedAr && hasNotCheckedAr){
			statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
			dateAr = TimeUtil.getNow();
		}else if(hasCheckedAr && !hasNotCheckedAr){
			statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
			dateAr = TimeUtil.getNow();
		}
		consign.setConsStatusInvoR(statusAr);
		consign.setConsInvoRDate(dateAr);
		
		if(hasCheckedAp && hasNotCheckedAp){
			statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
			dateAp = TimeUtil.getNow();
		}else if(hasCheckedAp && !hasNotCheckedAp){
			statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
			dateAp = TimeUtil.getNow();
		}
		consign.setConsStatusInvoP(statusAp);
		consign.setConsInvoPDate(dateAp);
	}
	
	/**
	 * 计算开票状态
	 * @param amount
	 * @param amountWriteOff
	 * @return
	 */
	private Short caclInvoiceStatus(Double amount, Double amountWriteOff) {
		Short status;
		if (amountWriteOff == null || amountWriteOff == 0) {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		} else if (NumberUtil.amountEqual(amountWriteOff, amount)) {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
		} else {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
		}
		return status;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if(queryMap.containsKey(ConstUtil.PARAM_EAGER)){
			retList.addAll(entryDao.findByProperties(queryMap));
			retList.addAll(itemDao.findByProperties(queryMap));
		}
		return retList;
	}	
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SInvoiceEntry> queryEntry(Map queryMap) {
		return entryDao.findByProperties(queryMap);
	}	

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SInvoiceItem> queryItem(Map queryMap) {
		return itemDao.findByProperties(queryMap);
	}	

	@Transactional
	public void checkInvoice(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("invoId"));
		Short status = Short.valueOf((String) queryMap.get("invoStatus"));
		dao.checkStatusById(id, status);
	}
	
	@Transactional
	public void cancelInvoice(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("invoId"));
		cancelInvoice(id);
	}

	private void cancelInvoice(Integer invoId) {
		SInvoice invoice = dao.findById(invoId);
		//如果发票已经核销, 不能作废
		if (invoice.getInvoWriteOffStatus() != null
				&& ConstUtil.TrueShort.equals(invoice.getInvoWriteOffStatus())) {
			throw new BusinessException("Invoice had write off amount, can't cancel");
		}
		//更新发票的核销状态
		invoice.setInvoStatus(ConstUtil.INVOICE_STATUS_CANCELLED);
		dao.update(invoice);
		
		//更新费用的核销状态和核销金额
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("invoId", invoId);
		List<SInvoiceItem> itemList = itemDao.findByProperties(queryMap);
		Set<Integer> expenseSet = new HashSet<Integer>();
		for (SInvoiceItem item : itemList) {
			item.setInitCancelFlag(ConstUtil.TrueShort);
			itemDao.update(item);
			expenseSet.add(item.getExpeId());
		}
		for (Integer id : expenseSet) {
			SExpense expense = expenseDao.findById(id);
			syncExpense(expense);
			expenseDao.update(expense);
		}
	}
	
	@Transactional(readOnly = true)
	public List<SInvoice> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
	
	@Transactional(readOnly = true)
	public List<SInvoiceItem> complexQueryInvoiceItem(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return itemDao.complexQuery(conditions, queryMap);
	}
	
	@Transactional(readOnly = true)
	public List<SInvoiceItem> complexQueryInvoiceItemByPrId(
			List<FosQuery> conditions, Map<String, Object> queryMap) {
		return itemDao.complexQueryByPrId(conditions, queryMap);
	}
	
	public ISInvoiceDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ISInvoiceDAO dao) {
		this.dao = dao;
	}

	public ISInvoiceEntryDAO getEntryDao() {
		return entryDao;
	}

	@Autowired
	public void setEntryDao(ISInvoiceEntryDAO entryDao) {
		this.entryDao = entryDao;
	}

	public ISInvoiceItemDAO getItemDao() {
		return itemDao;
	}

	@Autowired
	public void setItemDao(ISInvoiceItemDAO itemDao) {
		this.itemDao = itemDao;
	}

	public ISExpenseDAO getExpenseDao() {
		return expenseDao;
	}

	@Autowired
	public void setExpenseDao(ISExpenseDAO expenseDao) {
		this.expenseDao = expenseDao;
	}

	public ISInvoiceNoDAO getNoDao() {
		return noDao;
	}

	@Autowired
	public void setNoDao(ISInvoiceNoDAO noDao) {
		this.noDao = noDao;
	}

	public IFConsignDAO getConsignDao() {
		return consignDao;
	}

	@Autowired
	public void setConsignDao(IFConsignDAO consignDao) {
		this.consignDao = consignDao;
	}
	
}
