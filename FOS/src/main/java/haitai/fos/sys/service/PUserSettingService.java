package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.IPUserSettingDAO;
import haitai.fos.sys.entity.table.PUserSetting;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ConstUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PUserSettingService {
	
	private IPUserSettingDAO dao = null;
	
	@Transactional
	public List<PUserSetting> save(List<PUserSetting> entityList) {
		List<PUserSetting> retList = new ArrayList<PUserSetting>();
		for (PUserSetting entity : entityList) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("userId", SessionManager.getAttr(SessionKeyType.UID));
			queryMap.put("usseName", entity.getUsseName());
			List<PUserSetting> list = dao.findByProperties(queryMap);
			if(list.size() == 1) {
				PUserSetting dbItem = list.get(0);
				dbItem.setUsseValue(entity.getUsseValue());
				dbItem.setRowAction(ConstUtil.ROW_M);
				retList.add(dao.update(dbItem));
			}else {
				entity.setUsseId(null);
				entity.setUserId((Integer) SessionManager.getAttr(SessionKeyType.UID));
				entity.setRowAction(ConstUtil.ROW_N);
				dao.save(entity);
				retList.add(entity);
			}
	}
		return retList;
	}

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<PUserSetting> query(Map queryMap) {
		queryMap.put("userId", SessionManager.getAttr(SessionKeyType.UID));
		return dao.findByProperties(queryMap);
	}	

	public IPUserSettingDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IPUserSettingDAO dao) {
		this.dao = dao;
	}
}
