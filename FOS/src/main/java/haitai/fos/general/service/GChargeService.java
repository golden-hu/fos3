package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GChargeService implements IGeneralService<GCharge> {
	@Autowired
	private IGChargeDAO dao;

	@Transactional
	public List<GCharge> save(List<GCharge> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCharge> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCharge> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
