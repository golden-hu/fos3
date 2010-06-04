package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFBlDAO;
import haitai.fos.ffop.entity.idao.IFCargoDAO;
import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFContainerDAO;
import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.idao.IFDoDAO;
import haitai.fos.ffop.entity.idao.IFDocDAO;
import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.idao.IFTaskDAO;
import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FCargo;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContainer;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FDo;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fos.ffop.entity.table.FTask;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fos.sys.entity.idao.IPCompanyConfigDAO;
import haitai.fos.sys.entity.idao.IPTaskTypeDAO;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fos.sys.entity.table.PTaskType;
import haitai.fos.sys.entity.table.PUser;
import haitai.fos.sys.service.PMessageService;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.HttpHeader;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.ObjectUtil;
import haitai.fw.util.SpringContextUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FConsignService {
	private IFConsignDAO dao = null;
	private IFContainerDAO containerDao = null;
	private IFCargoDAO cargoDao = null;
	private IFBlDAO blDao = null;
	private IFDoDAO doDao = null;
	private IFDocDAO docDao = null;
	private ISExpenseDAO expenseDao = null;
	private IFContractDAO contractDao = null;
	private IFLoadingListDAO loadingListDao = null;
	private IGVoyageDAO voyageDao = null;
	private IFPackingListDAO packingListDao = null;
	private IPCompanyConfigDAO companyConfigDao = null;
	private IPTaskTypeDAO taskTypeDao = null;
	private IFTaskDAO taskDao = null;
	@Autowired
	private PMessageService messageService;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList){
		List retList = new ArrayList();

		Integer newId = null;
		String consNo = null;
		// handle consign first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FConsign) {
				FConsign entity = (FConsign) obj;
				saveConsign(entity, retList);
				newId = entity.getConsId();
				consNo = entity.getConsNo();
				break;
			}
		}
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FContainer) {
				FContainer entity = (FContainer) obj;
				saveContainer(entity, retList, newId, consNo);
			}
		}
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FCargo) {
				FCargo entity = (FCargo) obj;
				saveCargo(entity, retList, newId, consNo);
			}
		}
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FBl) {
				FBl entity = (FBl) obj;
				saveBl(entity, retList, newId, consNo);
			}
		}
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof FDo) {
				FDo entity = (FDo) obj;
				saveDo(entity, retList, newId, consNo);
			}
		}
		return retList;
	}

	private void saveDo(FDo entity, List<Object> retList, Integer newId,
			String consNo) {
		if (ConstUtil.ROW_N.equalsIgnoreCase(entity
				.getRowAction())) {
			entity.setDoId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			doDao.save(entity);
			retList.add(entity);
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
				.getRowAction())) {
			retList.add(doDao.update(entity));
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
				.getRowAction())) {
			FDo delEntity = doDao.findById(entity.getDoId());
			delEntity.setRowAction(ConstUtil.ROW_R);
			doDao.update(delEntity);
		} else {
			throw new BusinessException(
					MessageUtil.FW_ERROR_ROW_ACTION_NULL);
		}
	}

	private void saveBl(FBl entity, List<Object> retList, Integer newId,
			String consNo) {
		if (ConstUtil.ROW_N.equalsIgnoreCase(entity
				.getRowAction())) {
			entity.setBlId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			blDao.save(entity);
			retList.add(entity);
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
				.getRowAction())) {
			retList.add(blDao.update(entity));
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
				.getRowAction())) {
			FBl delEntity = blDao.findById(entity.getBlId());
			delEntity.setRowAction(ConstUtil.ROW_R);
			blDao.update(delEntity);
		} else {
			throw new BusinessException(
					MessageUtil.FW_ERROR_ROW_ACTION_NULL);
		}
	}

	private void saveCargo(FCargo entity, List<Object> retList, Integer newId,
			String consNo) {
		if (ConstUtil.ROW_N.equalsIgnoreCase(entity
				.getRowAction())) {
			entity.setCargId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			cargoDao.save(entity);
			retList.add(entity);
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
				.getRowAction())) {
			retList.add(cargoDao.update(entity));
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
				.getRowAction())) {
			FCargo delEntity = cargoDao.findById(entity.getCargId());
			delEntity.setRowAction(ConstUtil.ROW_R);
			cargoDao.update(delEntity);
		} else {
			throw new BusinessException(
					MessageUtil.FW_ERROR_ROW_ACTION_NULL);
		}
	}

	private void saveContainer(FContainer entity, List<Object> retList, Integer newId,
			String consNo) {
		if (ConstUtil.ROW_N.equalsIgnoreCase(entity
				.getRowAction())) {
			entity.setContId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			containerDao.save(entity);
			retList.add(entity);
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
				.getRowAction())) {
			retList.add(containerDao.update(entity));
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
				.getRowAction())) {
			FContainer delEntity = containerDao.findById(entity.getContId());
			delEntity.setRowAction(ConstUtil.ROW_R);
			containerDao.update(delEntity);
		} else {
			throw new BusinessException(
					MessageUtil.FW_ERROR_ROW_ACTION_NULL);
		}
	}

	private void saveConsign(FConsign entity, List<Object> retList){
		if (ConstUtil.ROW_N.equalsIgnoreCase(entity
				.getRowAction())) {
			entity.setConsId(null);
			checkBlNoDuplicated(entity);
			if (ConstUtil.CONS_BIZ_TYPE_BULK.equals(entity.getConsBizType())
					&& entity.getVoyaId() != null) {
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("custId", String.valueOf(entity.getCustId()));
				queryMap.put("voyaId", String.valueOf(entity.getVoyaId()));
				List<FConsign> mergeList = dao.findByProperties(queryMap);
				switch (mergeList.size()) {
				case 0:
					entity = saveNormalConsign(entity);
					generateTask(entity);
					sendShipNotice(entity);
					break;
				case 1:
					FConsign firstEntity = mergeList.get(0);
					// 把第一个分单复制一份, 作为主单
					FConsign masterEntity = new FConsign();
					BeanUtils.copyProperties(firstEntity, masterEntity);
					masterEntity.setConsId(null);
					dao.save(masterEntity);
					//把主单的id更新到自己的masterId字段
					masterEntity.setConsMasterId(masterEntity.getConsId());
					masterEntity = dao.update(masterEntity);
					//把主单的id->分单的masterId字段, 第一个分单的编号+_1
					firstEntity.setConsNo(masterEntity.getConsNo()
							+ ConstUtil.STRING_DASH
							+ StringUtil.formatTwoNumber(1));
					firstEntity.setConsMasterId(masterEntity.getConsId());
					firstEntity.setConsMasterNo(masterEntity.getConsNo());
					firstEntity.setConsMasterFlag(ConstUtil.FalseShort);
					firstEntity = dao.update(firstEntity);
					//并更新第一个分单对应的contract, loadingList,packingList上的consNo
					//还有doc,bl,expense
					Integer consId = firstEntity.getConsId();
					String consNo = firstEntity.getConsNo();
					contractDao.updateConsNoByConsId(consId, consNo);
					loadingListDao.updateConsNoByConsId(consId, consNo);
					packingListDao.updateConsNoByConsId(consId, consNo);
					docDao.updateConsNoByConsId(consId, consNo);
					blDao.updateConsNoByConsId(consId, consNo);
					expenseDao.updateConsNoByConsId(consId, consNo);
					// 新的要保存的第二个分单
					entity.setConsNo(masterEntity.getConsNo()
							+ ConstUtil.STRING_DASH
							+ StringUtil.formatTwoNumber(2));
					entity.setConsMasterId(masterEntity.getConsId());
					entity.setConsMasterNo(masterEntity.getConsNo());
					entity.setConsMasterFlag(ConstUtil.FalseShort);
					dao.save(entity);
					// 更新主单上的一些统计字段
					sumSomeField(masterEntity, entity);
					dao.update(masterEntity);
					generateTask(masterEntity, firstEntity);
					break;
				default:
					FConsign master = null;
					// 找到主单
					for (FConsign item : mergeList) {
						if (ConstUtil.TrueShort.equals(item.getConsMasterFlag())) {
							master = item;
						}
					}
					// 新的要保存的第N个分单
					entity.setConsNo(master.getConsNo()
							+ ConstUtil.STRING_DASH
							+ StringUtil.formatTwoNumber(mergeList.size()));
					entity.setConsMasterId(master.getConsId());
					entity.setConsMasterNo(master.getConsNo());
					entity.setConsMasterFlag(ConstUtil.FalseShort);
					dao.save(entity);
					// 更新主单上的一些统计字段
					sumSomeField(master, entity);
					dao.update(master);
					break;
				}
			}else {
				entity = saveNormalConsign(entity);
				generateTask(entity);
			}
			retList.add(entity);
			entity.setEditable(ConstUtil.TrueShort);
			if(entity.getLoliId() != null && entity.getLoliId() > 0) {
				syncLoadingList(entity);
				syncPackingList(entity);
				updateFactQuantity(entity, false);
			}
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
				.getRowAction())) {
			checkBlNoDuplicated(entity);
			syncTask(entity);
			FConsign retEntity = dao.update(entity);
			retEntity.setEditable(ConstUtil.TrueShort);
			retList.add(retEntity);
			if(retEntity.getLoliId() != null && entity.getLoliId() > 0) {
				syncLoadingList(entity);
				syncPackingList(entity);
				updateFactQuantity(retEntity, false);
			}
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
				.getRowAction())) {
			FConsign delEntity = dao.findById(entity.getConsId());
			delEntity.setRowAction(ConstUtil.ROW_R);
			dao.update(delEntity);
			if(delEntity.getLoliId() != null && delEntity.getLoliId() > 0) {
				updateFactQuantity(delEntity, true);
			}
		} else {
			throw new BusinessException(
					MessageUtil.FW_ERROR_ROW_ACTION_NULL);
		}
	}

	/**
	 * 散货在生成主单的时候, 
	 * 要发送配船通知rowAction=N,consBizType=B,consMasterFlag=1
	 * @param entity
	 */
	private void sendShipNotice(FConsign entity) {
		List<Object> contractNoList = contractDao.queryByVoyaIdAndCustId(entity.getVoyaId(), entity
				.getCustId());
		String contractNo = "";
		for (Object obj : contractNoList) {
			if (obj instanceof String) {
				String no = (String) obj;
				contractNo += no + ConstUtil.COMMA;
			}
		}
		FConsign cloneObj = new FConsign();
		BeanUtils.copyProperties(entity, cloneObj);
		cloneObj.setConsContractNo(contractNo);
		messageService.triggerMessage(cloneObj);
	}

	/**
	 * 委托上的eta, sail_date, cons_date修改的时候,
	 * 要同步任务上的预计发生时间
	 * @param entity
	 */
	private void syncTask(FConsign entity){
		FConsign dbEntity = dao.findById(entity.getConsId());
		if (isDateChanged(entity, dbEntity)) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("consId", "" + entity.getConsId());
			map.put(HttpHeader.ORDERBY, "tatyOrder");
			List<FTask> taskList = taskDao.findByProperties(map);
			map.clear();
			List<PTaskType> taskTypeList = taskTypeDao.findByProperties(map);
			Map<Integer, PTaskType> tatyMap = new HashMap<Integer, PTaskType>();
			Map<Integer, Date> dateMap = new HashMap<Integer, Date>();
			for (PTaskType taskType : taskTypeList) {
				tatyMap.put(taskType.getTatyId(), taskType);
			}
			for (FTask task : taskList) {
				PTaskType taskType = tatyMap.get(task.getTatyId());
				Date ed = getEstimatedDate(entity, task, taskType, dateMap);
				dateMap.put(task.getTatyId(), ed);
				taskDao.save(task);
			}
		}
	}

	private Date getEstimatedDate(FConsign entity, FTask task,
			PTaskType taskType, Map<Integer, Date> dateMap) {
		String type = taskType.getTatyDateType();
		Date d = null;
		if(ConstUtil.TASK_DATE_TYPE_CONS_DATE.equals(type)){
			d = entity.getConsDate();
		}else if(ConstUtil.TASK_DATE_TYPE_CONS_ETA.equals(type)){
			d = entity.getConsEta();
		}else if(ConstUtil.TASK_DATE_TYPE_CONS_SAIL_DATE.equals(type)){
			d = entity.getConsSailDate();
		}else if(ConstUtil.TASK_DATE_TYPE_BASE_TASK_D.equals(type)){
			d = dateMap.get(task.getTatyDId());
		}
		Date ed = (d == null ? null : TimeUtil.addDate(d, taskType
				.getTatyDateEstimated()));
		task.setTaskEstimatedDate(ed);
		return ed;
	}

	private boolean isDateChanged(FConsign entity, FConsign dbEntity) {
		return ObjectUtil.isNotEqual(entity.getConsDate(), dbEntity
				.getConsDate())
				|| ObjectUtil.isNotEqual(entity.getConsEta(), dbEntity
						.getConsEta())
				|| ObjectUtil.isNotEqual(entity.getConsSailDate(), dbEntity
						.getConsSailDate());
	}
	
	private void generateTask(FConsign master, FConsign slave) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("consId", "" + slave.getConsId());
		List<FTask> taskList = taskDao.findByProperties(map);
		for (FTask task : taskList) {
			task.setConsId(master.getConsId());
			task.setConsNo(master.getConsNo());
			task.setConsMasterId(master.getConsMasterId());
			task.setConsMasterNo(master.getConsMasterNo());
			taskDao.update(task);
		}
	}
	
	private void generateTask(FConsign entity) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("tatyBizClass", entity.getConsBizClass());
		map.put("tatyBizType", entity.getConsBizType());
		map.put("tatyAction", "CONS_S");
		map.put(HttpHeader.ORDERBY, "tatyOrder");
		List<PTaskType> typeList = taskTypeDao.findByProperties(map);
		Map<Integer, Date> dateMap = new HashMap<Integer, Date>();
		for (PTaskType taskType : typeList) {
			FTask task = new FTask();
			task.setTaskId(null);
			task.setTatyId(taskType.getTatyId());
			task.setTatyName(taskType.getTatyName());
			task.setTatyDId(taskType.getTatyDId());
			task.setTatyDName(taskType.getTatyDName());
			task.setTatyOrder(taskType.getTatyOrder());
			task.setConsId(entity.getConsId());
			task.setConsNo(entity.getConsNo());
			task.setConsMasterId(entity.getConsMasterId());
			task.setConsMasterNo(entity.getConsMasterNo());
			task.setTaskFinishedDate(null);
			task.setTaskFinishedFlag(ConstUtil.FalseShort);
			task.setTatyBizClass(taskType.getTatyBizClass());
			task.setTatyBizType(taskType.getTatyBizType());
			task.setActive(ConstUtil.TrueShort);
			
			Date ed = getEstimatedDate(entity, task, taskType, dateMap);
			dateMap.put(task.getTatyId(), ed);
			taskDao.save(task);
		}
	}

	/**
	 * @param entity
	 */
	private FConsign saveNormalConsign(FConsign entity) {
		String no = getConsignNo(entity);
		entity.setConsNo(no);
		//如果consMasterNo为空，系统将它设置成跟consNo一样
		if(StringUtil.isBlank(entity.getConsMasterNo())){
			entity.setConsMasterNo(no);
		}
		dao.save(entity);
		//如果consMasterId为空，系统将它设置成跟consId一样
		if(entity.getConsMasterId() == null){
			entity.setConsMasterId(entity.getConsId());
			entity = dao.update(entity);
		}
		return entity;
	}

	/**
	 * @param masterEntity
	 * @param entity
	 */
	private void sumSomeField(FConsign masterEntity, FConsign entity) {
		Integer totalPackages = new Integer(0);
		if(entity.getConsTotalPackages() != null) {
			totalPackages += entity.getConsTotalPackages();
		}
		if(masterEntity.getConsTotalPackages() != null) {
			totalPackages += masterEntity.getConsTotalPackages();
		}
		masterEntity.setConsTotalPackages(totalPackages);
		
		Double totalGrossWeight = new Double(0);
		if(entity.getConsTotalGrossWeight() != null) {
			totalGrossWeight += entity.getConsTotalGrossWeight();
		}
		if(masterEntity.getConsTotalGrossWeight() != null) {
			totalGrossWeight += masterEntity.getConsTotalGrossWeight();
		}
		masterEntity.setConsTotalGrossWeight(totalGrossWeight);
		
		Double totalNetWeight = new Double(0);
		if(entity.getConsTotalNetWeight() != null) {
			totalNetWeight += entity.getConsTotalNetWeight();
		}
		if(masterEntity.getConsTotalNetWeight() != null) {
			totalNetWeight += masterEntity.getConsTotalNetWeight();
		}
		masterEntity.setConsTotalNetWeight(totalNetWeight);
		
		Double totalMeasurement = new Double(0);
		if(entity.getConsTotalMeasurement() != null) {
			totalMeasurement += entity.getConsTotalMeasurement();
		}
		if(masterEntity.getConsTotalMeasurement() != null) {
			totalMeasurement += masterEntity.getConsTotalMeasurement();
		}
		masterEntity.setConsTotalMeasurement(totalMeasurement);
	}

	/**
	 * @param entity
	 * @return
	 */
	private String getConsignNo(FConsign entity) {
		Map<String, String> map = new HashMap<String, String>();
		map.put(SerialFactory.RULE_CONS_TYPE, entity.getClassType()
				+ entity.getConsBizClass() + entity.getExternal());
		String no = SerialFactory.getSerial("consign_no", map);
		return no;
	}

	private void updateFactQuantity(FConsign entity, boolean isDelete) {
		FContract contract = contractDao.findById(entity.getFconId());
		FLoadingList loadingList = loadingListDao.findById(entity.getLoliId());
		if(isDelete) {
			loadingList.setLoliFactQuantity(new Double(0));
			loadingList.setLoliFactCbm(new Double(0));
			loadingList.setLoliStatus(ConstUtil.FalseShort);
		} else {
			loadingList.setLoliFactQuantity(entity.getConsTotalGrossWeight());
			loadingList.setLoliFactCbm(entity.getConsTotalMeasurement());
			loadingList.setLoliStatus(ConstUtil.TrueShort);
		}
		loadingListDao.update(loadingList);
		
		//把配船货物表的factQuantity统计一下, 写到合同表的factQuantity字段, 
		//还要更新consId, consNo, consMblNo
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("fconId", ""+ entity.getFconId());
		List<FLoadingList> objlist = loadingListDao.findByProperties(queryMap);
		Double quantity = new Double(0);
		Set<String> consNoSet = new HashSet<String>();
		Set<String> blNoSet = new HashSet<String>();
		Integer consId = null;
		String consNo = "";
		String blNo = "";
		for (FLoadingList item : objlist) {
			if(item.getLoliFactQuantity() != null) {
				quantity += item.getLoliFactQuantity();
			}
			consId = item.getConsId();
			consNoSet.add(item.getConsNo());
			blNoSet.add(item.getConsMblNo());
		}
		contract.setFconFactQuantity(quantity);
		for (String str : consNoSet) {
			consNo += str + ConstUtil.COMMA;
		}
		for (String str : blNoSet) {
			blNo += str + ConstUtil.COMMA;
		}
		contract.setConsId(consId);
		contract.setConsNo(consNo);
		contract.setConsMblNo(blNo);
		contractDao.update(contract);
		
		//更新到航次上
		GVoyage voyage = voyageDao.findById(loadingList.getVoyaId());
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("voyaId", voyage.getVoyaId());
		List<FLoadingList> list = loadingListDao.findByProperties(propertyMap);
		quantity = new Double(0);
		for (FLoadingList item : list) {
			if(item.getLoliFactQuantity() != null) {
				quantity += item.getLoliFactQuantity();
			}
		}
		voyage.setVoyaFactQuantity(quantity);
		voyageDao.update(voyage);
	}

	/**
	 * 把委托id和委托号回写到货物列表
	 * @param entity
	 */
	@Transactional
	private void syncLoadingList(FConsign entity) {
		if(entity.getLoliId() != null  && entity.getLoliId() > 0) {
			FLoadingList loadingList = loadingListDao.findById(entity.getLoliId());
			if(loadingList.getConsId() == null) {
				loadingList.setConsId(entity.getConsId());
			}
			if(StringUtil.isBlank(loadingList.getConsNo())) {
				loadingList.setConsNo(entity.getConsNo());
			}
			if(StringUtil.isBlank(loadingList.getConsMblNo())) {
				loadingList.setConsMblNo(entity.getConsMblNo());
			}
			loadingListDao.update(loadingList);
		}
	}

	private void syncPackingList(FConsign entity) {
		if(entity.getLoliId() != null && entity.getLoliId() > 0) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("loliId", entity.getLoliId());
			List<FPackingList> list = packingListDao.findByProperties(queryMap);
			for (FPackingList packingList : list) {
				if(packingList.getConsId() == null) {
					packingList.setConsId(entity.getConsId());
				}
				if(StringUtil.isBlank(packingList.getConsNo())) {
					packingList.setConsNo(entity.getConsNo());
				}
				if(StringUtil.isBlank(packingList.getConsMblNo())) {
					packingList.setConsMblNo(entity.getConsMblNo());
				}
				packingListDao.update(packingList);
			}
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
			retList.addAll(containerDao.findByProperties(queryMap));
			retList.addAll(cargoDao.findByProperties(queryMap));
			retList.addAll(blDao.findByProperties(queryMap));
			retList.addAll(doDao.findByProperties(queryMap));
			retList.addAll(expenseDao.findByProperties(queryMap));
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public void updateStatusById(Map<String, Object> queryMap) {
		String ids = (String) queryMap.get("consId");
		String[] idArray = ids.split(",");
		for (String strId : idArray) {
			if (StringUtil.isNotBlank(strId)) {
				Integer id = Integer.valueOf(strId);
				for (Iterator iterator = queryMap.keySet().iterator(); iterator
						.hasNext();) {
					String item = (String) iterator.next();
					if (item.startsWith("consStatus")) {
						Short status = Short.valueOf((String) queryMap
								.get(item));
						dao.updateStatusById(id, item, status);
						break;
					}
				}
			}
		}
	}

	@Transactional
	public void updateStatusBookById(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("consId"));
		Short status = Short.valueOf((String) queryMap.get("consStatusBook"));
		dao.updateStatusBookById(id, status);
	}

	@Transactional
	public void updateConsMasterNo(Map<String, Object> queryMap) {
		String consMasterNo = (String) queryMap.get("consMasterNo");
		Integer consMasterId = Integer.valueOf((String) queryMap.get("consMasterId"));
		Short consMasterFlag = Short.valueOf((String) queryMap.get("consMasterFlag"));
		String ids = (String) queryMap.get("consId");
		String[] idArray = ids.split(",");
		for (String id : idArray) {
			if(StringUtil.isNotBlank(id)){
				FConsign entity = dao.findById(Integer.valueOf(id));
				entity.setConsMasterNo(consMasterNo);
				entity.setConsMasterId(consMasterId);
				entity.setConsMasterFlag(consMasterFlag);
				dao.update(entity);
			}
		}
	}

	@Transactional
	public void updateMblStatusById(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("consId"));
		Short mbl = Short.valueOf((String) queryMap.get("blStatus"));
		dao.updateMblStatusById(id, mbl);
	}

	@Transactional
	public void updateFblStatusById(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("consId"));
		Short fbl = Short.valueOf((String) queryMap.get("blStatus"));
		dao.updateFblStatusById(id, fbl);
	}

	@Transactional(readOnly = true)
	public List<FConsign> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		List<FConsign> consignList = dao.complexQuery(conditions, queryMap);
		PUser myself = (PUser) SessionManager.getAttr(SessionKeyType.USER);
		Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		for (FConsign consign : consignList) {
			Short editable = ConstUtil.FalseShort;
			//1.有编辑所有委托权限; 2.是此票的操作员; 3.是此票的创建者, 有编辑权限
			if (ConstUtil.TrueShort.equals(myself.getUserAllEditFlag())
					|| uid.equals(consign.getConsOperatorId())
					|| uid.equals(consign.getCreateBy())) {
				editable = ConstUtil.TrueShort;
			}
			consign.setEditable(editable);
		}
		return consignList;
	}

	@Transactional(readOnly = true)
	public List<FConsign> complexQueryByContNo(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQueryByContNo(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryCheck(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		List retList = new ArrayList();
		List objList = dao.complexQueryCheck(conditions, queryMap);
		checkMergeStatistics(retList, objList);
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
			retList.addAll(expenseDao.findByProperties(queryMap));
		}
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryTask(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		List retList = new ArrayList();
		List<FConsign> objList = dao.complexQueryTask(conditions, queryMap);
		String consIds = "";
		for (FConsign consign : objList) {
			consIds += consign.getConsId() + ConstUtil.COMMA;
		}
		List<FosQuery> taskConditions = new ArrayList<FosQuery>();
		taskConditions.add(new FosQuery("consId", ConstUtil.SQL_OP_IN, consIds));
		List<FTask> taskList = taskDao.complexQuery(taskConditions,
				new HashMap<String, Object>());
		retList.addAll(objList);
		retList.addAll(taskList);
		return retList;
	}

	public void updateSailDate(Map<String, Object> queryMap){
		Integer voyaId = Integer.valueOf((String) queryMap.get("voyaId"));
		String strVoyaSailDate = (String) queryMap.get("voyaSailDate");
		IGVoyageDAO voyageDao = SpringContextUtil.getBean("GVoyageDAO");
		//更新航次的开船日期和开船标志
		GVoyage voyage = voyageDao.findById(voyaId);
		Date voyaSailDate = null;
		if(strVoyaSailDate != null){
			try {
				voyaSailDate = new SimpleDateFormat("yyyy-MM-dd").parse(strVoyaSailDate);
			} catch (ParseException e) {
				throw new BusinessException("sail date parse failed");
			}
		}else{
			voyaSailDate = TimeUtil.getNow();
		}
		voyage.setVoyaSailDate(voyaSailDate);
		voyage.setVoyaSailedFlag(ConstUtil.TrueShort);
		voyageDao.update(voyage);
		//更新委托的开船日期和开船状态
		List<FConsign> consList = dao.findByProperties(queryMap);
		for (FConsign entity : consList) {
			entity.setConsEtd(voyaSailDate);
			entity.setConsSailDate(voyaSailDate);
			entity.setConsStatusDepa(ConstUtil.TrueShort);
			dao.update(entity);
		}
	}
	/**
	 * @param retList
	 * @param objList
	 */
	@SuppressWarnings("unchecked")
	private void checkMergeStatistics(List<FConsign> retList, List objList) {
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				FConsign consign = (FConsign) objArray[0];
				Double r = NumberUtil.null2Zero((Double) objArray[1]);
				Double p = NumberUtil.null2Zero((Double) objArray[2]);
				consign.setSumR(r);
				consign.setSumP(p);
				Double grossProfit = r - p;
				consign.setGrossProfit(NumberUtil.null2Zero(grossProfit));
				consign.setSumRUsd(NumberUtil.null2Zero((Double) objArray[3]));
				consign.setSumRCny(NumberUtil.null2Zero((Double) objArray[4]));
				consign.setSumPUsd(NumberUtil.null2Zero((Double) objArray[5]));
				consign.setSumPCny(NumberUtil.null2Zero((Double) objArray[6]));
				consign.setSumRUsdInvoice(NumberUtil.null2Zero((Double) objArray[7]));
				consign.setSumRCnyInvoice(NumberUtil.null2Zero((Double) objArray[8]));
				consign.setSumPUsdInvoice(NumberUtil.null2Zero((Double) objArray[9]));
				consign.setSumPCnyInvoice(NumberUtil.null2Zero((Double) objArray[10]));
				consign.setSumRUsdWriteOff(NumberUtil.null2Zero((Double) objArray[11]));
				consign.setSumRCnyWriteOff(NumberUtil.null2Zero((Double) objArray[12]));
				consign.setSumPUsdWriteOff(NumberUtil.null2Zero((Double) objArray[13]));
				consign.setSumPCnyWriteOff(NumberUtil.null2Zero((Double) objArray[14]));
				
				if(!r.equals(ConstUtil.DoubleZero)){
					Double grossProfitRate = grossProfit*100/r;
					consign.setGrossProfitRate(String.valueOf(grossProfitRate));
				}else{
					consign.setGrossProfitRate("0");
				}
				retList.add(consign);
			}
		}
	}

	@SuppressWarnings("unchecked")
	private void checkBlNoDuplicated(FConsign entity) {
		//散货不检查提单号的唯一性
		if(ConstUtil.CONS_BIZ_TYPE_BULK.equals(entity.getConsBizType())){
			return;
		}
		if(StringUtil.isBlank(entity.getConsMblNo())){
			return;
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("consMblNo", entity.getConsMblNo());
		List<FConsign> list = query(queryMap);
		//如果>1, 说明肯定重复了
		//如果=1, 而且主键不等, 说明有另外一个对象有同样的号
		if (list.size() > 1
				|| (list.size() == 1 
						&& !list.get(0).getConsId().equals(entity.getConsId()))) {
			throw new BusinessException(
					MessageUtil.FFSE_BL_NO_DUPLICATED);
		}
	}
	
	@Transactional
	public void autoUpdateStatusLock() {
		SessionManager.regSession(new MockHttpSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, ConstUtil.ACT_DAEMON);
		SessionManager.setAttr(SessionKeyType.UID, 0);
		SessionManager.setAttr(SessionKeyType.USERNAME, "daemon");
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put(ConstUtil.COMCF_KEY, ConstUtil.COMCF_CONS_LOCK_DAYS);
		List<PCompanyConfig> list = companyConfigDao.findByProperties(queryMap);
		for (PCompanyConfig companyConfig : list) {
			String strDays = companyConfig.getCocoValue();
			if (StringUtil.isBlank(strDays) || "0".equals(strDays)) {
				continue;
			}
			int days = Integer.parseInt(strDays);
			SessionManager.setAttr(SessionKeyType.COMPCODE, companyConfig.getCompCode());
			List<FosQuery> conditions = new ArrayList<FosQuery>();
			conditions.add(new FosQuery("consStatusLock", ConstUtil.SQL_OP_EQUAL,
					ConstUtil.FalseStr));
			conditions.add(new FosQuery("consSailDate", ConstUtil.SQL_OP_LESSEQUAL,
					TimeUtil.addDate(-1 * days)));
			List<FConsign> list2 = dao.complexQueryStatusLock(conditions, null);
			for (FConsign consign : list2) {
				consign.setConsStatusLock(ConstUtil.TrueShort);
				dao.update(consign);
			}
		}
		SessionManager.unregSession();
	}

	public List<FConsign> queryByCargoId(Map<String, Object> queryMap){
		String cargId = (String) queryMap.get("cargId");
		FCargo cargo = cargoDao.findById(Integer.parseInt(cargId));
		FConsign consign = dao.findById(cargo.getConsId());
		
		consign.setPackName(cargo.getPackName());
		consign.setUnitCode(cargo.getUnitName());
		consign.setConsCargoMarks(cargo.getCargMarks());
		consign.setConsTotalPackages(cargo.getCargPackageNum());
		consign.setConsCargoPackages("" + cargo.getCargPackageNum() + cargo.getPackName());
		consign.setConsTotalNetWeight(cargo.getCargNetWeight());
		consign.setConsCargoNetWeight("" + cargo.getCargNetWeight()	+ cargo.getUnitName());
		consign.setConsTotalGrossWeight(cargo.getCargGrossWeight());
		consign.setConsCargoGrossWeight("" + cargo.getCargGrossWeight() + cargo.getUnitName());
		consign.setConsTotalMeasurement(cargo.getCargMeasurement());
		consign.setConsCargoMeasurement("" + cargo.getCargMeasurement() + "MTS");
		
		List<FConsign> retList = new ArrayList<FConsign>();
		retList.add(consign);
		return retList;
	}
	
	@Transactional(readOnly = true)
	public List<FConsign> queryByBlId(Map<String, Object> queryMap){
		String blId = (String) queryMap.get("blId");
		FBl bl = blDao.findById(Integer.parseInt(blId));
		FConsign consign = dao.findById(bl.getConsId());
		
		consign.setConsShipper(bl.getBlShipper());
		consign.setConsConsignee(bl.getBlConsignee());
		consign.setConsNotifyParty(bl.getBlNotifyParty());
		consign.setConsNotifyParty2(bl.getBlNotifyParty2());
		consign.setVessName(bl.getBlVessel());
		consign.setVoyaName(bl.getBlVoyage());
		consign.setConsPolEn(bl.getBlPol());
		consign.setConsPodEn(bl.getBlPod());
		consign.setConsLoadDate(bl.getBlLoadDate());
		consign.setConsReceiptPlace(bl.getBlReceiptPlace());
		consign.setConsDeliveryPlace(bl.getBlDeliveryPlace());
		consign.setConsCargoPackages(bl.getBlPackages());
		consign.setConsCargoDesc(bl.getBlCargoDesc());
		consign.setConsCargoGrossWeight(bl.getBlGrossWeight());
		consign.setConsCargoNetWeight(bl.getBlNetWeight());
		consign.setConsCargoMeasurement(bl.getBlMeasurement());
		consign.setConsTotalPackagesInWord(bl.getBlTotalSay());
		consign.setConsCargoMarks(bl.getBlMarks());
		consign.setPackName(bl.getPackName());
		consign.setUnitCode(bl.getUnitName());
		consign.setConsTotalGrossWeight(bl.getCargGrossWeight());
		consign.setConsTotalNetWeight(bl.getCargNetWeight());
		consign.setConsTotalMeasurement(bl.getCargMeasurement());
		consign.setConsTotalPackages(bl.getCargPackages());
		consign.setPateName(bl.getBlPaymentTerm());
		consign.setTranCode(bl.getBlTransTerm());
		consign.setConsOriginalBlNum(bl.getBlOriginalNum());
		
		List<FConsign> retList = new ArrayList<FConsign>();
		retList.add(consign);
		return retList;
	}
	public IFConsignDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFConsignDAO dao) {
		this.dao = dao;
	}

	public IFContainerDAO getContainerDao() {
		return containerDao;
	}

	@Autowired
	public void setContainerDao(IFContainerDAO containerDao) {
		this.containerDao = containerDao;
	}

	public IFCargoDAO getCargoDao() {
		return cargoDao;
	}

	@Autowired
	public void setCargoDao(IFCargoDAO cargoDao) {
		this.cargoDao = cargoDao;
	}

	public IFBlDAO getBlDao() {
		return blDao;
	}

	@Autowired
	public void setBlDao(IFBlDAO blDao) {
		this.blDao = blDao;
	}

	public IFDoDAO getDoDao() {
		return doDao;
	}

	@Autowired
	public void setDoDao(IFDoDAO doDao) {
		this.doDao = doDao;
	}

	public IFDocDAO getDocDao() {
		return docDao;
	}

	@Autowired
	public void setDocDao(IFDocDAO docDao) {
		this.docDao = docDao;
	}

	public ISExpenseDAO getExpenseDao() {
		return expenseDao;
	}

	@Autowired
	public void setExpenseDao(ISExpenseDAO expenseDao) {
		this.expenseDao = expenseDao;
	}

	public IFContractDAO getContractDao() {
		return contractDao;
	}

	@Autowired
	public void setContractDao(IFContractDAO contractDao) {
		this.contractDao = contractDao;
	}

	public IFLoadingListDAO getLoadingListDao() {
		return loadingListDao;
	}

	@Autowired
	public void setLoadingListDao(IFLoadingListDAO loadingListDao) {
		this.loadingListDao = loadingListDao;
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

	public IPCompanyConfigDAO getCompanyConfigDao() {
		return companyConfigDao;
	}

	@Autowired
	public void setCompanyConfigDao(IPCompanyConfigDAO companyConfigDao) {
		this.companyConfigDao = companyConfigDao;
	}

	public IPTaskTypeDAO getTaskTypeDao() {
		return taskTypeDao;
	}

	@Autowired
	public void setTaskTypeDao(IPTaskTypeDAO taskTypeDao) {
		this.taskTypeDao = taskTypeDao;
	}

	public IFTaskDAO getTaskDao() {
		return taskDao;
	}

	@Autowired
	public void setTaskDao(IFTaskDAO taskDao) {
		this.taskDao = taskDao;
	}
	
}
