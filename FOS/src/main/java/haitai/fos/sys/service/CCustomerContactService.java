package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerContactDAO;
import haitai.fos.sys.entity.table.CCustomerContact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CCustomerContactService {
	@Autowired
	private ICCustomerContactDAO dao;

	@Transactional
	public List<CCustomerContact> save(List<CCustomerContact> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomerContact> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

}
