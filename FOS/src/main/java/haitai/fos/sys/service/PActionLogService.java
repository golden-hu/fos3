package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPActionLogDAO;
import haitai.fos.sys.entity.table.PActionLog;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PActionLogService {
	@Autowired
	private IPActionLogDAO dao;

	@Transactional
	public List<PActionLog> save(List<PActionLog> entityList) {
		return null;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PActionLog> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}


	@Transactional(readOnly = true)
	public List<PActionLog> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
