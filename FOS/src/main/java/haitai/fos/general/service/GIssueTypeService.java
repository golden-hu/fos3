package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGIssueTypeDAO;
import haitai.fos.general.entity.table.GIssueType;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GIssueTypeService {
	@Autowired
	private IGIssueTypeDAO dao;

	@Transactional
	public List<GIssueType> save(List<GIssueType> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GIssueType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GIssueType> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
