package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTaskTypeDAO;
import haitai.fos.sys.entity.table.PTaskType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PTaskTypeService {
	@Autowired
	private IPTaskTypeDAO dao;

	@Transactional
	public List<PTaskType> save(List<PTaskType> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PTaskType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
