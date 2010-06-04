package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GContainerTypeService implements IGeneralService<GContainerType> {
	private IGContainerTypeDAO dao = null;

	@Transactional
	public List<GContainerType> save(List<GContainerType> itemList) {
		List<GContainerType> retList = new ArrayList<GContainerType>();
		for (GContainerType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCotyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GContainerType delEntity = dao.findById(entity.getCotyId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GContainerType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGContainerTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGContainerTypeDAO dao) {
		this.dao = dao;
	}

	public List<GContainerType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
