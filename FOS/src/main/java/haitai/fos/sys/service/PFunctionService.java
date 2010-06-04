package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPFunctionDAO;
import haitai.fos.sys.entity.table.PFunction;
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
public class PFunctionService {
	
	private IPFunctionDAO dao = null;
	
	@Transactional
	public List<PFunction> save(List<PFunction> entityList) {
		List<PFunction> retList = new ArrayList<PFunction>();
		for (PFunction entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PFunction> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	

	public IPFunctionDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPFunctionDAO dao) {
		this.dao = dao;
	}
}
