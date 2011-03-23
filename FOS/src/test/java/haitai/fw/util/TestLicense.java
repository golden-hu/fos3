package haitai.fw.util;

import org.junit.Before;
import org.junit.Test;

import java.io.FileInputStream;
import java.util.Properties;

public class TestLicense {

	@Before
	public void setUp() throws Exception {
	}

	public long generateExpire() {
		long d = 365L;
		return System.currentTimeMillis() + d * 24 * 60 * 60 * 1000;
	}

	@Test
	public void generateTest() throws Exception {
		Properties licenseProps = new Properties();
		licenseProps.load(new FileInputStream("C:/hitisoft_license"));
		String licenseCompany = licenseProps.getProperty("Company");
		String licenseIp = licenseProps.getProperty("IP");
		String licenseMac = licenseProps.getProperty("MAC");
		String licenseMB = licenseProps.getProperty("MB");
		String licenseHD = licenseProps.getProperty("HD");
		String licenseUsers = licenseProps.getProperty("Users");
		String licenseSAAS = licenseProps.getProperty("SAAS");
		String key = licenseCompany + ConstUtil.COMMA + licenseIp + ConstUtil.COMMA + licenseMac + ConstUtil.COMMA
				+ licenseMB + ConstUtil.COMMA + licenseHD + ConstUtil.COMMA
				+ licenseUsers + ConstUtil.COMMA + licenseSAAS + ConstUtil.COMMA + generateExpire() + ConstUtil.COMMA
				+ Long.MAX_VALUE;
		System.out.println(key);
		key = CryptoUtil.MD5Encode(key);
		System.out.println(key);
	}
}
