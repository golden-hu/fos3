package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGUnitDAO;
import haitai.fos.general.entity.table.GUnit;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GUnitService implements IGeneralService<GUnit> {
	@Autowired
	private IGUnitDAO dao;

	@Transactional
	public List<GUnit> save(List<GUnit> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GUnit> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GUnit> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
