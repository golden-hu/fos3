package haitai.fos.exp.service;

import haitai.fos.exp.entity.idao.ITInvoiceItemDAO;
import haitai.fos.exp.entity.table.TInvoiceItem;
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
public class TInvoiceItemService {
	
	private ITInvoiceItemDAO dao = null;
	
	@Transactional
	public List<TInvoiceItem> save(List<TInvoiceItem> entityList) {
		List<TInvoiceItem> retList = new ArrayList<TInvoiceItem>();
		for (TInvoiceItem entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				TInvoiceItem delEntity = dao.findById(entity.getInitId());
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
	public List<TInvoiceItem> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	public ITInvoiceItemDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ITInvoiceItemDAO dao) {
		this.dao = dao;
	}
}
