package haitai.fos.ws.controller;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.sys.entity.table.CCustomer;
import haitai.fos.ws.entity.table.WBlM;
import haitai.fos.ws.entity.table.WInquiry;
import haitai.fos.ws.entity.table.WUser;
import haitai.fos.ws.service.WBlMService;
import haitai.fos.ws.service.WConsignService;
import haitai.fos.ws.service.WInquiryService;
import haitai.fos.ws.service.WUserService;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WsController {
	private WConsignService consignService = null;
	private WInquiryService inquiryService = null;
	private WUserService userService = null;
	private WBlMService blmService = null;

	@Transactional(readOnly = true)
	public List<WInquiry> complexQueryInquiry(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return inquiryService.complexQuery(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public List<WUser> queryUser(Map<String, Object> queryMap) {
		return userService.query(queryMap);
	}

	@Transactional
	public List<CCustomer> saveCustomer(List<CCustomer> entityList,
			Map<String, Object> queryMap) {
		return userService.saveCustomer(entityList, queryMap);
	}

	@Transactional
	public List<FConsign> saveRealConsign(List<FConsign> entityList,
			Map<String, Object> queryMap) {
		return consignService.saveRealConsign(entityList, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryWConsign(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return consignService.complexQuery(conditions, queryMap);
	}

	@Transactional
	public List<WBlM> saveBlM(List<WBlM> entityList) {
		return blmService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<WBlM> queryBlM(Map<String, Object> queryMap) {
		return blmService.query(queryMap);
	}

	public WConsignService getConsignService() {
		return consignService;
	}

	@Autowired
	public void setConsignService(WConsignService consignService) {
		this.consignService = consignService;
	}

	public WInquiryService getInquiryService() {
		return inquiryService;
	}

	@Autowired
	public void setInquiryService(WInquiryService inquiryService) {
		this.inquiryService = inquiryService;
	}

	public WUserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(WUserService userService) {
		this.userService = userService;
	}

}
