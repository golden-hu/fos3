package haitai.fosws.service;

import haitai.fosws.entity.idao.IWUserDAO;
import haitai.fosws.entity.table.WUser;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ActionLogUtil;
import haitai.fw.util.CryptoUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WUserService {
	@Autowired
	private IWUserDAO dao;

	@Transactional
	public List<WUser> save(List<WUser> entityList) {
		List<WUser> retList = new ArrayList<WUser>();
		for (WUser entity : entityList) {
			if (RowAction.N==entity.getRowAction()) {
				entity.setWusrId(null);
				entity.setWusrPassword(CryptoUtil.MD5Encode(entity
						.getWusrPassword()));
				SessionManager.setAttr(SessionKeyType.COMPCODE, entity.getCompCode());
				dao.save(entity);
				retList.add(entity);
				setLoginInfo(entity);
			} else if (RowAction.M==entity.getRowAction()) {
				WUser retEntity = dao.findById(entity.getWusrId());
				retList.add(dao.update(entity));
			} else if (RowAction.R==entity.getRowAction()) {
				WUser delEntity = dao.findById(entity.getWusrId());
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
	public List<WUser> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public WUser login(Map<String, Object> queryMap) {
		String wusrName = (String) queryMap.get("wusrName");
		String wusrPassword = (String) queryMap.get("wusrPassword");
		if (StringUtil.isBlank(wusrName) || StringUtil.isBlank(wusrPassword)) {
			throw new BusinessException("fw.login.fail");
		}
		wusrPassword = CryptoUtil.MD5Encode(wusrPassword);
		queryMap.put("wusrPassword", wusrPassword);
		List<WUser> userList = dao.findByProperties(queryMap);
		if (userList != null && userList.size() == 1) {
			WUser user = userList.get(0);
			setLoginInfo(user);
			return user;
		} else {
			throw new BusinessException("fw.login.fail");
		}
	}

	private void setLoginInfo(WUser entity) {
		SessionManager.setAttr(SessionKeyType.UID, entity.getWusrId());
		SessionManager.setAttr(SessionKeyType.USERNAME, entity.getWusrName());
		SessionManager.setAttr(SessionKeyType.COMPCODE, entity.getCompCode());
		SessionManager.setAttr(SessionKeyType.USER, entity);
		ActionLogUtil.log();
	}
}
