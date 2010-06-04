package haitai.fos.cms.controller;

import haitai.fos.cms.entity.table.HcmsResource;
import haitai.fos.cms.entity.table.HcmsTemplate;
import haitai.fos.cms.service.HcmsResourceService;
import haitai.fos.cms.service.HcmsTemplateService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("CmsController")
public class CmsController {
	private HcmsResourceService resourceService;
	private HcmsTemplateService templateService;
	
	@Transactional
	public List<HcmsResource> cutImage(Map<String, Object> queryMap){
		return resourceService.cutImage(queryMap);
	}
	
	@Transactional
	public List<HcmsResource> uploadFile(Map<String, Object> queryMap){
		return resourceService.upload(queryMap);
	}
	
	@Transactional
	public HcmsResource publish(Map<String, String> queryMap){
		return resourceService.publish(queryMap);
	}
	
	@Transactional
	public List<HcmsResource> saveResource(List<HcmsResource> entityList){
		return resourceService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<HcmsResource> queryResource(Map<String, Object> queryMap){
		return resourceService.query(queryMap);
	}
	
	@Transactional
	public List<HcmsTemplate> saveTemplate(List<HcmsTemplate> entityList){
		return templateService.save(entityList);
	}
	
	@Transactional(readOnly=true)
	public List<HcmsTemplate> queryTemplate(Map<String, Object> queryMap){
		return templateService.query(queryMap);
	}

	public HcmsResourceService getResourceService() {
		return resourceService;
	}

	@Autowired
	public void setResourceService(HcmsResourceService resourceService) {
		this.resourceService = resourceService;
	}

	public HcmsTemplateService getTemplateService() {
		return templateService;
	}

	@Autowired
	public void setTemplateService(HcmsTemplateService templateService) {
		this.templateService = templateService;
	}
	
}
