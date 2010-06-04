package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPTemplateMapDAO;
import haitai.fos.sys.entity.table.PTemplateMap;
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
public class PTemplateMapService {
	
	private IPTemplateMapDAO dao = null;
	
	@Transactional
	public List<PTemplateMap> save(List<PTemplateMap> entityList) {
		List<PTemplateMap> retList = new ArrayList<PTemplateMap>();
		for (PTemplateMap entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setTetyId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				PTemplateMap delEntity = dao.findById(entity.getTetyId());
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
	public List<PTemplateMap> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	

	public IPTemplateMapDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPTemplateMapDAO dao) {
		this.dao = dao;
	}
}
