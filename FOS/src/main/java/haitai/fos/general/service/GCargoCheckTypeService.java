package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCargoCheckTypeDAO;
import haitai.fos.general.entity.table.GCargoCheckType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GCargoCheckTypeService {
	@Autowired
	private IGCargoCheckTypeDAO dao;

	@Transactional
	public List<GCargoCheckType> save(List<GCargoCheckType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GCargoCheckType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCargoCheckType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
