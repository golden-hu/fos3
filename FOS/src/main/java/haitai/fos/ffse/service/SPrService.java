package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISInvoiceDAO;
import haitai.fos.ffse.entity.idao.ISPrDAO;
import haitai.fos.ffse.entity.idao.ISPrItemDAO;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SPr;
import haitai.fos.ffse.entity.table.SPrItem;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.TimeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SPrService {
	@Autowired
	private ISPrDAO dao;
	@Autowired
	private ISPrItemDAO itemDao;
	@Autowired
	private ISInvoiceDAO invoiceDao;

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Integer parentId = null;
		String prNo = null;
		Double prAmountPaid = 0.00;
		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof SPr) {
				SPr entity = (SPr) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setPrId(null);
					Map<String, String> paramMap = new HashMap<String, String>();
					paramMap.put(SerialFactory.RULE_RP, entity.getPrType());
					paramMap.put(SerialFactory.RULE_CURRENCY, entity.getCurrCode().substring(0, 1));
					String no = SerialFactory.getSerial("pr_no", paramMap);
					entity.setPrNo(no);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					SPr delEntity = dao.findById(entity.getPrId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);

					//级联删除, 更新为removed, 清除子表关联字段
					Map queryMap = new HashMap<String, Object>();
					queryMap.put(ConstUtil.CompCode, SessionManager.getStringAttr(SessionKeyType.COMPCODE));
					queryMap.put("prId", entity.getPrId());
					List<SPrItem> itemList = itemDao.findByProperties(queryMap);
					for (SPrItem prItem : itemList) {
						resetInvoiceStatus(prItem);
						prItem.setRowAction(RowAction.R);
						itemDao.update(prItem);
					}
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				parentId = entity.getPrId();
				prNo = entity.getPrNo();
				break;
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof SPrItem) {
				SPrItem entity = (SPrItem) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setPritId(null);
					entity.setPrId(parentId);
					itemDao.save(entity);
					Map<String, Object> queryMap = new HashMap<String, Object>();
					queryMap.put("invoId", entity.getInvoId());
					List<SPrItem> sPrItems = itemDao.findByProperties(queryMap);
					for(SPrItem e :sPrItems){
						prAmountPaid = e.getPrAmountPaid();
						prAmountPaid+=e.getPrAmount();
					}
					entity.setPrAmountPaid(prAmountPaid);
					entity.setVersion(entity.getVersion()+1);
					itemDao.save(entity);
					retList.add(entity);
					//更新对应的发票状态为已生成托收单
					SInvoice invoice = invoiceDao.findById(entity.getInvoId());
					if(entity.getInvoAmount()<=entity.getPrAmountPaid()){
						invoice.setInvoPrFlag(ConstUtil.TrueShort);
					}else{
						invoice.setInvoPrFlag(ConstUtil.FalseShort);
					}
					invoice.setInvoAmountPaid(prAmountPaid);
					invoice.setInvoEntrustNo(prNo);
					invoiceDao.update(invoice);
				} else if (entity.getRowAction() == RowAction.M) {
					itemDao.update(entity);
					entity.setVersion(entity.getVersion()+1);
					Map<String, Object> queryMap = new HashMap<String, Object>();
					queryMap.put("invoId", entity.getInvoId());
					List<SPrItem> sPrItems = itemDao.findByProperties(queryMap);
					for(SPrItem e :sPrItems){
						prAmountPaid+=e.getPrAmount();
					}
					entity.setPrAmountPaid(prAmountPaid);
					SPrItem updateList = itemDao.update(entity);
					SInvoice invoice = invoiceDao.findById(entity.getInvoId());
					if(entity.getInvoAmount()<=entity.getPrAmountPaid()){
						invoice.setInvoPrFlag(ConstUtil.TrueShort);
					}else{
						invoice.setInvoPrFlag(ConstUtil.FalseShort);
					}
					invoice.setInvoAmountPaid(prAmountPaid);
					invoiceDao.update(invoice);
					retList.add(updateList);
				} else if (entity.getRowAction() == RowAction.R) {
					SPrItem delEntity = itemDao.findById(entity.getPritId());
					delEntity.setRowAction(RowAction.R);
					itemDao.update(delEntity);
					//更新对应的发票状态为已审核
					//更新对应的已付金额
					resetInvoiceStatus(entity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}
	

	@Transactional
	private void resetInvoiceStatus(SPrItem entity) {
		Double prAmountPaid = 0.00;
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("invoNo", entity.getInvoNo());
		List<SPrItem> sPrItems = itemDao.findByProperties(queryMap);
		for(SPrItem e :sPrItems){
			prAmountPaid+=e.getPrAmount();
			e.setPrAmountPaid(entity.getPrAmount());
			itemDao.update(e);
		}
		
		SInvoice invoice = invoiceDao.findById(entity.getInvoId());
		invoice.setInvoStatus(ConstUtil.INVOICE_STATUS_CHECKED);
		invoice.setInvoEntrustNo(null);
		invoice.setInvoPrFlag(ConstUtil.FalseShort);
		invoice.setInvoAmountPaid(prAmountPaid);
		invoiceDao.update(invoice);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<SPr> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<SPrItem> queryItem(Map queryMap) {
		return itemDao.findByProperties(queryMap);
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("prId"));
		Short prStatus = Short.valueOf((String) queryMap.get("prStatus"));
		SPr entity = dao.findById(id);
		if(prStatus == 2){
			entity.setPrFinApproveBy(SessionManager.getStringAttr(SessionKeyType.USERNAME));
			entity.setPrFinApproveDate(TimeUtil.getNow());
		}
		if(prStatus == 3){
			entity.setPrApproveBy(SessionManager.getStringAttr(SessionKeyType.USERNAME));
			entity.setPrApproveDate(TimeUtil.getNow());
		}
		entity.setPrStatus(prStatus);
		dao.update(entity);
		if (ConstUtil.PR_STATUS_CANCELLED.equals(prStatus)) {
			//找到prItem
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("prId", id);
			List<SPrItem> itemList = itemDao.findByProperties(map);
			for (SPrItem item : itemList) {
				//恢复发票状态
				SInvoice invoice = invoiceDao.findById(item.getInvoId());
				invoice.setInvoStatus(ConstUtil.INVOICE_STATUS_CHECKED);
				invoice.setInvoEntrustNo(null);
				invoiceDao.update(invoice);
			}
		}
	}

	@Transactional(readOnly = true)
	public List<SPr> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
