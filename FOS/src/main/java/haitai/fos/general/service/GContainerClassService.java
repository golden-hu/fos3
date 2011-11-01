package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGContainerClassDAO;
import haitai.fos.general.entity.table.GContainerClass;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GContainerClassService implements IGeneralService<GContainerClass> {
	@Autowired
	private IGContainerClassDAO dao;

	@Transactional
	public List<GContainerClass> save(List<GContainerClass> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GContainerClass> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GContainerClass> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
