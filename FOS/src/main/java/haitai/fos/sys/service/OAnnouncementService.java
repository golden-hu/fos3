package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IOAnnouncementDAO;
import haitai.fos.sys.entity.table.OAnnouncement;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class OAnnouncementService {
	@Autowired
	private IOAnnouncementDAO dao;

	@Transactional
	public List<OAnnouncement> save(List<OAnnouncement> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<OAnnouncement> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}


	@Transactional(readOnly = true)
	public List<OAnnouncement> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
