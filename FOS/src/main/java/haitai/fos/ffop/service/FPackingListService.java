package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.StringUtil;

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
public class FPackingListService {
	private IFPackingListDAO dao = null;
	private IFContractDAO contractDao = null;

	@Transactional
	public List<FPackingList> save(List<FPackingList> consignList) {
		List<FPackingList> retList = new ArrayList<FPackingList>();
		Set<Integer> contractSet = new HashSet<Integer>();
		for (FPackingList entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setPaliId(null);
				updateStatusByStation(entity);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				updateStatusByStation(entity);
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FPackingList delEntity = dao.findById(entity.getPaliId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
			contractSet.add(entity.getFconId());
		}
		for (Integer id : contractSet) {
			FContract contract = contractDao.findById(id);
			syncContract(contract);
			contractDao.update(contract);
		}
		return retList;
	}

	private void updateStatusByStation(FPackingList entity) {
		if (StringUtil.isNotBlank(entity.getPaliLocationNow())
				&& entity.getPaliStationId() != null
				&& entity.getPaliStationId() == entity.getPaliStationIdNow()) {
			entity.setPaliStatus(ConstUtil.TrueShort);
		}
	}

	/**
	 * 累加件数和毛重, 写到FContract上
	 * @param contract
	 */
	private void syncContract(FContract contract) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("fconId", contract.getFconId());
		List<FPackingList> list = dao.findByProperties(propertyMap);
		Integer packages = new Integer(0);
		Double grossWeight = new Double(0);
		Integer arrivedPackages = new Integer(0);
		Double arrivedGrossWeight = new Double(0);
		for (FPackingList packingList : list) {
			if(packingList.getPaliPackages() != null) {
				packages += packingList.getPaliPackages();
			}
			if(packingList.getPaliGrossWeight() != null) {
				grossWeight += packingList.getPaliGrossWeight();
			}
			if(ConstUtil.TrueShort.equals(packingList.getPaliStatus())) {
				if(packingList.getPaliPackages() != null) {
					arrivedPackages += packingList.getPaliPackages();
				}
				if(packingList.getPaliGrossWeight() != null) {
					arrivedGrossWeight += packingList.getPaliGrossWeight();
				}
			}
		}
		contract.setFconTotalPackages(packages);
		contract.setFconTotalGrossWeight(grossWeight);
		contract.setFconArrivedPackages(arrivedPackages);
		contract.setFconArrivedGrossWeight(arrivedGrossWeight);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FPackingList> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FPackingList> complexQuery(List<FosQuery> conditions,
			Map queryMap) {
		List objList = dao.complexQuery(conditions, queryMap);
		List<FPackingList> retList = new ArrayList<FPackingList>();
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				FPackingList packingList= (FPackingList) objArray[0];
				FContract contract = (FContract) objArray[1];
				packingList.setCharterName(contract.getCharterName());
				packingList.setCustName(contract.getCustName());
				packingList.setFconPodEn(contract.getFconPodEn());
				packingList.setFconInvoiceFlag(contract.getFconInvoiceFlag());
				packingList.setFconInspectionFlag(contract.getFconInspectionFlag());
				packingList.setFconCudeType(contract.getFconCudeType());
				retList.add(packingList);
			}
		}
		return retList;
	}	

	public IFPackingListDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFPackingListDAO dao) {
		this.dao = dao;
	}

	public IFContractDAO getContractDao() {
		return contractDao;
	}

	@Autowired
	public void setContractDao(IFContractDAO contractDao) {
		this.contractDao = contractDao;
	}
}
