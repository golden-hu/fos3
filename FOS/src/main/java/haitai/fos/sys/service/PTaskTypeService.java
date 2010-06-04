package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTaskTypeDAO;
import haitai.fos.sys.entity.table.PTaskType;
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
public class PTaskTypeService {
	
	private IPTaskTypeDAO dao = null;
	
	@Transactional
	public List<PTaskType> save(List<PTaskType> entityList) {
		List<PTaskType> retList = new ArrayList<PTaskType>();
		for (PTaskType entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTatyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				PTaskType delEntity = dao.findById(entity.getTatyId());
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
	public List<PTaskType> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	

	public IPTaskTypeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPTaskTypeDAO dao) {
		this.dao = dao;
	}
}
