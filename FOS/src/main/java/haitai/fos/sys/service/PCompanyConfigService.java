package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPCompanyConfigDAO;
import haitai.fos.sys.entity.table.PCompanyConfig;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PCompanyConfigService {
	
	private IPCompanyConfigDAO dao = null;
	
	@Transactional
	public List<PCompanyConfig> save(List<PCompanyConfig> entityList) {
		List<PCompanyConfig> retList = new ArrayList<PCompanyConfig>();
		for (PCompanyConfig entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setCocoId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				PCompanyConfig delEntity = dao.findById(entity.getCocoId());
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
	public List<PCompanyConfig> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	

	@Transactional(readOnly = true)
	public String queryByCode(String code) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put(ConstUtil.COMCF_KEY, code);
		List<PCompanyConfig> list = query(queryMap);
		if(list.size() == 1) {
			return list.get(0).getCocoValue();
		}
		return null;
	}	

	public IPCompanyConfigDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPCompanyConfigDAO dao) {
		this.dao = dao;
	}
}
