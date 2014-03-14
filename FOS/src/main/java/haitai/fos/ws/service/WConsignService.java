package haitai.fos.ws.service;

import haitai.fos.ffop.entity.table.FConsign;
import haitai.fos.ffop.service.FConsignService;
import haitai.fos.ws.entity.idao.IWConsignDAO;
import haitai.fos.ws.entity.table.WConsign;
import haitai.fos.ws.entity.table.WUser;
import haitai.fw.entity.FosQuery;
import haitai.fw.exception.BusinessException;
import haitai.fw.serial.SerialFactory;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.RowAction;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WConsignService {
	@Autowired
	private IWConsignDAO dao;
	@Autowired
	private FConsignService consignService;

	@SuppressWarnings("unchecked")
	@Transactional
	public List<FConsign> saveRealConsign(List<FConsign> entityList, Map<String, Object> queryMap) {
		Integer wconId = null;
		if (entityList != null && entityList.size() > 0)
			wconId = entityList.get(0).getWconId();
		List<FConsign> retList = consignService.save(entityList);
		if (wconId != null) {
			WConsign wconsign = dao.findById(wconId);
			FConsign consign = retList.get(0);
			wconsign.setConsId(consign.getConsId());
			wconsign.setConsNo(consign.getConsNo());
			wconsign.setConsStatus(ConstUtil.TrueShort);
			dao.update(wconsign);
		}
		return retList;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<WConsign> complexQuery(List<FosQuery> conditions, Map queryMap) {
		List<WConsign> retList = new ArrayList<WConsign>();
		//queryMap.put("wusrId", SessionManager.getStringAttr("WUID"));
		List<Object> objList = dao.complexQuery(conditions, queryMap);
		for (Object obj : objList) {
			if (obj instanceof Object[]) {
				Object[] objArray = (Object[]) obj;
				WConsign consign = (WConsign) objArray[0];
				WUser user = (WUser) objArray[1];
				BeanUtils.copyProperties(user, consign);
				retList.add(consign);
			}
		}
		return retList;
	}
	
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

	@SuppressWarnings({"unchecked", "rawtypes"})
	@Transactional(readOnly = true)
	public List<WConsign> query(Map queryMap) {
		//queryMap.put("wusrId", SessionManager.getStringAttr("WUID"));
		return dao.findByProperties(queryMap);
	}

	private String getConsignNo() {
		Map<String, String> map = new HashMap<String, String>();
		String no = SerialFactory.getSerial("ws_consign_no", map);
		return no;
	}
}
