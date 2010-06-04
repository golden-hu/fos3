package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTransTermDAO;
import haitai.fos.general.entity.table.GTransTerm;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GTransTermService implements IGeneralService<GTransTerm> {
	private IGTransTermDAO dao = null;

	@Transactional
	public List<GTransTerm> save(List<GTransTerm> itemList) {
		List<GTransTerm> retList = new ArrayList<GTransTerm>();
		for (GTransTerm entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTranId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GTransTerm delEntity = dao.findById(entity.getTranId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTransTerm> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGTransTermDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGTransTermDAO dao) {
		this.dao = dao;
	}

	public List<GTransTerm> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
