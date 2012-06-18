package haitai.fos.ffop.service;

import haitai.fos.ffop.entity.table.FContainerTrace;
import haitai.fos.ffop.entity.idao.IFContainerTraceDAO;

import haitai.fw.exception.BusinessException;
import haitai.fw.util.RowAction;
import haitai.fw.util.TimeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class FContainerTraceService {
	@Autowired
	private IFContainerTraceDAO dao;

	@SuppressWarnings("unchecked")
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		for (Object obj : entityList) {
			if (obj instanceof FContainerTrace) {
				FContainerTrace entity = (FContainerTrace) obj;
				if (entity.getRowAction() == RowAction.N) {
					entity.setCotrId(null);
					dao.save(entity);
					retList.add(entity);
				} else if (entity.getRowAction() == RowAction.M) {
					retList.add(dao.update(entity));
				} else if (entity.getRowAction() == RowAction.R) {
					FContainerTrace delEntity = dao.findById(entity.getCotrId());
					delEntity.setRowAction(RowAction.R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<FContainerTrace> query(Map queryMap) {
		List retList = new ArrayList();
		retList.addAll(dao.findByProperties(queryMap));
		return retList;
	}

}
