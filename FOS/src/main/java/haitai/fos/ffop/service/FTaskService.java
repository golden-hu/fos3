package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFTaskDAO;
import haitai.fos.ffop.entity.table.FTask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class FTaskService {
	@Autowired
	private IFTaskDAO dao;

	@Transactional
	public List<FTask> save(List<FTask> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FTask> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
