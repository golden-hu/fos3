/*
 * @(#)ConstUtil.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fw.util;

import java.util.Locale;

public class ConstUtil {
	public static final String FalseStr = "0";
	public static final String TrueStr = "1";
	public static final short False = 0;
	public static final short True = 1;
	public static final Short FalseShort = new Short(FalseStr);
	public static final Short TrueShort = new Short(TrueStr);
	public static final Integer FalseInt = new Integer(FalseStr);
	public static final Integer TrueInt = new Integer(TrueStr);
	public static final Double DoubleZero = new Double(0);
	
	public static final String CONS_BIZ_CLASS_EXP = "E";
	public static final String CONS_BIZ_CLASS_IMP = "I";
	public static final String CONS_BIZ_TYPE_CONTAINER = "C";
	public static final String CONS_BIZ_TYPE_BULK = "B";
	public static final String CONS_BIZ_TYPE_AIR = "A";
	public static final String CONS_BIZ_TYPE_BAOGUAN = "G";
	public static final String CONS_BIZ_TYPE_BAOJIAN = "I";
	public static final String CONS_BIZ_TYPE_GUAKAO = "K";
	public static final String CONS_SHIP_TYPE_FCL = "FCL";
	public static final String CONS_SHIP_TYPE_LCL = "LCL";
	public static final String CONS_NO_LCL = "P";
	public static final String CONS_NO_WAIGUA = "W";

	public static final String COMMA = ",";
	public static final String DIR_SEP = "/";
	public static final String Version = "version";
	public static final String Removed = "removed";
	public static final String CompCode = "compCode";
	public static final String RowCount = "rowCount";
	public static final String Active = "active";
	public static final String XML = "xml";
	public static final String JSON = "json";
	public static final String REDIRECT_URL = "reurl";
	
	public static final String ROW_N = "N";
	public static final String ROW_M = "M";
	public static final String ROW_R = "R";
	public static final String ROW_O = "";
	
	public static final String CONFIG_GLOBAL_DATA_DIR="GlobalDataDir"; 
	public static final String CONFIG_DATA_DIR = "DataDir";
	public static final String CONFIG_TEMPLATE_DIR = "TemplateDir";
	public static final String CONFIG_TEMP_DIR = "TempDir";
	public static final String CONFIG_EXPORT_DIR = "ExportDir";
	public static final String CONFIG_CMS_DATA_DIR = "CmsData";
	public static final String CONFIG_CMS_RESOURCE_DIR = "CmsResource";
	public static final String CONFIG_LOGIN_URL = "LoginUrl";
	public static final String CONFIG_DEFAULT_EMAIL_SENDER = "mailSenderDefault";
	public static final String CONFIG_FAX_SENDER = "faxSender";
	
	public static final String XML_HEADER="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
	public static final String XML_ENCODING_UTF8 = "UTF-8";
	public static final Locale LOCALE_DEFAULT = Locale.CHINA;
	public static final String LINE_SEPARATOR = System.getProperty("line.separator");
	
	public static final String ACT_LOGIN = "LOGIN";
	public static final String ACT_LOGOUT = "LOGOUT";
	public static final String ACT_DAEMON = "DAEMON";
	public static final String ACT_REPORT_RUN = "REPT_";
	public static final String ACT_CACHE_CLEAR = "CACHE_C";
	public static final String TEMP_SUFFIX_EXCEL = "xls";
	public static final String TEMP_SUFFIX_WORD = "doc";
	public static final String TEMP_PARAM_ID = "tempId";
	public static final String TEMP_PARAM_CODE = "tetyCode";
	public static final String TEMP_PARAM_TYPE = "type";
	public static final String TEMP_PARAM_TYPE_CODE = "C";
	
	public static final String CURRENCY_BASE_DEFAULT = "CNY";
	public static final String STRING_SHARP = "#";
	public static final String STRING_DOT = ".";
	public static final String STRING_PERCENT = "%";
	public static final String STRING_UNDERLINE = "_";
	public static final String STRING_DASH = "-";
	public static final String STRING_COLON = ":";
	public static final String STRING_LEFT_BRACE = "{";
	public static final String STRING_RIGHT_BRACE = "}";
	public static final String STRING_RETURN_WIN = "\r\n";
	public static final String STRING_RETURN_UNIX = "\n";
	public static final String PARAM_EAGER = "aggressive";
	
	//公司配置
	public static final String COMCF_KEY = "cocoCode";
	public static final String COMCF_VALUE = "cocoValue";
	public static final String COMCF_FDOC_BL = "FDOC_BL";
	public static final String COMCF_FDOC_CC = "FDOC_CC";
	public static final String COMCF_CONS_LOCK_DAYS = "CONS_LOCK_DAYS";
	public static final String COMCF_FDOC_AUTOUP_RLS = "FDOC_AUTO_UPDATE_RELEASABLE";
	public static final String COMCF_PASSWORD_EXPIRY_DAYS = "PASSWORD_EXPIRY_DAYS";

	//费用的开票状态:未开票;部分开票;全部开票
	public static final Short EXPENSE_INVOICE_STATUS_NONE =  new Short("0");
	public static final Short EXPENSE_INVOICE_STATUS_PART =  new Short("1");
	public static final Short EXPENSE_INVOICE_STATUS_FULL =  new Short("2");
	
	//发票状态:0:未审核 ; 1:已审核; 2:已作废 
	public static final Short INVOICE_STATUS_NONE =  new Short("0");
	public static final Short INVOICE_STATUS_CHECKED =  new Short("1");
	public static final Short INVOICE_STATUS_CANCELLED =  new Short("2");
	
	//托收单状态:0:未提交;1:已提交;2:已托收;3:已回单登记;4:已作废
	public static final Short ENTRUST_STATUS_NONE = new Short("0");
	public static final Short ENTRUST_STATUS_SUBMIT = new Short("1");
	public static final Short ENTRUST_STATUS_SEND = new Short("2");
	public static final Short ENTRUST_STATUS_BACK = new Short("3");
	public static final Short ENTRUST_STATUS_CANCELLED = new Short("4");
	
	//付款申请状态:0:未提交;1:已提交;2:已审批;3:已付款;4:已作废
	public static final Short PR_STATUS_NONE = new Short("0");
	public static final Short PR_STATUS_SUBMIT = new Short("1");
	public static final Short PR_STATUS_CHECKED = new Short("2");
	public static final Short PR_STATUS_PAYED = new Short("3");
	public static final Short PR_STATUS_CANCELLED = new Short("4");
	
	//账单状态:0:未对帐;1:已对帐;2:已作废
	public static final Short BILL_STATUS_NONE = new Short("0");
	public static final Short BILL_STATUS_CHECKED = new Short("1");
	public static final Short BILL_STATUS_CANCELLED = new Short("2");
	
	public static final String FCONTRACT_UNIT_TON =  "TON";
	public static final String FCONTRACT_UNIT_CBM =  "CBM";
	
	public static final String PR_TYPE_PAY = "P";
	public static final String PR_TYPE_RECEIVE = "R";
	
	public static final String SQL_REAL_EQUAL = "=";
	public static final String SQL_REAL_LESS = "<";
	public static final String SQL_REAL_LESSEQUAL = "<=";
	public static final String SQL_REAL_MORE = ">";
	public static final String SQL_REAL_MOREEQUAL = ">=";
	public static final String SQL_REAL_NOT_EQUAL = "!=";
	public static final String SQL_REAL_LIKE = "like";
	public static final String SQL_REAL_IN = "in";
	
	public static final String SQL_OP_EQUAL = "1";
	public static final String SQL_OP_LESS = "2";
	public static final String SQL_OP_LESSEQUAL = "3";
	public static final String SQL_OP_MORE = "4";
	public static final String SQL_OP_MOREEQUAL = "5";
	public static final String SQL_OP_NOT_EQUAL = "6";
	public static final String SQL_OP_LIKE = "7";
	public static final String SQL_OP_IN = "8";

	public static final String CELL_TYPE_NUMBER = "isNumber";
	public static final String CELL_TYPE_STRING = "isString";
	public static final String CELL_TYPE_BOOL = "isBool";
	public static final String CELL_TYPE_BLANK = "isBlank";
	public static final String CELL_TYPE_ERROR = "isError";
	public static final String CELL_TYPE_DATE = "isDate";

	public static final String CMS_TYPE_ARTICLE = "A";
	public static final String CMS_TYPE_CATEGORY = "C";
	public static final String CMS_TYPE_DIRECTORY = "D";
	public static final String CMS_TYPE_FILE = "F";
	
	public static final String TABLE_FIELD_TYPE_ID = "id";
	public static final String TABLE_FIELD_TYPE_NO = "no";
	public static final String TABLE_FIELD_TYPE_OP = "op";
	public static final String TABLE_FIELD_TYPE_SALES = "sales";
	public static final String TABLE_FIELD_TYPE_DISPATCHER = "dispatcher";

	public static final short MESS_TYPE_EMAIL = 1;
	public static final short MESS_TYPE_IM = 2;
	public static final short MESS_TYPE_FAX = 3;
	
	public static final short INRA_TYPE_MONTH_3 = 1;
	public static final short INRA_TYPE_MONTH_6 = 2;
	public static final short INRA_TYPE_MONTH_12 = 3;
	
	public static final short HIST_TYPE_AR_INVOICE = 0;
	public static final short HIST_TYPE_AP_INVOICE = 1;
	public static final short HIST_TYPE_AR_RECEIPT = 2;
	public static final short HIST_TYPE_AP_PAYMENT = 3;
	
	public static final short MESU_TYPE_USER = 1;
	public static final short MESU_TYPE_CUST = 2;
	public static final short MESU_TYPE_ROLE = 3;
	
	public static final int ROLE_OP = 1;
	public static final int ROLE_SALES = 2;
	public static final int ROLE_DISPATCHER = 3;
	
}

/*
 * @(#)FConsignService.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFBlDAO;
import haitai.fos.ffop.entity.idao.IFCargoDAO;
import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.idao.IFContainerDAO;
import haitai.fos.ffop.entity.idao.IFContractDAO;
import haitai.fos.ffop.entity.idao.IFDoDAO;
import haitai.fos.ffop.entity.idao.IFLoadingListDAO;
import haitai.fos.ffop.entity.idao.IFPackingListDAO;
import haitai.fos.ffop.entity.table.FBl;
import haitai.fos.ffop.entity.table.FCargo;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FContainer;
import haitai.fos.ffop.entity.table.FContract;
import haitai.fos.ffop.entity.table.FDo;
import haitai.fos.ffop.entity.table.FLoadingList;
import haitai.fos.ffop.entity.table.FPackingList;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.general.entity.idao.IGVoyageDAO;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fos.sys.entity.idao.IPCompanyConfigDAO;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.SpringContextUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;

import java.lang.reflect.InvocationTargetException;
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

import org.apache.commons.beanutils.BeanUtils;
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
	private ISExpenseDAO expenseDao = null;
	private IFContractDAO contractDao = null;
	private IFLoadingListDAO loadingListDao = null;
	private IGVoyageDAO voyageDao = null;
	private IFPackingListDAO packingListDao = null;
	private IPCompanyConfigDAO companyConfigDao = null;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) throws IllegalAccessException, InvocationTargetException {
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

	private void saveConsign(FConsign entity, List<Object> retList) throws IllegalAccessException, InvocationTargetException {
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
					break;
				case 1:
					FConsign firstEntity = mergeList.get(0);
					// 把第一个分单复制一份, 作为主单
					FConsign masterEntity = new FConsign();
					BeanUtils.copyProperties(masterEntity, firstEntity);
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
					contractDao.updateConsNoByConsId(
							firstEntity.getConsId(), firstEntity.getConsNo());
					loadingListDao.updateConsNoByConsId(
							firstEntity.getConsId(), firstEntity.getConsNo());
					packingListDao.updateConsNoByConsId(
							firstEntity.getConsId(), firstEntity.getConsNo());
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
			}
			retList.add(entity);
			if(entity.getLoliId() != null) {
				syncLoadingList(entity);
				syncPackingList(entity);
				updateFactQuantity(entity, false);
			}
		} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
				.getRowAction())) {
			checkBlNoDuplicated(entity);
			FConsign retEntity = dao.update(entity);
			retList.add(retEntity);
			if(retEntity.getLoliId() != null) {
				syncLoadingList(entity);
				syncPackingList(entity);
				updateFactQuantity(retEntity, false);
			}
		} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
				.getRowAction())) {
			FConsign delEntity = dao.findById(entity.getConsId());
			delEntity.setRowAction(ConstUtil.ROW_R);
			dao.update(delEntity);
			if(delEntity.getLoliId() != null) {
				updateFactQuantity(delEntity, true);
			}
		} else {
			throw new BusinessException(
					MessageUtil.FW_ERROR_ROW_ACTION_NULL);
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
		if(entity.getLoliId() != null) {
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
		if(entity.getLoliId() != null) {
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
		return dao.complexQuery(conditions, queryMap);
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

	public void updateSailDate(Map<String, Object> queryMap){
		Integer voyaId = Integer.valueOf((String) queryMap.get("voyaId"));
		String strVoyaSailDate = (String) queryMap.get("voyaSailDate");
		IGVoyageDAO voyageDao = (IGVoyageDAO) SpringContextUtil.getInstance().getBean("GVoyageDAO");
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
	
}

/*
 * @(#)AbstractFDoc.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffop.entity.atable;

import haitai.fw.entity.BaseDomain;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractFDoc extends BaseDomain {

	private static final long serialVersionUID = 483597298627866573L;
	private Integer fdocId;
	private Integer version;
	private String fdocNo;
	private Integer consId;
	private String consNo;
	private String consBizClass;
	private String consShipType;
	private Integer dotyId;
	private String dotyClass;
	private String dotyName;
	private Integer fdocOriginalNum;
	private Integer fdocCopyNum;
	private Short fdocStatus;
	private Date fdocRecvDate;
	private Date fdocSendDate;
	private Integer fdocSendTo;
	private Integer fdocSendType;
	private String fdocSendSigner;
	private Date fdocReturnDate;
	private Date fdocBackDate;
	private Integer fdocBackType;
	private String fdocBackSigner;
	private Short fdocReturnFlag;
	private Short fdocBackFlag;
	private Short fdocReleasableFlag;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "FDOC_ID", unique = true, nullable = false)
	public Integer getFdocId() {
		return this.fdocId;
	}

	public void setFdocId(Integer fdocId) {
		this.fdocId = fdocId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FDOC_NO", length = 32)
	public String getFdocNo() {
		return this.fdocNo;
	}

	public void setFdocNo(String fdocNo) {
		this.fdocNo = fdocNo;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_BIZ_CLASS", length = 1)
	public String getConsBizClass() {
		return this.consBizClass;
	}

	public void setConsBizClass(String consBizClass) {
		this.consBizClass = consBizClass;
	}

	@Column(name = "CONS_SHIP_TYPE", length = 4)
	public String getConsShipType() {
		return this.consShipType;
	}

	public void setConsShipType(String consShipType) {
		this.consShipType = consShipType;
	}

	@Column(name = "DOTY_ID", nullable = false)
	public Integer getDotyId() {
		return this.dotyId;
	}

	public void setDotyId(Integer dotyId) {
		this.dotyId = dotyId;
	}

	@Column(name = "DOTY_CLASS", length = 4)
	public String getDotyClass() {
		return this.dotyClass;
	}

	public void setDotyClass(String dotyClass) {
		this.dotyClass = dotyClass;
	}

	@Column(name = "DOTY_NAME", length = 200)
	public String getDotyName() {
		return this.dotyName;
	}

	public void setDotyName(String dotyName) {
		this.dotyName = dotyName;
	}

	@Column(name = "FDOC_ORIGINAL_NUM")
	public Integer getFdocOriginalNum() {
		return this.fdocOriginalNum;
	}

	public void setFdocOriginalNum(Integer fdocOriginalNum) {
		this.fdocOriginalNum = fdocOriginalNum;
	}

	@Column(name = "FDOC_COPY_NUM")
	public Integer getFdocCopyNum() {
		return this.fdocCopyNum;
	}

	public void setFdocCopyNum(Integer fdocCopyNum) {
		this.fdocCopyNum = fdocCopyNum;
	}

	@Column(name = "FDOC_STATUS")
	public Short getFdocStatus() {
		return this.fdocStatus;
	}

	public void setFdocStatus(Short fdocStatus) {
		this.fdocStatus = fdocStatus;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_RECV_DATE", length = 10)
	public Date getFdocRecvDate() {
		return this.fdocRecvDate;
	}

	public void setFdocRecvDate(Date fdocRecvDate) {
		this.fdocRecvDate = fdocRecvDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_SEND_DATE", length = 10)
	public Date getFdocSendDate() {
		return this.fdocSendDate;
	}

	public void setFdocSendDate(Date fdocSendDate) {
		this.fdocSendDate = fdocSendDate;
	}

	@Column(name = "FDOC_SEND_TO")
	public Integer getFdocSendTo() {
		return this.fdocSendTo;
	}

	public void setFdocSendTo(Integer fdocSendTo) {
		this.fdocSendTo = fdocSendTo;
	}

	@Column(name = "FDOC_SEND_TYPE")
	public Integer getFdocSendType() {
		return this.fdocSendType;
	}

	public void setFdocSendType(Integer fdocSendType) {
		this.fdocSendType = fdocSendType;
	}

	@Column(name = "FDOC_SEND_SIGNER", length = 32)
	public String getFdocSendSigner() {
		return this.fdocSendSigner;
	}

	public void setFdocSendSigner(String fdocSendSigner) {
		this.fdocSendSigner = fdocSendSigner;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_RETURN_DATE", length = 10)
	public Date getFdocReturnDate() {
		return this.fdocReturnDate;
	}

	public void setFdocReturnDate(Date fdocReturnDate) {
		this.fdocReturnDate = fdocReturnDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FDOC_BACK_DATE", length = 10)
	public Date getFdocBackDate() {
		return this.fdocBackDate;
	}

	public void setFdocBackDate(Date fdocBackDate) {
		this.fdocBackDate = fdocBackDate;
	}

	@Column(name = "FDOC_BACK_TYPE")
	public Integer getFdocBackType() {
		return this.fdocBackType;
	}

	public void setFdocBackType(Integer fdocBackType) {
		this.fdocBackType = fdocBackType;
	}

	@Column(name = "FDOC_BACK_SIGNER", length = 32)
	public String getFdocBackSigner() {
		return this.fdocBackSigner;
	}

	public void setFdocBackSigner(String fdocBackSigner) {
		this.fdocBackSigner = fdocBackSigner;
	}

	@Column(name = "FDOC_RETURN_FLAG")
	public Short getFdocReturnFlag() {
		return this.fdocReturnFlag;
	}

	public void setFdocReturnFlag(Short fdocReturnFlag) {
		this.fdocReturnFlag = fdocReturnFlag;
	}

	@Column(name = "FDOC_BACK_FLAG")
	public Short getFdocBackFlag() {
		return this.fdocBackFlag;
	}

	public void setFdocBackFlag(Short fdocBackFlag) {
		this.fdocBackFlag = fdocBackFlag;
	}

	@Column(name = "FDOC_RELEASABLE_FLAG")
	public Short getFdocReleasableFlag() {
		return this.fdocReleasableFlag;
	}

	public void setFdocReleasableFlag(Short fdocReleasableFlag) {
		this.fdocReleasableFlag = fdocReleasableFlag;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return this.modifyBy;
	}

	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Column(name = "COMP_CODE", length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}

/*
 * @(#)FDocDAO.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFDocDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.entity.table.FDoc;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.ConstUtil;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class FDocDAO extends GenericDAO<FDoc, Integer> implements IFDocDAO {

	public FDocDAO() {
		super(FDoc.class);
	}

	@SuppressWarnings("unchecked")
	public List<FDoc> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FDoc.class;
		final Class t2 = FConsign.class;
		String joinSql = "t1.consId = t2.consId";
		List retList = complexQuery(conditions, propertyMap, "t1,t2", joinSql, t1, t2);

		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, "distinct t1", joinSql, t1, t2));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	public List<FDoc> complexQueryNeedRelease(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		final Class t1 = FDoc.class;
		final Class t2 = FConsign.class;
		String blId = CompanyConfigUtil
				.getCompanyConfig(ConstUtil.COMCF_FDOC_BL);
		String ccId = CompanyConfigUtil
				.getCompanyConfig(ConstUtil.COMCF_FDOC_CC);
		String joinSql = "t1.consId = t2.consId and (t1.dotyId = " + blId
				+ " or t1.dotyId = " + ccId + ")";
		List retList = complexQuery(conditions, propertyMap, "t1", joinSql, t1,
				t2);
		return retList;
	}
}

/*
 * @(#)IFDocDAO.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FDoc;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IFDocDAO {
	public void save(FDoc entity);

	public void delete(Integer id);

	public FDoc update(FDoc entity);

	public FDoc findById(Integer id);

	public List<FDoc> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<FDoc> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);

	public abstract List<FDoc> complexQueryNeedRelease(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}

/*
 * @(#)FDoc.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFDoc;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_DOC")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FDoc extends AbstractFDoc {

	private static final long serialVersionUID = -3633738490135360811L;
	private String vessName;
	private String voyaName;
	private String consMblNo;
	private String custName;
	private Date consSailDate;
	private String consCargoOwnerName;

	@Transient
	public String getVessName() {
		return vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Transient
	public String getVoyaName() {
		return voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Transient
	public String getConsMblNo() {
		return consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Transient
	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Transient
	public Date getConsSailDate() {
		return consSailDate;
	}

	public void setConsSailDate(Date consSailDate) {
		this.consSailDate = consSailDate;
	}

	@Transient
	public String getConsCargoOwnerName() {
		return consCargoOwnerName;
	}

	public void setConsCargoOwnerName(String consCargoOwnerName) {
		this.consCargoOwnerName = consCargoOwnerName;
	}
}

/*
 * @(#)GeneralController.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.general.controller;

import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.idao.IGUnitDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fos.general.entity.table.GPort;
import haitai.fos.general.entity.table.GUnit;
import haitai.fos.general.entity.table.GVessel;
import haitai.fos.general.entity.table.GVoyage;
import haitai.fos.general.service.IGeneralService;
import haitai.fw.entity.FosQuery;
import haitai.fw.platform.ActionManager;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.SpringContextUtil;
import haitai.fw.util.StringUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("GeneralController")
public class GeneralController <T>{

	@SuppressWarnings("unchecked")
	@Transactional
	public List<T> save(List<T> entityList){
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();		
		String actName = (String) SessionManager.getAttr(SessionKeyType.ACTNAME);
		String serviceBeanName = ActionManager.getAction(actName).getActService();
		IGeneralService<T> service = (IGeneralService<T>) ctx.getBean(serviceBeanName);
		return service.save(entityList);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List<T> query(Map<String, Object> queryMap){
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();		
		String actName = (String) SessionManager.getAttr(SessionKeyType.ACTNAME);
		String serviceBeanName = ActionManager.getAction(actName).getActService();
		IGeneralService<T> service = (IGeneralService<T>) ctx.getBean(serviceBeanName);
		return service.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List<T> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();		
		String actName = (String) SessionManager.getAttr(SessionKeyType.ACTNAME);
		String serviceBeanName = ActionManager.getAction(actName).getActService();
		IGeneralService<T> service = (IGeneralService<T>) ctx.getBean(serviceBeanName);
		return service.complexQuery(conditions, queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List<GVoyage> getVoyageByVessel(Map<String, Object> queryMap){
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();
		IGeneralService<GVoyage> service = (IGeneralService<GVoyage>) ctx.getBean("GVoyageService");
		return service.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly=true)
	public List<GPort> getPortByCountry(Map<String, Object> queryMap){
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();
		IGeneralService<GPort> service = (IGeneralService<GPort>) ctx.getBean("GPortService");
		return service.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GVessel> complexQueryVessel(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();
		IGeneralService<GVessel> service = (IGeneralService<GVessel>) ctx
				.getBean("GVesselService");
		return service.complexQuery(conditions, queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<GPort> complexQueryPort(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();
		IGeneralService<GPort> service = (IGeneralService<GPort>) ctx
				.getBean("GPortService");
		return service.complexQuery(conditions, queryMap);
	}
	
	/**
	 * 把ContainerType转换成Unit, 跟Unit拼起来返回
	 * @param queryMap
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<GUnit> queryUnitPlusContType(Map<String, Object> queryMap) {
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();
		IGUnitDAO dao = (IGUnitDAO) ctx.getBean("GUnitDAO");
		IGContainerTypeDAO containerTypeDao = (IGContainerTypeDAO) ctx
				.getBean("GContainerTypeDAO");
		
		List<GUnit> retList = new ArrayList<GUnit>();
		retList.addAll(dao.findByProperties(queryMap));
		List<GContainerType> contList = containerTypeDao.findByProperties(queryMap);
		Integer id = -1;
		for (GContainerType item : contList) {
			GUnit unit = new GUnit();
			unit.setUnitId(id);
			unit.setUnitCode(item.getCotyCode());
			unit.setUnitName(item.getCotyCode());
			id--;
			retList.add(unit);
		}
		return retList;
	}
	
	@Transactional(readOnly = true)
	public List<GCharge> queryChargeCommission(Map<String, Object> queryMap){
		List<GCharge> retList = new ArrayList<GCharge>();
		String commissionCNY = CompanyConfigUtil.getCompanyConfig("COMMISSION_CHAR_CNY");		
		String commissionUSD = CompanyConfigUtil.getCompanyConfig("COMMISSION_CHAR_USD");
		ApplicationContext ctx = SpringContextUtil.getInstance().getContext();
		IGChargeDAO dao = (IGChargeDAO) ctx.getBean("GChargeDAO");
		if(StringUtil.isNotBlank(commissionUSD)) {
			GCharge usd = dao.findById(Integer.parseInt(commissionUSD));
			if(usd != null) {
				retList.add(usd);
			}
		}
		if(StringUtil.isNotBlank(commissionCNY)) {
			GCharge cny = dao.findById(Integer.parseInt(commissionCNY));
			if(cny != null) {
				retList.add(cny);
			}
		}
		return retList;
	}
}

/*
 * @(#)SInvoiceService.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffse.service;

import haitai.fos.ffop.entity.idao.IFConsignDAO;
import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffse.entity.idao.ISExpenseDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceEntryDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceItemDAO;
import haitai.fos.ffse.entity.idao.ISInvoiceNoDAO;
import haitai.fos.ffse.entity.table.SExpense;
import haitai.fos.ffse.entity.table.SInvoice;
import haitai.fos.ffse.entity.table.SInvoiceEntry;
import haitai.fos.ffse.entity.table.SInvoiceItem;
import haitai.fos.ffse.entity.table.SInvoiceNo;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.NumberUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SInvoiceService {
	
	private ISInvoiceDAO dao = null;
	private ISInvoiceEntryDAO entryDao = null;
	private ISInvoiceItemDAO itemDao = null;
	private ISExpenseDAO expenseDao = null;
	private ISInvoiceNoDAO noDao = null;
	private IFConsignDAO consignDao = null;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Integer parentId = null;
		String invoNo = null;
		String invoTaxNo = null;
		Set<Integer> invoiceSet = new HashSet<Integer>();
		boolean invoNoChangeFlag = false;
		boolean isInvoDelFlag = false;
		SInvoice retInvoice = null;
		// handle parent first
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof SInvoice) {
				SInvoice entity = (SInvoice) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInvoId(null);
					Map<String, String> paramMap = new HashMap<String, String>();
					paramMap.put(SerialFactory.RULE_RP, entity.getInvoType());
					String no = SerialFactory.getSerial("invoice_no", paramMap);
					entity.setInvoNo(no);
					//应收的时候, 自动取税务发票号
					if (ConstUtil.PR_TYPE_RECEIVE.equalsIgnoreCase(entity
							.getInvoType())) {
						getTaxNoAuto(entity);
					}
					checkTaxNoDuplicated(entity);
					entity.setInvoIssuer(SessionManager
							.getStringAttr(SessionKeyType.USERNAME));
					entity.setInvoIssueDate(TimeUtil.getNow());
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					invoTaxNo = entity.getInvoTaxNo();
					checkTaxNoDuplicated(entity);
					SInvoice dbInvoice = dao.findById(entity.getInvoId());
					if(!StringUtil.isEqual(invoTaxNo, dbInvoice.getInvoTaxNo())) {
						invoNoChangeFlag = true;
					}
					retInvoice = dao.update(entity);
					retList.add(retInvoice);
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					cancelInvoice(entity.getInvoId());
					SInvoice delEntity = dao.findById(entity.getInvoId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
					isInvoDelFlag = true;
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				parentId = entity.getInvoId();
				invoNo = entity.getInvoNo();
				invoTaxNo = entity.getInvoTaxNo();
				invoiceSet.add(entity.getInvoId());
				break;
			}
		}

		// handle child
		Set<Integer> expenseSet = new HashSet<Integer>();
		Set<Integer> consignSet = new HashSet<Integer>();
		for (Iterator iter = entityList.iterator(); iter.hasNext();) {
			Object obj = (Object) iter.next();
			if (obj instanceof SInvoiceEntry) {
				SInvoiceEntry entity = (SInvoiceEntry) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInenId(null);
					entity.setInvoId(parentId);
					entryDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					retList.add(entryDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					SInvoiceEntry delEntity = entryDao.findById(entity.getInenId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					entryDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
			}else if (obj instanceof SInvoiceItem) {
				SInvoiceItem entity = (SInvoiceItem) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInvoId(parentId);
					entity.setInvoNo(invoNo);
					entity.setInvoTaxNo(invoTaxNo);				
					entity.setInitId(null);
					itemDao.save(entity);
					retList.add(entity);
					
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
						.getRowAction())) {
					entity.setInvoNo(invoNo);
					entity.setInvoTaxNo(invoTaxNo);					
					retList.add(itemDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
						.getRowAction())) {
					SInvoiceItem delEntity = itemDao.findById(entity.getInitId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					itemDao.update(delEntity);
				} else {
					throw new BusinessException(
							MessageUtil.FW_ERROR_ROW_ACTION_NULL);
				}
				expenseSet.add(entity.getExpeId());
				consignSet.add(entity.getConsId());
			}
		}
		//修改发票头, 更新invoiceItem上的税务发票号
		if(invoNoChangeFlag) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("invoId", parentId);
			List<SInvoiceItem> itemList = itemDao.findByProperties(queryMap);
			for (SInvoiceItem invoiceItem : itemList) {
				invoiceItem.setInvoTaxNo(invoTaxNo);
				itemDao.update(invoiceItem);
				expenseSet.add(invoiceItem.getExpeId());
				if(!retList.contains(invoiceItem)) {
					retList.add(invoiceItem);
				}
			}
		}
		for (Integer id : expenseSet) {
			SExpense expense = expenseDao.findById(id);
			syncExpense(expense);
			expenseDao.update(expense);
		}
		FConsign firstConsign = null;
		for (Integer id : consignSet) {
			FConsign consign = consignDao.findById(id);
			syncConsign(consign);
			consignDao.update(consign);
			if (firstConsign == null
					|| firstConsign.getConsId() > consign.getConsId()) {
				firstConsign = consign;
			}
		}
		//委托上的一些信息要刷新到发票上, 取invoiceItem上的consId最小的那个委托
		if(!isInvoDelFlag && firstConsign != null) {
			if (retInvoice == null) {
				retInvoice = dao.findById(parentId);
			}
			copyInfoFromConsign(retInvoice, firstConsign);
			dao.update(retInvoice);
		}
		return retList;
	}

	/**
	 * 检查税务发票号唯一
	 * @param entity
	 */
	private void checkTaxNoDuplicated(SInvoice entity) {
		if(StringUtil.isBlank(entity.getInvoTaxNo())){
			return;
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		List<FosQuery> condition = new ArrayList<FosQuery>();
		condition.add(new FosQuery("invoTaxNo", ConstUtil.SQL_OP_EQUAL, entity
				.getInvoTaxNo()));
		condition.add(new FosQuery("invoStatus", ConstUtil.SQL_OP_NOT_EQUAL,
				String.valueOf(ConstUtil.INVOICE_STATUS_CANCELLED)));
		List<SInvoice> list = dao.complexQuery(condition, queryMap);
		//如果>1, 说明肯定重复了
		//如果=1, 而且主键不等, 说明有另外一个对象有同样的号
		if (list.size() > 1
				|| (list.size() == 1 
						&& !list.get(0).getInvoId().equals(entity.getInvoId()))) {
			throw new BusinessException(
					MessageUtil.FFSE_INVOICE_TAX_NO_DUPLICATED);
		}
	}

	private void copyInfoFromConsign(SInvoice invoice, FConsign firstConsign) {
		invoice.setInvoVessel(firstConsign.getVessName());
		invoice.setInvoVoyage(firstConsign.getVoyaName());
		invoice.setInvoBlNo(firstConsign.getConsMblNo());
		invoice.setInvoSailDate(firstConsign.getConsSailDate());
		invoice.setInvoPol(firstConsign.getConsPolEn());
		invoice.setInvoPod(firstConsign.getConsPodEn());
		invoice.setInvoConsNo(firstConsign.getConsNo());
		invoice.setInvoCargoName(firstConsign.getConsCargoNameEn());
		invoice.setInvoCargoPackages(firstConsign.getConsCargoPackages());
		invoice.setInvoCargoGrossWeight(firstConsign.getConsCargoGrossWeight());
		invoice.setInvoCargoMeasurement(firstConsign.getConsCargoMeasurement());
		invoice.setInvoContainersInfo(firstConsign.getConsContainersInfo());
		invoice.setInvoOperator(firstConsign.getConsOperatorName());
		invoice.setInvoContractNo(firstConsign.getConsContractNo());
	}

	private void getTaxNoAuto(SInvoice entity) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("active", ConstUtil.TrueStr);
		List<SInvoiceNo> taxnoList = noDao.findByProperties(queryMap);
		if(taxnoList != null && taxnoList.size() >= 1){
			SInvoiceNo taxno = taxnoList.get(0);
			Long nextNo = taxno.getInnoNextNo();
			Long endNo = taxno.getInnoEndNo();
			if(nextNo < endNo){
				//小于, 取号, 并+1
				setTaxNo(entity, taxno);
			}else if(nextNo == endNo){
				setTaxNo(entity, taxno);
				taxno.setActive(ConstUtil.FalseShort);
			}else{
				//如果大于, 说明早应该设置为禁用状态
				taxno.setActive(ConstUtil.FalseShort);
			}
			noDao.update(taxno);
		}
	}

	private void setTaxNo(SInvoice entity, SInvoiceNo taxno) {
		Long nextNo = taxno.getInnoNextNo();
		String no = String.valueOf(nextNo);
		if (StringUtil.isNotBlank(taxno.getInnoPrefix())) {
			no = taxno.getInnoPrefix() + no;
		}
		entity.setInvoTaxNo(String.valueOf(no));
		taxno.setInnoNextNo(nextNo + 1);
	}

	/**
	 * @param entity
	 */
	@Transactional
	private void syncExpense(SExpense expense) {
		Map<String, Object> propertyMap = new HashMap<String, Object>();
		propertyMap.put("expeId", expense.getExpeId());
		propertyMap.put("initCancelFlag", ConstUtil.FalseShort);
		List<SInvoiceItem> list = itemDao.findByProperties(propertyMap);
		String invoiceNo = "";
		String invoTaxNo = "";
		Double amount = new Double(0);
		Set<String> invoiceNoSet = new HashSet<String>();
		Set<String> invoTaxNoSet = new HashSet<String>();
		for (SInvoiceItem invoiceItem : list) {
			if (invoiceItem.getInvoNo() != null
					&& !invoiceNoSet.contains(invoiceItem.getInvoNo())) {
				invoiceNo += invoiceItem.getInvoNo() + ConstUtil.COMMA;
				invoiceNoSet.add(invoiceItem.getInvoNo());
			}
			if (invoiceItem.getInvoTaxNo() != null
					&& !invoTaxNoSet.contains(invoiceItem.getInvoTaxNo())) {
				invoTaxNo += invoiceItem.getInvoTaxNo() + ConstUtil.COMMA;
				invoTaxNoSet.add(invoiceItem.getInvoTaxNo());
			}
			if (invoiceItem.getInitInvoiceAmountW() != null) {
				amount += invoiceItem.getInitInvoiceAmountOri();
			}
		}
		if(invoiceNo.endsWith(ConstUtil.COMMA)){
			invoiceNo = invoiceNo.substring(0, invoiceNo.length() - 1);
		}
		if(invoTaxNo.endsWith(ConstUtil.COMMA)){
			invoTaxNo = invoTaxNo.substring(0, invoTaxNo.length() - 1);
		}
		expense.setExpeInvoiceNo(invoiceNo);
		expense.setExpeTaxInvoiceNo(invoTaxNo);
		expense.setExpeInvoiceAmount(amount);
		//核销状态		
		Short status = caclInvoiceStatus(expense.getExpeTotalAmount(), amount);
		expense.setExpeInvoiceStatus(status);
		expense.setExpeInvoiceDate(TimeUtil.getNow());
		expense.setExpeInvoiceBy(SessionManager
				.getStringAttr(SessionKeyType.USERNAME));
	}

	/**
	 * 开票, 需要更新委托的开票状态和开票时间
	 * @param consign
	 */
	@Transactional
	private void syncConsign(FConsign consign) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("consId", consign.getConsId());
		List<SExpense> expenseList = expenseDao.findByProperties(queryMap);
		Short statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		Short statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		Date dateAr = null;
		Date dateAp = null;
		
		boolean hasCheckedAr = false;
		boolean hasNotCheckedAr = false;
		boolean hasCheckedAp = false;
		boolean hasNotCheckedAp = false;
		for (SExpense expense : expenseList) {
			if(ConstUtil.PR_TYPE_RECEIVE.equals(expense.getExpeType())){
				if (ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAr = true;
				} else if (ConstUtil.EXPENSE_INVOICE_STATUS_PART.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAr = true;
					hasNotCheckedAr = true;
					break;
				} else {
					hasNotCheckedAr = true;
				}
			}
		}
		for (SExpense expense : expenseList) {
			if(ConstUtil.PR_TYPE_PAY.equals(expense.getExpeType())){
				if (ConstUtil.EXPENSE_INVOICE_STATUS_FULL.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAp = true;
				} else if (ConstUtil.EXPENSE_INVOICE_STATUS_PART.equals(expense
						.getExpeInvoiceStatus())) {
					hasCheckedAp = true;
					hasNotCheckedAp = true;
					break;
				} else {
					hasNotCheckedAp = true;
				}
			}
		}
		//有全开票 + 有未开票 = 部分开票
		//有全开票 + 无未开票 = 全部开票
		//其他 = 未开票
		if(hasCheckedAr && hasNotCheckedAr){
			statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
			dateAr = TimeUtil.getNow();
		}else if(hasCheckedAr && !hasNotCheckedAr){
			statusAr = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
			dateAr = TimeUtil.getNow();
		}
		consign.setConsStatusInvoR(statusAr);
		consign.setConsInvoRDate(dateAr);
		
		if(hasCheckedAp && hasNotCheckedAp){
			statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
			dateAp = TimeUtil.getNow();
		}else if(hasCheckedAp && !hasNotCheckedAp){
			statusAp = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
			dateAp = TimeUtil.getNow();
		}
		consign.setConsStatusInvoP(statusAp);
		consign.setConsInvoPDate(dateAp);
	}
	
	/**
	 * 计算开票状态
	 * @param amount
	 * @param amountWriteOff
	 * @return
	 */
	private Short caclInvoiceStatus(Double amount, Double amountWriteOff) {
		Short status;
		if (amountWriteOff == null || amountWriteOff == 0) {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_NONE;
		} else if (NumberUtil.amountEqual(amountWriteOff, amount)) {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_FULL;
		} else {
			status = ConstUtil.EXPENSE_INVOICE_STATUS_PART;
		}
		return status;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		if(queryMap.containsKey(ConstUtil.PARAM_EAGER)){
			retList.addAll(entryDao.findByProperties(queryMap));
			retList.addAll(itemDao.findByProperties(queryMap));
		}
		return retList;
	}	
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SInvoiceEntry> queryEntry(Map queryMap) {
		return entryDao.findByProperties(queryMap);
	}	

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<SInvoiceItem> queryItem(Map queryMap) {
		return itemDao.findByProperties(queryMap);
	}	

	@Transactional
	public void checkInvoice(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("invoId"));
		Short status = Short.valueOf((String) queryMap.get("invoStatus"));
		dao.checkStatusById(id, status);
	}
	
	@Transactional
	public void cancelInvoice(Map<String, Object> queryMap) {
		Integer id = Integer.valueOf((String) queryMap.get("invoId"));
		cancelInvoice(id);
	}

	private void cancelInvoice(Integer invoId) {
		SInvoice invoice = dao.findById(invoId);
		//如果发票已经核销, 不能作废
		if (invoice.getInvoWriteOffStatus() != null
				&& ConstUtil.TrueShort.equals(invoice.getInvoWriteOffStatus())) {
			throw new BusinessException("Invoice had write off amount, can't cancel");
		}
		//更新发票的核销状态
		invoice.setInvoStatus(ConstUtil.INVOICE_STATUS_CANCELLED);
		dao.update(invoice);
		
		//更新费用的核销状态和核销金额
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("invoId", invoId);
		List<SInvoiceItem> itemList = itemDao.findByProperties(queryMap);
		Set<Integer> expenseSet = new HashSet<Integer>();
		for (SInvoiceItem item : itemList) {
			item.setInitCancelFlag(ConstUtil.TrueShort);
			itemDao.update(item);
			expenseSet.add(item.getExpeId());
		}
		for (Integer id : expenseSet) {
			SExpense expense = expenseDao.findById(id);
			syncExpense(expense);
			expenseDao.update(expense);
		}
	}
	
	@Transactional(readOnly = true)
	public List<SInvoice> complexQuery(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return dao.complexQuery(conditions, queryMap);
	}
	
	@Transactional(readOnly = true)
	public List<SInvoiceItem> complexQueryInvoiceItem(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return itemDao.complexQuery(conditions, queryMap);
	}
	
	@Transactional(readOnly = true)
	public List<SInvoiceItem> complexQueryInvoiceItemByPrId(
			Map<String, Object> queryMap) {
		return itemDao.complexQueryByPrId(queryMap);
	}
	
	public ISInvoiceDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ISInvoiceDAO dao) {
		this.dao = dao;
	}

	public ISInvoiceEntryDAO getEntryDao() {
		return entryDao;
	}

	@Autowired
	public void setEntryDao(ISInvoiceEntryDAO entryDao) {
		this.entryDao = entryDao;
	}

	public ISInvoiceItemDAO getItemDao() {
		return itemDao;
	}

	@Autowired
	public void setItemDao(ISInvoiceItemDAO itemDao) {
		this.itemDao = itemDao;
	}

	public ISExpenseDAO getExpenseDao() {
		return expenseDao;
	}

	@Autowired
	public void setExpenseDao(ISExpenseDAO expenseDao) {
		this.expenseDao = expenseDao;
	}

	public ISInvoiceNoDAO getNoDao() {
		return noDao;
	}

	@Autowired
	public void setNoDao(ISInvoiceNoDAO noDao) {
		this.noDao = noDao;
	}

	public IFConsignDAO getConsignDao() {
		return consignDao;
	}

	@Autowired
	public void setConsignDao(IFConsignDAO consignDao) {
		this.consignDao = consignDao;
	}
	
}

/*
 * @(#)GenericDAO.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fw.entity;

import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class GenericDAO<T extends BaseDomain, PK extends Serializable> extends
		FosJpaDao {
	protected final FosLogger logger = new FosLogger(getClass());
	private Class<T> persistentClass;

	public GenericDAO(final Class<T> persistentClass) {
		this.persistentClass = persistentClass;
	}

	@SuppressWarnings("unchecked")
	public List<T> findAll() {
		return getJpaTemplate().find("from " + this.persistentClass.getName());
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperties(final Map<String, Object> propertyMap) {
		List retList = query(propertyMap, this.persistentClass);
		String rowCount = String.valueOf(querySize(propertyMap,
				this.persistentClass));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}
	
	@SuppressWarnings("unchecked")
	public List<T> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap) {
		List retList = complexQuery(conditions, propertyMap,
				this.persistentClass);
		String rowCount = String.valueOf(complexQuerySize(conditions,
				propertyMap, this.persistentClass));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;
	}

	public T findById(PK id) {
		T entity = getJpaTemplate().find(this.persistentClass, id);
		if (entity == null) {
			String msg = "Uh oh, '" + this.persistentClass
					+ "' object with id '" + id + "' not found...";
			logger.warn(msg);
			throw new BusinessException(msg);
		}
		return entity;
	}

	public boolean exists(PK id) {
		T entity = getJpaTemplate().find(this.persistentClass, id);
		return entity != null;
	}

	public void save(T object) {
		getJpaTemplate().persist(object);
	}

	public T update(T object) {
		return getJpaTemplate().merge(object);
	}

	public void delete(PK id) {
		getJpaTemplate().remove(this.findById(id));
	}
}

/*
 * @(#)AbstractFPackingList.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fos.ffop.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractFPackingList extends BaseDomain {

	private static final long serialVersionUID = -7005955179247262036L;
	private Integer paliId;
	private Integer version;
	private Integer fconId;
	private String fconNo;
	private String fconContractNo;
	private String paliLabel;
	private Integer paliTrackType;
	private Integer paliTrackTypeP;
	private Integer paliTransTimes;
	private String paliTrackNo;
	private String paliLineNo;
	private String paliSpec;
	private Integer paliPackages;
	private Double paliGrossWeight;
	private Double paliCbm;
	private Double paliCbmC;
	private Integer paliPieces;
	private Double paliLength;
	private Double paliTotalLength;
	private Integer unitIdLen;
	private String unitNameLen;
	private Date paliLoadDate;
	private Date paliArriveDate;
	private Integer paliHarbourId;
	private String paliHarbourName;
	private Integer paliStationId;
	private String paliStationName;
	private String paliLocation;
	private Integer paliStationIdNow;
	private String paliStationNameNow;
	private String paliLocationNow;
	private Short paliTransFlag;
	private String paliRemarks;
	private Short paliStatus;
	private Integer packId;
	private String packName;
	private String cargNameCn;
	private String cargNameEn;
	private Integer vessId;
	private String vessName;
	private String vessNameCn;
	private Integer voyaId;
	private String voyaName;
	private Short voyaSailedFlag;
	private Integer loliId;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PALI_ID", unique = true, nullable = false)
	public Integer getPaliId() {
		return this.paliId;
	}

	public void setPaliId(Integer paliId) {
		this.paliId = paliId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FCON_ID", nullable = false)
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Column(name = "FCON_NO", length = 32)
	public String getFconNo() {
		return this.fconNo;
	}

	public void setFconNo(String fconNo) {
		this.fconNo = fconNo;
	}

	@Column(name = "FCON_CONTRACT_NO", length = 32)
	public String getFconContractNo() {
		return this.fconContractNo;
	}

	public void setFconContractNo(String fconContractNo) {
		this.fconContractNo = fconContractNo;
	}

	@Column(name = "PALI_LABEL", length = 32)
	public String getPaliLabel() {
		return this.paliLabel;
	}

	public void setPaliLabel(String paliLabel) {
		this.paliLabel = paliLabel;
	}

	@Column(name = "PALI_TRACK_TYPE")
	public Integer getPaliTrackType() {
		return this.paliTrackType;
	}

	public void setPaliTrackType(Integer paliTrackType) {
		this.paliTrackType = paliTrackType;
	}

	@Column(name = "PALI_TRACK_TYPE_P")
	public Integer getPaliTrackTypeP() {
		return this.paliTrackTypeP;
	}

	public void setPaliTrackTypeP(Integer paliTrackTypeP) {
		this.paliTrackTypeP = paliTrackTypeP;
	}

	@Column(name = "PALI_TRANS_TIMES")
	public Integer getPaliTransTimes() {
		return this.paliTransTimes;
	}

	public void setPaliTransTimes(Integer paliTransTimes) {
		this.paliTransTimes = paliTransTimes;
	}

	@Column(name = "PALI_TRACK_NO", length = 32)
	public String getPaliTrackNo() {
		return this.paliTrackNo;
	}

	public void setPaliTrackNo(String paliTrackNo) {
		this.paliTrackNo = paliTrackNo;
	}

	@Column(name = "PALI_LINE_NO", length = 32)
	public String getPaliLineNo() {
		return this.paliLineNo;
	}

	public void setPaliLineNo(String paliLineNo) {
		this.paliLineNo = paliLineNo;
	}

	@Column(name = "PALI_SPEC", length = 200)
	public String getPaliSpec() {
		return this.paliSpec;
	}

	public void setPaliSpec(String paliSpec) {
		this.paliSpec = paliSpec;
	}

	@Column(name = "PALI_PACKAGES")
	public Integer getPaliPackages() {
		return this.paliPackages;
	}

	public void setPaliPackages(Integer paliPackages) {
		this.paliPackages = paliPackages;
	}

	@Column(name = "PALI_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getPaliGrossWeight() {
		return this.paliGrossWeight;
	}

	public void setPaliGrossWeight(Double paliGrossWeight) {
		this.paliGrossWeight = paliGrossWeight;
	}

	@Column(name = "PALI_CBM", precision = 14, scale = 6)
	public Double getPaliCbm() {
		return this.paliCbm;
	}

	public void setPaliCbm(Double paliCbm) {
		this.paliCbm = paliCbm;
	}

	@Column(name = "PALI_CBM_C", precision = 14, scale = 6)
	public Double getPaliCbmC() {
		return this.paliCbmC;
	}

	public void setPaliCbmC(Double paliCbmC) {
		this.paliCbmC = paliCbmC;
	}

	@Column(name = "PALI_PIECES")
	public Integer getPaliPieces() {
		return this.paliPieces;
	}

	public void setPaliPieces(Integer paliPieces) {
		this.paliPieces = paliPieces;
	}

	@Column(name = "PALI_LENGTH", precision = 14, scale = 4)
	public Double getPaliLength() {
		return this.paliLength;
	}

	public void setPaliLength(Double paliLength) {
		this.paliLength = paliLength;
	}

	@Column(name = "PALI_TOTAL_LENGTH", precision = 14, scale = 4)
	public Double getPaliTotalLength() {
		return this.paliTotalLength;
	}

	public void setPaliTotalLength(Double paliTotalLength) {
		this.paliTotalLength = paliTotalLength;
	}

	@Column(name = "UNIT_ID_LEN")
	public Integer getUnitIdLen() {
		return this.unitIdLen;
	}

	public void setUnitIdLen(Integer unitIdLen) {
		this.unitIdLen = unitIdLen;
	}

	@Column(name = "UNIT_NAME_LEN", length = 32)
	public String getUnitNameLen() {
		return this.unitNameLen;
	}

	public void setUnitNameLen(String unitNameLen) {
		this.unitNameLen = unitNameLen;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PALI_LOAD_DATE", length = 10)
	public Date getPaliLoadDate() {
		return this.paliLoadDate;
	}

	public void setPaliLoadDate(Date paliLoadDate) {
		this.paliLoadDate = paliLoadDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PALI_ARRIVE_DATE", length = 10)
	public Date getPaliArriveDate() {
		return this.paliArriveDate;
	}

	public void setPaliArriveDate(Date paliArriveDate) {
		this.paliArriveDate = paliArriveDate;
	}

	@Column(name = "PALI_HARBOUR_ID")
	public Integer getPaliHarbourId() {
		return this.paliHarbourId;
	}

	public void setPaliHarbourId(Integer paliHarbourId) {
		this.paliHarbourId = paliHarbourId;
	}

	@Column(name = "PALI_HARBOUR_NAME", length = 64)
	public String getPaliHarbourName() {
		return this.paliHarbourName;
	}

	public void setPaliHarbourName(String paliHarbourName) {
		this.paliHarbourName = paliHarbourName;
	}

	@Column(name = "PALI_STATION_ID")
	public Integer getPaliStationId() {
		return this.paliStationId;
	}

	public void setPaliStationId(Integer paliStationId) {
		this.paliStationId = paliStationId;
	}

	@Column(name = "PALI_STATION_NAME", length = 64)
	public String getPaliStationName() {
		return this.paliStationName;
	}

	public void setPaliStationName(String paliStationName) {
		this.paliStationName = paliStationName;
	}

	@Column(name = "PALI_LOCATION", length = 1000)
	public String getPaliLocation() {
		return this.paliLocation;
	}

	public void setPaliLocation(String paliLocation) {
		this.paliLocation = paliLocation;
	}

	@Column(name = "PALI_STATION_ID_NOW")
	public Integer getPaliStationIdNow() {
		return this.paliStationIdNow;
	}

	public void setPaliStationIdNow(Integer paliStationIdNow) {
		this.paliStationIdNow = paliStationIdNow;
	}

	@Column(name = "PALI_STATION_NAME_NOW", length = 32)
	public String getPaliStationNameNow() {
		return this.paliStationNameNow;
	}

	public void setPaliStationNameNow(String paliStationNameNow) {
		this.paliStationNameNow = paliStationNameNow;
	}

	@Column(name = "PALI_LOCATION_NOW", length = 1000)
	public String getPaliLocationNow() {
		return this.paliLocationNow;
	}

	public void setPaliLocationNow(String paliLocationNow) {
		this.paliLocationNow = paliLocationNow;
	}

	@Column(name = "PALI_TRANS_FLAG")
	public Short getPaliTransFlag() {
		return this.paliTransFlag;
	}

	public void setPaliTransFlag(Short paliTransFlag) {
		this.paliTransFlag = paliTransFlag;
	}

	@Column(name = "PALI_REMARKS", length = 500)
	public String getPaliRemarks() {
		return this.paliRemarks;
	}

	public void setPaliRemarks(String paliRemarks) {
		this.paliRemarks = paliRemarks;
	}

	@Column(name = "PALI_STATUS")
	public Short getPaliStatus() {
		return this.paliStatus;
	}

	public void setPaliStatus(Short paliStatus) {
		this.paliStatus = paliStatus;
	}

	@Column(name = "PACK_ID")
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "PACK_NAME", length = 64)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "CARG_NAME_CN", length = 200)
	public String getCargNameCn() {
		return this.cargNameCn;
	}

	public void setCargNameCn(String cargNameCn) {
		this.cargNameCn = cargNameCn;
	}

	@Column(name = "CARG_NAME_EN", length = 200)
	public String getCargNameEn() {
		return this.cargNameEn;
	}

	public void setCargNameEn(String cargNameEn) {
		this.cargNameEn = cargNameEn;
	}

	@Column(name = "VESS_ID")
	public Integer getVessId() {
		return this.vessId;
	}

	public void setVessId(Integer vessId) {
		this.vessId = vessId;
	}

	@Column(name = "VESS_NAME", length = 64)
	public String getVessName() {
		return this.vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Column(name = "VESS_NAME_CN", length = 32)
	public String getVessNameCn() {
		return this.vessNameCn;
	}

	public void setVessNameCn(String vessNameCn) {
		this.vessNameCn = vessNameCn;
	}

	@Column(name = "VOYA_ID")
	public Integer getVoyaId() {
		return this.voyaId;
	}

	public void setVoyaId(Integer voyaId) {
		this.voyaId = voyaId;
	}

	@Column(name = "VOYA_NAME", length = 32)
	public String getVoyaName() {
		return this.voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Column(name = "VOYA_SAILED_FLAG")
	public Short getVoyaSailedFlag() {
		return this.voyaSailedFlag;
	}

	public void setVoyaSailedFlag(Short voyaSailedFlag) {
		this.voyaSailedFlag = voyaSailedFlag;
	}

	@Column(name = "LOLI_ID")
	public Integer getLoliId() {
		return this.loliId;
	}

	public void setLoliId(Integer loliId) {
		this.loliId = loliId;
	}

	@Column(name = "CONS_ID")
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_MBL_NO", length = 32)
	public String getConsMblNo() {
		return this.consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return this.modifyBy;
	}

	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Column(name = "COMP_CODE", nullable = false, length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}

/*
 * @(#)StringUtil.java	1.0 2009-06-05
 * 
 * 海钛软件(hitisoft)版权所有
 */
package haitai.fw.util;

import haitai.fw.log.FosLogger;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.util.StringUtils;

public class StringUtil {
	private static final FosLogger logger = new FosLogger(StringUtil.class);
	private static DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	private static DateFormat timeFormat = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss");

	public static Date string2Date(String str) {
		Date aDate = null;
		try {
			if (StringUtil.contains(str, ConstUtil.STRING_COLON)) {
				aDate = timeFormat.parse(str);
			} else {
				aDate = dateFormat.parse(str);
			}
		} catch (ParseException e) {
			logger.error("xtream date converte failed: " + str);
		}
		return aDate;
	}
	
	public static String date2String(Date date){
		return dateFormat.format(date);
	}
	
	public static String time2String(Date date){
		return timeFormat.format(date);
	}
	
	public static boolean isBlank(String s){
		if(s == null){
			return true;
		}
		if(s.trim().length() == 0){
			return true;
		}
		return false;
	}
	
	public static boolean isNotBlank(String s){
		return !isBlank(s);
	}
	
	public static String capitalize(String s){
		return StringUtils.capitalize(s);
	}
	
	public static String uncapitalize(String s){
		return StringUtils.uncapitalize(s);
	}
	
	public static String utf82ascii(String s){
		try {
			return new String(s.getBytes("UTF-8"), "ISO8859-1");
		} catch (UnsupportedEncodingException e) {
		}
		return null;
	}
	
	public static String ascii2utf8(String s){
		try {
			return new String(s.getBytes("ISO8859-1"), "UTF-8");
		} catch (UnsupportedEncodingException e) {
		}
		return null;
	}
	
	public static String formatTwoNumber(int n) {
		if (n < 10)
			return "0" + n;
		return "" + n;
	}

	public static Object parseValue(Type fieldType, String value) {
		Object objValue = value;
		if (!fieldType.equals(String.class)) {
			if (fieldType.equals(Integer.class)) {
				objValue = Integer.parseInt(value);
			} else if (fieldType.equals(Long.class)) {
				objValue = Long.parseLong(value);
			} else if (fieldType.equals(Short.class)) {
				objValue = Short.parseShort(value);
			} else if (fieldType.equals(Float.class)) {
				objValue = Float.parseFloat(value);
			} else if (fieldType.equals(Double.class)) {
				objValue = Double.parseDouble(value);
			} else if (fieldType.equals(Date.class)) {
				objValue = string2Date(value);
			}
		}
		return objValue;
	}
	
	public static boolean contains(String s, String needle) {
		if (isNotBlank(s) && s.indexOf(needle) > -1) {
			return true;
		}
		return false;
	}
	
	public static boolean isEqual(String s, String t) {
		return s == null ? t == null : s.equals(t);
	}
}

