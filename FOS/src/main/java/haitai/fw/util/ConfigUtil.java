package haitai.fw.util;

import javax.servlet.ServletContext;

import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

import haitai.fw.platform.AppConfig;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;

@Component
public class ConfigUtil implements ServletContextAware {
	private static String contextPath;

	public static String getAttachDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ AppConfig.getConfig(ConstUtil.CONFIG_ATTACH_DIR);
	}
	
	public static String getTemplateDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ AppConfig.getConfig(ConstUtil.CONFIG_TEMPLATE_DIR);
	}

	public static String getTempDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ AppConfig.getConfig(ConstUtil.CONFIG_TEMP_DIR);
	}

	public static String getExportDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ AppConfig.getConfig(ConstUtil.CONFIG_EXPORT_DIR);
	}

	public static String getRealAttachDir() {
		return contextPath + ConstUtil.DIR_SEP + getAttachDir();
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
