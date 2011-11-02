package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGChargeClassDAO;
import haitai.fos.general.entity.table.GChargeClass;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GChargeClassService implements IGeneralService<GChargeClass> {
	@Autowired
	private IGChargeClassDAO dao;

	@Transactional
	public List<GChargeClass> save(List<GChargeClass> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GChargeClass> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GChargeClass> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
