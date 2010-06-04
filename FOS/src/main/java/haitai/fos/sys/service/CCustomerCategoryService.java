package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCustomerCategoryDAO;
import haitai.fos.sys.entity.table.CCustomerCategory;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CCustomerCategoryService{
	private ICCustomerCategoryDAO dao = null;

	public ICCustomerCategoryDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICCustomerCategoryDAO dao) {
		this.dao = dao;
	}

	@Transactional
	public List<CCustomerCategory> save(List<CCustomerCategory> custCatList){
		List<CCustomerCategory> retList = new ArrayList<CCustomerCategory>();
		for (CCustomerCategory entity : custCatList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCucaId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CCustomerCategory delEntity = dao.findById(entity.getCucaId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List<CCustomerCategory> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
