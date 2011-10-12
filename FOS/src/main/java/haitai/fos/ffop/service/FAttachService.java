package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFAttachDAO;
import haitai.fos.ffop.entity.table.FAttach;
import haitai.fos.sys.entity.table.PTemplate;
import haitai.fos.sys.service.PTemplateService;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.FileUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.StringUtil;

import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.fileupload.FileItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FAttachService {
	private IFAttachDAO dao = null;

	private static FosLogger logger = new FosLogger(FAttachService.class);
	
	public IFAttachDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IFAttachDAO dao) {
		this.dao = dao;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FAttach> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
	
	@Transactional
	public List<FAttach> save(List<FAttach> entityList) {
		List<FAttach> retList = new ArrayList<FAttach>();
		for (FAttach entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setAttachId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {				
				FAttach dbEntity = dao.findById(entity.getAttachId());				
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				FAttach delEntity = dao.findById(entity.getAttachId());
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
	public void uploadAttach(Map<String, String> paramMap) {
		String uploadDir = ConfigUtil.getRealAttachDir();
		File f = new File(uploadDir);
		if (!f.exists()) {
			f.mkdirs();
		}

		List<FileItem> items = SessionManager.getFileItems();
		Iterator iter = items.iterator();
		while (iter.hasNext()) {
			FileItem item = (FileItem) iter.next();
			String oriFileName = item.getName();
			int beginIdex = oriFileName.lastIndexOf(".");			
			String extName = oriFileName.substring(beginIdex);			
			FAttach fa = new FAttach();
			fa.setRowAction(ConstUtil.ROW_N);
			fa.setAttachFileName(oriFileName);
			dao.save(fa);
			String filename = fa.getAttachId() + extName;
			try {
				item.write(new File(uploadDir + ConstUtil.DIR_SEP + filename));
				
			} catch (Exception e) {
				logger.error("file upload error", e);
			}
		}
	}
	
	public void downAttach(Map<String, String> paramMap) {
		String sid = (String) paramMap.get(ConstUtil.ATTACH_PARAM_ID);
		if(StringUtil.isNotBlank(sid)){
			Integer id = Integer.parseInt(sid);
			FAttach fa = dao.findById(id);	
			String oriFileName = fa.getAttachFileName();
			int beginIdex = oriFileName.lastIndexOf(".");
			String extName = oriFileName.substring(beginIdex);
			
			String filename = sid + extName;
			
			File f = new File(ConfigUtil.getRealAttachDir()+ ConstUtil.DIR_SEP + filename);
			if (!f.exists()) {
				throw new BusinessException(MessageUtil.SYS_FILE_NOT_EXIST);
			}
			
			paramMap.put(ConstUtil.REDIRECT_URL, filename);		
		}		
	}
}
