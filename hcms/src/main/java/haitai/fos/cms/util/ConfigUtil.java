package haitai.fos.cms.util;

import javax.servlet.ServletContext;

import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

import haitai.fw.platform.AppConfig;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;

@Component
public class ConfigUtil implements ServletContextAware {
	private static String contextPath;

	public static String getCmsResourceDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_CMS_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ AppConfig.getConfig(ConstUtil.CONFIG_CMS_RESOURCE_DIR);
	}

	public static String getCmsTemplateDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_CMS_DATA_DIR) + ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE) + ConstUtil.DIR_SEP
				+ AppConfig.getConfig(ConstUtil.CONFIG_CMS_TEMPLATE_DIR);
	}

	public static String getRealCmsResourceDir() {
		return contextPath + ConstUtil.DIR_SEP + getCmsResourceDir();
	}

	public static String getRealCmsTemplateDir() {
		return contextPath + ConstUtil.DIR_SEP + getCmsTemplateDir();
	}

	@Override
	public void setServletContext(ServletContext servletContext) {
		contextPath = servletContext.getRealPath("/");
	}
}
