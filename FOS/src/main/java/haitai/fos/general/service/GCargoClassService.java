package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCargoClassDAO;
import haitai.fos.general.entity.table.GCargoClass;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GCargoClassService implements IGeneralService<GCargoClass> {
	private IGCargoClassDAO dao = null;

	public IGCargoClassDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGCargoClassDAO dao) {
		this.dao = dao;
	}

	@Transactional
	public List<GCargoClass> save(List<GCargoClass> itemList) {
		List<GCargoClass> retList = new ArrayList<GCargoClass>();
		for (GCargoClass entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCaclId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GCargoClass delEntity = dao.findById(entity.getCaclId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCargoClass> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCargoClass> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
