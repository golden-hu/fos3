package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GContainerTypeService implements IGeneralService<GContainerType> {
	@Autowired
	private IGContainerTypeDAO dao;

	@Transactional
	public List<GContainerType> save(List<GContainerType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GContainerType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GContainerType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
