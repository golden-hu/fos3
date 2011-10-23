package haitai.fw.util;

import org.springframework.context.MessageSource;

import java.util.HashSet;
import java.util.Set;

public class MessageUtil {
	private static MessageSource ms = SpringContextHolder.getContext();

	public static String getMessage(String code) {
		return ms.getMessage(code, null, ConstUtil.LOCALE_DEFAULT);
	}

	public static final String FW_SUCCESS = "fw.success";
	public static final String FW_ERROR_UNKNOWN = "fw.unknown";
	public static final String FW_ERROR_ENTITY_EXIST = "fw.entity_exists";
	public static final String FW_ERROR_OPTIMISTIC_LOCK = "fw.optimistic_lock";
	public static final String FW_ERROR_CONSTRAINT_VIOLATION = "fw.constraint_violation";
	public static final String FW_ERROR_CLASS_NOT_FOUND = "fw.class_not_found";
	public static final String FW_ERROR_INIT_FAIL = "fw.init_fail";
	public static final String FW_ERROR_ROW_ACTION_NULL = "fw.row_action_null";
	public static final String FW_ERROR_LOGIN_FAIL = "fw.login_fail";
	public static final String FW_ERROR_PASSWORD_EXPIRE = "fw.password_expire";
	public static final String FW_ERROR_LOGIN_REPEAT = "fw.login_repeat";
	public static final String FW_ERROR_LOGIN_USER_NOT_EXIST = "fw.login_user_not_exist";
	public static final String FW_ERROR_LOGIN_USER_DEACTIVED = "fw.login_user_deactived";
	public static final String FW_ERROR_SESSION_EXPIRED = "fw.session_expired";
	public static final String FW_ERROR_LICENSE_LOAD = "fw.license_load";
	public static final String FW_ERROR_LICENSE_IP = "fw.license_ip";
	public static final String FW_ERROR_LICENSE_MAC = "fw.license_mac";
	public static final String FW_ERROR_LICENSE_MB = "fw.license_mb";
	public static final String FW_ERROR_LICENSE_HD = "fw.license_hd";
	public static final String FW_ERROR_LICENSE_KEY = "fw.license_key";
	public static final String FW_ERROR_LICENSE_USERS = "fw.license_users";
	public static final String FW_ERROR_LICENSE_EXPIRED = "fw.license_expired";
	public static final String FFSE_INVOICE_TAX_NO_DUPLICATED = "ffse.invoice_tax_no_duplicated";
	public static final String FFSE_BL_NO_DUPLICATED = "ffse.bl_no_duplicated";
	public static final String SYS_TEMPLATE_FILE_NOT_EXIST="sys.template_file_not_exist";
	public static final String SYS_FILE_NOT_EXIST="sys.file_not_exist";
	public static final String SYS_USEP_FEE_ALL = "sys.usep.fee_all";
	public static final String FFOP_FCON_CANT_DELETE = "ffop.fcon.cant_delete";
	public static final String EXT_NO_DATA = "ext.no_data";
	public static final Set<String> msgSet = new HashSet<String>();
	static {
		msgSet.add(FW_SUCCESS);
		msgSet.add(FW_ERROR_UNKNOWN);
		msgSet.add(FW_ERROR_ENTITY_EXIST);
		msgSet.add(FW_ERROR_OPTIMISTIC_LOCK);
		msgSet.add(FW_ERROR_CONSTRAINT_VIOLATION);
		msgSet.add(FW_ERROR_CLASS_NOT_FOUND);
		msgSet.add(FW_ERROR_INIT_FAIL);
		msgSet.add(FW_ERROR_ROW_ACTION_NULL);
		msgSet.add(FW_ERROR_LOGIN_FAIL);
		msgSet.add(FW_ERROR_PASSWORD_EXPIRE);
		msgSet.add(FW_ERROR_LOGIN_REPEAT);
		msgSet.add(FW_ERROR_LOGIN_USER_NOT_EXIST);
		msgSet.add(FW_ERROR_LOGIN_USER_DEACTIVED);
		msgSet.add(FW_ERROR_SESSION_EXPIRED);
		msgSet.add(FW_ERROR_LICENSE_LOAD);
		msgSet.add(FW_ERROR_LICENSE_IP);
		msgSet.add(FW_ERROR_LICENSE_MAC);
		msgSet.add(FW_ERROR_LICENSE_MB);
		msgSet.add(FW_ERROR_LICENSE_HD);
		msgSet.add(FW_ERROR_LICENSE_KEY);
		msgSet.add(FW_ERROR_LICENSE_USERS);
		msgSet.add(FW_ERROR_LICENSE_EXPIRED);
		msgSet.add(FFSE_INVOICE_TAX_NO_DUPLICATED);
		msgSet.add(FFSE_BL_NO_DUPLICATED);
		msgSet.add(SYS_TEMPLATE_FILE_NOT_EXIST);
		msgSet.add(SYS_FILE_NOT_EXIST);
		msgSet.add(FFOP_FCON_CANT_DELETE);
		msgSet.add(EXT_NO_DATA);
	}
}
