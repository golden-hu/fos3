package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFContainerCargoDAO;
import haitai.fos.ffop.entity.idao.IFContainerDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContainer;
import haitai.fos.ffop.entity.table.FContainerCargo;
import haitai.fw.exception.BusinessException;
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
public class FContainerService {
	private IFContainerDAO dao = null;
	private IFContainerCargoDAO cargoDao = null;
	private IFConsignDAO consignDao = null;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();
		Integer consId = null;
		// handle parent first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FContainer) {
				FContainer entity = (FContainer) obj;
				Integer oldId = entity.getContId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setContId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FContainer delEntity = dao.findById(entity.getContId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				idMap.put(oldId, entity.getContId());
				consId = entity.getConsId();
			}
		}

		// handle child
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FContainerCargo) {
				FContainerCargo entity = (FContainerCargo) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setCocaId(null);
					entity.setContId(NumberUtil.frontId2DbId(idMap, entity
							.getContId()));
					cargoDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(cargoDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					FContainerCargo delEntity = cargoDao.findById(entity
							.getCocaId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					cargoDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
			}
		}
		//再load对应的委托号的所有箱子，其中CONT_PRE_FLAG=N,
		//箱号拼起来保存到CONS_CONTAINER_INFO字段
		if(consId != null){
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("consId", consId);
			queryMap.put("contPreFlag", "N");
			List<FContainer> listCont = query(queryMap);
			StringBuffer sb = new StringBuffer();
			for (FContainer cont : listCont) {
				sb.append(cont.getContNo()).append("/");
			}
			if(sb.length() > 0){
				sb.deleteCharAt(sb.length() - 1);
			}
			FConsign consign = consignDao.findById(consId);
			consign.setConsContainerNo(sb.toString());
			consignDao.update(consign);
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FContainer> query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
			retList.addAll(cargoDao.findByProperties(queryMap));
		}
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<Object> complexQueryByVoyaId(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.complexQueryByVoyaId(queryMap));
		return retList;
	}


	public IFContainerDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFContainerDAO dao) {
		this.dao = dao;
	}

	public IFContainerCargoDAO getCargoDao() {
		return cargoDao;
	}

	@Autowired
	public void setCargoDao(IFContainerCargoDAO cargoDao) {
		this.cargoDao = cargoDao;
	}

	public IFConsignDAO getConsignDao() {
		return consignDao;
	}

	@Autowired
	public void setConsignDao(IFConsignDAO consignDao) {
		this.consignDao = consignDao;
	}
	
}
