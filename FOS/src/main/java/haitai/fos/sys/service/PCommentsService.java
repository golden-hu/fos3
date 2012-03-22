package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCommentsDAO;
import haitai.fos.sys.entity.table.PComments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PCommentsService {
	@Autowired
	private IPCommentsDAO dao;

	@Transactional
	public List<PComments> save(List<PComments> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PComments> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
