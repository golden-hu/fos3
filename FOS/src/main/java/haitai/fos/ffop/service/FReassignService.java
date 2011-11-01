package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFReassignDAO;
import haitai.fos.ffop.entity.table.FReassign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class FReassignService {
	@Autowired
	private IFReassignDAO dao;

	@Transactional
	public List<FReassign> save(List<FReassign> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FReassign> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
