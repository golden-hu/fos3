package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFWarehouseCargoDAO;
import haitai.fos.ffop.entity.idao.IFWarehouseDAO;
import haitai.fos.ffop.entity.table.FWarehouse;
import haitai.fos.ffop.entity.table.FWarehouseCargo;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FWarehouseService {
	private IFWarehouseDAO dao = null;
	private IFWarehouseCargoDAO cargoDao = null;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		// handle Warehouse first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FWarehouse) {
				FWarehouse entity = (FWarehouse) obj;
				//保存旧id, 对于新增的对象, id为前台传递的负数
				Integer oldId = entity.getWareId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setWareId(null);
					String no = SerialFactory.getSerial("ware_no");
					entity.setWareNo(no);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FWarehouse delEntity = dao.findById(entity.getWareId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				//主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getWareId());
			}
		}

		// handle WarehouseCargo
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FWarehouseCargo) {
				FWarehouseCargo entity = (FWarehouseCargo) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setWacaId(null);
					entity.setWareId(NumberUtil.frontId2DbId(idMap, entity
							.getWareId()));
					cargoDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(cargoDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FWarehouseCargo delEntity = cargoDao.findById(entity.getWacaId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					cargoDao.update(delEntity);
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
	public List<FWarehouse> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FWarehouseCargo> queryCargo(Map queryMap) {
		return cargoDao.findByProperties(queryMap);
	}

	public IFWarehouseDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFWarehouseDAO dao) {
		this.dao = dao;
	}

	public IFWarehouseCargoDAO getCargoDao() {
		return cargoDao;
	}

	@Autowired
	public void setCargoDao(IFWarehouseCargoDAO cargoDao) {
		this.cargoDao = cargoDao;
	}

}
