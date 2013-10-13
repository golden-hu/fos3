package haitai.fw.util;

import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.ServletContext;
import java.util.Properties;

@Component
public class ConfigUtil implements ServletContextAware {
	private static String contextPath;

	public static Properties getAppConfig() {
		return SpringContextHolder.getBean("appConfig");
	}

	public static String getAttachDir() {
		return getAppConfig().getProperty(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ getAppConfig().getProperty(ConstUtil.CONFIG_ATTACH_DIR);
	}
	
	public static String getSecurityAttachDir() {
		return getAppConfig().getProperty(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ getAppConfig().getProperty(ConstUtil.CONFIG_SECURITY_ATTACH_DIR);
	}

	public static String getTemplateDir() {
		return getAppConfig().getProperty(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ getAppConfig().getProperty(ConstUtil.CONFIG_TEMPLATE_DIR);
	}

	public static String getTempDir() {
		return getAppConfig().getProperty(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ getAppConfig().getProperty(ConstUtil.CONFIG_TEMP_DIR);
	}

	public static String getExportDir() {
		return getAppConfig().getProperty(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ getAppConfig().getProperty(ConstUtil.CONFIG_EXPORT_DIR);
	}

	public static String getRealAttachDir() {
		return contextPath + ConstUtil.DIR_SEP + getAttachDir();
	}

	public static String getRealSecurityAttachDir() {
		return contextPath + ConstUtil.DIR_SEP + getSecurityAttachDir();
	}

	public static String getRealTemplateDir() {
		return contextPath + ConstUtil.DIR_SEP + getTemplateDir();
	}

	public static String getRealTempDir() {
		return contextPath + ConstUtil.DIR_SEP + getTempDir();
	}

	public static String getRealExportDir() {
		return contextPath + ConstUtil.DIR_SEP + getExportDir();
	}

	@Override
	public void setServletContext(ServletContext servletContext) {
		contextPath = servletContext.getRealPath("/");
	}
}
