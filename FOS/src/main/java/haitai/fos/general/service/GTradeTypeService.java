package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGTradeTypeDAO;
import haitai.fos.general.entity.table.GTradeType;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GTradeTypeService implements IGeneralService<GTradeType> {
	private IGTradeTypeDAO dao = null;

	@Transactional
	public List<GTradeType> save(List<GTradeType> itemList) {
		List<GTradeType> retList = new ArrayList<GTradeType>();
		for (GTradeType entity : itemList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTrtyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GTradeType delEntity = dao.findById(entity.getTrtyId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GTradeType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGTradeTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGTradeTypeDAO dao) {
		this.dao = dao;
	}

	public List<GTradeType> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
