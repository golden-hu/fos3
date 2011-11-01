package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPlaceDAO;
import haitai.fos.general.entity.table.GPlace;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GPlaceService implements IGeneralService<GPlace> {
	@Autowired
	private IGPlaceDAO dao;

	@Transactional
	public List<GPlace> save(List<GPlace> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPlace> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GPlace> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
