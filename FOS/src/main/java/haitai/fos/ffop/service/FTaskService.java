package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFTaskDAO;
import haitai.fos.ffop.entity.table.FTask;
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
public class FTaskService {
	private IFTaskDAO dao = null;

	@Transactional
	public List<FTask> save(List<FTask> consignList) {
		List<FTask> retList = new ArrayList<FTask>();
		for (FTask entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTaskId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FTask delEntity = dao.findById(entity.getTaskId());
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
	public List<FTask> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IFTaskDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFTaskDAO dao) {
		this.dao = dao;
	}
}
