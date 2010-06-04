package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPActionLogDAO;
import haitai.fos.sys.entity.table.PActionLog;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PActionLogService {
	
	private IPActionLogDAO dao = null;
	
	@Transactional
	public List<PActionLog> save(List<PActionLog> entityList) {
		return null;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PActionLog> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	
	@Transactional(readOnly = true)
	public List<PActionLog> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}	

	public IPActionLogDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPActionLogDAO dao) {
		this.dao = dao;
	}
}
