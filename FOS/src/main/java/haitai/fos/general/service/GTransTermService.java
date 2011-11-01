package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTransTermDAO;
import haitai.fos.general.entity.table.GTransTerm;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GTransTermService implements IGeneralService<GTransTerm> {
	@Autowired
	private IGTransTermDAO dao;

	@Transactional
	public List<GTransTerm> save(List<GTransTerm> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTransTerm> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GTransTerm> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
