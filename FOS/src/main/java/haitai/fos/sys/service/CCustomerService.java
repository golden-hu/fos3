package haitai.fos.sys.service;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.sys.entity.idao.ICCustomerContactDAO;
import haitai.fos.sys.entity.idao.ICCustomerDAO;
import haitai.fos.sys.entity.table.CCustomer;
import haitai.fos.sys.entity.table.CCustomerContact;
import haitai.fos.sys.entity.table.PUser;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CCustomerService {
	@Autowired
	private ICCustomerDAO dao;
	@Autowired
	private ICCustomerContactDAO contactDao;
	@Autowired
	private ISExpenseDAO expeDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		for (Object obj : entityList) {
			if (obj instanceof CCustomer) {
				CCustomer entity = (CCustomer) obj;
				Integer oldId = entity.getCustId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setCustId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CCustomer delEntity = dao.findById(entity.getCustId());
					HashMap<String, Object> map = new HashMap<String, Object>();
					map.put("custId", entity.getCustId());
					List<SExpense> expeList = expeDao.findByProperties(map);
					if(expeList.size()>0){
						throw new BusinessException("fos.cust_expense.existing");
					}
					else{
						delEntity.setRowAction(RowAction.R);
						dao.update(delEntity);
					}
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				idMap.put(oldId, entity.getCustId());
			}
		}

		for (Object obj : entityList) {
			if (obj instanceof CCustomerContact) {
				CCustomerContact entity = (CCustomerContact) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setCucoId(null);
					entity.setCustId(NumberUtil.frontId2DbId(idMap, entity.getCustId()));
					contactDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(contactDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CCustomerContact delEntity = contactDao.findById(entity.getCucoId());
					delEntity.setRowAction(RowAction.R);
					contactDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomer> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomer> complexQuery(List<FosQuery> conditions, Map queryMap) {
		List<CCustomer> retList;
		List<CCustomer> list = dao.complexQuery(conditions, queryMap);
		PUser myself = (PUser) SessionManager.getAttr(SessionKeyType.USER);
		Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		for (CCustomer cust : list) {
			Short editable = ConstUtil.FalseShort;
			//1.有编辑所有委托权限; 2.是此票的操作员; 3.是此票的创建者, 有编辑权限
			if (ConstUtil.TrueShort.equals(myself.getUserAllEditFlag())
					|| uid.equals(cust.getCustSalesId())
					|| uid.equals(cust.getCreateBy())) {
				editable = ConstUtil.TrueShort;
			}
			cust.setEditable(editable);
		}
		//简单查询, 只返回几个参数
		if (queryMap.containsKey("S")) {
			retList = new ArrayList<CCustomer>();
			for (CCustomer customer : list) {
				CCustomer entity = new CCustomer();
				entity.setCustId(customer.getCustId());
				entity.setCustCode(customer.getCustCode());
				entity.setCustSnameCn(customer.getCustSnameCn());
				entity.setCustNameCn(customer.getCustNameCn());
				entity.setCustContact(customer.getCustContact());
				entity.setCustTel(customer.getCustTel());
				entity.setCustFax(customer.getCustFax());
				entity.setCustEmail(customer.getCustEmail());
				entity.setCustShipper(customer.getCustShipper());
				entity.setAttr9(customer.getAttr9());
				entity.setAttr10(customer.getAttr10());
				retList.add(entity);
			}
		} else {
			retList = list;
		}
		return retList;
	}

	@Transactional
	public void mergeCust(Map<String, Object> queryMap) {
		if (queryMap.containsKey("custId") && queryMap.containsKey("custIds")) {
			Integer toId = Integer.parseInt((String) queryMap.get("custId"));
			String ids = (String) queryMap.get("custIds");
			if (StringUtil.contains(ids, ConstUtil.COMMA)) {
				String[] idArray = ids.split(ConstUtil.COMMA);
				for (String strId : idArray) {
					if (StringUtil.isNotBlank(strId)) {
						Integer fromId = Integer.parseInt(strId);
						if (!fromId.equals(toId)) {
							mergeCust(fromId, toId);
						}
					}
				}
			} else {
				Integer fromId = Integer.parseInt(ids);
				mergeCust(fromId, toId);
			}
		}
	}

	private void mergeCust(Integer fromId, Integer toId) {
		CCustomer delEntity = dao.findById(fromId);
		delEntity.setRowAction(RowAction.R);
		dao.update(delEntity);
		dao.mergeCust(fromId, toId);
	}

}
