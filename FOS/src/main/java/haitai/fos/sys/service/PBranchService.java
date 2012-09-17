package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPBranchDAO;
import haitai.fos.sys.entity.table.PBranch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PBranchService {
	@Autowired
	private IPBranchDAO dao;

	@Transactional
	public List<PBranch> save(List<PBranch> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PBranch> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
