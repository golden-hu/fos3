package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPFunctionDAO;
import haitai.fos.sys.entity.table.PFunction;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.RowAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PFunctionService {
	@Autowired
	private IPFunctionDAO dao;

	@Transactional
	public List<PFunction> save(List<PFunction> entityList) {
		List<PFunction> retList = new ArrayList<PFunction>();
		for (PFunction entity : entityList) {
			if (entity.getRowAction() == RowAction.N) {
				dao.save(entity);
				retList.add(entity);
			} else if (entity.getRowAction() == RowAction.M) {
				retList.add(dao.update(entity));
			} else {
				throw new BusinessException("fw.row_action_null");
			}
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<PFunction> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}
}
