package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTradeTermDAO;
import haitai.fos.general.entity.table.GTradeTerm;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GTradeTermService implements IGeneralService<GTradeTerm> {
	private IGTradeTermDAO dao = null;

	@Transactional
	public List<GTradeTerm> save(List<GTradeTerm> itemList) {
		List<GTradeTerm> retList = new ArrayList<GTradeTerm>();
		for (GTradeTerm entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTrteId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GTradeTerm delEntity = dao.findById(entity.getTrteId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTradeTerm> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGTradeTermDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGTradeTermDAO dao) {
		this.dao = dao;
	}

	public List<GTradeTerm> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
