package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFRailwayBlDAO;
import haitai.fos.ffop.entity.table.FRailwayBl;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FRailwayBlService {
	private IFRailwayBlDAO dao = null;

	@Transactional
	public List<FRailwayBl> save(List<FRailwayBl> consignList) {
		List<FRailwayBl> retList = new ArrayList<FRailwayBl>();
		for (FRailwayBl entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setRablId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FRailwayBl delEntity = dao.findById(entity.getRablId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FRailwayBl> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("rablId"));
		Short status = Short.valueOf((String) queryMap.get("rablStatus"));
		FRailwayBl entity = dao.findById(id);
		if(entity != null){
			entity.setRablStatus(status);
			dao.update(entity);
		}
	}	

	public IFRailwayBlDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFRailwayBlDAO dao) {
		this.dao = dao;
	}
}
