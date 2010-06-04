package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPlaceDAO;
import haitai.fos.general.entity.table.GPlace;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GPlaceService implements IGeneralService<GPlace> {
	private IGPlaceDAO dao = null;

	@Transactional
	public List<GPlace> save(List<GPlace> itemList) {
		List<GPlace> retList = new ArrayList<GPlace>();
		for (GPlace entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPlacId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GPlace delEntity = dao.findById(entity.getPlacId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPlace> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGPlaceDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGPlaceDAO dao) {
		this.dao = dao;
	}

	public List<GPlace> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
