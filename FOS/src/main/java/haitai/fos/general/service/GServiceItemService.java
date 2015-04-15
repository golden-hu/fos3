package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGServiceItemDAO;
import haitai.fos.general.entity.table.GServiceItem;
import haitai.fw.entity.FosQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class GServiceItemService {
	@Autowired
	private IGServiceItemDAO dao;

	@Transactional
	public List<GServiceItem> save(List<GServiceItem> itemList) {
		return dao.saveByRowAction(itemList);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GServiceItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GServiceItem> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
