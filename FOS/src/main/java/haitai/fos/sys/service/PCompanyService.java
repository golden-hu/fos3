package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCompanyDAO;
import haitai.fos.sys.entity.table.PCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PCompanyService {
	@Autowired
	private IPCompanyDAO dao;

	@Transactional
	public List<PCompany> save(List<PCompany> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PCompany> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
