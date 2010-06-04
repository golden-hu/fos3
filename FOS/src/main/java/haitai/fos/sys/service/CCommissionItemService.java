package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCommissionItemDAO;
import haitai.fos.sys.entity.table.CCommissionItem;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CCommissionItemService {
	private ICCommissionItemDAO dao = null;

	@Transactional
	public List<CCommissionItem> save(List<CCommissionItem> vedCatList) {
		List<CCommissionItem> retList = new ArrayList<CCommissionItem>();
		for (CCommissionItem entity : vedCatList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCommId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				CCommissionItem delEntity = dao.findById(entity.getCommId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCommissionItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICCommissionItemDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICCommissionItemDAO dao) {
		this.dao = dao;
	}
}
