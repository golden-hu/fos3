package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPGroupDAO;
import haitai.fos.sys.entity.table.PGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PGroupService {
	@Autowired
	private IPGroupDAO dao;

	@Transactional
	public List<PGroup> save(List<PGroup> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PGroup> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
