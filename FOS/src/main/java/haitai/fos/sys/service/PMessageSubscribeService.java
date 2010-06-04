package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPMessageSubscribeDAO;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PMessageSubscribeService {
	
	private IPMessageSubscribeDAO dao = null;
	private PMessageService messageService = null;
	
	@Transactional
	public List<PMessageSubscribe> save(List<PMessageSubscribe> entityList) {
		List<PMessageSubscribe> retList = new ArrayList<PMessageSubscribe>();
		for (PMessageSubscribe entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setMesuId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				PMessageSubscribe delEntity = dao.findById(entity.getMesuId());
				delEntity.setRowAction(ConstUtil.ROW_R);
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		messageService.clearSubscribeMap();
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PMessageSubscribe> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	

	public IPMessageSubscribeDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPMessageSubscribeDAO dao) {
		this.dao = dao;
	}

	public PMessageService getMessageService() {
		return messageService;
	}

	@Autowired
	public void setMessageService(PMessageService messageService) {
		this.messageService = messageService;
	}
	
}
