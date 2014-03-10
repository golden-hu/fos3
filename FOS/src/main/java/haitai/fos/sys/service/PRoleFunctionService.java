package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPRoleFunctionDAO;
import haitai.fos.sys.entity.table.PRoleFunction;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PRoleFunctionService {
	@Autowired
	private IPRoleFunctionDAO dao;

	@Transactional
	public List<PRoleFunction> save(List<PRoleFunction> entityList) {
		List<PRoleFunction> retList = new ArrayList<PRoleFunction>();
		for (PRoleFunction entity : entityList) {
			if (entity.getRowAction() == RowAction.N) {
				entity.setRofuId(null);
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
				retList.add(dao.update(entity));
			} else if (entity.getRowAction() == RowAction.R) {
				dao.delete(entity.getRofuId());
			} else {
				throw new BusinessException("fw.row_action_null");
			}
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PRoleFunction> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
