package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGUsageDAO;
import haitai.fos.general.entity.table.GUsage;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GUsageService {
	@Autowired
	private IGUsageDAO dao;

	@Transactional
	public List<GUsage> save(List<GUsage> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GUsage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GUsage> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
