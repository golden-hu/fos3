package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGContainerClassDAO;
import haitai.fos.general.entity.table.GContainerClass;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GContainerClassService implements IGeneralService<GContainerClass> {
	private IGContainerClassDAO dao = null;
	
	@Transactional
	public List<GContainerClass> save(List<GContainerClass> itemList) {
		List<GContainerClass> retList = new ArrayList<GContainerClass>();
		for (GContainerClass entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCoclId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GContainerClass delEntity = dao.findById(entity.getCoclId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GContainerClass> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGContainerClassDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGContainerClassDAO dao) {
		this.dao = dao;
	}

	public List<GContainerClass> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
