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
	@Autowired
	private FConsignService consignService;

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional
	public List save(List consignList) {
		List retList = new ArrayList();
		Set<Integer> blIdSet = new HashSet<Integer>();
		Set<Integer> consIdSet = new HashSet<Integer>();
		Set<Integer> masterIdSet = new HashSet<Integer>();
		Set<Integer> fconIdSet = new HashSet<Integer>();
		Integer consId = null;
		for (Object obj : consignList) {
			FBl entity = (FBl) obj;
			if (entity.getRowAction() == RowAction.N) {
				entity.setBlId(null);
				checkBlNoDuplicated(entity);
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
				checkBlNoDuplicated(entity);
				retList.add(dao.update(entity));
			} else if (entity.getRowAction() == RowAction.R) {
				FBl delEntity = dao.findById(entity.getBlId());
				delEntity.setRowAction(RowAction.R);
				dao.update(delEntity);
				entity = delEntity;
			} else {
				throw new BusinessException("fw.row_action_null");
			}
			if (entity.getBlMBlId() != null) {
				blIdSet.add(entity.getBlMBlId());
			}
			consIdSet.add(entity.getConsId());
			consId = entity.getConsId();
			if (entity.getConsMasterId() != null) {
				masterIdSet.add(entity.getConsMasterId());
			}
			if (entity.getFconId() != null) {
				fconIdSet.add(entity.getFconId());
			}
		}
		
		//再load对应的委托号的所有主提单
		//主提单号拼起来保存到CONS_MBL_NO字段
		if(consId != null){
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("consId", consId);
			queryMap.put("blType", "MB/L");
			List<FBl> listNo = query(queryMap);
			StringBuilder sb = new StringBuilder();
			for (FBl MblNo : listNo) {
				sb.append(MblNo.getBlNo()).append("/");
			}
			if(sb.length() > 0){
				sb.deleteCharAt(sb.length() - 1);
			}
			FConsign consign = consignDao.findById(consId);
			consign.setConsMblNo(sb.toString());
			retList.add(consignDao.update(consign));
		}
		syncMasterBl(blIdSet);
		syncConsign(consIdSet);
		syncMasterConsign(masterIdSet);
		syncContract(fconIdSet);
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FBl> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	/**
	 * 撤销拆单
	 *
	 * @param queryMap the query map
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
			bl.setRowAction(RowAction.R);
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
	 *
	 * @param queryMap the query map
	 */
	@Transactional
	public void cancelMerge(Map<String, Object> queryMap) {
		String id = (String) queryMap.get("blId");
		//把主单删除
		FBl master = dao.findById(Integer.parseInt(id));
		master.setRowAction(RowAction.R);
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
	 *
	 * @param entityList the entity list
	 * @return the return list
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
		master.setRowAction(RowAction.N);
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
	 *
	 * @param fconIdSet theid set
	 */
	private void syncContract(Set<Integer> fconIdSet) {
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
	 *
	 * @param consIdSet the id set
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
	 *
	 * @param consIdSet the id set
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
	 *
	 * @param blIdSet the id set
	 */
	private void syncMasterBl(Set<Integer> blIdSet) {
		for (Integer blId : blIdSet) {
			FBl master = dao.findById(blId);
			//已经删除的主单,跳过统计
			if (ConstUtil.TrueShort.equals(master.getRemoved())) continue;
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
	public void updateStatusById(Map<String, Object> queryMap) {
		String ids = (String) queryMap.get("blId");
		String[] idArray = ids.split(",");
		Short blStatus = Short.valueOf((String) queryMap.get("blStatus"));
		for (String id : idArray) {
			if (StringUtil.isNotBlank(id)) {
				dao.updateStatusById(Integer.valueOf(id), blStatus);
			}
		}
		String blType = (String) queryMap.get("blType");
		if("M/BL".equalsIgnoreCase(blType)){
			consignService.updateMblStatusById(queryMap);
		}else if("F/BL".equalsIgnoreCase(blType)){
			consignService.updateFblStatusById(queryMap);
		}
	}

	private void checkBlNoDuplicated(FBl entity) {
		//散货不检查提单号的唯一性
		if (ConstUtil.CONS_BIZ_TYPE_BULK.equals(entity.getConsBizType())) {
			return;
		}
		if (StringUtil.isBlank(entity.getBlNo())) {
			return;
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("blNo", entity.getBlNo());
		List<FBl> list = query(queryMap);
		//如果>1, 说明肯定重复了
		//如果=1, 而且主键不等, 说明有另外一个对象有同样的号
		if (list.size() > 1 || (list.size() == 1 && !list.get(0).getBlId().equals(entity.getBlId()))) {
			throw new BusinessException("ffse.bl.no_duplicated");
		}
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FBl> complexQuery(List<FosQuery> conditions, Map queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}

}
