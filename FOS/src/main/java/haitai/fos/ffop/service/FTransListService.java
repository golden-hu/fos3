package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.idao.IFTransListDAO;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fos.ffop.entity.table.FTransList;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class FTransListService {
	@Autowired
	private IFTransListDAO dao;
	@Autowired
	private IFPackingListDAO packingListDao;

	@Transactional
	public List<FTransList> save(List<FTransList> consignList) {
		List<FTransList> retList = new ArrayList<FTransList>();
		Set<Integer> idSet = new HashSet<Integer>();
		for (FTransList entity : consignList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTrliId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				FTransList delEntity = dao.findById(entity.getTrliId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException("fw.row_action_null");
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
	 *
	 * @param id the id
	 */
	@Transactional
	private void syncPackingList(Integer id) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("paliId", "" + id);
		List<FTransList> list = dao.findByProperties(queryMap);
		FTransList lastItem = null;
		if (list.size() > 0) {
			lastItem = list.get(0);
			for (FTransList item : list) {
				if (item.getTrliId().compareTo(lastItem.getTrliId()) > 0) {
					lastItem = item;
				}
			}
		}
		if (lastItem != null) {
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
}
