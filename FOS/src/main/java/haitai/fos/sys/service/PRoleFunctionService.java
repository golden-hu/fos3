package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPRoleFunctionDAO;
import haitai.fos.sys.entity.table.PRoleFunction;
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
public class PRoleFunctionService {

	private IPRoleFunctionDAO dao = null;

	@Transactional
	public List<PRoleFunction> save(List<PRoleFunction> entityList) {
		List<PRoleFunction> retList = new ArrayList<PRoleFunction>();
		for (PRoleFunction entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setRofuId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				dao.delete(entity.getRofuId());
			} else {
				throw new BusinessException(MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PRoleFunction> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	public IPRoleFunctionDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPRoleFunctionDAO dao) {
		this.dao = dao;
	}
}
