package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISBillDAO;
import haitai.fos.ffse.entity.idao.ISBillItemDAO;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.table.SBill;
import haitai.fos.ffse.entity.table.SBillItem;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class SBillService {
	@Autowired
	private ISBillDAO dao;
	@Autowired
	private ISBillItemDAO itemDao;
	@Autowired
	private ISExpenseDAO expenseDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Integer parentId = null;
		String parentNo = null;

		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof SBill) {
				SBill entity = (SBill) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setBillId(null);
					Map<String, String> paramMap = new HashMap<String, String>();
					paramMap.put(SerialFactory.RULE_RP, entity.getBillType());
					String no = SerialFactory.getSerial("bill_no", paramMap);
					entity.setBillNo(no);
					parentNo = no;
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					SBill delEntity = dao.findById(entity.getBillId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);

					Map queryMap = new HashMap<String, Object>();
					queryMap.put(ConstUtil.CompCode, SessionManager.getStringAttr(SessionKeyType.COMPCODE));
					queryMap.put("billId", entity.getBillId());

					List<SBillItem> itemList = itemDao.findByProperties(queryMap);
					for (SBillItem billItem : itemList) {
						SExpense expense = expenseDao.findById(billItem.getExpeId());
						expense.setExpeBillNo(null);
						expense.setExpeBillStatus(ConstUtil.BILL_STATUS_NONE);
						expenseDao.update(expense);
						billItem.setRowAction(ConstUtil.ROW_R);
						itemDao.update(billItem);
					}
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				parentId = entity.getBillId();
				break;
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof SBillItem) {
				SBillItem entity = (SBillItem) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setBiitId(null);
					entity.setBillId(parentId);
					itemDao.save(entity);
					retList.add(entity);

					//更新费用上的billNo和billStatus
					SExpense expense = expenseDao.findById(entity.getExpeId());
					expense.setExpeBillNo(parentNo);
					expense.setExpeBillStatus(ConstUtil.BILL_STATUS_CHECKED);
					expenseDao.update(expense);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(itemDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					SExpense expense = expenseDao.findById(entity.getExpeId());
					expense.setExpeBillNo(null);
					expense.setExpeBillStatus(ConstUtil.BILL_STATUS_NONE);
					expenseDao.update(expense);

					SBillItem delEntity = itemDao.findById(entity.getBiitId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					itemDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
			retList.addAll(itemDao.findByProperties(queryMap));
		}
		return retList;
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("billId"));
		Short status = Short.valueOf((String) queryMap.get("billStatus"));
		SBill bill = dao.findById(id);
		bill.setBillStatus(status);
		dao.update(bill);
		//对帐单作废之后, 费用状态要改回来未用, 而不是改为作废
		if (ConstUtil.BILL_STATUS_CANCELLED.equals(status))
			status = ConstUtil.BILL_STATUS_NONE;
		//更新对账单对应的费用行的状态
		List<SBillItem> itemList = itemDao.findByProperties(queryMap);
		for (SBillItem billItem : itemList) {
			SExpense expense = expenseDao.findById(billItem.getExpeId());
			expense.setExpeBillNo(null);
			expense.setExpeBillStatus(status);
			expenseDao.update(expense);
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SBillItem> queryItem(Map queryMap) {
		return itemDao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<SBill> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
