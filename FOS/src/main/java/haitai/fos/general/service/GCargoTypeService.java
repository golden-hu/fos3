package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCargoTypeDAO;
import haitai.fos.general.entity.table.GCargoType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GCargoTypeService implements IGeneralService<GCargoType> {
	private IGCargoTypeDAO dao = null;

	public IGCargoTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGCargoTypeDAO dao) {
		this.dao = dao;
	}

	@Transactional
	public List<GCargoType> save(List<GCargoType> itemList) {
		List<GCargoType> retList = new ArrayList<GCargoType>();
		for (GCargoType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCatyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GCargoType delEntity = dao.findById(entity.getCatyId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCargoType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCargoType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
