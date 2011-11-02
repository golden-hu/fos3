package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTradeTypeDAO;
import haitai.fos.general.entity.table.GTradeType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GTradeTypeService implements IGeneralService<GTradeType> {
	@Autowired
	private IGTradeTypeDAO dao;

	@Transactional
	public List<GTradeType> save(List<GTradeType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTradeType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GTradeType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
