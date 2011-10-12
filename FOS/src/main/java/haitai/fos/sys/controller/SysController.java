package haitai.fos.sys.controller;

import haitai.fos.sys.entity.table.CCustomerCategory;
import haitai.fos.sys.entity.table.CPriceLine;
import haitai.fos.sys.entity.table.CPriceRecord;
import haitai.fos.sys.entity.table.CSalesQuota;
import haitai.fos.sys.entity.table.CVendorCategory;
import haitai.fos.sys.entity.table.PActionLog;
import haitai.fos.sys.entity.table.PCompanyBankAccount;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fos.sys.entity.table.PFunction;
import haitai.fos.sys.entity.table.PGroup;
import haitai.fos.sys.entity.table.PGroupUser;
import haitai.fos.sys.entity.table.PMessage;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fos.sys.entity.table.PRole;
import haitai.fos.sys.entity.table.PRoleFunction;
import haitai.fos.sys.entity.table.PTaskType;
import haitai.fos.sys.entity.table.PTemplate;
import haitai.fos.sys.entity.table.PTemplateMap;
import haitai.fos.sys.entity.table.PTemplateType;
import haitai.fos.sys.entity.table.PUser;
import haitai.fos.sys.entity.table.PUserExpePermission;
import haitai.fos.sys.entity.table.PUserRole;
import haitai.fos.sys.entity.table.PUserSetting;
import haitai.fos.sys.service.CCommissionItemService;
import haitai.fos.sys.service.CCommissionService;
import haitai.fos.sys.service.CCustomerCategoryService;
import haitai.fos.sys.service.CCustomerContactService;
import haitai.fos.sys.service.CCustomerService;
import haitai.fos.sys.service.CPriceLineService;
import haitai.fos.sys.service.CPriceRecordService;
import haitai.fos.sys.service.CPriceSheetService;
import haitai.fos.sys.service.CSalesCommissionService;
import haitai.fos.sys.service.CSalesQuotaService;
import haitai.fos.sys.service.CVendorCategoryService;
import haitai.fos.sys.service.PActionLogService;
import haitai.fos.sys.service.PCompanyBankAccountService;
import haitai.fos.sys.service.PCompanyConfigService;
import haitai.fos.sys.service.PFunctionService;
import haitai.fos.sys.service.PMessageService;
import haitai.fos.sys.service.PMessageSubscribeService;
import haitai.fos.sys.service.PMessageTopicService;
import haitai.fos.sys.service.PRoleFunctionService;
import haitai.fos.sys.service.PTaskTypeService;
import haitai.fos.sys.service.PTemplateMapService;
import haitai.fos.sys.service.PTemplateService;
import haitai.fos.sys.service.PTemplateTypeService;
import haitai.fos.sys.service.PUserExpePermissionService;
import haitai.fos.sys.service.PUserService;
import haitai.fos.sys.service.PUserSettingService;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("SysController")
public class SysController {
	private PCompanyConfigService companyConfigService;
	private PCompanyBankAccountService companyBankAccountService;
	private PUserService userService;
	private PFunctionService functionService;
	private PRoleFunctionService roleFunctionService;
	private PTemplateMapService templateMapService;
	private PTemplateService templateService;
	private PTemplateTypeService templateTypeService;
	private PMessageService messageService;
	private PMessageSubscribeService messageSubscribeService;
	private PMessageTopicService messageTopicService;
	private CCustomerService customerService;
	private CCustomerCategoryService customerCategoryService;
	private CCustomerContactService customerContactService;
	private CVendorCategoryService vendorCategoryService;
	private CPriceSheetService priceSheetService;
	private CPriceLineService priceLineService;
	private CPriceRecordService priceRecordService;
	private CSalesQuotaService salesQuotaService;
	private CCommissionService commissionService;
	private CCommissionItemService commissionItemService;
	private CSalesCommissionService salesCommissionService;
	private PTaskTypeService taskTypeService;
	private PActionLogService actionLogService;
	private PUserSettingService userSettingService;
	private PUserExpePermissionService userExpePermissionService;
	

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCompanyConfig(List<PCompanyConfig> entityList) {
		return companyConfigService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCompanyConfig(Map<String, Object> queryMap) {
		return companyConfigService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCompanyBankAccount(List<PCompanyBankAccount> entityList) {
		return companyBankAccountService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCompanyBankAccount(Map<String, Object> queryMap) {
		return companyBankAccountService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveUser(List entityList) {
		return userService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PUser> queryUser(Map<String, Object> queryMap) {
		return userService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveGroup(List entityList) {
		return userService.saveGroup(entityList);
	}

	@Transactional(readOnly = true)
	public List<PGroup> queryGroup(Map<String, Object> queryMap) {
		return userService.queryGroup(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveRole(List entityList) {
		return userService.saveRole(entityList);
	}

	@Transactional(readOnly = true)
	public List<PRole> queryRole(Map<String, Object> queryMap) {
		return userService.queryRole(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PUserRole> queryUserRole(Map<String, Object> queryMap) {
		return userService.queryUserRole(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PGroupUser> queryGroupUser(Map<String, Object> queryMap) {
		return userService.queryGroupUser(queryMap);
	}

	@Transactional
	public void updateUserPassword(Map<String, Object> queryMap) {
		userService.updatePassword(queryMap);
	}

	@Transactional
	public void updateUserPasswordByAdmin(Map<String, Object> queryMap) {
		userService.updatePasswordByAdmin(queryMap);
	}

	@Transactional
	public List<PFunction> saveFunction(List<PFunction> entityList) {
		return functionService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PFunction> queryFunction(Map<String, Object> queryMap) {
		return functionService.query(queryMap);
	}

	@Transactional
	public List<PRoleFunction> saveRoleFunction(List<PRoleFunction> entityList) {
		return roleFunctionService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PRoleFunction> queryRoleFunction(Map<String, Object> queryMap) {
		return roleFunctionService.query(queryMap);
	}

	@Transactional
	public List<PTaskType> saveTaskType(List<PTaskType> entityList) {
		return taskTypeService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PTaskType> queryTaskType(Map<String, Object> queryMap) {
		return taskTypeService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveTemplate(List<PTemplate> entityList) {
		return templateService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryTemplate(Map<String, Object> queryMap) {
		return templateService.query(queryMap);
	}

	@Transactional(readOnly = true)
	public void downTemplate(Map<String, String> queryMap) {
		templateService.downTemplate(queryMap);
	}

	@Transactional(readOnly = true)
	public void exportTemplate(List<FosQuery> conditions,
			Map<String, String> queryMap) {
		templateService.exportTemplate(conditions, queryMap);
	}

	@Transactional(readOnly = true)
	public void uploadTemplate(Map<String, String> queryMap) {
		templateService.uploadTemplate(queryMap);
	}

	@Transactional(readOnly = true)
	public void importTemplate(Map<String, String> queryMap) {
		templateService.importTemplate(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveTemplateType(List<PTemplateType> entityList) {
		return templateTypeService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryTemplateType(Map<String, Object> queryMap) {
		return templateTypeService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveTemplateMap(List<PTemplateMap> entityList) {
		return templateMapService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryTemplateMap(Map<String, Object> queryMap) {
		return templateMapService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveMessage(List<PMessage> entityList,
			Map<String, String> queryMap) throws Exception {
		return messageService.save(entityList, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryMessage(Map<String, Object> queryMap) {
		return messageService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryMessageOwn(Map<String, Object> queryMap) {
		return messageService.queryOwn(queryMap);
	}

	@Transactional
	public List<PMessageSubscribe> saveMessageSubscribe(
			List<PMessageSubscribe> entityList) throws Exception {
		return messageSubscribeService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PMessageSubscribe> queryMessageSubscribe(Map<String, Object> queryMap) {
		return messageSubscribeService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveMessageTopic(List entityList)
			throws Exception {
		return messageTopicService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PMessageTopic> queryMessageTopic(Map<String, Object> queryMap) {
		return messageTopicService.query(queryMap);
	}

	public PCompanyConfigService getCompanyConfigService() {
		return companyConfigService;
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCustomer(List entityList) {
		return customerService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCustomer(Map<String, Object> queryMap) {
		return customerService.query(queryMap);
	}

	@Transactional
	public void mergeCustomer(Map<String, Object> queryMap) {
		customerService.mergeCust(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryCustomer(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return customerService.complexQuery(conditions, queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCustomerCategory(List<CCustomerCategory> entityList) {
		return customerCategoryService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCustomerCategory(Map<String, Object> queryMap) {
		return customerCategoryService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCustomerContact(Map<String, Object> queryMap) {
		return customerContactService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveVendorCategory(List<CVendorCategory> entityList) {
		return vendorCategoryService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryVendorCategory(Map<String, Object> queryMap) {
		return vendorCategoryService.query(queryMap);
	}

	public PUser login(Map<String, Object> queryMap){
		return userService.login(queryMap);
	}

	public PUser queryCurrentUser(Map<String, Object> queryMap){
		return userService.queryCurrentUser();
	}

	public List<PUser> listOnlineUsers(){
		return userService.listOnlineUsers();
	}

	public void killOnlineUser(PUser user){
		userService.killOnlineUser(user);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List savePriceSheet(List entityList) {
		return priceSheetService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryPriceSheet(Map<String, Object> queryMap) {
		return priceSheetService.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<CPriceLine> queryPriceLine(Map<String, Object> queryMap) {
		return priceLineService.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<CPriceRecord> queryPriceRecord(Map<String, Object> queryMap) {
		return priceRecordService.query(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List complexQueryPriceSheet(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return priceSheetService.complexQuery(conditions, queryMap);
	}
	
	@Transactional
	public void updatePriceSheetStatus(Map<String, Object> queryMap){
		priceSheetService.updateStatus(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveSalesQuota(List<CSalesQuota> entityList) {
		return salesQuotaService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List querySalesQuota(Map<String, Object> queryMap) {
		return salesQuotaService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveSalesCommission(List entityList) {
		return salesCommissionService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List querySalesCommission(Map<String, Object> queryMap) {
		return salesCommissionService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List calculateSalesCommission(Map<String, Object> queryMap) {
		return salesCommissionService.calculate(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List querySalesCommissionDetail(Map<String, Object> queryMap) {
		return salesCommissionService.querySalesCommissionDetail(queryMap);
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCommission(List entityList) {
		return commissionService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCommission(Map<String, Object> queryMap) {
		return commissionService.query(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List saveCommissionItem(List entityList) {
		return commissionItemService.save(entityList);
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List queryCommissionItem(Map<String, Object> queryMap) {
		return commissionItemService.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PActionLog> complexQueryActionLog(List<FosQuery> conditions,
			Map<String, Object> queryMap) {
		return actionLogService.complexQuery(conditions, queryMap);
	}

	@Transactional
	public List<PUserSetting> saveUserSetting(List<PUserSetting> entityList) {
		return userSettingService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PUserSetting> queryUserSetting(Map<String, Object> queryMap) {
		return userSettingService.query(queryMap);
	}

	@Transactional
	public List<PUserExpePermission> saveUserExpePermission(List<PUserExpePermission> entityList) {
		return userExpePermissionService.save(entityList);
	}

	@Transactional(readOnly = true)
	public List<PUserExpePermission> queryUserExpePermission(Map<String, Object> queryMap) {
		return userExpePermissionService.query(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PUserExpePermission> queryUsepIncludeNotExist(
			Map<String, Object> queryMap) {
		return userExpePermissionService.queryIncludeNotExist(queryMap);
	}

	@Autowired
	public void setCompanyConfigService(
			PCompanyConfigService companyConfigService) {
		this.companyConfigService = companyConfigService;
	}

	public PCompanyBankAccountService getCompanyBankAccountService() {
		return companyBankAccountService;
	}

	@Autowired
	public void setCompanyBankAccountService(
			PCompanyBankAccountService companyBankAccountService) {
		this.companyBankAccountService = companyBankAccountService;
	}

	public PUserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(PUserService userService) {
		this.userService = userService;
	}

	public PFunctionService getFunctionService() {
		return functionService;
	}

	@Autowired
	public void setFunctionService(PFunctionService functionService) {
		this.functionService = functionService;
	}

	public PRoleFunctionService getRoleFunctionService() {
		return roleFunctionService;
	}

	@Autowired
	public void setRoleFunctionService(PRoleFunctionService roleFunctionService) {
		this.roleFunctionService = roleFunctionService;
	}

	public PTemplateMapService getTemplateMapService() {
		return templateMapService;
	}

	@Autowired
	public void setTemplateMapService(PTemplateMapService templateMapService) {
		this.templateMapService = templateMapService;
	}

	public PTemplateService getTemplateService() {
		return templateService;
	}

	@Autowired
	public void setTemplateService(PTemplateService templateService) {
		this.templateService = templateService;
	}

	public PTemplateTypeService getTemplateTypeService() {
		return templateTypeService;
	}

	@Autowired
	public void setTemplateTypeService(PTemplateTypeService templateTypeService) {
		this.templateTypeService = templateTypeService;
	}

	public PMessageService getMessageService() {
		return messageService;
	}

	@Autowired
	public void setMessageService(PMessageService messageService) {
		this.messageService = messageService;
	}

	public CCustomerService getCustomerService() {
		return customerService;
	}

	@Autowired
	public void setCustomerService(CCustomerService customerService) {
		this.customerService = customerService;
	}

	public CCustomerCategoryService getCustomerCategoryService() {
		return customerCategoryService;
	}

	@Autowired
	public void setCustomerCategoryService(
			CCustomerCategoryService customerCategoryService) {
		this.customerCategoryService = customerCategoryService;
	}

	public CCustomerContactService getCustomerContactService() {
		return customerContactService;
	}

	@Autowired
	public void setCustomerContactService(
			CCustomerContactService customerContactService) {
		this.customerContactService = customerContactService;
	}

	public CVendorCategoryService getVendorCategoryService() {
		return vendorCategoryService;
	}

	@Autowired
	public void setVendorCategoryService(
			CVendorCategoryService vendorCategoryService) {
		this.vendorCategoryService = vendorCategoryService;
	}

	public CPriceSheetService getPriceSheetService() {
		return priceSheetService;
	}

	@Autowired
	public void setPriceSheetService(CPriceSheetService priceSheetService) {
		this.priceSheetService = priceSheetService;
	}

	public CPriceLineService getPriceLineService() {
		return priceLineService;
	}

	@Autowired
	public void setPriceLineService(CPriceLineService priceLineService) {
		this.priceLineService = priceLineService;
	}

	public CPriceRecordService getPriceRecordService() {
		return priceRecordService;
	}

	@Autowired
	public void setPriceRecordService(CPriceRecordService priceRecordService) {
		this.priceRecordService = priceRecordService;
	}

	public CSalesQuotaService getSalesQuotaService() {
		return salesQuotaService;
	}

	@Autowired
	public void setSalesQuotaService(CSalesQuotaService salesQuotaService) {
		this.salesQuotaService = salesQuotaService;
	}

	public CCommissionService getCommissionService() {
		return commissionService;
	}

	@Autowired
	public void setCommissionService(CCommissionService commissionService) {
		this.commissionService = commissionService;
	}

	public CCommissionItemService getCommissionItemService() {
		return commissionItemService;
	}

	@Autowired
	public void setCommissionItemService(
			CCommissionItemService commissionItemService) {
		this.commissionItemService = commissionItemService;
	}

	public CSalesCommissionService getSalesCommissionService() {
		return salesCommissionService;
	}

	@Autowired
	public void setSalesCommissionService(
			CSalesCommissionService salesCommissionService) {
		this.salesCommissionService = salesCommissionService;
	}

	public PTaskTypeService getTaskTypeService() {
		return taskTypeService;
	}

	@Autowired
	public void setTaskTypeService(PTaskTypeService taskTypeService) {
		this.taskTypeService = taskTypeService;
	}

	public PActionLogService getActionLogService() {
		return actionLogService;
	}

	@Autowired
	public void setActionLogService(PActionLogService actionLogService) {
		this.actionLogService = actionLogService;
	}

	public PMessageSubscribeService getMessageSubscribeService() {
		return messageSubscribeService;
	}

	@Autowired
	public void setMessageSubscribeService(
			PMessageSubscribeService messageSubscribeService) {
		this.messageSubscribeService = messageSubscribeService;
	}

	public PMessageTopicService getMessageTopicService() {
		return messageTopicService;
	}

	@Autowired
	public void setMessageTopicService(PMessageTopicService messageTopicService) {
		this.messageTopicService = messageTopicService;
	}

	public PUserSettingService getUserSettingService() {
		return userSettingService;
	}

	@Autowired
	public void setUserSettingService(PUserSettingService userSettingService) {
		this.userSettingService = userSettingService;
	}

	public PUserExpePermissionService getUserExpePermissionService() {
		return userExpePermissionService;
	}

	@Autowired
	public void setUserExpePermissionService(
			PUserExpePermissionService userExpePermissionService) {
		this.userExpePermissionService = userExpePermissionService;
	}

	
}
