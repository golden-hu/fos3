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
	public static final Double DoubleZero = (double) 0;
	
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
	
	public static final String CONFIG_DATA_DIR = "DataDir";
	public static final String CONFIG_ATTACH_DIR = "AttachDir";
	public static final String CONFIG_TEMPLATE_DIR = "TemplateDir";
	public static final String CONFIG_TEMP_DIR = "TempDir";
	public static final String CONFIG_EXPORT_DIR = "ExportDir";
	public static final String CONFIG_CMS_DATA_DIR = "CmsDataDir";
	public static final String CONFIG_CMS_RESOURCE_DIR = "CmsResource";
	public static final String CONFIG_CMS_TEMPLATE_DIR = "CmsTemplate";
	public static final String CONFIG_LOGIN_URL = "LoginUrl";
	public static final String CONFIG_AUTO_MESSAGE_FLAG = "autoMessageFlag";
	public static final String CONFIG_CHECK_USER_REPEAT_LOGIN = "checkUserRepeatLogin";
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
	public static final String ATTACH_PARAM_ID = "attachId";
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
	public static final String COMCF_CONS_AR_OVERDUE_DAYS = "CONS_AR_OVERDUE_DAYS";

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
	
	public static final String QUARTZ_FDOC_ALERT_WRITEOFF = "QUARTZ_FDOC_ALERT_WRITEOFF";
	public static final String QUARTZ_CONS_ALERT_SALES = "QUARTZ_CONS_ALERT_SALES_OVERDUE";
	public static final String USEP_CHCL_ALL = "0";
	
	public static final String TASK_DATE_TYPE_CONS_DATE = "CONS_DATE";
	public static final String TASK_DATE_TYPE_CONS_ETA = "CONS_ETA";
	public static final String TASK_DATE_TYPE_CONS_SAIL_DATE = "CONS_SAIL_DATE";
	public static final String TASK_DATE_TYPE_BASE_TASK_D = "BASE_TASK_D";
}
