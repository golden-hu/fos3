package haitai.fw.util;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Properties;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:LicenseTestContext.xml"})
public class TestLicense {

	@Before
	public void setUp() throws Exception {
	}

	public long generateExpire(long day) {
		return System.currentTimeMillis() + day * 24 * 60 * 60 * 1000;
	}

	@Test
	public void generateTest() throws Exception {
		Properties properties = SpringContextHolder.getBean("licenseProperties");
		String company = properties.getProperty("Company");
		String ip = properties.getProperty("IP");
		String mac = properties.getProperty("MAC");
		String mb = properties.getProperty("MB");
		String hd = properties.getProperty("HD");
		String users = properties.getProperty("Users");
		String saas = properties.getProperty("SAAS");
		String expireDays = properties.getProperty("ExpireDays");
		long expireTime = generateExpire(Long.parseLong(expireDays));
		String key = company + ConstUtil.COMMA + ip + ConstUtil.COMMA + mac + ConstUtil.COMMA
				+ mb + ConstUtil.COMMA + hd + ConstUtil.COMMA
				+ users + ConstUtil.COMMA + saas + ConstUtil.COMMA
				+ expireTime + ConstUtil.COMMA
				+ Long.MAX_VALUE;
		key = CryptoUtil.MD5Encode(key);

		properties.setProperty("Expire", "" + expireTime);
		properties.setProperty("Key", key);
		properties.remove("ExpireDays");
		OutputStream out = new FileOutputStream(new File("license.new"));
		properties.store(out, null);
	}
}
