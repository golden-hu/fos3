package sg.com.ccn;

import haitai.fw.util.ConstUtil;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.StringUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class ExMessageServlet extends HttpServlet {
	private static final long serialVersionUID = -2869850325328344690L;

	public ExMessageServlet() {
		super();
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) {
		doGet(request, response);
	}
	
	protected void doGet(HttpServletRequest request,HttpServletResponse response) {
		@SuppressWarnings("unused")
        InputStream inputStream = null;
		OutputStream outputStream = null;
		StringBuffer sbResult = null;
		
		String action = request.getParameter("action");
		
		String respCode = "";
		String respMessage = "";
		
		try {
			inputStream = request.getInputStream();
			outputStream = response.getOutputStream();	
			if(action.equals("send")){
				String key=request.getParameter("key");
				if(StringUtil.isNotBlank(key)&&key.equals("ActivateCompany")){
					//Activate company
					ExMessageService exService = SpringContextHolder.getBean(ExMessageService.class);
					String compCode=request.getParameter("compCode");
					String userLoginName=request.getParameter("userLoginName");
					exService.activeCompany(compCode, userLoginName);
					
				}
				else if(StringUtil.isNotBlank(key)&&key.equals("Suspend")){
					//Suspend
				} 
			}
			
			sbResult = new StringBuffer();
			setResponseHeader(response, sbResult);
			
			sbResult.append("<HtResponse>").append(ConstUtil.LINE_SEPARATOR);				
			sbResult.append("<ResponseCode>");			
			sbResult.append(respCode);
			sbResult.append("</ResponseCode>").append(ConstUtil.LINE_SEPARATOR);
			sbResult.append("<ResponseMessage>");
			sbResult.append(respMessage);
			sbResult.append("</ResponseMessage>").append(ConstUtil.LINE_SEPARATOR);	
			
			sbResult.append("</HtResponse>").append(ConstUtil.LINE_SEPARATOR);					
			
			byte[] byteResult;
			byteResult = sbResult.toString().getBytes(ConstUtil.XML_ENCODING_UTF8);
			bufferedWrite(outputStream, byteResult);
		} 
		catch (Exception e) {
			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			byte[] byteResult;
			try {
				sbResult = new StringBuffer();		
				sbResult.append("<HtResponse>").append(ConstUtil.LINE_SEPARATOR);				
				sbResult.append("<ResponseCode>0</ResponseCode>").append(ConstUtil.LINE_SEPARATOR);
				sbResult.append("<ResponseMessage>服务器内部异常。</ResponseMessage>").append(ConstUtil.LINE_SEPARATOR);				
				sbResult.append("</HtResponse>").append(ConstUtil.LINE_SEPARATOR);					
				byteResult = sbResult.toString().getBytes(ConstUtil.XML_ENCODING_UTF8);
				bufferedWrite(outputStream, byteResult);
			} catch (Exception e1) {
				
			}
		} 
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

	@SuppressWarnings("unused")
    private void closeStream(InputStream inputStream, OutputStream outputStream)
			throws IOException {
		if (outputStream != null) {
			outputStream.close();
		}

		if (inputStream != null) {
			inputStream.close();
		}
	}
	
	/**
	 * 从请求中取得POST的XML或者JSON文本
	 * @param inputStream the post parameter
	 * @return the xml or json string
	 * @throws IOException read error
	 */
	@SuppressWarnings("unused")
    private String readXml(InputStream inputStream) throws IOException {
		InputStreamReader br = new InputStreamReader(inputStream, ConstUtil.XML_ENCODING_UTF8);
		BufferedReader br2 = new BufferedReader(br);
		String line;
        StringBuilder sb = new StringBuilder();
		while ((line = br2.readLine()) != null) {
			sb.append(line).append(ConstUtil.LINE_SEPARATOR);
		}
        return sb.toString();
	}
	
	
	/**
	 * 设置response的头信息
	 * @param response the http response
	 * @param sbResult the output string
	 * @param isJSON format is json
	 */
	private void setResponseHeader(HttpServletResponse response, StringBuffer sbResult) {
		response.setDateHeader("Expires", 0);
		response.addHeader("Pragma", "no-cache");
		response.setHeader("Cache-Control", "no-cache");
		
		response.setContentType("text/xml;charset=UTF-8");
		sbResult.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
		sbResult.append(ConstUtil.LINE_SEPARATOR);
	}
	
	
}
