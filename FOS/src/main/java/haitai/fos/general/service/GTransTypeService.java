package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTransTypeDAO;
import haitai.fos.general.entity.table.GTransType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GTransTypeService implements IGeneralService<GTransType> {
	@Autowired
	private IGTransTypeDAO dao;

	@Transactional
	public List<GTransType> save(List<GTransType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTransType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GTransType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
