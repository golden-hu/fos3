package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCountryDAO;
import haitai.fos.general.entity.table.GCountry;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GCountryService {
	@Autowired
	private IGCountryDAO dao;

	@Transactional
	public List<GCountry> save(List<GCountry> itemList) {
		List<GCountry> retList = new ArrayList<GCountry>();
		for (GCountry entity : itemList) {
			if (entity.getRowAction() == RowAction.N) {
				entity.setCounId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
				retList.add(dao.update(entity));
			} else if (entity.getRowAction() == RowAction.R) {
				dao.delete(entity.getCounId());
			}
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<GCountry> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCountry> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return null;
	}
}
