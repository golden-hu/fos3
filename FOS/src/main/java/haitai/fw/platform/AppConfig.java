/**
 * 
 */
package haitai.fw.platform;

import haitai.fw.log.FosLogger;
import haitai.fw.util.MessageUtil;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.servlet.ServletContext;

/**
 * @author guo
 * 
 */
public class AppConfig {
	private static String initPropFileName = null;
	private static Properties appProperties = new Properties();
	private static ServletContext sc = null;
	private static final FosLogger logger = new FosLogger(AppConfig.class);

	public static void init(ServletContext aSc) {
		sc = aSc;
		initPropFileName = aSc.getInitParameter("appConfigLocation");
		if(initPropFileName == null){
			initPropFileName = "/WEB-INF/appConfig.properties";
		}
	}

	public synchronized static void load() {
		InputStream is = null;

		try {
			is = sc.getResourceAsStream(initPropFileName);
			appProperties.clear();
			appProperties.load(is);
		} catch (IOException e) {
			logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_INIT_FAIL),e);
		} finally {
			if (is != null) {
				try {
					is.close();
				} catch (Exception e) {
					logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_INIT_FAIL),e);
				}
			}
		}
	}

	public static String getConfig(String key) {
		String value = appProperties.getProperty(key);

		if (value == null) {
			load();
			value = appProperties.getProperty(key);
		}

		return value;
	}
}
