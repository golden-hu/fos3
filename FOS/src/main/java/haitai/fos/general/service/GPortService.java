package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPortDAO;
import haitai.fos.general.entity.table.GPort;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GPortService implements IGeneralService<GPort> {
	private IGPortDAO dao = null;

	@Transactional
	public List<GPort> save(List<GPort> itemList) {
		List<GPort> retList = new ArrayList<GPort>();
		for (GPort entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPortId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GPort delEntity = dao.findById(entity.getPortId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPort> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGPortDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGPortDAO dao) {
		this.dao = dao;
	}

	public List<GPort> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
