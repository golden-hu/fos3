package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFSecondShipDAO;
import haitai.fos.ffop.entity.table.FSecondShip;
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
public class FSecondShipService {
	private IFSecondShipDAO dao = null;

	@Transactional
	public List<FSecondShip> save(List<FSecondShip> consignList) {
		List<FSecondShip> retList = new ArrayList<FSecondShip>();
		for (FSecondShip entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setSeshId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FSecondShip delEntity = dao.findById(entity.getSeshId());
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
	public List<FSecondShip> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IFSecondShipDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFSecondShipDAO dao) {
		this.dao = dao;
	}
}
