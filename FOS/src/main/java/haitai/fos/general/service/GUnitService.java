package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGUnitDAO;
import haitai.fos.general.entity.table.GUnit;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GUnitService implements IGeneralService<GUnit> {
	private IGUnitDAO dao = null;

	@Transactional
	public List<GUnit> save(List<GUnit> itemList) {
		List<GUnit> retList = new ArrayList<GUnit>();
		for (GUnit entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setUnitId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GUnit delEntity = dao.findById(entity.getUnitId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GUnit> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGUnitDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGUnitDAO dao) {
		this.dao = dao;
	}

	public List<GUnit> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
