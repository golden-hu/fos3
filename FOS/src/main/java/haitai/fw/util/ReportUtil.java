package haitai.fw.util;

import haitai.fos.sys.entity.table.Action;
import haitai.fw.platform.ActionManager;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public class ReportUtil {
	public static String getUrl(HttpServletRequest request,
			Map<String, String> paramMap, String actName)
			throws UnsupportedEncodingException {
		Action action = ActionManager.getAction(actName);
		
		String company_name = CompanyConfigUtil.getCompanyConfig("COMPANY_NAME");		
		company_name = URLEncoder.encode(company_name, ConstUtil.XML_ENCODING_UTF8);

		String basePath = request.getScheme() + "://"
				+ request.getServerName() + ":"
				+ request.getServerPort() + "/FosReport";
		String url = basePath + "/preview?__report=reports/";
		url += action.getActService();
		url += "&__locale=zh_CN&__navigationbar=false&__showtitle=false";
		url += "&__title=" + URLEncoder.encode("海钛报表", ConstUtil.XML_ENCODING_UTF8);
		if(paramMap.containsKey("format")){
			url +="&__format=" + paramMap.get("format");
			paramMap.remove("format");
		}else{
			url += "&__format=html";
		}
		for (String param : paramMap.keySet()) {
			url += "&" + param + "=" + paramMap.get(param);
		}
		url += "&compCode=" + SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		return url;
	}
 }
