package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTransTypeDAO;
import haitai.fos.general.entity.table.GTransType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GTransTypeService implements IGeneralService<GTransType> {
	private IGTransTypeDAO dao = null;

	@Transactional
	public List<GTransType> save(List<GTransType> itemList) {
		List<GTransType> retList = new ArrayList<GTransType>();
		for (GTransType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTratId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GTransType delEntity = dao.findById(entity.getTratId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTransType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGTransTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGTransTypeDAO dao) {
		this.dao = dao;
	}

	public List<GTransType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
