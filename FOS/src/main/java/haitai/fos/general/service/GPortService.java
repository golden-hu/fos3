package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPortDAO;
import haitai.fos.general.entity.table.GPort;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GPortService implements IGeneralService<GPort> {
	@Autowired
	private IGPortDAO dao;

	@Transactional
	public List<GPort> save(List<GPort> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPort> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GPort> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
