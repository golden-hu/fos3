package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCommissionDAO;
import haitai.fos.sys.entity.idao.ICCommissionItemDAO;
import haitai.fos.sys.entity.table.CCommission;
import haitai.fos.sys.entity.table.CCommissionItem;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CCommissionService {
	private ICCommissionDAO dao = null;
	private ICCommissionItemDAO itemDao = null;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		for (Object obj : entityList) {
			if(obj instanceof CCommission) {
				CCommission entity = (CCommission) obj;
				Integer oldId = entity.getCommId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setCommId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					CCommission delEntity = dao.findById(entity.getCommId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				idMap.put(oldId, entity.getCommId());
			}
		}
		for (Object obj : entityList) {
			if(obj instanceof CCommissionItem) {
				CCommissionItem entity = (CCommissionItem) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setCoitId(null);
					//前台传的id(负数)->后台生成id
					entity.setCommId(NumberUtil.frontId2DbId(idMap, entity
							.getCommId()));
					itemDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(itemDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					CCommissionItem delEntity = itemDao.findById(entity.getCoitId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					itemDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}				
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<CCommission> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public ICCommissionDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ICCommissionDAO dao) {
		this.dao = dao;
	}

	public ICCommissionItemDAO getItemDao() {
		return itemDao;
	}

	@Autowired
	public void setItemDao(ICCommissionItemDAO itemDao) {
		this.itemDao = itemDao;
	}
	
}
