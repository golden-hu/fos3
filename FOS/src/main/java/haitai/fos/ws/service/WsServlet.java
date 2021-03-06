package haitai.fos.ws.service;

import haitai.fos.sys.entity.table.Action;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.FosRequest;
import haitai.fw.entity.FosResponse;
import haitai.fw.entity.HttpHeader;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.platform.ActionManager;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.ExceptionUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.SpringContextHolder;
import haitai.fw.util.StringUtil;
import haitai.fw.util.XstreamUtil;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.EntityExistsException;
import javax.persistence.OptimisticLockException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.exception.ConstraintViolationException;

public class WsServlet extends HttpServlet {
	private static final long serialVersionUID = -2869850325328344690L;
	private static final FosLogger logger = new FosLogger(WsServlet.class);

	public WsServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request,HttpServletResponse response) {
		InputStream inputStream = null;
		OutputStream outputStream = null;
		StringBuffer sbResult = null;
		Map<String, String> paramMap = getRequestParams(request);
		String actName = paramMap.get(HttpHeader.ACTNAME);
		String compCode = paramMap.get("compCode");
		
		
		
		boolean isJSON = false;
		if(ConstUtil.JSON.equalsIgnoreCase(paramMap.get(HttpHeader.TEXT_TYPE))) {
			isJSON = true;
		}
		
		regSessionAttr(request, actName);
		if (StringUtil.isBlank(SessionManager.getStringAttr("CompCode"))
				&& StringUtil.isNotBlank(compCode)) {
			SessionManager.setAttr("CompCode", compCode);
		}
		
		Integer wuid = (Integer) SessionManager.getAttr("WUID");
		
		try {
			if ("WS_LOGOUT".equals(actName)) {
				if (wuid != null) {
					SessionManager.logoutSession();
				}
				response.sendRedirect("ws-login.html");
			} 
			
			else if (wuid == null && !isPublic(actName)) {
				throw new BusinessException("fw.session.expired");
			} 
			else {
				inputStream = request.getInputStream();
				outputStream = response.getOutputStream();
								
				if(isJSON){
					String json = readJson(inputStream, paramMap);				
					FosRequest fosRequest = parseJson(json);
					fosRequest.getParam().putAll(paramMap);
					if (fosRequest.getData() == null) {
						fosRequest.setData(new ArrayList<FosQuery>());
					}

					response.setContentType(HttpHeader.CONTENT_TYPE_JSON);
					FosResponse fosResponse = dispatch(actName, fosRequest);
					copyRowCount(fosRequest, fosResponse);
					sbResult = toJson(fosResponse);

					byte[] byteResult = null;
					byteResult = sbResult.toString().getBytes(ConstUtil.XML_ENCODING_UTF8);
					logger.debug("\n" + sbResult);
					bufferedWrite(outputStream, byteResult);
				}
				else{
					String xml = readXml(inputStream);
					//分页, 从参数中取得XML
					if(StringUtil.isBlank(xml)){
						xml = paramMap.get(ConstUtil.XML);
						paramMap.remove(ConstUtil.XML);
						if(isJSON && StringUtil.contains(xml, "\\\"")) {
							xml = xml.replaceAll("\\\\", "");
							if(xml.startsWith("\"")) {
								xml = xml.substring(1, xml.length() - 1);
							}
						}
					}
					logger.info(xml);
					
					FosRequest fosRequest = parseXml(actName,xml);
					fosRequest.getParam().putAll(paramMap);
					if(fosRequest.getData() == null){
						fosRequest.setData(new ArrayList<FosQuery>());
					}
					
					sbResult = new StringBuffer();
					
					FosResponse fosResponse = new FosResponse();
					setResponseHeader(response, sbResult);
					
					dispatch(actName, fosRequest, fosResponse);
					paramMap = fosRequest.getParam();
					
					copyRowCount(fosRequest, fosResponse);				
					 entity2Text(fosResponse,sbResult);

					byte[] byteResult;
					byteResult = sbResult.toString().getBytes(ConstUtil.XML_ENCODING_UTF8);
					logger.info("\n" + sbResult);
					bufferedWrite(outputStream, byteResult);
				}
			}
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			FosResponse fosResponse = buildErrorResponse(e);
			sbResult = entity2TextWhenError(fosResponse);
			logger.error(sbResult.toString(), e);

			byte[] byteResult;
			try {
				byteResult = sbResult.toString().getBytes(
						ConstUtil.XML_ENCODING_UTF8);
				bufferedWrite(outputStream, byteResult);
			} catch (Exception e1) {
				logger.error(MessageUtil.getMessage("fw.unknown"),e1);
			}
		} finally {
			try {
				closeStream(inputStream, outputStream);
			} catch (IOException e) {
				logger.error(MessageUtil.getMessage("fw.unknown"),e);
			}
			SessionManager.unregSession();
		}
	}

	private FosResponse dispatch(String actName, FosRequest fosRequest)
			throws Exception {
		FosResponse fosResponse = new FosResponse();
		Action action = ActionManager.getAction(actName);
		Object service = SpringContextHolder.getBean(action.getActService());
		Method[] methods = service.getClass().getMethods();
		for (Method method : methods) {
			if (method.getName().equalsIgnoreCase(action.getActMethod())) {
				Class<?> paramType[] = method.getParameterTypes();
				Object paramObject[] = new Object[paramType.length];
				int i = 0;
				for (Class<?> paramClass : paramType) {
					if (List.class.isAssignableFrom(paramClass)) {
						paramObject[i] = fosRequest.getData();
					} else if (Map.class.isAssignableFrom(paramClass)) {
						paramObject[i] = fosRequest.getParam();
					} else {
						paramObject[i] = fosRequest.getData().get(0);
					}
					i++;
				}
				Object retObj = method.invoke(service, paramObject);
				if (retObj instanceof List<?>) {
					fosResponse.setData((List<?>) retObj);
				} else {
					fosResponse.addData(retObj);
				}
				fosResponse.setCode(0);
				fosResponse.setMsg(MessageUtil.getMessage("fw.success"));
				retObj = null;
			}
		}
		return fosResponse;
	}

	private void copyRowCount(FosRequest fosRequest, FosResponse fosResponse) {
		if (fosRequest.getParam() != null
				&& fosRequest.getParam().containsKey(HttpHeader.ROWCOUNT)) {
			fosResponse.setRowCount(fosRequest.getParam().get(
					HttpHeader.ROWCOUNT));
		}
	}

		
	private StringBuffer toJson(FosResponse fosResponse) {
		StringBuffer sb = new StringBuffer();
		if (fosResponse.getData() != null && fosResponse.getData().size() > 0) {
			sb.append(XstreamUtil.entity2JSON(fosResponse.getData()));
			sb.delete(0, 8);
			sb.deleteCharAt(sb.length() - 1);
			sb.insert(1,"\"rowCount\":\""
									+ (StringUtil.isNotBlank(fosResponse
											.getRowCount()) ? fosResponse
											.getRowCount() : "0")
									+ "\",\"code\":\"" + fosResponse.getCode()
									+ "\",\"msg\":\"" + fosResponse.getMsg()
									+ "\",");
		} else {
			sb.append("{rowCount : 0}");
		}
		return sb;
	}

	private FosRequest parseJson(String xml) {
		FosRequest fosRequest;
		if (StringUtil.isBlank(xml)) {
			fosRequest = new FosRequest();
		} else {
			fosRequest = (FosRequest) XstreamUtil.JSON2Entity(xml);
		}
		return fosRequest;
	}

	private String readJson(InputStream inputStream,
			Map<String, String> paramMap) throws IOException {
		InputStreamReader br = new InputStreamReader(inputStream,
				ConstUtil.XML_ENCODING_UTF8);
		BufferedReader br2 = new BufferedReader(br);
		String line = null;
		StringBuffer sb = new StringBuffer();
		while ((line = br2.readLine()) != null) {
			sb.append(line).append(ConstUtil.LINE_SEPARATOR);
		}
		String xml = sb.toString();
		if (StringUtil.isBlank(xml)) {
			xml = paramMap.get(ConstUtil.XML);
			paramMap.remove(ConstUtil.XML);
			if (StringUtil.contains(xml, "\\\"")) {
				xml = xml.replaceAll("\\\\", "");
				if (xml.startsWith("\"")) {
					xml = xml.substring(1, xml.length() - 1);
				}
			}
		}
		return xml;
	}

	private boolean isPublic(String actName) {
		Set<String> publicSet = new HashSet<String>();
		publicSet.add("WS_LOGIN");
		publicSet.add("WS_REG");
		publicSet.add("WS_WUSR_S");
		publicSet.add("TASK_Q");
		return publicSet.contains(actName);
	}

	private void regSessionAttr(HttpServletRequest request, String actName) {
		SessionManager.regSession(request.getSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, actName);
		logger.info(actName + " by "
				+ SessionManager.getAttr("WUSERNAME") + "("
				+ SessionManager.getAttr("WUID") + ")@"
				+ SessionManager.getAttr(SessionKeyType.HOSTNAME));
	}

	@SuppressWarnings("unchecked")
	private Map<String, String> getRequestParams(HttpServletRequest request) {
		Map<String, String> paramMap = new HashMap<String, String>();
		Enumeration<String> paramEnum = request.getParameterNames();
		while (paramEnum.hasMoreElements()) {
			String paramName = paramEnum.nextElement();
			paramMap.put(paramName, request.getParameter(paramName));
		}
		return paramMap;
	}

	private FosResponse buildErrorResponse(Exception e) {
		int errCode = -1;
		if ("fw.session.expired".equals(e.getMessage()))
			errCode = -2;
		String msg = buildErrorMessage(e);
		FosResponse fosResponse = new FosResponse();
		fosResponse.setCode(errCode);
		fosResponse.setMsg(msg);
		return fosResponse;
	}

	private StringBuffer entity2TextWhenError(FosResponse fosResponse) {
		StringBuffer sbResult;
		sbResult = new StringBuffer();
		sbResult.append(XstreamUtil.entity2JSON(fosResponse));
		return sbResult;
	}

	private String buildErrorMessage(Exception e) {
		String msg = null;
		if (ExceptionUtil.contains(EntityExistsException.class, e)) {
			msg = MessageUtil.getMessage("fw.db.entity_exist");
		} else if (ExceptionUtil.contains(OptimisticLockException.class, e)) {
			msg = MessageUtil.getMessage("fw.db.optimistic_lock");
		} else if (ExceptionUtil
				.contains(ConstraintViolationException.class, e)) {
			msg = MessageUtil.getMessage("fw.db.constraint_violation");
		}  else if (ExceptionUtil.contains(BusinessException.class, e)) {
			Throwable b = ExceptionUtil.getTypeException(BusinessException.class, e);
			if (b != null) {
				msg = MessageUtil.getMessage(b.getMessage());
			} else {
				msg = e.getMessage();
			}
		} else {
			msg = MessageUtil.getMessage("fw.unknown");
		}
		return msg;
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

	private void closeStream(InputStream inputStream, OutputStream outputStream)
			throws IOException {
		if (outputStream != null) {
			outputStream.close();
		}

		if (inputStream != null) {
			inputStream.close();
		}
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) {
		doGet(request, response);
	}
	
	/**
	 * 从请求中取得POST的XML或者JSON文本
	 * @param inputStream the post parameter
	 * @return the xml or json string
	 * @throws IOException read error
	 */
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
	 * 把输入的XML解析成FosRequest对象
	 * @param actName the action name
	 * @param xml the xml or json string
	 * @param isJSON the message format is json
	 * @return fos request object
	 */
	private FosRequest parseXml(String actName,String xml) {
		if (actName.endsWith("_Q") || StringUtil.isBlank(xml) || xml.startsWith("----")) {
			return new FosRequest();
		}
		else	return (FosRequest) XstreamUtil.XML2Entity(xml);
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
		
		response.setContentType(HttpHeader.CONTENT_TYPE_XML);
		sbResult.append(ConstUtil.XML_HEADER);
	}

	/**
	 * 调用相关服务
	 * @param actName the action name
	 * @param fosRequest the fos request
	 * @param fosResponse the fos response
	 * @throws Exception the exception
	 */
	private void dispatch(String actName, FosRequest fosRequest, FosResponse fosResponse) throws Exception {
		// get service class and action method
		Action action = ActionManager.getAction(actName);
		Object service = SpringContextHolder.getBean(action.getActService());
		// convert request to parameter type of action method
		Method[] methods = service.getClass().getMethods();
		for (Method method : methods) {
			if (method.getName().equalsIgnoreCase(action.getActMethod())) {
				Class<?> paramType[] = method.getParameterTypes();
				Object paramObject[] = new Object[paramType.length];
				int i = 0;
				for (Class<?> paramClass : paramType) {
					if (List.class.isAssignableFrom(paramClass)) {
						paramObject[i] = fosRequest.getData();
					} else if (Map.class.isAssignableFrom(paramClass)) {
						paramObject[i] = fosRequest.getParam();
					} else {
						paramObject[i] = fosRequest.getData().get(0);
					}
					i++;
				}
				Object retObj = method.invoke(service, paramObject);
				if (retObj instanceof List<?>) {
					fosResponse.setData((List<?>) retObj);
				} else {
					fosResponse.addData(retObj);
				}
				fosResponse.setCode(0);
				fosResponse.setMsg(MessageUtil.getMessage("fw.success"));
			}
		}
	}
	
	/**
	 * 把返回的对象序列化, 生成返回前台的文本
	 * @param sbResult the output
	 * @param fosResponse the fos response
	 * @param isJSON format is json
	 */
	private void entity2Text(FosResponse fosResponse,StringBuffer sb) {		
		sb.append(XstreamUtil.entity2XML(fosResponse));
	}
}
