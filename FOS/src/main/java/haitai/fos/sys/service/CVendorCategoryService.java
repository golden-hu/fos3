package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICVendorCategoryDAO;
import haitai.fos.sys.entity.table.CVendorCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CVendorCategoryService {
	@Autowired
	private ICVendorCategoryDAO dao;

	@Transactional
	public List<CVendorCategory> save(List<CVendorCategory> vedCatList) {
		return dao.saveByRowAction(vedCatList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CVendorCategory> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
