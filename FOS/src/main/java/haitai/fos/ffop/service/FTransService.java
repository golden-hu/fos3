package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFTransCargoDAO;
import haitai.fos.ffop.entity.idao.IFTransDAO;
import haitai.fos.ffop.entity.idao.IFTransTaskDAO;
import haitai.fos.ffop.entity.table.FTrans;
import haitai.fos.ffop.entity.table.FTransCargo;
import haitai.fos.ffop.entity.table.FTransTask;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
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
public class FTransService {
	@Autowired
	private IFTransDAO dao;
	@Autowired
	private IFTransTaskDAO taskDao;
	@Autowired
	private IFTransCargoDAO cargoDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		// handle Trans first
		for (Object obj : entityList) {
			if (obj instanceof FTrans) {
				FTrans entity = (FTrans) obj;
				//保存旧id, 对于新增的对象, id为前台传递的负数
				Integer oldId = entity.getTranId();
				if (entity.getRowAction() == RowAction.N) {
					String no = SerialFactory.getSerial("tran_no");
					entity.setTranId(null);
					entity.setTranNo(no);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FTrans delEntity = dao.findById(entity.getTranId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				//主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getTranId());
			}
		}

		// handle task
		for (Object obj : entityList) {
			if (obj instanceof FTransTask) {
				FTransTask entity = (FTransTask) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setTrtaId(null);
					//前台传的id(负数)->后台生成id
					entity.setTranId(NumberUtil.frontId2DbId(idMap, entity.getTranId()));
					taskDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(taskDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FTransTask delEntity = taskDao.findById(entity.getTrtaId());
					delEntity.setRowAction(RowAction.R);
					taskDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			} else if (obj instanceof FTransCargo) {
				FTransCargo entity = (FTransCargo) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setTrcaId(null);
					// 前台传的id(负数)->后台生成id
					entity.setTranId(NumberUtil.frontId2DbId(idMap, entity.getTranId()));
					cargoDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(cargoDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FTransCargo delEntity = cargoDao.findById(entity.getTrcaId());
					delEntity.setRowAction(RowAction.R);
					cargoDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FTrans> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FTransTask> queryTask(Map queryMap) {
		return taskDao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FTransCargo> queryCargo(Map queryMap) {
		return cargoDao.findByProperties(queryMap);
	}

	@Transactional
	public void updateStatus(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("tranId"));
		Integer status = Integer.valueOf((String) queryMap.get("tranStatus"));
		FTrans entity = dao.findById(id);
		if (entity != null) {
			entity.setTranStatus(status);
			dao.update(entity);
		}
	}
}
