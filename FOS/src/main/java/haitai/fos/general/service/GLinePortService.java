package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGLinePortDAO;
import haitai.fos.general.entity.table.GLinePort;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GLinePortService implements IGeneralService<GLinePort> {
	private IGLinePortDAO dao = null;

	@Transactional
	public List<GLinePort> save(List<GLinePort> itemList) {
		List<GLinePort> retList = new ArrayList<GLinePort>();
		for (GLinePort entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setLipoId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GLinePort delEntity = dao.findById(entity.getLipoId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GLinePort> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGLinePortDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGLinePortDAO dao) {
		this.dao = dao;
	}

	public List<GLinePort> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
