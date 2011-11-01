package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFTransCargoDAO;
import haitai.fos.ffop.entity.idao.IFTransDAO;
import haitai.fos.ffop.entity.idao.IFTransTaskDAO;
import haitai.fos.ffop.entity.table.FTrans;
import haitai.fos.ffop.entity.table.FTransCargo;
import haitai.fos.ffop.entity.table.FTransTask;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

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
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					String no = SerialFactory.getSerial("tran_no");
					entity.setTranId(null);
					entity.setTranNo(no);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					FTrans delEntity = dao.findById(entity.getTranId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				//主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getTranId());
			}
		}

		// handle task
		for (Object obj : entityList) {
			if (obj instanceof FTransTask) {
				FTransTask entity = (FTransTask) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setTrtaId(null);
					//前台传的id(负数)->后台生成id
					entity.setTranId(NumberUtil.frontId2DbId(idMap, entity.getTranId()));
					taskDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(taskDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					FTransTask delEntity = taskDao.findById(entity.getTrtaId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					taskDao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
			} else if (obj instanceof FTransCargo) {
				FTransCargo entity = (FTransCargo) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setTrcaId(null);
					// 前台传的id(负数)->后台生成id
					entity.setTranId(NumberUtil.frontId2DbId(idMap, entity.getTranId()));
					cargoDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(cargoDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					FTransCargo delEntity = cargoDao.findById(entity.getTrcaId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					cargoDao.update(delEntity);
				} else {
					throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
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
