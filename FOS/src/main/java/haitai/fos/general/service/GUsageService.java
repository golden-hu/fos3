package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGUsageDAO;
import haitai.fos.general.entity.table.GUsage;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GUsageService implements IGeneralService<GUsage> {
	private IGUsageDAO dao = null;

	@Transactional
	public List<GUsage> save(List<GUsage> itemList) {
		List<GUsage> retList = new ArrayList<GUsage>();
		for (GUsage entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setUsagId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GUsage delEntity = dao.findById(entity.getUsagId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GUsage> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGUsageDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGUsageDAO dao) {
		this.dao = dao;
	}

	public List<GUsage> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
