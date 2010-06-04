package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGChargeClassDAO;
import haitai.fos.general.entity.table.GChargeClass;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GChargeClassService implements IGeneralService<GChargeClass> {
	private IGChargeClassDAO dao = null;

	@Transactional
	public List<GChargeClass> save(List<GChargeClass> itemList) {
		List<GChargeClass> retList = new ArrayList<GChargeClass>();
		for (GChargeClass entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setChclId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GChargeClass delEntity = dao.findById(entity.getChclId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GChargeClass> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGChargeClassDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGChargeClassDAO dao) {
		this.dao = dao;
	}

	public List<GChargeClass> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
