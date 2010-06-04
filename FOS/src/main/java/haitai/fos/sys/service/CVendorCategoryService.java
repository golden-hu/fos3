package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICVendorCategoryDAO;
import haitai.fos.sys.entity.table.CVendorCategory;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CVendorCategoryService {
	private ICVendorCategoryDAO dao = null;

	@Transactional
	public List<CVendorCategory> save(List<CVendorCategory> vedCatList) {

		List<CVendorCategory> retList = new ArrayList<CVendorCategory>();

		for (CVendorCategory entity : vedCatList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setVecaId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CVendorCategory delEntity = dao.findById(entity.getVecaId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CVendorCategory> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICVendorCategoryDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICVendorCategoryDAO dao) {
		this.dao = dao;
	}
}
