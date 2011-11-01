package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCargoClassDAO;
import haitai.fos.general.entity.table.GCargoClass;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GCargoClassService implements IGeneralService<GCargoClass> {
	@Autowired
	private IGCargoClassDAO dao;

	@Transactional
	public List<GCargoClass> save(List<GCargoClass> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCargoClass> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCargoClass> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
