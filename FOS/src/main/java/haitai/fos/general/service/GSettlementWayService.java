package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGSettlementWayDAO;
import haitai.fos.general.entity.table.GSettlementWay;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GSettlementWayService {
	@Autowired
	private IGSettlementWayDAO dao;

	@Transactional
	public List<GSettlementWay> save(List<GSettlementWay> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GSettlementWay> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GSettlementWay> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
