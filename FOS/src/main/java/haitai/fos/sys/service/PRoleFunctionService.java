package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPRoleFunctionDAO;
import haitai.fos.sys.entity.table.PRoleFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PRoleFunctionService {
	@Autowired
	private IPRoleFunctionDAO dao;

	@Transactional
	public List<PRoleFunction> save(List<PRoleFunction> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PRoleFunction> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
