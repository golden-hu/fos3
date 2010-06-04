package haitai.fos.cms.util;

import haitai.fos.cms.entity.idao.IHcmsResourceDAO;
import haitai.fos.cms.entity.table.HcmsResource;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.SpringContextUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.XstreamUtil;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ArticleServlet extends HttpServlet {

	private static final long serialVersionUID = 6731594905995469672L;
	private static final FosLogger logger = new FosLogger(ArticleServlet.class);

	@SuppressWarnings("unchecked")
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		SessionManager.regSession(req.getSession());
		Map queryMap = getRequestParams(req);
		String compCode = (String) queryMap.get("compCode");
		if (StringUtil.isNotBlank(compCode))
			SessionManager.setAttr(SessionKeyType.COMPCODE, compCode);

		IHcmsResourceDAO dao = SpringContextUtil.getBean("hcmsResourceDAO");
		logger.debug("\n" + queryMap);
		List<HcmsResource> articles = dao.queryCategoryAndArticle(queryMap);
		List<HcmsResource> list = new ArrayList<HcmsResource>();
		for (HcmsResource hcmsResource : articles) {
			HcmsResource item = new HcmsResource();
			item.setNo(hcmsResource.getNo());
			item.setPno(hcmsResource.getPno());
			item.setName(hcmsResource.getName());
			list.add(item);
		}
		OutputStream outputStream = resp.getOutputStream();
		StringBuffer sbResult = new StringBuffer();
		if(articles.size() > 0) {
			sbResult.append(XstreamUtil.entity2JSON(list));
			sbResult.delete(0, 8);
			sbResult.deleteCharAt(sbResult.length() - 1);
		}else {
			sbResult.append("{}");
		}
		
		byte[] byteResult = null;
		byteResult = sbResult.toString().getBytes(ConstUtil.XML_ENCODING_UTF8);
		logger.debug("\n" + sbResult);
		bufferedWrite(outputStream, byteResult);
		try {
			if(outputStream != null)
				outputStream.close();
		} catch (IOException e) {
			logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_UNKNOWN));
		}
		SessionManager.unregSession();
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	private void bufferedWrite(OutputStream outputStream, byte[] data)
			throws IOException {
		int position = 0;

		while (position < data.length) {
			int size = Math.min(4096, data.length - position);
			outputStream.write(data, position, size);
			position += size;
		}

		outputStream.flush();
	}
	
	@SuppressWarnings("unchecked")
	private Map<String, String> getRequestParams(HttpServletRequest request) {
		Map<String, String> paramMap = new HashMap<String, String>();
		Enumeration<String> paramEnum = request.getParameterNames();
		while(paramEnum.hasMoreElements()){
			String paramName = paramEnum.nextElement();
			paramMap.put(paramName, request.getParameter(paramName));
		}
		return paramMap;
	}
}
