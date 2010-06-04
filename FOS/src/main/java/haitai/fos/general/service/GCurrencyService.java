package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGCurrencyDAO;
import haitai.fos.general.entity.table.GCurrency;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GCurrencyService implements IGeneralService<GCurrency> {
	private IGCurrencyDAO dao = null;

	public IGCurrencyDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGCurrencyDAO dao) {
		this.dao = dao;
	}

	@Transactional
	public List<GCurrency> save(List<GCurrency> itemList) {
		List<GCurrency> retList = new ArrayList<GCurrency>();
		for (GCurrency entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCurrId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GCurrency delEntity = dao.findById(entity.getCurrId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GCurrency> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public List<GCurrency> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
