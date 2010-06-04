package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITVoucherDAO;
import haitai.fos.exp.entity.table.TVoucher;
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
public class TVoucherService {
	
	private ITVoucherDAO dao = null;
	
	@Transactional
	public List<TVoucher> save(List<TVoucher> entityList) {
		List<TVoucher> retList = new ArrayList<TVoucher>();
		for (TVoucher entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				TVoucher delEntity = dao.findById(entity.getVoucId());
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
	public List<TVoucher> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	public ITVoucherDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ITVoucherDAO dao) {
		this.dao = dao;
	}
}
