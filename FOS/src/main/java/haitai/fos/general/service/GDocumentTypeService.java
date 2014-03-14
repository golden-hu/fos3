package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGDocumentTypeDAO;
import haitai.fos.general.entity.table.GDocumentType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GDocumentTypeService {
	@Autowired
	private IGDocumentTypeDAO dao;

	@Transactional
	public List<GDocumentType> save(List<GDocumentType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GDocumentType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GDocumentType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
