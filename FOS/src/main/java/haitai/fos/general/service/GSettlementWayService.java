package haitai.fos.general.service;

import haitai.fos.general.entity.idao.IGSettlementWayDAO;
import haitai.fos.general.entity.table.GSettlementWay;
import haitai.fw.entity.FosQuery;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GSettlementWayService implements IGeneralService<GSettlementWay> {
	private IGSettlementWayDAO dao = null;

	@Transactional
	public List<GSettlementWay> save(List<GSettlementWay> itemList) {
		List<GSettlementWay> retList = new ArrayList<GSettlementWay>();
		for (GSettlementWay entity : itemList) {
			
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setSewaId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				GSettlementWay delEntity = dao.findById(entity.getSewaId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GSettlementWay> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IGSettlementWayDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IGSettlementWayDAO dao) {
		this.dao = dao;
	}

	public List<GSettlementWay> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		// TODO Auto-generated method stub
		return null;
	}
}
