package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISBulkExpenseDAO;
import haitai.fos.ffse.entity.table.SBulkExpense;
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
public class SBulkExpenseService {
	
	private ISBulkExpenseDAO dao = null;
	
	@Transactional
	public List<SBulkExpense> save(List<SBulkExpense> entityList) {
		List<SBulkExpense> retList = new ArrayList<SBulkExpense>();
		for (SBulkExpense entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setBuexId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				SBulkExpense delEntity = dao.findById(entity.getBuexId());
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
	public List<SBulkExpense> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	public ISBulkExpenseDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ISBulkExpenseDAO dao) {
		this.dao = dao;
	}
}
