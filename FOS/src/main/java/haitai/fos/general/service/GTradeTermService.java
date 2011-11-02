package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTradeTermDAO;
import haitai.fos.general.entity.table.GTradeTerm;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GTradeTermService implements IGeneralService<GTradeTerm> {
	@Autowired
	private IGTradeTermDAO dao;

	@Transactional
	public List<GTradeTerm> save(List<GTradeTerm> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTradeTerm> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GTradeTerm> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
