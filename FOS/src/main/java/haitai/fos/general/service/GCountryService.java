package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCountryDAO;
import haitai.fos.general.entity.table.GCountry;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GCountryService implements IGeneralService<GCountry> {
	private IGCountryDAO dao = null;

	@Transactional
	public List<GCountry> save(List<GCountry> itemList) {
		List<GCountry> retList = new ArrayList<GCountry>();
		for (GCountry entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCounId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				dao.delete(entity.getCounId());
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCountry> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGCountryDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGCountryDAO dao) {
		this.dao = dao;
	}

	public List<GCountry> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
