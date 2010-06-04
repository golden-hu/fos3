package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGLevyTypeDAO;
import haitai.fos.general.entity.table.GLevyType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GLevyTypeService implements IGeneralService<GLevyType> {
	private IGLevyTypeDAO dao = null;

	@Transactional
	public List<GLevyType> save(List<GLevyType> itemList) {
		List<GLevyType> retList = new ArrayList<GLevyType>();
		for (GLevyType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setLetyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GLevyType delEntity = dao.findById(entity.getLetyId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GLevyType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGLevyTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGLevyTypeDAO dao) {
		this.dao = dao;
	}

	public List<GLevyType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
