package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.ICCommissionDAO;
import haitai.fos.sys.entity.idao.ICCommissionItemDAO;
import haitai.fos.sys.entity.table.CCommission;
import haitai.fos.sys.entity.table.CCommissionItem;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CCommissionService {
	@Autowired
	private ICCommissionDAO dao;
	@Autowired
	private ICCommissionItemDAO itemDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		for (Object obj : entityList) {
			if (obj instanceof CCommission) {
				CCommission entity = (CCommission) obj;
				Integer oldId = entity.getCommId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setCommId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CCommission delEntity = dao.findById(entity.getCommId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				idMap.put(oldId, entity.getCommId());
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof CCommissionItem) {
				CCommissionItem entity = (CCommissionItem) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setCoitId(null);
					//前台传的id(负数)->后台生成id
					entity.setCommId(NumberUtil.frontId2DbId(idMap, entity.getCommId()));
					itemDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(itemDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					CCommissionItem delEntity = itemDao.findById(entity.getCoitId());
					delEntity.setRowAction(RowAction.R);
					itemDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
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

}
