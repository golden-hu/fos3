package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.idao.IFAttachDAO;
import haitai.fos.ffop.entity.table.FAttach;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;
import org.apache.commons.fileupload.FileItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.util.List;
import java.util.Map;

@Service
public class FAttachService {
	@Autowired
	private IFAttachDAO dao;

	private static FosLogger logger = new FosLogger(FAttachService.class);

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<FAttach> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional
	public List<FAttach> save(List<FAttach> entityList) {
		return dao.saveByRowAction(entityList);
	}

	@Transactional
	public void removeAttach(List<FAttach> entityList) {
		for (FAttach entity : entityList) {
			FAttach delEntity = dao.findById(entity.getAttachId());
			delEntity.setRowAction(RowAction.R);
			dao.update(delEntity);
		}
	}

	@Transactional
	public void uploadAttach(Map<String, String> paramMap) {
		String uploadDir = ConfigUtil.getRealAttachDir();
		String consId = paramMap.get("consId");
		String consNo = paramMap.get("consNo");
	    String securityFlag = paramMap.get("securityFlag");
	    if(securityFlag.equals("1")){
	    	uploadDir = ConfigUtil.getRealSecurityAttachDir();
	    }

		File f = new File(uploadDir);
		if (!f.exists()) {
			f.mkdirs();
		}

		List<FileItem> items = SessionManager.getFileItems();
		for (FileItem item : items) {
			String oriFileName = item.getName();
			//int beginIdex = oriFileName.lastIndexOf(".");			
			//String extName = oriFileName.substring(beginIdex);			
			FAttach fa = new FAttach();
			fa.setRowAction(RowAction.N);
			fa.setAttachFileName(oriFileName);
			fa.setConsId(Integer.parseInt(consId));
			fa.setConsNo(consNo);
			fa.setSecurityFlag(Short.parseShort(securityFlag));

			dao.save(fa);
			//String filename = fa.getAttachId() + extName;
			try {
				item.write(new File(uploadDir + ConstUtil.DIR_SEP + oriFileName));

			} catch (Exception e) {
				logger.error("file upload error", e);
			}
		}
	}

	public void downAttach(Map<String, String> paramMap) {
		String sid = paramMap.get(ConstUtil.ATTACH_PARAM_ID);
		String securityFlag =paramMap.get("securityFlag");
		if (StringUtil.isNotBlank(sid)) {
			Integer id = Integer.parseInt(sid);
			FAttach fa = dao.findById(id);
			String oriFileName = fa.getAttachFileName();

			File f = new File(ConfigUtil.getRealAttachDir() + ConstUtil.DIR_SEP + oriFileName);
			String filename = ConfigUtil.getAttachDir() + ConstUtil.DIR_SEP + StringUtil.utf82ascii(oriFileName);
			
			if("1".equals(securityFlag)){
				f = new File(ConfigUtil.getRealSecurityAttachDir() + ConstUtil.DIR_SEP + oriFileName);
				filename = ConfigUtil.getSecurityAttachDir() + ConstUtil.DIR_SEP + StringUtil.utf82ascii(oriFileName);
			}
			if (!f.exists()) {
				throw new BusinessException("sys.file.not_exist");
			}			

			paramMap.put(ConstUtil.REDIRECT_URL, filename);
		}
	}
}
