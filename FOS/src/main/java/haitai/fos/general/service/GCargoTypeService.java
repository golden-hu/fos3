package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCargoTypeDAO;
import haitai.fos.general.entity.table.GCargoType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GCargoTypeService {
	@Autowired
	private IGCargoTypeDAO dao;

	@Transactional
	public List<GCargoType> save(List<GCargoType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GCargoType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCargoType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
