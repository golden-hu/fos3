package haitai.fosws.service;

import haitai.fosws.entity.idao.IWConsignDAO;
import haitai.fosws.entity.table.WConsign;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.RowAction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WConsignService {
	@Autowired
	private IWConsignDAO dao;
	
	@Transactional
	public List<WConsign> save(List<WConsign> entityList) {
		List<WConsign> retList = new ArrayList<WConsign>();
		for (WConsign entity : entityList) {
			if (RowAction.N==entity.getRowAction()) {
				entity.setWconId(null);
				entity.setWconNo(getConsignNo());
				dao.save(entity);
				retList.add(entity);
			} else if (RowAction.M==entity.getRowAction()) {
				retList.add(dao.update(entity));
			} else if (RowAction.R==entity.getRowAction()) {
				WConsign delEntity = dao.findById(entity.getWconId());
				delEntity.setRowAction(RowAction.R);
				dao.update(delEntity);
			} else {
				throw new BusinessException("fw.row_action_null");
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

}
