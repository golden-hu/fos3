package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerShipperDAO;
import haitai.fos.sys.entity.table.CCustomerShipper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CCustomerShipperService {
	@Autowired
	private ICCustomerShipperDAO dao;

	@Transactional
	public List<CCustomerShipper> save(List<CCustomerShipper> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomerShipper> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
