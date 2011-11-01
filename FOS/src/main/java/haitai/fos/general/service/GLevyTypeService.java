package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGLevyTypeDAO;
import haitai.fos.general.entity.table.GLevyType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GLevyTypeService implements IGeneralService<GLevyType> {
	@Autowired
	private IGLevyTypeDAO dao;

	@Transactional
	public List<GLevyType> save(List<GLevyType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GLevyType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GLevyType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
