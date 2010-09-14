package haitai.fw.platform;

import haitai.fos.sys.entity.table.Action;
import haitai.fos.sys.service.PUserService;
import haitai.fw.entity.FosQuery;
import haitai.fw.entity.FosRequest;
import haitai.fw.entity.FosResponse;
import haitai.fw.entity.HttpHeader;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ActionLogUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.ExceptionUtil;
import haitai.fw.util.LicenseUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.ReportUtil;
import haitai.fw.util.SpringContextUtil;
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
import java.util.List;
import java.util.Map;

import javax.persistence.EntityExistsException;
import javax.persistence.OptimisticLockException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.hibernate.exception.ConstraintViolationException;

public class MainServlet extends HttpServlet {

	private static final long serialVersionUID = 4718428624274688028L;
	private static final int BUFFERSIZE = 2048 * 2;
	private static final FosLogger logger = new FosLogger(MainServlet.class);

	public MainServlet() {
		super();
	}

	public void destroy() {
		super.destroy();
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response){
		InputStream inputStream = null;
		OutputStream outputStream = null;
		StringBuffer sbResult = new StringBuffer();
		boolean isJSON = false;
		Map<String, String> paramMap = null;
		try {
			paramMap = getRequestParams(request);
			String actName = paramMap.get(HttpHeader.ACTNAME);
			clearNotUsedParam(paramMap);
			if(ConstUtil.JSON.equalsIgnoreCase(paramMap.get(HttpHeader.TEXT_TYPE))) {
				isJSON = true;
			}
			
			regSessionAttr(request, actName);		
			regIpInSessionWhenLogin(request, actName);
			
			inputStream = request.getInputStream();
			outputStream = response.getOutputStream();
			Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
			if (uid == null && !ConstUtil.ACT_LOGIN.equals(actName)
					&& !ConstUtil.ACT_LOGOUT.equals(actName)) {
				// 检查是否已经登录(UID为空, 而且不是正在登录)
				throw new BusinessException(MessageUtil.FW_ERROR_SESSION_EXPIRED);
			} else if (ConstUtil.ACT_LOGOUT.equals(actName)) {
				ActionLogUtil.log();
				if (uid != null) {
					PUserService.killMe(uid);
					SessionManager.logoutSession();
				}
				response.sendRedirect(AppConfig
						.getConfig(ConstUtil.CONFIG_LOGIN_URL));
			} else if (actName.startsWith(ConstUtil.ACT_REPORT_RUN)) {
				// 报表
				response.sendRedirect(ReportUtil.getUrl(request, paramMap,actName));
			} else {
				if (!actName.equals(ConstUtil.ACT_LOGIN)
						&& ConstUtil.TrueStr.equals(AppConfig
										.getConfig(ConstUtil.CONFIG_CHECK_USER_REPEAT_LOGIN))) {
					PUserService.checkRepeatLogin(uid);
				}
				LicenseUtil licenseUtil = SpringContextUtil.getBean("licenseUtil");
				licenseUtil.checkLicense();
				String xml = null;
				if (paramMap.containsKey(HttpHeader.UPLOADFILE)) {
					parseFileForm(request, paramMap);					
				}else {
					xml = readXml(inputStream);
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
				}

				FosRequest fosRequest = parseXml(actName, xml, isJSON);
				fosRequest.getParam().putAll(paramMap);
				if(fosRequest.getData() == null){
					fosRequest.setData(new ArrayList<FosQuery>());
				}
				
				FosResponse fosResponse = new FosResponse();
				setResponseHeader(response, sbResult, isJSON);
				
				dispatch(actName, fosRequest, fosResponse);
				paramMap = fosRequest.getParam();
				if(paramMap.containsKey(ConstUtil.REDIRECT_URL)) {
					String url = paramMap.get(ConstUtil.REDIRECT_URL);
					// file download, add random number suffix to prevent cache
					if(url.endsWith(".xls") || url.endsWith(".doc")){
						url += "?" + System.currentTimeMillis();
					}
					response.sendRedirect(url);
					return;
				}
				copyRowCount(fosRequest, fosResponse);
				if (paramMap.containsKey(HttpHeader.UPLOADFILE)) {
					fosResponse.setSuccess("true");
				}
				entity2Text(sbResult, fosResponse, isJSON);

				byte[] byteResult = null;
				byteResult = sbResult.toString().getBytes(ConstUtil.XML_ENCODING_UTF8);
				logger.info("\n" + sbResult);
				bufferedWrite(outputStream, byteResult);
			}
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			FosResponse fosResponse = buildErrorResponse(e);
			if (paramMap.containsKey(HttpHeader.UPLOADFILE) && isJSON) {
				fosResponse.setSuccess("false");
				sbResult = new StringBuffer();
				toJson(sbResult, fosResponse);
			}else{
				sbResult = entity2TextWhenError(fosResponse, isJSON);
			}
			String strResult = sbResult.toString();
			logger.error(strResult, e);
			
			byte[] byteResult;
			try {
				byteResult = strResult.getBytes(ConstUtil.XML_ENCODING_UTF8);
				bufferedWrite(outputStream, byteResult);
			} catch (Exception e1) {
				logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_UNKNOWN),e1);
			}
		} finally {
			try {
				closeStream(inputStream, outputStream);
			} catch (IOException e) {
				logger.error(MessageUtil.getMessage(MessageUtil.FW_ERROR_UNKNOWN));
			}
			SessionManager.unregSession();
		}
	}

	@SuppressWarnings("unchecked")
	private void parseFileForm(HttpServletRequest request,
			Map<String, String> paramMap) throws FileUploadException {
		ServletFileUpload upload = initFileUpload();
		List<FileItem> fileItems = upload.parseRequest(request);
		for (FileItem item : fileItems) {
			if (item.isFormField()) {
				if (StringUtil.isNotBlank(item.getString()))
					paramMap.put(item.getFieldName(), StringUtil
							.ascii2utf8(item.getString()));
			} else {
				SessionManager.addFileItem(item);
			}
		}
	}

	private ServletFileUpload initFileUpload() {
		int maxPostSize = 10 * 1024 * 1024;
		DiskFileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setSizeMax(maxPostSize);
		return upload;
	}

	/**
	 * 从请求中获取所有的参数, 并放入参数Map中,
	 * 后续的查询等需要使用这个参数Map
	 * @param request
	 * @return
	 */
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

	/**
	 * 删除没用的参数
	 * @param paramMap
	 */
	private void clearNotUsedParam(Map<String, String> paramMap) {
		paramMap.remove(HttpHeader.ACTNAME);
	}

	/**
	 * 注册session
	 * @param request
	 * @param actName
	 */
	private void regSessionAttr(HttpServletRequest request, String actName) {
		SessionManager.regSession(request.getSession());
		SessionManager.setAttr(SessionKeyType.ACTNAME, actName);
		logger.info(actName + " by "
				+ SessionManager.getAttr(SessionKeyType.USERNAME) + "("
				+ SessionManager.getAttr(SessionKeyType.UID) + ")@"
				+ SessionManager.getAttr(SessionKeyType.HOSTNAME));
	}

	/**
	 * 登录时, 把IP写到Session
	 * @param request
	 * @param actName
	 */
	private void regIpInSessionWhenLogin(HttpServletRequest request, String actName) {
		if(ConstUtil.ACT_LOGIN.equalsIgnoreCase(actName)){
			SessionManager.setAttr(SessionKeyType.HOSTNAME, request.getRemoteAddr());
		}
	}

	/**
	 * 从请求中取得POST的XML或者JSON文本
	 * @param inputStream
	 * @return
	 * @throws IOException
	 */
	private String readXml(InputStream inputStream) throws IOException {
		InputStreamReader br = new InputStreamReader(inputStream, ConstUtil.XML_ENCODING_UTF8);
		BufferedReader br2 = new BufferedReader(br);
		String line = null;
		StringBuffer sb = new StringBuffer();
		while ((line = br2.readLine()) != null) {
			sb.append(line).append(ConstUtil.LINE_SEPARATOR);
		}
		String xml = sb.toString();
		return xml;
	}

	/**
	 * 把输入的XML解析成FosRequest对象
	 * @param actName
	 * @param xml
	 * @param isJSON
	 * @return
	 */
	private FosRequest parseXml(String actName, String xml, boolean isJSON) {
		FosRequest fosRequest;
		if (actName.endsWith("_Q") || StringUtil.isBlank(xml) || xml.startsWith("----")) {
			fosRequest = new FosRequest();
		} else {
			if(isJSON) {
				fosRequest = (FosRequest) XstreamUtil.JSON2Entity(xml);
			}else {
				fosRequest = (FosRequest) XstreamUtil.XML2Entity(xml);
			}
		}
		return fosRequest;
	}

	/**
	 * 设置response的头信息
	 * @param response
	 * @param sbResult
	 * @param isJSON
	 */
	private void setResponseHeader(HttpServletResponse response,
			StringBuffer sbResult, boolean isJSON) {
		//Http 1.0 header
		response.setDateHeader("Expires", 0);
		response.addHeader("Pragma", "no-cache");
		//Http 1.1 header
		response.setHeader("Cache-Control", "no-cache");
		if(isJSON) {
			response.setContentType(HttpHeader.CONTENT_TYPE_JSON);
		}else {
			response.setContentType(HttpHeader.CONTENT_TYPE_XML);
			sbResult.append(ConstUtil.XML_HEADER);
		}
	}

	/**
	 * 调用相关服务
	 * @param actName
	 * @param fosRequest
	 * @param fosResponse
	 * @throws Exception
	 */
	private void dispatch(String actName, FosRequest fosRequest,
			FosResponse fosResponse) throws Exception {
		// get service class and action method
		Action action = ActionManager.getAction(actName);
		Object service = SpringContextUtil.getBean(action.getActClass());
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
				fosResponse.setMsg(MessageUtil.getMessage(MessageUtil.FW_SUCCESS));
				retObj = null;
			}
		}
	}

	
	/**
	 * 把row count参数从request复制到response
	 * @param fosRequest
	 * @param fosResponse
	 */
	private void copyRowCount(FosRequest fosRequest, FosResponse fosResponse) {
		if(fosRequest.getParam() != null 
				&& fosRequest.getParam().containsKey(HttpHeader.ROWCOUNT)){
			fosResponse.setRowCount(fosRequest.getParam().get(
					HttpHeader.ROWCOUNT));
		}
	}

	/**
	 * 把返回的对象序列化, 生成返回前台的文本
	 * @param sbResult
	 * @param fosResponse
	 * @param isJSON
	 */
	private void entity2Text(StringBuffer sbResult, FosResponse fosResponse,
			boolean isJSON) {
		if(isJSON) {
			toJson(sbResult, fosResponse);
		}else {
			sbResult.append(XstreamUtil.entity2XML(fosResponse));
		}
	}

	/**
	 * 把返回的FosResponse对象转换成JSON文本返回,
	 * 因为前台的原因, 需要把FosResponse和Data两个tag去掉,
	 * 并且把Code, Message, RowCount, 对象数组,这四部分拉平
	 * @param sbResult
	 * @param fosResponse
	 */
	private void toJson(StringBuffer sbResult, FosResponse fosResponse) {
		if(fosResponse.getData() != null && fosResponse.getData().size() > 0) {
			sbResult.append(XstreamUtil.entity2JSON(fosResponse.getData()));
			sbResult.delete(0, 8);
			sbResult.deleteCharAt(sbResult.length() - 1);
			sbResult.insert(1, "\"rowCount\":\""
					+ (StringUtil.isNotBlank(fosResponse
							.getRowCount()) ? fosResponse
							.getRowCount() : "0")
					+ "\",\"code\":\"" + fosResponse.getCode()
					+ "\",\"msg\":\"" + fosResponse.getMsg()
					+ (fosResponse.getSuccess() != null? "\",\"success\":\"" + fosResponse.getSuccess():"")
					+ "\",");
		} else {
			if (fosResponse.getSuccess() != null) {
				sbResult.append("{rowCount : 0, success : " + fosResponse.getSuccess() + "}");
			} else {
				sbResult.append("{rowCount : 0}");
			}
		}
	}

	/**
	 * 根据异常, 构建一个表示出错的FosResponse
	 * @param e
	 * @return
	 */
	private FosResponse buildErrorResponse(Exception e) {
		int errCode = -1;
		if (MessageUtil.FW_ERROR_SESSION_EXPIRED.equals(e.getMessage()))
			errCode = -2;
		String msg = buildErrorMessage(e);
		FosResponse fosResponse = new FosResponse();
		fosResponse.setCode(errCode);
		fosResponse.setMsg(msg);
		return fosResponse;
	}

	/**
	 * 出错的FosResponse转换成返回前台的文本
	 * @param fosResponse
	 * @param isJSON
	 * @return
	 */
	private StringBuffer entity2TextWhenError(FosResponse fosResponse,
			boolean isJSON) {
		StringBuffer sbResult;
		sbResult = new StringBuffer();
		if(isJSON) {
			sbResult.append(XstreamUtil.entity2JSON(fosResponse));
		}else {
			sbResult.append(XstreamUtil.entity2XML(fosResponse));
		}
		return sbResult;
	}

	/**
	 * 根据异常, 得到返回的异常信息
	 * @param e
	 * @return
	 */
	private String buildErrorMessage(Exception e) {
		String msg = null;
		if (ExceptionUtil.contains(EntityExistsException.class, e)) {
			msg = MessageUtil.getMessage(MessageUtil.FW_ERROR_ENTITY_EXIST);
		} else if (ExceptionUtil.contains(OptimisticLockException.class, e)) {
			msg = MessageUtil.getMessage(MessageUtil.FW_ERROR_OPTIMISTIC_LOCK);
		} else if (ExceptionUtil.contains(
				ConstraintViolationException.class, e)) {
			msg = MessageUtil.getMessage(MessageUtil.FW_ERROR_CONSTRAINT_VIOLATION);
		} else if (ExceptionUtil.contains(BusinessException.class, e)) {
			Throwable b = ExceptionUtil.getTypeException(
					BusinessException.class, e);
			if (b != null && MessageUtil.msgSet.contains(b.getMessage())) {
				msg = MessageUtil.getMessage(b.getMessage());
			} else {
				msg = e.getMessage();
			}
		} else {
			msg = MessageUtil.getMessage(MessageUtil.FW_ERROR_UNKNOWN);
		}
		return msg;
	}


	private void bufferedWrite(OutputStream outputStream, byte[] data)
			throws IOException {
		int position = 0;

		while (position < data.length) {
			int size = Math.min(BUFFERSIZE, data.length - position);
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

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	public void init() throws ServletException {
		AppConfig.init(getServletContext());
//		try {
//			LicenseUtil util = new LicenseUtil();
//			util.checkLicense(getServletContext());
//		}catch (BusinessException e) {
//			logger.fatal(MessageUtil.getMessage(e.getMessage()));
//			System.exit(0);
//		}
	}
}
