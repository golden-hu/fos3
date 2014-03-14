package haitai.fos.ffse.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.*;
import haitai.fos.ffse.entity.table.*;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class SVoucherService {
	@Autowired
	private ISVoucherDAO dao;
	@Autowired
	private ISVoucherItemDAO itemDao;
	@Autowired
	private ISInvoiceDAO invoiceDao;
	@Autowired
	private ISInvoiceItemDAO invoiceItemDao;
	@Autowired
	private ISExpenseDAO expenseDao;
	@Autowired
	private IFConsignDAO consignDao;
	@Autowired
	private ISBalanceDAO balanceDao;
	@Autowired
	private ISPrDAO prDao;
	
	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional
	public List save(Map pmap,List entityList) {
		List retList = new ArrayList();
		Integer parentId = null;
		String voucNo = null;
		Date vouchDate = null;
		boolean isVoucherDateFlag = false;
		Set<Integer> invoiceSet = new HashSet<Integer>();
		Set<Integer> invoiceItemSet = new HashSet<Integer>();
		Set<Integer> expenseSet = new HashSet<Integer>();
		Set<Integer> consignSet = new HashSet<Integer>();
		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof SVoucher) {
				SVoucher entity = (SVoucher) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setVoucId(null);
					Map<String, String> paramMap = new HashMap<String, String>();
					paramMap.put(SerialFactory.RULE_RP, entity.getVoucType());
					String no = SerialFactory.getSerial("voucher_no", paramMap);
					entity.setVoucNo(no);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					vouchDate = entity.getVoucDate();
					SVoucher voucher = dao.findById(entity.getVoucId());
					if (voucher.getVoucDate().getTime()!=vouchDate.getTime()) {
						isVoucherDateFlag = true;
					}
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					SVoucher delEntity = dao.findById(entity.getVoucId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
					Map<String, Object> queryMap = new HashMap<String, Object>();
					queryMap.put("voucId", entity.getVoucId());
					List<SVoucherItem> list = itemDao.findByProperties(queryMap);
					for (SVoucherItem voucherItem : list) {
						voucherItem.setRowAction(RowAction.R);
						itemDao.update(voucherItem);
						invoiceItemSet.add(voucherItem.getInitId());
						invoiceSet.add(voucherItem.getInvoId());
						expenseSet.add(voucherItem.getExpeId());
						consignSet.add(voucherItem.getConsId());
					}
//					//删除核销单, 要恢复发票和费用的状态
//					cancelVoucher(entity.getVoucId());
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				parentId = entity.getVoucId();
				voucNo = entity.getVoucNo();
				vouchDate = entity.getVoucDate();
				break;
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof SVoucherItem) {
				SVoucherItem entity = (SVoucherItem) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setVoitId(null);
					entity.setVoucId(parentId);
					entity.setVoucNo(voucNo);
					itemDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(itemDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					SVoucherItem delEntity = itemDao.findById(entity.getVoitId());
					delEntity.setRowAction(RowAction.R);
					itemDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				//需要更新的发票明细
				invoiceItemSet.add(entity.getInitId());
				//需要更新的发票和费用行
				invoiceSet.add(entity.getInvoId());
				expenseSet.add(entity.getExpeId());
				//需要更新的委托
				consignSet.add(entity.getConsId());
			}
		}
		
		//如果核销日期改变那么相应的核销明细表的核销日期也要改变
		if (isVoucherDateFlag) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("voucId", parentId);
			List<SVoucherItem> itemList = itemDao.findByProperties(queryMap);
			for (SVoucherItem voucherItem : itemList) {
				voucherItem.setVoucDate(vouchDate);
				itemDao.update(voucherItem);
				expenseSet.add(voucherItem.getExpeId());
				if (!retList.contains(voucherItem)) {
					retList.add(voucherItem);
				}
			}
		}
				
		for (Integer id : invoiceItemSet) {
			SInvoiceItem invoiceItem = invoiceItemDao.findById(id);
			syncInvoiceItem(invoiceItem);
			invoiceItemDao.update(invoiceItem);
		}
		for (Integer id : invoiceSet) {
			SInvoice invoice = invoiceDao.findById(id);
			syncInvoice(invoice);
			invoiceDao.update(invoice);
		}
		for (Integer id : expenseSet) {
			SExpense expense = expenseDao.findById(id);
			syncExpense(expense);
			expenseDao.update(expense);
		}
		for (Integer id : consignSet) {
			FConsign consign = consignDao.findById(id);
			syncConsign(consign);
			consignDao.update(consign);
		}
		if (parentId != null) {
			SVoucher voucher = dao.findById(parentId);
			sumBalance(voucher);
		}
		
		//如果是从付款申请核销，更新付款申请的状态
		String sPrId = (String)pmap.get("prId");
		if(StringUtil.isNotBlank(sPrId)){
			Integer id = Integer.valueOf(sPrId);
			SPr p = prDao.findById(id);
			p.setPrWriteOffStatus(new Short("2"));
			p.setRowAction(RowAction.M);
			prDao.update(p);
		}		
		return retList;
	}

	private void sumBalance(SVoucher voucher) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("custId", voucher.getCustId());
		queryMap.put("currCode", voucher.getCurrCode());
		List<SBalance> list = balanceDao.findByProperties(queryMap);
		List<FosQuery> conditions = new ArrayList<FosQuery>();
		FosQuery fq = new FosQuery("voucStatus", ConstUtil.SQL_OP_NOT_EQUAL,
				String.valueOf(ConstUtil.INVOICE_STATUS_CANCELLED));
		conditions.add(fq);
		Double fixAmount = dao.getBalance(conditions, queryMap);
		if (list.size() == 1) {
			SBalance balance = list.get(0);
			balance.setBalaAmount(fixAmount);
			balanceDao.update(balance);
		} else if (fixAmount != null && !ConstUtil.DoubleZero.equals(fixAmount)) {
			SBalance balance = new SBalance();
			balance.setCustId(voucher.getCustId());
			balance.setCustName(voucher.getCustName());
			balance.setCustSname(voucher.getCustSname());
			balance.setCurrCode(voucher.getCurrCode());
			balance.setBalaAmount(fixAmount);
			balanceDao.save(balance);
		}
	}

	/**
	 * 计算核销状态
	 *
	 * @param amount		 the amount
	 * @param amountWriteOff the write off amount
	 * @return the status
	 */
	private Short caclWriteOffStatus(Double amount, Double amountWriteOff) {
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

	/**
	 * 核销, 需要更新费用的核销金额, 核销状态
	 *
	 * @param expense the expense
	 */
	@Transactional
	private void syncExpense(SExpense expense) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("expeId", expense.getExpeId());
		queryMap.put("voitCancelFlag", ConstUtil.FalseShort);
		List<SVoucherItem> list = itemDao.findByProperties(queryMap);
		Double writeOffAmount = (double) 0;
		Double writeOffRcAmount = (double) 0;
		Date  vouchDate = null;
		for (SVoucherItem item : list) {
			if (item.getVoitAmountOriW() != null) {
				if(!item.getExpeCurrCode().equals(item.getInvoCurrCode())&&!item.getExpeCurrCode().equals("CNY")) {
					writeOffAmount += item.getVoitAmountOriW()/item.getVoucExRate();
				}else{
					writeOffAmount += item.getVoitAmountOriW();
				}
					
			}
			if (item.getVoitAmountW() != null && item.getInitExRate() != null) {
				if(!item.getExpeCurrCode().equals(item.getInvoCurrCode())&&!item.getExpeCurrCode().equals("CNY")) {
					writeOffRcAmount += item.getVoitAmountW();
				}else{
					writeOffRcAmount += item.getVoitAmountW() * item.getInitExRate();
				}
				
			}
			vouchDate = item.getVoucDate();
		}
		expense.setExpeWriteOffAmount(writeOffAmount);
		Short status = caclWriteOffStatus(expense.getExpeTotalAmount(), writeOffAmount);
		expense.setExpeWriteoffStatus(status);
		expense.setExpeWriteOffRcAmount(writeOffRcAmount);
		expense.setExpeWriteOffDate(vouchDate);
		expense.setExpeWriteOffBy(SessionManager.getStringAttr(SessionKeyType.USERNAME));
	}

	/**
	 * 核销, 需要更新发票的核销金额, 核销状态, 核销单号等字段
	 *
	 * @param invoice the invoice
	 */
	@Transactional
	private void syncInvoice(SInvoice invoice) {
		//更新发票的核销单号, 核销金额
		invoice.setInvoWriteOffBy((Integer) SessionManager.getAttr(SessionKeyType.UID));
		invoice.setInvoWriteOffDate(TimeUtil.getNow());

		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("invoId", invoice.getInvoId());
		queryMap.put("initCancelFlag", ConstUtil.FalseShort);
		List<SInvoiceItem> list = invoiceItemDao.findByProperties(queryMap);
		String vouc = "";
		String writeOffNo = "";
		Double writeOffAmount = (double) 0;
		Set<String> voucNoSet = new HashSet<String>();
		Set<String> writeOffNoSet = new HashSet<String>();
		for (SInvoiceItem invoiceItem : list) {
			if (invoiceItem.getVoucNo() != null && !voucNoSet.contains(invoiceItem.getVoucNo())) {
				vouc += invoiceItem.getVoucNo() + ConstUtil.COMMA;
				voucNoSet.add(invoiceItem.getVoucNo());
			}
			if (invoiceItem.getInitWriteOffNo() != null && !writeOffNoSet.contains(invoiceItem.getInitWriteOffNo())) {
				writeOffNo += invoiceItem.getInitWriteOffNo() + ConstUtil.COMMA;
				writeOffNoSet.add(invoiceItem.getInitWriteOffNo());
			}
			if (invoiceItem.getInitInvoiceAmountW() != null) {
				writeOffAmount += invoiceItem.getInitInvoiceAmountW();
			}
		}
		if (vouc.endsWith(ConstUtil.COMMA)) {
			vouc = vouc.substring(0, vouc.length() - 1);
		}
		if (writeOffNo.endsWith(ConstUtil.COMMA)) {
			writeOffNo = writeOffNo.substring(0, writeOffNo.length() - 1);
		}
		invoice.setVoucNo(vouc);
		invoice.setInvoWriteOffNo(writeOffNo);
		invoice.setInvoAmountWriteOff(writeOffAmount);
		//核销状态		
		Short status = caclWriteOffStatus(invoice.getInvoAmount(), writeOffAmount);
		invoice.setInvoWriteOffStatus(status);
	}

	/**
	 * 核销, 需要更新发票明细的核销号, 核销单号, 核销金额等字段
	 *
	 * @param invoiceItem the invoice item
	 */
	@Transactional
	private void syncInvoiceItem(SInvoiceItem invoiceItem) {
		invoiceItem.setInitWriteOffBy((Integer) SessionManager.getAttr(SessionKeyType.UID));
		invoiceItem.setInitWriteOffDate(TimeUtil.getNow());

		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("initId", invoiceItem.getInitId());
		queryMap.put("voitCancelFlag", ConstUtil.FalseShort);
		List<SVoucherItem> list = itemDao.findByProperties(queryMap);
		String writeOffNo = "";
		String voucNo = "";
		Double amountOriW = (double) 0;
		Double amountW = (double) 0;
		Set<String> voucNoSet = new HashSet<String>();
		Set<String> writeOffNoSet = new HashSet<String>();
		for (SVoucherItem voucherItem : list) {
			//拼多个核销号和核销单号
			if (voucherItem.getVoitWriteOffNo() != null && !writeOffNoSet.contains(voucherItem.getVoitWriteOffNo())) {
				writeOffNo += voucherItem.getVoitWriteOffNo() + ConstUtil.COMMA;
				writeOffNoSet.add(voucherItem.getVoitWriteOffNo());
			}
			if (voucherItem.getVoucNo() != null && !voucNoSet.contains(voucherItem.getVoucNo())) {
				voucNo += voucherItem.getVoucNo() + ConstUtil.COMMA;
				voucNoSet.add(voucherItem.getVoucNo());
			}
			//累加核销金额
			if (voucherItem.getVoitAmountOriW() != null) {
				amountOriW += voucherItem.getVoitAmountOriW();
			}
			if (voucherItem.getVoitAmountW() != null) {
				amountW += voucherItem.getVoitAmountW();
			}
		}
		if (voucNo.endsWith(ConstUtil.COMMA)) {
			voucNo = voucNo.substring(0, voucNo.length() - 1);
		}
		if (writeOffNo.endsWith(ConstUtil.COMMA)) {
			writeOffNo = writeOffNo.substring(0, writeOffNo.length() - 1);
		}
		invoiceItem.setVoucNo(voucNo);
		invoiceItem.setInitWriteOffNo(writeOffNo);
		invoiceItem.setInitInvoiceAmountOriW(amountOriW);
		invoiceItem.setInitInvoiceAmountW(amountW);
		//核销状态
		Short status = caclWriteOffStatus(invoiceItem.getInitInvoiceAmount(), amountW);
		invoiceItem.setInitWriteOffStatus(status);
	}

	/**
	 * 核销, 需要更新委托的核销状态和核销时间
	 *
	 * @param consign the consign
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
			if (ConstUtil.PR_TYPE_RECEIVE.equals(expense.getExpeType())) {
				if (ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense.getExpeWriteoffStatus())) {
					hasCheckedAr = true;
				} else if (ConstUtil.EXPENSE_INVOICE_STATUS_PART.equals(expense.getExpeWriteoffStatus())) {
					hasCheckedAr = true;
					hasNotCheckedAr = true;
					break;
				} else {
					hasNotCheckedAr = true;
				}
			}
		}
		for (SExpense expense : expenseList) {
			if (ConstUtil.PR_TYPE_PAY.equals(expense.getExpeType())) {
				if (ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense.getExpeWriteoffStatus())) {
					hasCheckedAp = true;
				} else if (ConstUtil.EXPENSE_INVOICE_STATUS_PART.equals(expense.getExpeWriteoffStatus())) {
					hasCheckedAp = true;
					hasNotCheckedAp = true;
					break;
				} else {
					hasNotCheckedAp = true;
				}
			}
		}
		//有核销 + 有未核销 = 部分核销
		//有核销 + 无未核销 = 全部核销
		//其他 = 未核销
		if (hasCheckedAr && hasNotCheckedAr) {
			statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
			dateAr = TimeUtil.getNow();
		} else if (hasCheckedAr && !hasNotCheckedAr) {
			statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
			dateAr = TimeUtil.getNow();
		}
		consign.setConsStatusAr(statusAr);
		consign.setConsArWriteOffDate(dateAr);

		if (hasCheckedAp && hasNotCheckedAp) {
			statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
			dateAp = TimeUtil.getNow();
		} else if (hasCheckedAp && !hasNotCheckedAp) {
			statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
			dateAp = TimeUtil.getNow();
		}
		consign.setConsStatusAp(statusAp);
		consign.setConsApWriteOffDate(dateAp);
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("voucId"));
		Short status = Short.valueOf((String) queryMap.get("voucStatus"));
		SVoucher entity = dao.findById(id);
		if (entity != null) {
			entity.setVoucStatus(status);
			if (ConstUtil.INVOICE_STATUS_CHECKED.equals(status)) {
				entity.setVoucChecker((Integer) SessionManager.getAttr(SessionKeyType.UID));
				entity.setVoucCheckDate(TimeUtil.getNow());
			}
			dao.update(entity);
		}
	}

	@Transactional(readOnly = true)
	public List<SVoucher> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
			retList.addAll(itemDao.findByProperties(queryMap));
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<SVoucherItem> queryItem(Map queryMap) {
		return itemDao.findByProperties(queryMap);
	}

	@Transactional
	public void cancelVoucher(Map<String, Object> queryMap) {
		Integer voucId = Integer.valueOf((String) queryMap.get("voucId"));
		cancelVoucher(voucId);
	}

	private void cancelVoucher(Integer voucId) {
		SVoucher voucher = dao.findById(voucId);
		voucher.setVoucStatus(ConstUtil.INVOICE_STATUS_CANCELLED);
		dao.update(voucher);
		//更新voucherItem的作废状态
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("voucId", voucId);
		List<SVoucherItem> list = itemDao.findByProperties(queryMap);
		Set<Integer> invoiceSet = new HashSet<Integer>();
		Set<Integer> invoiceItemSet = new HashSet<Integer>();
		Set<Integer> expenseSet = new HashSet<Integer>();
		for (SVoucherItem voucherItem : list) {
			voucherItem.setVoitCancelFlag(ConstUtil.TrueShort);
			itemDao.update(voucherItem);
			//需要更新的发票明细,发票和费用行
			invoiceItemSet.add(voucherItem.getInitId());
			invoiceSet.add(voucherItem.getInvoId());
			expenseSet.add(voucherItem.getExpeId());
		}
		for (Integer id : invoiceItemSet) {
			SInvoiceItem invoiceItem = invoiceItemDao.findById(id);
			syncInvoiceItem(invoiceItem);
			invoiceItemDao.update(invoiceItem);
		}
		for (Integer id : invoiceSet) {
			SInvoice invoice = invoiceDao.findById(id);
			syncInvoice(invoice);
			invoiceDao.update(invoice);
		}
		for (Integer id : expenseSet) {
			SExpense expense = expenseDao.findById(id);
			syncExpense(expense);
			expenseDao.update(expense);
		}
	}
}
