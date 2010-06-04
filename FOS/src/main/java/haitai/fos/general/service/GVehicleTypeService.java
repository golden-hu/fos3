package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGVehicleTypeDAO;
import haitai.fos.general.entity.table.GVehicleType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GVehicleTypeService implements IGeneralService<GVehicleType> {
	private IGVehicleTypeDAO dao = null;

	public IGVehicleTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGVehicleTypeDAO dao) {
		this.dao = dao;
	}

	@Transactional
	public List<GVehicleType> save(List<GVehicleType> itemList) {
		List<GVehicleType> retList = new ArrayList<GVehicleType>();
		for (GVehicleType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setVehtId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GVehicleType delEntity = dao.findById(entity.getVehtId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GVehicleType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GVehicleType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
