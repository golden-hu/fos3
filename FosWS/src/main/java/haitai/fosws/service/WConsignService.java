package haitai.fosws.service;

import haitai.fosws.entity.idao.IWConsignDAO;
import haitai.fosws.entity.table.WConsign;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
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
public class WConsignService {
	private IWConsignDAO dao = null;
	
	@Transactional
	public List<WConsign> save(List<WConsign> entityList) {
		List<WConsign> retList = new ArrayList<WConsign>();
		for (WConsign entity : entityList) {
			if (ConstUtil.ROW_N
					.equalsIgnoreCase(entity.getRowAction())) {
				entity.setWconId(null);
				entity.setWconNo(getConsignNo());
				dao.save(entity);
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity
					.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity
					.getRowAction())) {
				WConsign delEntity = dao.findById(entity.getWconId());
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
	public List<WConsign> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	private String getConsignNo() {
		Map<String, String> map = new HashMap<String, String>();
		String no = SerialFactory.getSerial("ws_consign_no", map);
		return no;
	}

	public IWConsignDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IWConsignDAO dao) {
		this.dao = dao;
	}
}
