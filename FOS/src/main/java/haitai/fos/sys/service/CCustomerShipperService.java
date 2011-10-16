package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerShipperDAO;
import haitai.fos.sys.entity.table.CCustomerShipper;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CCustomerShipperService {
	private ICCustomerShipperDAO dao = null;

	@Transactional
	public List<CCustomerShipper> save(List<CCustomerShipper> itemList) {
		List<CCustomerShipper> retList = new ArrayList<CCustomerShipper>();
		for (CCustomerShipper entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCushId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CCustomerShipper delEntity = dao.findById(entity.getCushId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomerShipper> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICCustomerShipperDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICCustomerShipperDAO dao) {
		this.dao = dao;
	}
}
