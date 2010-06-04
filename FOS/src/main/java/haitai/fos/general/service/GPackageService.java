package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGPackageDAO;
import haitai.fos.general.entity.table.GPackage;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GPackageService implements IGeneralService<GPackage> {
	private IGPackageDAO dao = null;

	@Transactional
	public List<GPackage> save(List<GPackage> itemList) {
		List<GPackage> retList = new ArrayList<GPackage>();
		for (GPackage entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPackId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GPackage delEntity = dao.findById(entity.getPackId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPackage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGPackageDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGPackageDAO dao) {
		this.dao = dao;
	}

	public List<GPackage> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
