package haitai.fw.util;

import haitai.fos.sys.entity.idao.IPCompanyDAO;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PCompany;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.ServletContext;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

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

	public void checkUserAvailable() {
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
		if (!status)
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_USERS);
	}

	public void checkLicense() {
		if (!checkIp())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_IP);
		if (!checkMac())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_MAC);
		if (!checkMotherBoard())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_MB);
		if (!checkHardDisk())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_HD);
		if (!checkUsers())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_USERS);
		if (!checkExpire())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_EXPIRED);
		if (!checkKey())
			throw new BusinessException(MessageUtil.FW_ERROR_LICENSE_KEY);
	}

	private boolean checkIp() {
		String licenseIp = licenseProps.getProperty("IP");
		if (licenseIp == null) {
			return false;
		} else if ("0".equals(licenseIp)) {
			return true;
		} else if (licenseIp.equals(NetworkInfo.getIpAddress())) {
			return true;
		}
		return false;
	}

	private boolean checkMac() {
		String licenseMac = licenseProps.getProperty("MAC");
		if (licenseMac == null) {
			return false;
		} else if ("0".equals(licenseMac)) {
			return true;
		} else if (licenseMac.equals(NetworkInfo.getMacAddress())) {
			return true;
		}
		return false;
	}

	private boolean checkMotherBoard() {
		String motherBoard = licenseProps.getProperty("MB");
		if (motherBoard == null) {
			return false;
		} else if ("0".equals(motherBoard)) {
			return true;
		} else if (motherBoard.equals(HardwareUtil.getMotherBoard())) {
			return true;
		}
		return false;
	}

	private boolean checkHardDisk() {
		String hardDisk = licenseProps.getProperty("HD");
		if (hardDisk == null) {
			return false;
		} else if ("0".equals(hardDisk)) {
			return true;
		} else if (hardDisk.equals(HardwareUtil.getHardDisk("C"))) {
			return true;
		}
		return false;
	}

	private boolean checkKey() {
		String licenseKey = licenseProps.getProperty("Key");
		return licenseKey != null && licenseKey.equals(getKey());
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
		String licenseMB = licenseProps.getProperty("MB");
		String licenseHD = licenseProps.getProperty("HD");
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		String expire = licenseProps.getProperty("Expire");
		String x = licenseCompany + ConstUtil.COMMA + licenseIp + ConstUtil.COMMA + licenseMac + ConstUtil.COMMA
				+ licenseMB + ConstUtil.COMMA + licenseHD + ConstUtil.COMMA
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
