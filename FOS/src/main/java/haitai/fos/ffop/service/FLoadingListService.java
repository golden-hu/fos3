package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;

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
public class FLoadingListService {
	private IFLoadingListDAO dao = null;
	private IFContractDAO contractDao = null;
	private IGVoyageDAO voyageDao = null;
	private IFPackingListDAO packingListDao = null;

	@Transactional
	public List<FLoadingList> save(List<FLoadingList> consignList) {
		List<FLoadingList> retList = new ArrayList<FLoadingList>();
		Set<Integer> contractSet = new HashSet<Integer>();
		Set<Integer> voyageSet = new HashSet<Integer>();
		for (FLoadingList entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setLoliId(null);
				dao.save(entity);
				retList.add(entity);
				syncPackingList(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				FLoadingList delEntity = dao.findById(entity.getLoliId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
				Integer id = entity.getLoliId();
				clearPackingList(id);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
			contractSet.add(entity.getFconId());
			voyageSet.add(entity.getVoyaId());
		}
		for (Integer id : contractSet) {
			FContract contract = contractDao.findById(id);
			syncContract(contract);
			contractDao.update(contract);
		}
		for (Integer id : voyageSet) {
			GVoyage voyage = voyageDao.findById(id);
			syncVoyage(voyage);
			voyageDao.update(voyage);
		}
		return retList;
	}

	/**
	 * 根据loadingList上的合同号找到对应的packingList,
	 * 该packingList的loliId,航次等8个字段清空
	 * @param id
	 */
	private void clearPackingList(Integer id) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("loliId", id);
		List<FPackingList> list = packingListDao.findByProperties(propertyMap);
		for (FPackingList item : list) {
			item.setLoliId(null);
			item.setVessId(null);
			item.setVessName(null);
			item.setVessNameCn(null);
			item.setVoyaId(null);
			item.setVoyaName(null);
			item.setConsId(null);
			item.setConsNo(null);
			packingListDao.update(item);
		}
	}

	/**
	 * 根据loadingList上的合同号找到对应的packingList
	 * 如果该packingList的loliId等8个字段为空, 把 loaddingList上的复制过去
	 * @param entity
	 */
	private void syncPackingList(FLoadingList entity) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("fconId", entity.getFconId());
		List<FPackingList> list = packingListDao.findByProperties(propertyMap);
		for (FPackingList item : list) {
			if (item.getLoliId() == null) {
				item.setLoliId(entity.getLoliId());
				item.setVessId(entity.getVessId());
				item.setVessName(entity.getVessName());
				item.setVessNameCn(entity.getVessNameCn());
				item.setVoyaId(entity.getVoyaId());
				item.setVoyaName(entity.getVoyaName());
				item.setConsId(entity.getConsId());
				item.setConsNo(entity.getConsNo());
				item.setConsMblNo(entity.getConsMblNo());
				packingListDao.update(item);
			}
		}
	}

	private void syncVoyage(GVoyage voyage) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("voyaId", voyage.getVoyaId());
		List<FLoadingList> list = dao.findByProperties(propertyMap);
		Double quantity = new Double(0);
		for (FLoadingList loadingList : list) {
			if(loadingList.getLoliShippedQuantity() != null) {
				quantity += loadingList.getLoliShippedQuantity();
			}
		}
		voyage.setVoyaShippedQuantity(quantity);
	}

	private void syncContract(FContract contract) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("fconId", contract.getFconId());
		List<FLoadingList> list = dao.findByProperties(propertyMap);
		Double quantity = new Double(0);
		Double cbm = new Double(0);
		Set<String> vessMap = new HashSet<String>();
		Set<String> vessCnMap = new HashSet<String>();
		Integer maxId = new Integer(0);
		for (FLoadingList loadingList : list) {
			if(loadingList.getLoliShippedQuantity() != null) {
				quantity += loadingList.getLoliShippedQuantity();
				 loadingList.getLoliShippedCbm();
			}
			if (loadingList.getVessName() != null
					&& loadingList.getVoyaName() != null) {
				vessMap.add(loadingList.getVessName() + " "
						+ loadingList.getVoyaName() + ";");
			}
			if (loadingList.getVessNameCn() != null) {
				vessCnMap.add(loadingList.getVessNameCn() + ";");
			}
			//取最新一条配船的开船时间
			if(loadingList.getLoliId() > maxId) {
				contract.setVoyaShipDateF(loadingList.getVoyaShipDateF());
				contract.setVoyaShipDateT(loadingList.getVoyaShipDateT());
				contract.setVoyaSailDate(loadingList.getVoyaSailDate());
			}
		}
		contract.setFconShippedQuantity(quantity);
		contract.setFconShippedCbm(cbm);
		Short status = caclContractStatus(contract.getFconForcastQuantity(), quantity);
		//如果按照重量没有配，再按照体积算
		if(status == ConstUtil.EXPENSE_INVOICE_STATUS_NONE){
			status = caclContractStatus(contract.getFconForcastCbm(), cbm);
		}
		contract.setFconStatus(status);
		String vessVoyageAll = "";
		for (String item : vessMap) {
			vessVoyageAll += item; 
		}
		String vessCnAll = "";
		for (String item : vessCnMap) {
			vessCnAll += item; 
		}
		contract.setFconVesselVoyage(vessVoyageAll);
		contract.setFconVessNameCn(vessCnAll);
	}
	
	/**
	 * 统计配船数量
	 * @param total
	 * @param real
	 * @return
	 */
	private Short caclContractStatus(Double total, Double real) {
		Short status;
		if (real == null || real == 0) {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		} else if (NumberUtil.amountEqual(real, total)) {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
		} else {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
		}
		return status;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FLoadingList> query(Map queryMap) {
		List<FosQuery> conditions = new ArrayList<FosQuery>();
		List objList = dao.complexQuery(conditions, queryMap);
		List<FLoadingList> retList = new ArrayList<FLoadingList>();
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				FLoadingList loadingList= (FLoadingList) objArray[0];
				FContract contract = (FContract) objArray[1];
				loadingList.setCustName(contract.getCustName());
				loadingList.setCharterName(contract.getCharterName());
				loadingList.setFconPodEn(contract.getFconPodEn());
				loadingList.setFconPolEn(contract.getFconPolEn());
				loadingList.setFconCargoDesc(contract.getFconCargoDesc());
				loadingList.setTranName(contract.getTranName());
				loadingList.setFconLoadDate(contract.getFconLoadDate());
				loadingList.setFconShipDateF(contract.getFconShipDateF());
				loadingList.setFconShipDateT(contract.getFconShipDateT());
				
				retList.add(loadingList);
			}
		}
		return retList;
	}
	
	@Transactional(readOnly = true)
	public List<Object> queryVoyageAndLoadingList(Map<String, Object> queryMap) {
		List<Object> retList = new ArrayList<Object>();
		Integer id = Integer.parseInt((String) queryMap.get("voyaId"));
		
		GVoyage voyage = voyageDao.findById(id);
		retList.add(voyage);
		
		List<FLoadingList> list = query(queryMap);
		retList.addAll(list);
		return retList;
	}

	public IFLoadingListDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFLoadingListDAO dao) {
		this.dao = dao;
	}

	public IFContractDAO getContractDao() {
		return contractDao;
	}

	@Autowired
	public void setContractDao(IFContractDAO contractDao) {
		this.contractDao = contractDao;
	}

	public IGVoyageDAO getVoyageDao() {
		return voyageDao;
	}

	@Autowired
	public void setVoyageDao(IGVoyageDAO voyageDao) {
		this.voyageDao = voyageDao;
	}

	public IFPackingListDAO getPackingListDao() {
		return packingListDao;
	}

	@Autowired
	public void setPackingListDao(IFPackingListDAO packingListDao) {
		this.packingListDao = packingListDao;
	}
	
}
