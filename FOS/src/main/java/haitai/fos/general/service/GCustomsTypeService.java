package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCustomsTypeDao;
import haitai.fos.general.entity.table.GCustomsType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GCustomsTypeService {
	@Autowired
	private IGCustomsTypeDao dao;

	@Transactional
	public List<GCustomsType> save(List<GCustomsType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCustomsType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCustomsType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
