package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFInspectionDAO;
import haitai.fos.ffop.entity.idao.IFInspectionDocDAO;
import haitai.fos.ffop.entity.table.FInspection;
import haitai.fos.ffop.entity.table.FInspectionDoc;
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
public class FInspectionService {
	@Autowired
	private IFInspectionDAO dao;
	@Autowired
	private IFInspectionDocDAO docDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		// handle Trans first
		for (Object obj : entityList) {
			if (obj instanceof FInspection) {
				FInspection entity = (FInspection) obj;
				Integer oldId = entity.getInspId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setInspId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FInspection delEntity = dao.findById(entity.getInspId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				idMap.put(oldId, entity.getInspId());
			}
		}

		// handle task
		for (Object obj : entityList) {
			if (obj instanceof FInspectionDoc) {
				FInspectionDoc entity = (FInspectionDoc) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setIndoId(null);
					entity.setInspId(NumberUtil.frontId2DbId(idMap, entity.getInspId()));
					docDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(docDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FInspectionDoc delEntity = docDao.findById(entity.getIndoId());
					delEntity.setRowAction(RowAction.R);
					docDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FInspection> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FInspectionDoc> queryDoc(Map queryMap) {
		return docDao.findByProperties(queryMap);
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("inspId"));
		Short status = Short.valueOf((String) queryMap.get("inspStatus"));
		FInspection entity = dao.findById(id);
		if (entity != null) {
			entity.setInspStatus(status);
			dao.update(entity);
		}
	}

	@Transactional
	public void updateDocStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("indoId"));
		Short indoStatus = Short.valueOf((String) queryMap.get("indoStatus"));
		FInspectionDoc entity = docDao.findById(id);
		entity.setIndoStatus(indoStatus);
		docDao.update(entity);
	}
}
