package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTrainStationDao;
import haitai.fos.general.entity.table.GTrainStation;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GTrainStationService {
	@Autowired
	private IGTrainStationDao dao;

	@Transactional
	public List<GTrainStation> save(List<GTrainStation> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GTrainStation> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GTrainStation> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
