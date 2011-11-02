package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTemplateMapDAO;
import haitai.fos.sys.entity.table.PTemplateMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PTemplateMapService {
	@Autowired
	private IPTemplateMapDAO dao;

	@Transactional
	public List<PTemplateMap> save(List<PTemplateMap> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PTemplateMap> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
