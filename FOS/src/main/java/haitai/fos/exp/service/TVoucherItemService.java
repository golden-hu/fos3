package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITVoucherItemDAO;
import haitai.fos.exp.entity.table.TVoucherItem;
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
public class TVoucherItemService {
	
	private ITVoucherItemDAO dao = null;
	
	@Transactional
	public List<TVoucherItem> save(List<TVoucherItem> entityList) {
		List<TVoucherItem> retList = new ArrayList<TVoucherItem>();
		for (TVoucherItem entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				TVoucherItem delEntity = dao.findById(entity.getVoitId());
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
	public List<TVoucherItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	public ITVoucherItemDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ITVoucherItemDAO dao) {
		this.dao = dao;
	}
}
