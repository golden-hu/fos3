package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISBalanceDAO;
import haitai.fos.ffse.entity.table.SBalance;
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
public class SBalanceService {
	
	private ISBalanceDAO dao = null;
	
	@Transactional
	public List<SBalance> save(List<SBalance> entityList) {
		List<SBalance> retList = new ArrayList<SBalance>();
		for (SBalance entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setBalaId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				SBalance delEntity = dao.findById(entity.getBalaId());
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
	public List<SBalance> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	public ISBalanceDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ISBalanceDAO dao) {
		this.dao = dao;
	}
}
