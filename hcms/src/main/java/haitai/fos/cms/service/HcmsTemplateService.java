package haitai.fos.cms.service;

import haitai.fos.cms.entity.idao.IHcmsTemplateDAO;
import haitai.fos.cms.entity.table.HcmsTemplate;
import haitai.fw.exception.BusinessException;
import haitai.fos.cms.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.FileUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.StringUtil;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class HcmsTemplateService {
	private IHcmsTemplateDAO dao = null;

	@Transactional
	public List<HcmsTemplate> save(List<HcmsTemplate> consignList) {
		List<HcmsTemplate> retList = new ArrayList<HcmsTemplate>();
		for (HcmsTemplate entity : consignList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTempId(null);
				dao.save(entity);
				saveJsp(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				saveJsp(entity);
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				HcmsTemplate delEntity = dao.findById(entity.getTempId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<HcmsTemplate> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public void saveJsp(Map<String, Object> queryMap){
		Integer tempId = Integer.parseInt((String) queryMap.get("tempId"));
		HcmsTemplate template = dao.findById(tempId);
		saveJsp(template);
	}

	public void saveJsp(HcmsTemplate template){
		String dir = ConfigUtil.getRealCmsTemplateDir();
		FileUtil.createDirs(dir);
		String fileName = dir + ConstUtil.DIR_SEP + template.getTempId()
				+ ConstUtil.STRING_DOT + "jsp";
		OutputStream bos = null;
		try {
			bos = new FileOutputStream(fileName);
			String include = "<%@ page contentType=\"text/html;encoding=utf-8\" ";
			include += "pageEncoding=\"utf-8\" isELIgnored=\"false\" %>\n";
			include += "<%@ taglib uri=\"/WEB-INF/cms.tld\" prefix=\"cms\"%>\n";
			byte[] b = include.getBytes();
			bos.write(b);

			String content = template.getTempContent();
			content = StringUtil.unescape(content);
			b = content.getBytes();
			bos.write(b);
			bos.close();
		} catch (Exception e) {
			throw new BusinessException(MessageUtil.FW_ERROR_UNKNOWN, e);
		} finally {
			if (bos != null) {
				try {
					bos.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
	}
	
	public IHcmsTemplateDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IHcmsTemplateDAO dao) {
		this.dao = dao;
	}
}
