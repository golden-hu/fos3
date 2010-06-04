package haitai.fw.util;

import haitai.fos.sys.service.PCompanyConfigService;

public class CompanyConfigUtil {
	public static String getCompanyConfig(String code) {
		PCompanyConfigService configService = SpringContextUtil
				.getBean("PCompanyConfigService");
		return configService.queryByCode(code);
	}
}
