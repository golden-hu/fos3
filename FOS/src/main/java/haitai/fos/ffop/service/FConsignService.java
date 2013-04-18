package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.*;
import haitai.fos.ffop.entity.table.*;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceEntryDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceItemDAO;
import haitai.fos.ffse.entity.idao.ISVoucherItemDAO;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.ffse.entity.table.SInvoiceEntry;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fos.ffse.entity.table.SVoucherItem;
import haitai.fos.general.entity.idao.IGTrainStationDao;
import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fos.general.entity.table.GTrainStation;
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
import haitai.fw.util.*;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class FConsignService {
	@Autowired
	private IFConsignDAO dao;
	@Autowired
	private IFContainerDAO containerDao;
	@Autowired
	private IFCargoDAO cargoDao;
	@Autowired
	private IFBlDAO blDao;
	@Autowired
	private IFDoDAO doDao;
	@Autowired
	private IFDocDAO docDao;
	@Autowired
	private ISExpenseDAO expenseDao;
	@Autowired
	private IFContractDAO contractDao;
	@Autowired
	private IFLoadingListDAO loadingListDao;
	@Autowired
	private IGVoyageDAO voyageDao;
	@Autowired
	private IFPackingListDAO packingListDao;
	@Autowired
	private IPCompanyConfigDAO companyConfigDao;
	@Autowired
	private IPTaskTypeDAO taskTypeDao;
	@Autowired
	private IFTaskDAO taskDao;
	@Autowired
	private IGChargeDAO chargeDAO;
	@Autowired
	private PMessageService messageService;

	@Autowired
	private IFCustomsDeclarationDAO cudeDao;
	
	@Autowired
	private IFInspectionDAO inspDao;
	
	@Autowired
	private IFTransDAO tranDao;
	
	@Autowired
	private IFWarehouseDAO wareDao;
	
	@Autowired
	private IFRailwayBlDAO railDao;
	
	@Autowired
	private IFSecondShipDAO seshDao;
	
	@Autowired
	private ISInvoiceItemDAO invoiceItemDao;
	
	@Autowired
	private ISInvoiceEntryDAO invoiceEntryDao;
	
	@Autowired
	private ISVoucherItemDAO voucherItemDao;
	
	@Autowired
	private IGTrainStationDao trainStationDao;
	
	//手工修改业务号
	@Transactional
	public FConsign modifyConsNo(Map<String, Object> queryMap) {
		String consId = (String) queryMap.get("consId");
		String consNo = (String) queryMap.get("consNo");
		Integer iConsId = Integer.valueOf(consId);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("consNo", consNo);
		List<FConsign> consList = dao.findByProperties(map);
		if(consList.size()>0){
			throw new BusinessException("fos.cons_no.existing");
		}
		
		FConsign c = dao.findById(iConsId);
		c.setConsNo(consNo);
		c.setRowAction(RowAction.M);
		dao.save(c);
		
		map.clear();
		map.put("consId", consId);
		List<FContainer> contList = containerDao.findByProperties(map);
		for(FContainer cont : contList){
			cont.setConsNo(consNo);
			cont.setRowAction(RowAction.M);
			containerDao.save(cont);
		}
		
		List<FCargo> cargList = cargoDao.findByProperties(map);
		for(FCargo carg : cargList){
			carg.setConsNo(consNo);
			carg.setRowAction(RowAction.M);
			cargoDao.save(carg);
		}
		
		List<FBl> blList = blDao.findByProperties(map);
		for(FBl bl : blList){
			bl.setConsNo(consNo);
			bl.setRowAction(RowAction.M);
			blDao.save(bl);
		}
		
		List<FDo> doList = doDao.findByProperties(map);
		for(FDo d : doList){
			d.setConsNo(consNo);
			d.setRowAction(RowAction.M);
			doDao.save(d);
		}
		
		List<FDoc> docList = docDao.findByProperties(map);
		for(FDoc doc : docList){
			doc.setConsNo(consNo);
			doc.setRowAction(RowAction.M);
			docDao.save(doc);
		}
		
		List<SExpense> expList = expenseDao.findByProperties(map);
		for(SExpense e : expList){
			e.setConsNo(consNo);
			e.setRowAction(RowAction.M);
			expenseDao.save(e);
		}
		
		List<FCustomsDeclaration> cudeList = cudeDao.findByProperties(map);
		for(FCustomsDeclaration cd : cudeList){
			cd.setConsNo(consNo);
			cd.setRowAction(RowAction.M);
			cudeDao.save(cd);
		}
		
		List<FInspection> inspList = inspDao.findByProperties(map);
		for(FInspection insp : inspList){
			insp.setConsNo(consNo);
			insp.setRowAction(RowAction.M);
			inspDao.save(insp);
		}
		
		List<FTrans> tranList = tranDao.findByProperties(map);
		for(FTrans t : tranList){
			t.setConsNo(consNo);
			t.setRowAction(RowAction.M);
			tranDao.save(t);
		}
		
		List<FWarehouse> wareList = wareDao.findByProperties(map);
		for(FWarehouse w : wareList){
			w.setConsNo(consNo);
			w.setRowAction(RowAction.M);
			wareDao.save(w);
		}
		
		List<FRailwayBl> railList = railDao.findByProperties(map);
		for(FRailwayBl r : railList){
			r.setConsNo(consNo);
			r.setRowAction(RowAction.M);
			railDao.save(r);
		}
		
		List<FSecondShip> seshList = seshDao.findByProperties(map);
		for(FSecondShip s : seshList){
			s.setConsNo(consNo);
			s.setRowAction(RowAction.M);
			seshDao.save(s);
		}
		
		List<SInvoiceItem> invoItemList = invoiceItemDao.findByProperties(map);
		for(SInvoiceItem s : invoItemList){
			s.setConsNo(consNo);
			s.setRowAction(RowAction.M);
			invoiceItemDao.save(s);
		}
		
		List<SInvoiceEntry> invoEntryList = invoiceEntryDao.findByProperties(map);
		for(SInvoiceEntry s : invoEntryList){
			s.setConsNo(consNo);
			s.setRowAction(RowAction.M);
			invoiceEntryDao.save(s);
		}
		
		List<SVoucherItem> voucItemList = voucherItemDao.findByProperties(map);
		for(SVoucherItem s : voucItemList){
			s.setConsNo(consNo);
			s.setRowAction(RowAction.M);
			voucherItemDao.save(s);
		}
		
		return c;
	}
	
		
	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Integer newId = null;
		String consNo = null;
		// handle consign first
		for (Object obj : entityList) {
			if (obj instanceof FConsign) {
				FConsign entity = (FConsign) obj;
				saveConsign(entity, retList);
				newId = entity.getConsId();
				consNo = entity.getConsNo();
				break;
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof FContainer) {
				FContainer entity = (FContainer) obj;
				saveContainer(entity, retList, newId, consNo);
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof FCargo) {
				FCargo entity = (FCargo) obj;
				saveCargo(entity, retList, newId, consNo);
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof FBl) {
				FBl entity = (FBl) obj;
				saveBl(entity, retList, newId, consNo);
			}
		}
		for (Object obj : entityList) {
			if (obj instanceof FDo) {
				FDo entity = (FDo) obj;
				saveDo(entity, retList, newId, consNo);
			}
		}
		return retList;
	}

	private void saveDo(FDo entity, List<Object> retList, Integer newId, String consNo) {
		if (entity.getRowAction() == RowAction.N) {
			entity.setDoId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			doDao.save(entity);
			retList.add(entity);
		} else if (entity.getRowAction() == RowAction.M) {
			retList.add(doDao.update(entity));
		} else if (entity.getRowAction() == RowAction.R) {
			FDo delEntity = doDao.findById(entity.getDoId());
			delEntity.setRowAction(RowAction.R);
			doDao.update(delEntity);
		} else {
			throw new BusinessException("fw.row_action_null");
		}
	}

	private void saveBl(FBl entity, List<Object> retList, Integer newId, String consNo) {
		if (entity.getRowAction() == RowAction.N) {
			entity.setBlId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			blDao.save(entity);
			retList.add(entity);
		} else if (entity.getRowAction() == RowAction.M) {
			retList.add(blDao.update(entity));
		} else if (entity.getRowAction() == RowAction.R) {
			FBl delEntity = blDao.findById(entity.getBlId());
			delEntity.setRowAction(RowAction.R);
			blDao.update(delEntity);
		} else {
			throw new BusinessException("fw.row_action_null");
		}
	}

	private void saveCargo(FCargo entity, List<Object> retList, Integer newId,
						   String consNo) {
		if (entity.getRowAction() == RowAction.N) {
			entity.setCargId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			cargoDao.save(entity);
			retList.add(entity);
		} else if (entity.getRowAction() == RowAction.M) {
			retList.add(cargoDao.update(entity));
		} else if (entity.getRowAction() == RowAction.R) {
			FCargo delEntity = cargoDao.findById(entity.getCargId());
			delEntity.setRowAction(RowAction.R);
			cargoDao.update(delEntity);
		} else {
			throw new BusinessException("fw.row_action_null");
		}
	}

	private void saveContainer(FContainer entity, List<Object> retList, Integer newId, String consNo) {
		if (entity.getRowAction() == RowAction.N) {
			entity.setContId(null);
			entity.setConsId(newId);
			entity.setConsNo(consNo);
			containerDao.save(entity);
			retList.add(entity);
		} else if (entity.getRowAction() == RowAction.M) {
			retList.add(containerDao.update(entity));
		} else if (entity.getRowAction() == RowAction.R) {
			FContainer delEntity = containerDao.findById(entity.getContId());
			delEntity.setRowAction(RowAction.R);
			containerDao.update(delEntity);
		} else {
			throw new BusinessException("fw.row_action_null");
		}
	}
	
	private void saveConsign(FConsign entity, List<Object> retList) {
		StringBuilder sb = new StringBuilder();
		Integer consContainerNum = 0;
		if (entity.getRowAction() == RowAction.N) {
			entity.setConsId(null);
			checkBlNoDuplicated(entity);
			if (ConstUtil.CONS_BIZ_TYPE_BULK.equals(entity.getConsBizType()) && entity.getVoyaId() != null) {
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
						FConsign master = mergeList.get(0);
						// 找到主单
						for (FConsign item : mergeList) {
							if (ConstUtil.TrueShort.equals(item.getConsMasterFlag())) {
								master = item;
							}
						}
						// 新的要保存的第N个分单
						entity.setConsNo(master.getConsNo() + ConstUtil.STRING_DASH
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
			} else if(ConstUtil.CONS_BIZ_TYPE_CONTAINER.equals(entity.getConsBizType()) && 
					ConstUtil.CONS_SHIP_TYPE_FCL.equals(entity.getConsShipType())&&entity.getConsMasterId()!=null){
					FCLFightSingle(entity,sb);
					sb.delete(0, sb.length());
					syncBranchConsign(entity,sb,consContainerNum);
			}else {
				entity = saveNormalConsign(entity);
				generateTask(entity);
			}
			retList.add(entity);
			entity.setEditable(ConstUtil.TrueShort);
			if (entity.getLoliId() != null && entity.getLoliId() > 0) {
				syncLoadingList(entity);
				syncPackingList(entity);
				updateFactQuantity(entity, false);
			}
		} else if (entity.getRowAction() == RowAction.M) {
			checkBlNoDuplicated(entity);
			syncTask(entity);
			syncExp(entity);
			FConsign retEntity = dao.update(entity);
			retEntity.setEditable(ConstUtil.TrueShort);
			retList.add(retEntity);
			syncBranchConsign(entity,sb,consContainerNum);
			if (retEntity.getLoliId() != null && entity.getLoliId() > 0) {
				syncLoadingList(entity);
				syncPackingList(entity);
				updateFactQuantity(retEntity, false);
			}
		} else if (entity.getRowAction() == RowAction.R) {
			FConsign delEntity = dao.findById(entity.getConsId());
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("consId", entity.getConsId().toString());
			List<SExpense> expeList = expenseDao.findByProperties(map);
			map.clear();
			map.put("consMasterId",entity.getConsMasterId());
			List<FConsign> consignList = dao.findByProperties(map);
			if(consignList.size()>1&&delEntity.getConsMasterFlag()!=0){
				throw new BusinessException("fos.cons_hawb.existing");
			}
			if(expeList.size()>0){
				throw new BusinessException("fos.cons_expense.existing");
			}else{
				sb.delete(0, sb.length());
				deleteFCargoAndFContainer(delEntity);
				delEntity.setRowAction(RowAction.R);
				dao.update(delEntity);
				syncBranchConsign(entity,sb,consContainerNum);
				if (delEntity.getLoliId() != null && delEntity.getLoliId() > 0) {
					updateFactQuantity(delEntity, true);
				}
			}
			
		} else {
			throw new BusinessException("fw.row_action_null");
		}
	}
	
	/**
	 *整箱拼单
	 * @param entity the consign
	 */
	
	private void FCLFightSingle(FConsign entity,StringBuilder sb){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("consMasterId", entity.getConsMasterId());
		List<FConsign> consignList = dao.findByProperties(map);
		FConsign consignMaster = dao.findById(entity.getConsMasterId());
		Integer size = consignList.size();
		String no = entity.getConsMasterNo();
		sb.append(no);
		sb.append("-");
		if(size>1){
			FConsign consItem =  consignList.get(size-1);
			Integer i = consItem.getConsNo().indexOf("-"); 
			Integer endInteger = Integer.parseInt(consItem.getConsNo().substring(i+1));
			sb.append(endInteger+1);
		}else{
			sb.append(size.toString());
		}
		entity.setConsNo(sb.toString());
		entity.setConsMasterNo(consignMaster.getConsMasterNo());
		entity.setConsMasterFlag((short) 0);
		dao.save(entity);
	}

	/**
	 *分单新增 、删除或修改箱信息和货物信息时主单的箱信息和货物信息也变化
	 * @param entity the consign
	 */
	private void syncBranchConsign(FConsign entity, StringBuilder sb,Integer consContainerNum){
		Double consTotalGrossWeight = 0.0;
		Double consTotalMeasurement = 0.0;
		Double consTotalNetWeight = 0.0;
		Integer consTotalPackages = 0;
		HashMap<String, Object> map = new HashMap<String, Object>();
		StringBuilder sbMarks = new StringBuilder();
		StringBuilder sbNameCn = new StringBuilder();
		StringBuilder sbNameEn = new StringBuilder();
		StringBuilder sbCargoDesc = new StringBuilder();
		FConsign masterConsigns = dao.findById(entity.getConsMasterId());
		map.put("consMasterId",entity.getConsMasterId());
		List<FConsign> branchConsigns = dao.findByProperties(map);
		for(FConsign branch :branchConsigns){
			if(branch.getConsId().intValue()!=branch.getConsMasterId().intValue()){
				sb.append(branch.getConsContainersInfo());
				consContainerNum +=branch.getConsTotalContainers();
				consTotalGrossWeight+=branch.getConsTotalGrossWeight();
				consTotalNetWeight+=branch.getConsTotalNetWeight();
				consTotalMeasurement+=branch.getConsTotalMeasurement();
				consTotalPackages+=branch.getConsTotalPackages();
				sbMarks.append(branch.getConsCargoMarks());
				sbNameCn.append(branch.getConsCargoNameCn());
				sbNameEn.append(branch.getConsCargoNameEn());
				sbCargoDesc.append(branch.getConsCargoDesc());
			}
		}
		masterConsigns.setConsTotalContainers(consContainerNum);
		masterConsigns.setConsContainersInfo(sb.toString());
		masterConsigns.setConsTotalGrossWeight(consTotalGrossWeight);
		masterConsigns.setConsTotalMeasurement(consTotalMeasurement);
		masterConsigns.setConsTotalNetWeight(consTotalNetWeight);;
		masterConsigns.setConsTotalPackages(consTotalPackages);
		masterConsigns.setConsCargoMarks(sbMarks.toString());
		masterConsigns.setConsCargoNameCn(sbNameCn.toString());
		masterConsigns.setConsCargoNameEn(sbNameEn.toString());
		masterConsigns.setConsCargoDesc(sbCargoDesc.toString());
		dao.update(masterConsigns);
		
	}
	

	/**
	 * 删除业务单票的时候将相应的箱信息和货物信息也删除
	 * @param entity the consign
	 */
	
	private void deleteFCargoAndFContainer(FConsign entity) {
		HashMap<String, Object> map= new HashMap<String, Object>();
		map.put("consId", entity.getConsId());
		List<FCargo> fCargos = cargoDao.findByProperties(map);
		for(FCargo cargo: fCargos){ 
			cargo.setRowAction(RowAction.R);
			cargoDao.update(cargo);
		}
		List<FContainer>fContainers = containerDao.findByProperties(map);
		for(FContainer container :fContainers) {
			container.setRowAction(RowAction.R);
			containerDao.update(container); 
		}
	}

	/**
	 * 散货在生成主单的时候,
	 * 要发送配船通知rowAction=N,consBizType=B,consMasterFlag=1
	 *
	 * @param entity the consign
	 */
	private void sendShipNotice(FConsign entity) {
		List<Object> contractNoList = contractDao.queryByVoyaIdAndCustId(entity.getVoyaId(), entity.getCustId());
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
	 *
	 * @param entity the consign
	 */
	private void syncTask(FConsign entity) {
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
				taskDao.update(task);
			}
		}
	}

	/**
	 * 委托上的 sail_date, vessel_name,voyage_name,mbl_no,hbl_no修改的时候,
	 * 要同步到费用上
	 *
	 * @param entity the consign
	 */
	private void syncExp(FConsign entity) {
		FConsign dbEntity = dao.findById(entity.getConsId());
		if (isExpenseAffected(entity, dbEntity)) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("consId", "" + entity.getConsId());
			List<SExpense> list = expenseDao.findByProperties(map);
			for (SExpense exp : list) {
				exp.setConsVessel(entity.getVessName());
				exp.setConsVoyage(entity.getVoyaName());
				exp.setConsMblNo(entity.getConsMblNo());
				exp.setConsHblNo(entity.getConsHblNo());
				exp.setConsSailDate(entity.getConsSailDate());
				expenseDao.update(exp);
			}
		}
	}

	private boolean isExpenseAffected(FConsign entity, FConsign dbEntity) {
		return ObjectUtil.isNotEqual(entity.getVessName(), dbEntity.getVessName())
				|| ObjectUtil.isNotEqual(entity.getVoyaName(), dbEntity.getVoyaName())
				|| ObjectUtil.isNotEqual(entity.getConsMblNo(), dbEntity.getConsMblNo())
				|| ObjectUtil.isNotEqual(entity.getConsHblNo(), dbEntity.getConsHblNo())
				|| ObjectUtil.isNotEqual(entity.getConsSailDate(), dbEntity.getConsSailDate());
	}

	private Date getEstimatedDate(FConsign entity, FTask task,
								  PTaskType taskType, Map<Integer, Date> dateMap) {
		String type = taskType.getTatyDateType();
		Date d = null;
		if (ConstUtil.TASK_DATE_TYPE_CONS_DATE.equals(type)) {
			d = entity.getConsDate();
		} else if (ConstUtil.TASK_DATE_TYPE_CONS_ETA.equals(type)) {
			d = entity.getConsEta();
		} else if (ConstUtil.TASK_DATE_TYPE_CONS_SAIL_DATE.equals(type)) {
			d = entity.getConsSailDate();
		} else if (ConstUtil.TASK_DATE_TYPE_BASE_TASK_D.equals(type)) {
			d = dateMap.get(task.getTatyDId());
		}
		Date ed = (d == null ? null : TimeUtil.addDate(d, taskType.getTatyDateEstimated()));
		task.setTaskEstimatedDate(ed);
		return ed;
	}

	private boolean isDateChanged(FConsign entity, FConsign dbEntity) {
		return ObjectUtil.isNotEqual(entity.getConsDate(), dbEntity.getConsDate())
				|| ObjectUtil.isNotEqual(entity.getConsEta(), dbEntity.getConsEta())
				|| ObjectUtil.isNotEqual(entity.getConsSailDate(), dbEntity.getConsSailDate());
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
	 * @param entity the consign
	 * @return the return consign
	 */
	private FConsign saveNormalConsign(FConsign entity) {
		String no = getConsignNo(entity);
		entity.setConsNo(no);
		//如果consMasterNo为空，系统将它设置成跟consNo一样
		if (StringUtil.isBlank(entity.getConsMasterNo())) {
			entity.setConsMasterNo(no);
		}
		dao.save(entity);
		//如果consMasterId为空，系统将它设置成跟consId一样
		if (entity.getConsMasterId() == null) {
			entity.setConsMasterId(entity.getConsId());
			entity = dao.update(entity);
		}
		return entity;
	}

	/**
	 * @param masterEntity the master consign
	 * @param entity	   the consign
	 */
	private void sumSomeField(FConsign masterEntity, FConsign entity) {
		Integer totalPackages = 0;
		if (entity.getConsTotalPackages() != null) {
			totalPackages += entity.getConsTotalPackages();
		}
		if (masterEntity.getConsTotalPackages() != null) {
			totalPackages += masterEntity.getConsTotalPackages();
		}
		masterEntity.setConsTotalPackages(totalPackages);

		Double totalGrossWeight = (double) 0;
		if (entity.getConsTotalGrossWeight() != null) {
			totalGrossWeight += entity.getConsTotalGrossWeight();
		}
		if (masterEntity.getConsTotalGrossWeight() != null) {
			totalGrossWeight += masterEntity.getConsTotalGrossWeight();
		}
		masterEntity.setConsTotalGrossWeight(totalGrossWeight);

		Double totalNetWeight = (double) 0;
		if (entity.getConsTotalNetWeight() != null) {
			totalNetWeight += entity.getConsTotalNetWeight();
		}
		if (masterEntity.getConsTotalNetWeight() != null) {
			totalNetWeight += masterEntity.getConsTotalNetWeight();
		}
		masterEntity.setConsTotalNetWeight(totalNetWeight);

		Double totalMeasurement = (double) 0;
		if (entity.getConsTotalMeasurement() != null) {
			totalMeasurement += entity.getConsTotalMeasurement();
		}
		if (masterEntity.getConsTotalMeasurement() != null) {
			totalMeasurement += masterEntity.getConsTotalMeasurement();
		}
		masterEntity.setConsTotalMeasurement(totalMeasurement);
	}

	/**
	 * @param entity the consign
	 * @return the consign no
	 */
	private String getConsignNo(FConsign entity) {
		String dateType = ""; 		
		
		Map<String, Object> cmap = new HashMap<String, Object>();
		cmap.put("cocoCode","CONS_NO_SERIAL_DATE_TYPE");
		//通过公司配置表读取流水号生产类型
		List<PCompanyConfig> confList = companyConfigDao.findByProperties(cmap);
		for(PCompanyConfig c : confList){
			if(c.getCocoCode().equals("CONS_NO_SERIAL_DATE_TYPE")){
				dateType = c.getCocoValue();
				break;
			}
		}		
		
		Map<String, String> map = new HashMap<String, String>();
		String bt = entity.getClassType() + entity.getConsBizClass() + entity.getExternal();		
		map.put(SerialFactory.RULE_CONS_TYPE,getBizTypeCode(bt));
		map.put(SerialFactory.RULE_CUST_CODE, entity.getCustSname());
		
		//默认流水号生产日期是系统日期
		Date consDate = TimeUtil.getNow();
		if(dateType.equals("2"))
			consDate = entity.getConsSailDate();
		else if(dateType.equals("3"))
			consDate = entity.getConsDate();
		boolean bExist = true;
		String consNo = SerialFactory.getConsignSerial("consign_no", map,consDate);
		while(bExist)
		{
			Map<String,Object> qmap = new HashMap<String,Object>();
			qmap.put("consNo", consNo);
			List<FConsign> consList = dao.findByProperties(qmap);
			if(consList.size()==0)
				bExist = false;
			else
				consNo = SerialFactory.getConsignSerial("consign_no", map,consDate);
		}
		return consNo;
	}

	/**
	 * @param entity the consign
	 * @return the consign no
	 */
	private String getBizTypeCode(String bt) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("cocoCode", "BIZ_TYPE_CODE_"+bt);
		List<PCompanyConfig> list = companyConfigDao.findByProperties(queryMap);
		if (list.size() == 1) {
			return list.get(0).getCocoValue();
		}
		return bt;
	}

	
	private void updateFactQuantity(FConsign entity, boolean isDelete) {
		FContract contract = contractDao.findById(entity.getFconId());
		FLoadingList loadingList = loadingListDao.findById(entity.getLoliId());
		if (isDelete) {
			loadingList.setLoliFactQuantity((double) 0);
			loadingList.setLoliFactCbm((double) 0);
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
		queryMap.put("fconId", "" + entity.getFconId());
		List<FLoadingList> objlist = loadingListDao.findByProperties(queryMap);
		Double quantity = (double) 0;
		Set<String> consNoSet = new HashSet<String>();
		Set<String> blNoSet = new HashSet<String>();
		Integer consId = null;
		String consNo = "";
		String blNo = "";
		for (FLoadingList item : objlist) {
			if (item.getLoliFactQuantity() != null) {
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
		quantity = (double) 0;
		for (FLoadingList item : list) {
			if (item.getLoliFactQuantity() != null) {
				quantity += item.getLoliFactQuantity();
			}
		}
		voyage.setVoyaFactQuantity(quantity);
		voyageDao.update(voyage);
	}

	/**
	 * 把委托id和委托号回写到货物列表
	 *
	 * @param entity the entity
	 */
	@Transactional
	private void syncLoadingList(FConsign entity) {
		if (entity.getLoliId() != null && entity.getLoliId() > 0) {
			FLoadingList loadingList = loadingListDao.findById(entity.getLoliId());
			if (loadingList.getConsId() == null) {
				loadingList.setConsId(entity.getConsId());
			}
			if (StringUtil.isBlank(loadingList.getConsNo())) {
				loadingList.setConsNo(entity.getConsNo());
			}
			if (StringUtil.isBlank(loadingList.getConsMblNo())) {
				loadingList.setConsMblNo(entity.getConsMblNo());
			}
			loadingListDao.update(loadingList);
		}
	}

	private void syncPackingList(FConsign entity) {
		if (entity.getLoliId() != null && entity.getLoliId() > 0) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("loliId", entity.getLoliId());
			List<FPackingList> list = packingListDao.findByProperties(queryMap);
			for (FPackingList packingList : list) {
				if (packingList.getConsId() == null) {
					packingList.setConsId(entity.getConsId());
				}
				if (StringUtil.isBlank(packingList.getConsNo())) {
					packingList.setConsNo(entity.getConsNo());
				}
				if (StringUtil.isBlank(packingList.getConsMblNo())) {
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
				for (String item : queryMap.keySet()) {
					if (item.startsWith("consStatus")) {
						Short status = Short.valueOf((String) queryMap.get(item));
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
			if (StringUtil.isNotBlank(id)) {
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
	public List<FConsign> complexQuery(List<FosQuery> conditions, Map<String, Object> queryMap) {
		List<FConsign> consignList = dao.complexQuery(conditions, queryMap);
		PUser myself = (PUser) SessionManager.getAttr(SessionKeyType.USER);
		Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		for (FConsign consign : consignList) {
			Short editable = ConstUtil.FalseShort;
			//1.有编辑所有委托权限; 2.是此票的操作员; 3.是此票的创建者, 有编辑权限
			if (ConstUtil.TrueShort.equals(myself.getUserAllEditFlag())
					||ConstUtil.TrueShort.equals(myself.getUserGrouEditFlag())
					|| uid.equals(consign.getConsOperatorId())
					|| uid.equals(consign.getCreateBy())) {
				editable = ConstUtil.TrueShort;
			}
			consign.setEditable(editable);
		}
		return consignList;
	}

	@Transactional(readOnly = true)
	public List<FConsign> complexQueryByContNo(List<FosQuery> conditions, Map<String, Object> queryMap) {
		return dao.complexQueryByContNo(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryCheck(List<FosQuery> conditions, Map<String, Object> queryMap) {
		List retList = new ArrayList();
		List objList = dao.complexQueryCheck(conditions, queryMap);
		checkMergeStatistics(retList, objList);		
		if (queryMap.containsKey(ConstUtil.PARAM_EAGER)) {
			queryMap.put("consId", (String)queryMap.get("consId"));
			queryMap.put("consBizType", (String)queryMap.get("consBizType"));
		    String expeType = (String)queryMap.get("expeType");
			if(StringUtil.isNotBlank(expeType)){
				queryMap.put("expeType", (String)queryMap.get("expeType"));
			}
			String sort = (String)queryMap.get("sort");
			if(StringUtil.isNotBlank(sort)){
				queryMap.put("sort", sort);
			}
			
			retList.addAll(expenseDao.findByProperties(queryMap));
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryForBill(Map queryMap) {
		List retList = new ArrayList();
		List<SExpense> expeList = new ArrayList();
		
		String consId = (String) queryMap.get("consId");
		FConsign c = dao.findById(Integer.parseInt(consId));
		
		String expeIds = (String) queryMap.get("expeIds");
		if(StringUtil.isNotBlank(expeIds)){
			List<FosQuery> conditions = new ArrayList<FosQuery>();
			conditions.add(new FosQuery("expeId", ConstUtil.SQL_OP_IN, expeIds));
			expeList = expenseDao.complexQuery(conditions,new HashMap<String, Object>());
		}
		else
			expeList = expenseDao.findByProperties(queryMap);
		
		String settlementObject = "";
		
		Double sumRCny = 0.0;
		Double sumRUsd = 0.0;
		Double sumPCny = 0.0;
		Double sumPUsd = 0.0;
		for(SExpense e : expeList){
			if(settlementObject.equals(""))
				settlementObject = e.getCustName();
			if(e.getExpeType().equals(ConstUtil.PR_TYPE_RECEIVE)){
				if(e.getCurrCode().equals("CNY")){
					sumRCny += e.getExpeTotalAmount();
				}
				else if(e.getCurrCode().equals("USD")){
					sumRUsd += e.getExpeTotalAmount();
				}
			}
			else{
				if(e.getCurrCode().equals("CNY")){
					sumPCny += e.getExpeTotalAmount();
				}
				else if(e.getCurrCode().equals("USD")){
					sumPUsd += e.getExpeTotalAmount();
				}
			}
		}
		c.setSumRCny(sumRCny);
		c.setSumRUsd(sumRUsd);
		c.setSumPCny(sumPCny);
		c.setSumPUsd(sumPUsd);
		c.setSettlement(settlementObject);
		retList.add(c);		
		retList.addAll(expeList);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryTask(List<FosQuery> conditions, Map<String, Object> queryMap) {
		List retList = new ArrayList();
		List<FConsign> objList = dao.complexQueryTask(conditions, queryMap);
		String consIds = "";
		for (FConsign consign : objList) {
			consIds += consign.getConsId() + ConstUtil.COMMA;
		}
		List<FosQuery> taskConditions = new ArrayList<FosQuery>();
		taskConditions.add(new FosQuery("consId", ConstUtil.SQL_OP_IN, consIds));
		List<FTask> taskList = taskDao.complexQuery(taskConditions,new HashMap<String, Object>());
		retList.addAll(objList);
		retList.addAll(taskList);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<Object> queryWithTask(Map queryMap) {
		List<Object> objList = new ArrayList<Object>();	
		
		String consId = (String)queryMap.get("consId");
		FConsign consign = dao.findById(Integer.parseInt(consId));
		
		Map<String, Object> map = new HashMap<String,Object>();
        map.put("charCode", "HDF");
        List<GCharge> feeList = chargeDAO.findByProperties(map);
		if (feeList.size()>0){
			Double sFee = 0.0;			
			Integer charId  = feeList.get(0).getCharId();		    
		    map.clear();
			map.put("charId", charId);	
			map.put("consId", consId);	
			map.put("expeType", "R");	
			List<SExpense> expeList = expenseDao.findByProperties(map);
			
			for(SExpense s: expeList){
			    sFee += s.getExpeTotalAmount();
			}
			consign.setSumExchangesFee(sFee);
			
		}
		else{
			consign.setSumExchangesFee(0d);
		}
		
		
		
		objList.add(consign);
		
		objList.addAll(taskDao.findByProperties(queryMap));
		
		return objList;
	}
	
	public void updateSailDate(Map<String, Object> queryMap) {
		Integer voyaId = Integer.valueOf((String) queryMap.get("voyaId"));
		String strVoyaSailDate = (String) queryMap.get("voyaSailDate");
		IGVoyageDAO voyageDao = SpringContextHolder.getBean("GVoyageDAO");
		//更新航次的开船日期和开船标志
		GVoyage voyage = voyageDao.findById(voyaId);
		Date voyaSailDate;
		if (strVoyaSailDate != null) {
			try {
				voyaSailDate = new SimpleDateFormat("yyyy-MM-dd").parse(strVoyaSailDate);
			} catch (ParseException e) {
				throw new BusinessException("sail date parse failed");
			}
		} else {
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
	 * @param retList the consign list
	 * @param objList the object list
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
				consign.setSumPOther(NumberUtil.null2Zero((Double) objArray[15]));
				consign.setSumROther(NumberUtil.null2Zero((Double) objArray[16]));
				
				if (!r.equals(ConstUtil.DoubleZero)) {
					Double grossProfitRate = grossProfit * 100 / r;
					consign.setGrossProfitRate(String.valueOf(grossProfitRate));
				} else {
					consign.setGrossProfitRate("0");
				}
				retList.add(consign);
			}
		}
	}

	@SuppressWarnings("unchecked")
	private void checkBlNoDuplicated(FConsign entity) {
		//散货不检查提单号的唯一性
		if (ConstUtil.CONS_BIZ_TYPE_BULK.equals(entity.getConsBizType())) {
			return;
		}
		//空运不检查提单号的唯一性
		if (ConstUtil.CONS_BIZ_TYPE_AIR.equals(entity.getConsBizType())) {
			return;
		}
		if (StringUtil.isBlank(entity.getConsMblNo())) {
			return;
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("consMblNo", entity.getConsMblNo());
		List<FConsign> list = query(queryMap);
		//如果>1, 说明肯定重复了
		//如果=1, 而且主键不等, 说明有另外一个对象有同样的号
		if (list.size() > 1 || (list.size() == 1 && !list.get(0).getConsId().equals(entity.getConsId()))) {
			throw new BusinessException("ffse.bl.no_duplicated");
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

	public List<FConsign> queryByCargoId(Map<String, Object> queryMap) {
		String cargId = (String) queryMap.get("cargId");
		FCargo cargo = cargoDao.findById(Integer.parseInt(cargId));
		FConsign consign = dao.findById(cargo.getConsId());

		consign.setPackName(cargo.getPackName());
		consign.setUnitCode(cargo.getUnitName());
		consign.setConsCargoMarks(cargo.getCargMarks());
		consign.setConsTotalPackages(cargo.getCargPackageNum());
		consign.setConsCargoPackages("" + cargo.getCargPackageNum() + cargo.getPackName());
		consign.setConsTotalNetWeight(cargo.getCargNetWeight());
		consign.setConsCargoNetWeight("" + cargo.getCargNetWeight() + cargo.getUnitName());
		consign.setConsTotalGrossWeight(cargo.getCargGrossWeight());
		consign.setConsCargoGrossWeight("" + cargo.getCargGrossWeight() + cargo.getUnitName());
		consign.setConsTotalMeasurement(cargo.getCargMeasurement());
		consign.setConsCargoMeasurement("" + cargo.getCargMeasurement() + "MTS");

		List<FConsign> retList = new ArrayList<FConsign>();
		retList.add(consign);
		return retList;
	}

	@Transactional(readOnly = true)
	public List<FConsign> queryByBlId(Map<String, Object> queryMap) {
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
	
	/*
	 * 北京永顺定制的服务，只要保存业务F_CONSIGN和费用S_EXPENSE即可
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveForBeijing(List entityList) {
		List retList = new ArrayList();
		// handle consign first
		for (Object obj : entityList) {
			if (obj instanceof FConsign) {
				FConsign entity = (FConsign) obj;
				saveSimpleConsign(entity, retList);
				break;
			}
		}
		return retList;
	}
	
	private void saveSimpleConsign(FConsign entity, List<Object> retList) {
		if (entity.getRowAction() == RowAction.N) {
			entity.setConsId(null);
			checkConsNoDuplicated(entity);
			checkBlNoDuplicated(entity);
			dao.save(entity);
			entity.setEditable(ConstUtil.TrueShort);
			retList.add(entity);
			//自动保存火车站
			if(entity.getAttr1()!=null){
				Map<String,Object> map = new HashMap<String,Object>();
				String originStation = entity.getAttr1();
				map.put("trainNameCn", originStation);
				List<GTrainStation> t = trainStationDao.findByProperties(map);
				if(t.size()==0){
					GTrainStation station = new GTrainStation();
					station.setTrainCode(originStation);
					station.setTrainNameCn(originStation);
					station.setActive((short) 1);
					trainStationDao.save(station);
				}
			}
		} else if (entity.getRowAction() == RowAction.M) {
			checkBlNoDuplicated(entity);
			FConsign retEntity = dao.update(entity);
			retEntity.setEditable(ConstUtil.TrueShort);
			retList.add(retEntity);
		} else if (entity.getRowAction() == RowAction.R) {
			FConsign delEntity = dao.findById(entity.getConsId());
			delEntity.setRowAction(RowAction.R); 
			dao.update(delEntity);
		} else {
			throw new BusinessException("fw.row_action_null");
		}
		
	}
	
	@SuppressWarnings("unchecked")
	private void checkConsNoDuplicated(FConsign entity) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("consNo", entity.getConsNo());
		List<FConsign> list = query(queryMap);
		//如果>0, 说明肯定存在了
		if (list.size() > 0) {
			throw new BusinessException("fos.cons_no.existing");
		}
	}
}