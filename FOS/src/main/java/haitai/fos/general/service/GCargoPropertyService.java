package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCargoPropertyDAO;
import haitai.fos.general.entity.table.GCargoProperty;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GCargoPropertyService {
	@Autowired
	private IGCargoPropertyDAO dao;

	@Transactional
	public List<GCargoProperty> save(List<GCargoProperty> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GCargoProperty> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCargoProperty> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
