package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGLinePortDAO;
import haitai.fos.general.entity.table.GLinePort;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GLinePortService implements IGeneralService<GLinePort> {
	@Autowired
	private IGLinePortDAO dao;

	@Transactional
	public List<GLinePort> save(List<GLinePort> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GLinePort> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GLinePort> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
