package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerCategoryDAO;
import haitai.fos.sys.entity.table.CCustomerCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CCustomerCategoryService {
	@Autowired
	private ICCustomerCategoryDAO dao;

	@Transactional
	public List<CCustomerCategory> save(List<CCustomerCategory> custCatList) {
		return dao.saveByRowAction(custCatList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<CCustomerCategory> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
