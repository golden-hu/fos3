package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPackageDAO;
import haitai.fos.general.entity.table.GPackage;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GPackageService {
	@Autowired
	private IGPackageDAO dao;

	@Transactional
	public List<GPackage> save(List<GPackage> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GPackage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GPackage> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
