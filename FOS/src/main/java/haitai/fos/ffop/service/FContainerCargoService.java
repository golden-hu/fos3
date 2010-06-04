package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFContainerCargoDAO;
import haitai.fos.ffop.entity.table.FContainerCargo;
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
public class FContainerCargoService {
	private IFContainerCargoDAO dao = null;

	@Transactional
	public List<FContainerCargo> save(List<FContainerCargo> consignList) {
		List<FContainerCargo> retList = new ArrayList<FContainerCargo>();
		for (FContainerCargo entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCocaId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FContainerCargo delEntity = dao.findById(entity.getCocaId());
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
	public List<FContainerCargo> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IFContainerCargoDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFContainerCargoDAO dao) {
		this.dao = dao;
	}
}
