package haitai.fosws.controller;

import haitai.fosws.entity.table.WBlM;
import haitai.fosws.entity.table.WConsign;
import haitai.fosws.entity.table.WInquiry;
import haitai.fosws.entity.table.WUser;
import haitai.fosws.service.FosService;
import haitai.fosws.service.WBlMService;
import haitai.fosws.service.WConsignService;
import haitai.fosws.service.WInquiryService;
import haitai.fosws.service.WUserService;
import haitai.fw.entity.FosQuery;
import haitai.fw.session.SessionManager;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MainController {
	private WInquiryService inquiryService = null;
	private WUserService userService = null;
	private WConsignService consignService = null;
	private WBlMService blmService = null;
	private FosService fosService = null;

	@Transactional
	public List<WUser> saveUser(List<WUser> entityList) {
		return userService.save(entityList);
	}

	@Transactional
	public WUser login(Map<String, Object> queryMap) {
		return userService.login(queryMap);
	}

	public void logout() {
		SessionManager.logoutSession();
	}

	@Transactional
	public List<WInquiry> saveInquiry(List<WInquiry> entityList) {
		return inquiryService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<WInquiry> queryInquiry(Map<String, Object> queryMap) {
		return inquiryService.query(queryMap);
	}

	@Transactional
	public List<WConsign> saveConsign(List<WConsign> entityList) {
		return consignService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<WConsign> queryConsign(Map<String, Object> queryMap) {
		return consignService.query(queryMap);
	}

	@Transactional
	public List<WBlM> saveBlM(List<WBlM> entityList) {
		return blmService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<WBlM> queryBlM(Map<String, Object> queryMap) {
		return blmService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryFConsign(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return fosService.complexQueryConsign(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryBl(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return fosService.complexQueryBl(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryVoyage(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return fosService.complexQueryVoyage(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryBill(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return fosService.complexQueryBill(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryBillItem(Map<String, Object> queryMap) {
		return fosService.queryBillItem(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryTask(Map<String, Object> queryMap) {
		return fosService.queryTask(queryMap);
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

	public WConsignService getConsignService() {
		return consignService;
	}

	@Autowired
	public void setConsignService(WConsignService consignService) {
		this.consignService = consignService;
	}

	public WBlMService getBlmService() {
		return blmService;
	}

	@Autowired
	public void setBlmService(WBlMService blmService) {
		this.blmService = blmService;
	}

	public FosService getFosService() {
		return fosService;
	}

	@Autowired
	public void setFosService(FosService fosService) {
		this.fosService = fosService;
	}

}
