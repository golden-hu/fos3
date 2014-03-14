package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFRailwayBlDAO;
import haitai.fos.ffop.entity.table.FRailwayBl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class FRailwayBlService {
	@Autowired
	private IFRailwayBlDAO dao;

	@Transactional
	public List<FRailwayBl> save(List<FRailwayBl> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FRailwayBl> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("rablId"));
		Short status = Short.valueOf((String) queryMap.get("rablStatus"));
		FRailwayBl entity = dao.findById(id);
		if (entity != null) {
			entity.setRablStatus(status);
			dao.update(entity);
		}
	}
}
