package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFBlDAO;
import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class FBlService {
	@Autowired
	private IFBlDAO dao;
	@Autowired
	private IFConsignDAO consignDao;
	@Autowired
	private IFContractDAO contractDao;

	@Transactional
	public List<FBl> save(List<FBl> consignList) {
		List<FBl> retList = new ArrayList<FBl>();
		Set<Integer> blIdSet = new HashSet<Integer>(); 
		Set<Integer> consIdSet = new HashSet<Integer>(); 
		Set<Integer> masterIdSet = new HashSet<Integer>();
		Set<Integer> fconIdSet = new HashSet<Integer>();
		for (FBl entity : consignList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setBlId(null);
				checkBlNoDuplicated(entity);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				checkBlNoDuplicated(entity);
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				FBl delEntity = dao.findById(entity.getBlId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
				entity = delEntity;
			} else{
				throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
			if(entity.getBlMBlId() != null){
				blIdSet.add(entity.getBlMBlId());
			}
			consIdSet.add(entity.getConsId());
			if(entity.getConsMasterId() != null){
				masterIdSet.add(entity.getConsMasterId());
			}
			if(entity.getFconId() != null){
				fconIdSet.add(entity.getFconId());
			}
		}
		syncMasterBl(blIdSet);
		syncConsign(consIdSet);
		syncMasterConsign(masterIdSet);
		syncContract(fconIdSet);
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FBl> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
	
	/**
	 * 撤销拆单
	 * @param queryMap
	 */
	@Transactional
	public void cancelSplit(Map<String, Object> queryMap) {
		String id = (String) queryMap.get("blId");
		//把分单删除
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("blMBlId", id);
		map.put("blMasterFlag", ConstUtil.FalseShort);
		map.put("blSplitFlag", ConstUtil.TrueShort);
		List<FBl> blList = dao.findByProperties(map);
		for (FBl bl : blList) {
			bl.setRowAction(ConstUtil.ROW_R);
			dao.update(bl);
		}
		//把主单状态恢复
		FBl master = dao.findById(Integer.parseInt(id));
		master.setBlMBlId(null);
		master.setBlMBlNo(null);
		master.setBlMasterFlag(ConstUtil.TrueShort);
		master.setBlMergeFlag(ConstUtil.FalseShort);
		master.setBlSplitFlag(ConstUtil.FalseShort);
		dao.update(master);
	}

	/**
	 * 撤销并单
	 * @param queryMap
	 */
	@Transactional
	public void cancelMerge(Map<String, Object> queryMap) {
		String id = (String) queryMap.get("blId");
		//把主单删除
		FBl master = dao.findById(Integer.parseInt(id));
		master.setRowAction(ConstUtil.ROW_R);
		dao.update(master);
		//把分单状态恢复
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("blMBlId", id);
		map.put("blMasterFlag", ConstUtil.FalseShort);
		List<FBl> blList = dao.findByProperties(map);
		for (FBl bl : blList) {
			bl.setBlMBlId(null);
			bl.setBlMBlNo(null);
			bl.setBlMergeFlag(ConstUtil.FalseShort);
			bl.setBlMasterFlag(ConstUtil.TrueShort);
			dao.update(bl);
		}
	}
	
	/**
	 * 并单
	 * @param entityList
	 * @return
	 */
	@Transactional
	public List<FBl> merge(List<FBl> entityList) {
		List<FBl> retList = new ArrayList<FBl>();
		FBl master = new FBl();
		String blNo = null;
		Integer packages = 0;
		Double grossWeight = (double) 0;
		Double netWeight = (double) 0;
		Double measurement = (double) 0;
		for (FBl bl : entityList) {
			if (StringUtil.isBlank(blNo)
					|| bl.getBlNo().compareTo(master.getBlNo()) < 0) {
				blNo = bl.getBlNo();
				BeanUtils.copyProperties(bl, master);
				master.setBlMBlNo(master.getBlNo());
			}
			if (bl.getCargPackages() != null) {
				packages += bl.getCargPackages();
			}
			if (bl.getCargGrossWeight() != null) {
				grossWeight += bl.getCargGrossWeight();
			}
			if (bl.getCargNetWeight() != null) {
				netWeight += bl.getCargNetWeight();
			}
			if (bl.getCargMeasurement() != null) {
				measurement += bl.getCargMeasurement();
			}
		}
		master.setBlId(null);
		master.setRowAction(ConstUtil.ROW_N);
		master.setBlMergeFlag(ConstUtil.TrueShort);
		master.setCargPackages(packages);
		master.setCargGrossWeight(grossWeight);
		master.setCargNetWeight(netWeight);
		master.setCargMeasurement(measurement);
		master.setBlMasterFlag(ConstUtil.TrueShort);
		master.setBlPackages("" + packages
				+ ObjectUtil.null2EmptyString(master.getPackName()));
		if (ConstUtil.CONS_BIZ_TYPE_CONTAINER.equals(master.getConsBizType())) {
			master.setBlGrossWeight("" + grossWeight + "KGS");
		} else {
			master.setBlGrossWeight("" + grossWeight + "MT");
		}
		master.setBlMeasurement("" + measurement + "CBM");
		master.setBlTotalSay("SAY TOTAL " + NumberUtil.num2EnWords(packages)
				+ ObjectUtil.null2EmptyString(master.getPackName()) + " ONLY");
		dao.save(master);
		master.setBlMBlId(master.getBlId());
		master.setId("" + master.getBlId());
		master = dao.update(master);
		retList.add(master);
		for (FBl bl : entityList) {
			bl.setBlMBlId(master.getBlId());
			bl.setBlMBlNo(master.getBlNo());
			bl.setBlMergeFlag(ConstUtil.TrueShort);
			bl.setBlMasterFlag(ConstUtil.FalseShort);
			retList.add(dao.update(bl));
		}
		return retList;
	}

	/**
	 * 把主提单上的统计信息累加到合同上
	 * @param fconIdSet
	 */
	private void syncContract(Set<Integer> fconIdSet){
		for (Integer fconId : fconIdSet) {
			FContract contract = contractDao.findById(fconId);
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("fconId", fconId);
			queryMap.put("blMasterFlag", ConstUtil.TrueShort);
			List<FBl> blList = dao.findByProperties(queryMap);
			Integer packages = 0;
			Double grossWeight = (double) 0;
			Double netWeight = (double) 0;
			Double measurement = (double) 0;
			for (FBl bl : blList) {
				if (bl.getCargPackages() != null) {
					packages += bl.getCargPackages();
				}
				if (bl.getCargGrossWeight() != null) {
					grossWeight += bl.getCargGrossWeight();
				}
				if (bl.getCargNetWeight() != null) {
					netWeight += bl.getCargNetWeight();
				}
				if (bl.getCargMeasurement() != null) {
					measurement += bl.getCargMeasurement();
				}
			}
			contract.setBlCargoPackages(packages);
			contract.setBlCargoGrossWeight(grossWeight);
			contract.setBlCargoNetWeight(netWeight);
			contract.setBlCargoMeasurement(measurement);
			contractDao.update(contract);
		}
	}
	
	/**
	 * 把分委托上的主提单的统计信息, 累加到主委托上
	 * @param consIdSet
	 */
	private void syncMasterConsign(Set<Integer> consIdSet) {
		for (Integer consId : consIdSet) {
			FConsign master = consignDao.findById(consId);
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("consMasterId", consId);
			queryMap.put("blMasterFlag", ConstUtil.TrueShort);
			List<FBl> blList = dao.findByProperties(queryMap);
			Integer packages = 0;
			Double grossWeight = (double) 0;
			Double netWeight = (double) 0;
			Double measurement = (double) 0;
			for (FBl bl : blList) {
				if (bl.getCargPackages() != null) {
					packages += bl.getCargPackages();
				}
				if (bl.getCargGrossWeight() != null) {
					grossWeight += bl.getCargGrossWeight();
				}
				if (bl.getCargNetWeight() != null) {
					netWeight += bl.getCargNetWeight();
				}
				if (bl.getCargMeasurement() != null) {
					measurement += bl.getCargMeasurement();
				}
			}
			master.setBlCargoPackages(packages);
			master.setBlCargoGrossWeight(grossWeight);
			master.setBlCargoNetWeight(netWeight);
			master.setBlCargoMeasurement(measurement);
			consignDao.update(master);
		}
	}
	
	/**
	 * 把主提单上的统计信息累加到委托上
	 * @param consIdSet
	 */
	private void syncConsign(Set<Integer> consIdSet) {
		for (Integer consId : consIdSet) {
			FConsign consign = consignDao.findById(consId);
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("consId", consId);
			queryMap.put("blMasterFlag", ConstUtil.TrueShort);
			List<FBl> blList = dao.findByProperties(queryMap);
			Integer packages = 0;
			Double grossWeight = (double) 0;
			Double netWeight = (double) 0;
			Double measurement = (double) 0;
			for (FBl bl : blList) {
				if (bl.getCargPackages() != null) {
					packages += bl.getCargPackages();
				}
				if (bl.getCargGrossWeight() != null) {
					grossWeight += bl.getCargGrossWeight();
				}
				if (bl.getCargNetWeight() != null) {
					netWeight += bl.getCargNetWeight();
				}
				if (bl.getCargMeasurement() != null) {
					measurement += bl.getCargMeasurement();
				}
			}
			consign.setBlCargoPackages(packages);
			consign.setBlCargoGrossWeight(grossWeight);
			consign.setBlCargoNetWeight(netWeight);
			consign.setBlCargoMeasurement(measurement);
			consignDao.update(consign);
		}
	}
	
	/**
	 * 把分提单上的统计信息累加到主提单上
	 * @param blIdSet
	 */
	private void syncMasterBl(Set<Integer> blIdSet) {
		for (Integer blId : blIdSet) {
			FBl master = dao.findById(blId);
			//已经删除的主单,跳过统计
			if(ConstUtil.TrueShort.equals(master.getRemoved())) continue;
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("blMBlId", blId);
			queryMap.put("blMasterFlag", ConstUtil.FalseShort);
			List<FBl> blList = dao.findByProperties(queryMap);
			Integer packages = 0;
			Double grossWeight = (double) 0;
			Double netWeight = (double) 0;
			Double measurement = (double) 0;
			for (FBl bl : blList) {
				if (bl.getCargPackages() != null) {
					packages += bl.getCargPackages();
				}
				if (bl.getCargGrossWeight() != null) {
					grossWeight += bl.getCargGrossWeight();
				}
				if (bl.getCargNetWeight() != null) {
					netWeight += bl.getCargNetWeight();
				}
				if (bl.getCargMeasurement() != null) {
					measurement += bl.getCargMeasurement();
				}
			}
			master.setCargPackages(packages);
			master.setCargGrossWeight(grossWeight);
			master.setCargNetWeight(netWeight);
			master.setCargMeasurement(measurement);
			dao.update(master);
		}
	}

	@Transactional
	public void updateStatusById(Map<String, Object> queryMap){
		String ids = (String) queryMap.get("blId");
		String[] idArray = ids.split(",");
		Short blStatus = Short.valueOf((String) queryMap.get("blStatus"));
		for (String id : idArray) {
			if(StringUtil.isNotBlank(id)){
				dao.updateStatusById(Integer.valueOf(id), blStatus);
			}
		}
	}

	private void checkBlNoDuplicated(FBl entity) {
		//散货不检查提单号的唯一性
		if(ConstUtil.CONS_BIZ_TYPE_BULK.equals(entity.getConsBizType())){
			return;
		}
		if(StringUtil.isBlank(entity.getBlNo())){
			return;
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("blNo", entity.getBlNo());
		List<FBl> list = query(queryMap);
		//如果>1, 说明肯定重复了
		//如果=1, 而且主键不等, 说明有另外一个对象有同样的号
		if (list.size() > 1 || (list.size() == 1 && !list.get(0).getBlId().equals(entity.getBlId()))) {
			throw new BusinessException(MessageUtil.FFSE_BL_NO_DUPLICATED);
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FBl> complexQuery(List<FosQuery> conditions, Map queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

}
