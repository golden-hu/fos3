package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGVehicleTypeDAO;
import haitai.fos.general.entity.table.GVehicleType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GVehicleTypeService {
	@Autowired
	private IGVehicleTypeDAO dao;

	@Transactional
	public List<GVehicleType> save(List<GVehicleType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GVehicleType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GVehicleType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
