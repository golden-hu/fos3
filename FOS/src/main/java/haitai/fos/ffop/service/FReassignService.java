package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFReassignDAO;
import haitai.fos.ffop.entity.table.FReassign;
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
public class FReassignService {
	private IFReassignDAO dao = null;

	@Transactional
	public List<FReassign> save(List<FReassign> consignList) {
		List<FReassign> retList = new ArrayList<FReassign>();
		for (FReassign entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setReasId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FReassign delEntity = dao.findById(entity.getReasId());
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
	public List<FReassign> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IFReassignDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFReassignDAO dao) {
		this.dao = dao;
	}
}
