package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerSiteDAO;
import haitai.fos.sys.entity.table.CCustomerSite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class CCustomerSiteService {
	@Autowired
	private ICCustomerSiteDAO dao;

	@Transactional
	public List<CCustomerSite> save(List<CCustomerSite> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCustomerSite> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
