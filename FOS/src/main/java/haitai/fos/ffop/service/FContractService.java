package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fos.general.entity.idao.IGPlaceDAO;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class FContractService {
	@Autowired
	private IFContractDAO dao;
	@Autowired
	private IFLoadingListDAO loadingListDao;
	@Autowired
	private IFPackingListDAO packingListDao;
	@Autowired
	private IGPlaceDAO placeDao;

	@Transactional
	public List<FContract> save(List<FContract> consignList) {
		List<FContract> retList = new ArrayList<FContract>();
		for (FContract entity : consignList) {
			if (entity.getRowAction() == RowAction.N) {
				entity.setFconId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
				retList.add(dao.update(entity));
			} else if (entity.getRowAction() == RowAction.R) {
				FContract delEntity = dao.findById(entity.getFconId());
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("fconId", entity.getFconId());
				if (loadingListDao.findByProperties(queryMap).size() > 0
						|| packingListDao.findByProperties(queryMap).size() > 0) {
					throw new BusinessException("ffop.fcon.cant_delete");
				}
				delEntity.setRowAction(RowAction.R);
				dao.update(delEntity);
			} else {
				throw new BusinessException("fw.row_action_null");
			}
		}
		return retList;
	}

	public void updateVessName(Integer vessId) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("vessId", vessId);
		List<FLoadingList> loadingList = loadingListDao.findByProperties(queryMap);
		Set<Integer> fconIdSet = new HashSet<Integer>();
		for (FLoadingList item : loadingList) {
			fconIdSet.add(item.getFconId());
		}
		for (Integer fconId : fconIdSet) {
			FContract contract = dao.findById(fconId);
			queryMap.clear();
			queryMap.put("fconId", fconId);
			List<FLoadingList> list = loadingListDao.findByProperties(queryMap);
			String vesselVoyage = "";
			String vesselNameCN = "";
			for (FLoadingList item2 : list) {
				vesselVoyage += item2.getVessName() + " " + item2.getVoyaName() + ";";
				vesselNameCN += item2.getVessNameCn() + ";";
			}
			contract.setFconVesselVoyage(vesselVoyage);
			contract.setFconVessNameCn(vesselNameCN);
			dao.update(contract);
		}
	}

	public void updateVessName(Integer voyaId, Integer newVessId) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("voyaId", voyaId);
		queryMap.put("vessId", newVessId);
		List<FLoadingList> loadingList = loadingListDao.findByProperties(queryMap);
		Set<Integer> fconIdSet = new HashSet<Integer>();
		for (FLoadingList item : loadingList) {
			fconIdSet.add(item.getFconId());
		}
		for (Integer fconId : fconIdSet) {
			FContract contract = dao.findById(fconId);
			queryMap.clear();
			queryMap.put("fconId", fconId);
			List<FLoadingList> list = loadingListDao.findByProperties(queryMap);
			String vesselVoyage = "";
			String vesselNameCN = "";
			for (FLoadingList item2 : list) {
				vesselVoyage += item2.getVessName() + " " + item2.getVoyaName() + ";";
				vesselNameCN += item2.getVessNameCn() + ";";
			}
			contract.setFconVesselVoyage(vesselVoyage);
			contract.setFconVessNameCn(vesselNameCN);
			dao.update(contract);
		}
	}

	public void updateVoyaName(Integer voyaId) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("voyaId", voyaId);
		List<FLoadingList> loadingList = loadingListDao.findByProperties(queryMap);
		Set<Integer> fconIdSet = new HashSet<Integer>();
		for (FLoadingList item : loadingList) {
			fconIdSet.add(item.getFconId());
		}
		for (Integer fconId : fconIdSet) {
			FContract contract = dao.findById(fconId);
			queryMap.clear();
			queryMap.put("fconId", fconId);
			List<FLoadingList> list = loadingListDao.findByProperties(queryMap);
			String vesselVoyage = "";
			for (FLoadingList item2 : list) {
				vesselVoyage += item2.getVessName() + " " + item2.getVoyaName() + ";";
			}
			contract.setFconVesselVoyage(vesselVoyage);
			dao.update(contract);
		}
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FContract> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FContract> complexQueryByVoyaId(List<FosQuery> conditions, Map queryMap) {
		return dao.queryByVoyaId(conditions, queryMap);
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FContract> complexQuery(List<FosQuery> conditions, Map queryMap) {
		List<FContract> list;
		list = dao.complexQuery(conditions, queryMap);
		for (FContract fContract : list) {
			Double remainQuantity = (double) 0;
			if (fContract.getFconForcastQuantity() != null) {
				remainQuantity += fContract.getFconForcastQuantity();
			}
			if (fContract.getFconShippedQuantity() != null) {
				remainQuantity -= fContract.getFconShippedQuantity();
			}
			fContract.setFconRemainQuantity(remainQuantity);
			Double remainCbm = (double) 0;
			if (fContract.getFconForcastCbm() != null) {
				remainCbm += fContract.getFconForcastCbm();
			}
			if (fContract.getFconShippedCbm() != null) {
				remainCbm -= fContract.getFconShippedCbm();
			}
			fContract.setFconRemainCbm(remainCbm);
		}
		return list;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List complexQueryPlace(List<FosQuery> conditions, Map queryMap) {
		String placId = (String) queryMap.get("placId");
		List retList = new ArrayList();
		retList.addAll(dao.complexQuery(conditions, queryMap));
		retList.add(placeDao.findById(Integer.parseInt(placId)));
		return retList;
	}

}
