package haitai.fw.util;

import haitai.fos.sys.entity.idao.IPCompanyDAO;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PCompany;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.platform.AppConfig;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletContext;

import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

@Component
public class LicenseUtil implements ServletContextAware {
	private Properties licenseProps = new Properties();
	private static final FosLogger logger = new FosLogger(LicenseUtil.class);
	private ServletContext sc;

	public void load() {
		InputStream is = null;
		try {
			is = sc.getResourceAsStream("/WEB-INF/license");
			licenseProps.load(is);
		} catch (IOException e) {
			logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_LICENSE_LOAD), e);
		} finally {
			if (is != null) {
				try {
					is.close();
				} catch (Exception e) {
					logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_LICENSE_LOAD), e);
				}
			}
		}
	}

	public void checkUserAvailable(){
		boolean status = false;
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		if (licenseUsers != null) {
			int num = Integer.parseInt(licenseUsers);
			if (num == 0) {
				status = true;
			} else {
				IPUserDAO dao = SpringContextUtil.getBean("PUserDAO");
				// SAAS version, get user license number from P_COMPANY
				if ("1".equals(licenseSAAS)) {
					IPCompanyDAO cdao = SpringContextUtil.getBean("PCompanyDAO");
					List<PCompany> list = cdao.findByProperties(new HashMap<String, Object>());
					if (list.size() == 1) {
						num = list.get(0).getCompLicenseNumber();
					} else {
						num = 5;
					}
				}
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("removed", ConstUtil.FalseStr);
				if (dao.findByProperties(queryMap).size() < num) {
					status = true;
				}
			}
		}
		if(!status)
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_USERS);
	}
	public void checkLicense() {
		if (!checkIp())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_IP);
		if (!checkMac())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_MAC);
		if (!checkUsers())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_USERS);
		if (!checkExpire())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_EXPIRED);
		if (!checkKey())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_KEY);
	}

	private boolean checkIp() {
		String licenseIp = licenseProps.getProperty("IP");
		if (licenseIp != null && (licenseIp.equals("0"))) {
			return true;
		} else {
			String ip = NetworkInfo.getIpAddress();
			if (licenseIp.equals(ip))
				return true;
		}
		return false;
	}

	private boolean checkMac() {
		String licenseMac = licenseProps.getProperty("MAC");
		String mac = NetworkInfo.getMacAddress();
		if (licenseMac != null && licenseMac.equals(mac)) {
			return true;
		}
		return false;
	}

	private boolean checkKey() {
		String licenseKey = licenseProps.getProperty("Key");
		if (licenseKey != null && licenseKey.equals(getKey())) {
			return true;
		}
		return false;
	}

	private boolean checkUsers() {
		boolean status = false;
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		if (licenseUsers != null) {
			int num = Integer.parseInt(licenseUsers);
			if (num == 0) {
				return true;
			} else {
				IPUserDAO dao = SpringContextUtil.getBean("PUserDAO");
				// SAAS version, get user license number from P_COMPANY
				if ("1".equals(licenseSAAS)) {
					IPCompanyDAO cdao = SpringContextUtil.getBean("PCompanyDAO");
					List<PCompany> list = cdao.findByProperties(new HashMap<String, Object>());
					if (list.size() == 1) {
						num = list.get(0).getCompLicenseNumber();
					} else {
						num = 5;
					}
				}
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("removed", ConstUtil.FalseStr);
				if (dao.findByProperties(queryMap).size() <= num) {
					status = true;
				}
			}
		}
		return status;
	}

	private boolean checkExpire() {
		String expireStr = licenseProps.getProperty("Expire");
		if (expireStr != null) {
			long expire = Long.parseLong(expireStr);
			if (System.currentTimeMillis() < expire)
				return true;
		}
		return false;
	}

	private String getKey() {
		String licenseCompany = licenseProps.getProperty("Company");
		String licenseIp = licenseProps.getProperty("IP");
		String licenseMac = licenseProps.getProperty("MAC");
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		String expire = licenseProps.getProperty("Expire");
		String x = licenseCompany + ConstUtil.COMMA + licenseIp + ConstUtil.COMMA + licenseMac + ConstUtil.COMMA
				+ licenseUsers + ConstUtil.COMMA + licenseSAAS + ConstUtil.COMMA + expire + ConstUtil.COMMA
				+ Long.MAX_VALUE;
		return CryptoUtil.MD5Encode(x);
	}

	@Override
	public void setServletContext(ServletContext servletContext) {
		this.sc = servletContext;
		load();
	}
}
