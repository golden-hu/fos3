package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerContactDAO;
import haitai.fos.sys.entity.table.CCustomerContact;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CCustomerContactService {
	private ICCustomerContactDAO dao = null;

	@Transactional
	public List<CCustomerContact> save(List<CCustomerContact> itemList) {
		List<CCustomerContact> retList = new ArrayList<CCustomerContact>();
		for (CCustomerContact entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCucoId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CCustomerContact delEntity = dao.findById(entity.getCucoId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomerContact> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICCustomerContactDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICCustomerContactDAO dao) {
		this.dao = dao;
	}
}
