package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFWarehouseCargoDAO;
import haitai.fos.ffop.entity.idao.IFWarehouseDAO;
import haitai.fos.ffop.entity.table.FWarehouse;
import haitai.fos.ffop.entity.table.FWarehouseCargo;
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
public class FWarehouseService {
	@Autowired
	private IFWarehouseDAO dao;
	@Autowired
	private IFWarehouseCargoDAO cargoDao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		// handle Warehouse first
		for (Object obj : entityList) {
			if (obj instanceof FWarehouse) {
				FWarehouse entity = (FWarehouse) obj;
				//保存旧id, 对于新增的对象, id为前台传递的负数
				Integer oldId = entity.getWareId();
				if (entity.getRowAction() == RowAction.N) {
					entity.setWareId(null);
					String no = SerialFactory.getSerial("ware_no");
					entity.setWareNo(no);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FWarehouse delEntity = dao.findById(entity.getWareId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(
							"fw.row_action_null");
				}
				//主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getWareId());
			}
		}

		// handle WarehouseCargo
		for (Object obj : entityList) {
			if (obj instanceof FWarehouseCargo) {
				FWarehouseCargo entity = (FWarehouseCargo) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setWacaId(null);
					entity.setWareId(NumberUtil.frontId2DbId(idMap, entity.getWareId()));
					cargoDao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(cargoDao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FWarehouseCargo delEntity = cargoDao.findById(entity.getWacaId());
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
	public List<FWarehouse> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FWarehouseCargo> queryCargo(Map queryMap) {
		return cargoDao.findByProperties(queryMap);
	}
}
