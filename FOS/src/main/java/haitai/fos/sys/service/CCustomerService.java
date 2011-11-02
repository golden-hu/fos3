package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerContactDAO;
import haitai.fos.sys.entity.idao.ICCustomerDAO;
import haitai.fos.sys.entity.table.CCustomer;
import haitai.fos.sys.entity.table.CCustomerContact;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class CCustomerService {
	@Autowired
	private ICCustomerDAO dao;
	@Autowired
	private ICCustomerContactDAO contactDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		for (Object obj : entityList) {
			if (obj instanceof CCustomer) {
				CCustomer entity = (CCustomer) obj;
				Integer oldId = entity.getCustId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setCustId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					CCustomer delEntity = dao.findById(entity.getCustId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				idMap.put(oldId, entity.getCustId());
			}
		}

		for (Object obj : entityList) {
			if (obj instanceof CCustomerContact) {
				CCustomerContact entity = (CCustomerContact) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setCucoId(null);
					entity.setCustId(NumberUtil.frontId2DbId(idMap, entity.getCustId()));
					contactDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(contactDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					CCustomerContact delEntity = contactDao.findById(entity.getCucoId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					contactDao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
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
		delEntity.setRowAction(ConstUtil.ROW_R);
		dao.update(delEntity);
		dao.mergeCust(fromId, toId);
	}

}
