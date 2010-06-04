package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGExchangeSettlementDAO;
import haitai.fos.general.entity.table.GExchangeSettlement;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GExchangeSettlementService implements IGeneralService<GExchangeSettlement> {
	private IGExchangeSettlementDAO dao = null;

	@Transactional
	public List<GExchangeSettlement> save(List<GExchangeSettlement> itemList) {
		List<GExchangeSettlement> retList = new ArrayList<GExchangeSettlement>();
		for (GExchangeSettlement entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setExseId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GExchangeSettlement delEntity = dao.findById(entity.getExseId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GExchangeSettlement> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGExchangeSettlementDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGExchangeSettlementDAO dao) {
		this.dao = dao;
	}

	public List<GExchangeSettlement> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
