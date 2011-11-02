package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTemplateTypeDAO;
import haitai.fos.sys.entity.table.PTemplateType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class PTemplateTypeService {
	@Autowired
	private IPTemplateTypeDAO dao;

	@Transactional
	public List<PTemplateType> save(List<PTemplateType> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PTemplateType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
