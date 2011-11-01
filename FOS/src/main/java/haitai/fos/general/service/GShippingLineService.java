package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGShippingLineDAO;
import haitai.fos.general.entity.table.GShippingLine;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GShippingLineService {
	@Autowired
	private IGShippingLineDAO dao;

	@Transactional
	public List<GShippingLine> save(List<GShippingLine> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GShippingLine> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GShippingLine> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
