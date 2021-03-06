package haitai.fw.util;

import haitai.fos.sys.entity.idao.IPCompanyDAO;
import haitai.fos.sys.entity.idao.IPUserDAO;
import haitai.fos.sys.entity.table.PCompany;
import haitai.fw.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

@Component
public class LicenseUtil {
	@Autowired
	@Qualifier(value = "licenseProps")
	private Properties licenseProps;

	public void checkUserAvailable() {
		boolean status = false;
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		if (licenseUsers != null) {
			int num = Integer.parseInt(licenseUsers);
			if (num == 0) {
				status = true;
			} 
			else {
				IPUserDAO dao = SpringContextHolder.getBean("PUserDAO");
				// SAAS version, get user license number from P_COMPANY
				if ("1".equals(licenseSAAS)) {
					IPCompanyDAO cdao = SpringContextHolder.getBean("PCompanyDAO");
					List<PCompany> list = cdao.findByProperties(new HashMap<String, Object>());
					if (list.size() == 1) {
						num = list.get(0).getCompLicenseNumber();
					} else {
						num = 5;
					}
				}
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("removed", ConstUtil.FalseStr);
				queryMap.put("userSystemUserFlag", ConstUtil.TrueStr);				
				
				if (dao.findByProperties(queryMap).size() <= num) {
					status = true;
				}
			}
		}
		if (!status)
			throw new BusinessException("fw.license.users");
	}

	public int getUserAvailable() {
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		if (licenseUsers != null) {
			int num = Integer.parseInt(licenseUsers);
			if (num == 0) {
				return 1000;
			} 
			else {
				IPUserDAO dao = SpringContextHolder.getBean("PUserDAO");
				if ("1".equals(licenseSAAS)) {
					IPCompanyDAO cdao = SpringContextHolder.getBean("PCompanyDAO");
					List<PCompany> list = cdao.findByProperties(new HashMap<String, Object>());
					if (list.size() == 1) {
						num = list.get(0).getCompLicenseNumber();
					} else {
						num = 5;
					}
				}
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("removed", ConstUtil.FalseStr);
				queryMap.put("userSystemUserFlag", ConstUtil.TrueStr);				
				
				return num - dao.findByProperties(queryMap).size();
			}
		}
		else
			return 0;
	}

	
	public void checkLicense() {
		if (!checkIp())
			throw new BusinessException("fw.license.ip");
		if (!checkMac())
			throw new BusinessException("fw.license.mac");
		if (!checkMotherBoard())
			throw new BusinessException("fw.license.mb");
		if (!checkHardDisk())
			throw new BusinessException("fw.license.hd");
		if (!checkUsers())
			throw new BusinessException("fw.license.users");
		if (!checkExpire())
			throw new BusinessException("fw.license.expired");
		if (!checkKey())
			throw new BusinessException("fw.license.key");
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
				IPUserDAO dao = SpringContextHolder.getBean("PUserDAO");
				// SAAS version, get user license number from P_COMPANY
				if ("1".equals(licenseSAAS)) {
					IPCompanyDAO cdao = SpringContextHolder.getBean("PCompanyDAO");
					List<PCompany> list = cdao.findByProperties(new HashMap<String, Object>());
					if (list.size() == 1) {
						num = list.get(0).getCompLicenseNumber();
					} else {
						num = 5;
					}
				}
				Map<String, Object> queryMap = new HashMap<String, Object>();
				queryMap.put("removed", ConstUtil.FalseStr);
				queryMap.put("userSystemUserFlag", ConstUtil.TrueStr);
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
}
