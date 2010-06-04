package haitai.fos.ffse.service;

import haitai.fos.ffse.entity.idao.ISInvoiceNoDAO;
import haitai.fos.ffse.entity.table.SInvoiceNo;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.TimeUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SInvoiceNoService {
	
	private ISInvoiceNoDAO dao = null;
	
	@Transactional
	public List<SInvoiceNo> save(List<SInvoiceNo> entityList) {
		List<SInvoiceNo> retList = new ArrayList<SInvoiceNo>();
		for (SInvoiceNo entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setInnoId(null);
				entity.setInnoNextNo(entity.getInnoStartNo());
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				SInvoiceNo delEntity = dao.findById(entity.getInnoId());
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
	public List<SInvoiceNo> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}	
	
	/**
	 * 更新记录的启用标志, 同时把其他记录从启用状态->未启用状态
	 * @param queryMap
	 */
	public void updateActiveFlag(Map<String, Object> queryMap){
		Integer id = Integer.parseInt((String) queryMap.get("innoId"));
		queryMap.clear();
		queryMap.put("active", ConstUtil.TrueStr);
		List<SInvoiceNo> list = dao.findByProperties(queryMap);
		for (SInvoiceNo item : list) {
			item.setActive(ConstUtil.FalseShort);
			dao.update(item);
		}
		SInvoiceNo entity = dao.findById(id);
		entity.setActive(ConstUtil.TrueShort);
		entity.setInnoStartDate(TimeUtil.getNow());
		dao.update(entity);
	}
	
	public ISInvoiceNoDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(ISInvoiceNoDAO dao) {
		this.dao = dao;
	}
}
