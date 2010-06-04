package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GChargeService implements IGeneralService<GCharge> {
	private IGChargeDAO dao = null;

	public IGChargeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGChargeDAO dao) {
		this.dao = dao;
	}

	@Transactional
	public List<GCharge> save(List<GCharge> itemList) {
		List<GCharge> retList = new ArrayList<GCharge>();
		for (GCharge entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCharId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GCharge delEntity = dao.findById(entity.getCharId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCharge> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCharge> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
}
