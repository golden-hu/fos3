package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGInspectionTypeDao;
import haitai.fos.general.entity.table.GInspectionType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GInspectionTypeService {
	@Autowired
	private IGInspectionTypeDao dao;

	@Transactional
	public List<GInspectionType> save(List<GInspectionType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GInspectionType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GInspectionType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
