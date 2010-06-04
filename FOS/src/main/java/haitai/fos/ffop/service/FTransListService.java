package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.idao.IFTransListDAO;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fos.ffop.entity.table.FTransList;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FTransListService {
	private IFTransListDAO dao = null;
	private IFPackingListDAO packingListDao = null;

	@Transactional
	public List<FTransList> save(List<FTransList> consignList) {
		List<FTransList> retList = new ArrayList<FTransList>();
		Set<Integer> idSet = new HashSet<Integer>();
		for (FTransList entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTrliId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FTransList delEntity = dao.findById(entity.getTrliId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
			idSet.add(entity.getPaliId());
		}
		for (Integer id : idSet) {
			syncPackingList(id);
		}
		return retList;
	}

	/**
	 * 把最后的转运港和地点回写到PackingList上
	 * @param id
	 */
	@Transactional
	private void syncPackingList(Integer id) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("paliId", "" + id);
		List<FTransList> list = dao.findByProperties(queryMap);
		FTransList lastItem = null;
		if(list.size() > 0) {
			lastItem = list.get(0);
		}
		for (FTransList item : list) {
			if(item.getTrliId() > lastItem.getTrliId()) {
				lastItem = item;
			}
		}
		if(lastItem != null) {
			FPackingList packingList = packingListDao.findById(id);
			packingList.setPaliStationIdNow(lastItem.getTrliStationId());
			packingList.setPaliStationNameNow(lastItem.getTrliStationName());
			packingList.setPaliLocationNow(lastItem.getTrliLocation());
			packingList.setPaliTrackTypeP(lastItem.getTrliTrackType());
			packingList.setPaliTransTimes(list.size());
			packingListDao.update(packingList);
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FTransList> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IFTransListDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFTransListDAO dao) {
		this.dao = dao;
	}

	public IFPackingListDAO getPackingListDao() {
		return packingListDao;
	}

	@Autowired
	public void setPackingListDao(IFPackingListDAO packingListDao) {
		this.packingListDao = packingListDao;
	}
}
