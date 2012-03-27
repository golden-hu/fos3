package haitai.fos.ws.service;

import haitai.fos.sys.entity.table.CCustomer;
import haitai.fos.sys.service.CCustomerService;
import haitai.fos.ws.entity.idao.IWUserDAO;
import haitai.fos.ws.entity.table.WUser;
import haitai.fw.exception.BusinessException;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ActionLogUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.CryptoUtil;
import haitai.fw.util.RowAction;
import haitai.fw.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WUserService {
	@Autowired
	private IWUserDAO dao;
	@Autowired
	private CCustomerService customerService;

	@SuppressWarnings("unchecked")
	@Transactional(readOnly = true)
	public List<WUser> query(Map queryMap) {
		return dao.findByProperties(queryMap);
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<CCustomer> saveCustomer(List<CCustomer> entityList, Map<String, Object> queryMap) {
		List<CCustomer> retList = customerService.save(entityList);
		String wusrId = (String) queryMap.get("wusrId");
		if (StringUtil.isNotBlank(wusrId)) {
			WUser user = dao.findById(Integer.parseInt(wusrId));
			Integer custId = retList.get(0).getCustId();
			user.setCustId(custId);
			user.setWusrStatus(ConstUtil.TrueShort);
			dao.update(user);
		}
		return retList;
	}
	
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

	@Transactional(readOnly = true)
	public WUser register(Map<String, Object> queryMap) {
		String wusrName = (String) queryMap.get("wusrName");
		String wusrPassword = (String) queryMap.get("wusrPassword");
		String wusrFirstName= (String) queryMap.get("wusrFirstName");
		String wusrTitle= (String) queryMap.get("wusrTitle");
		String wusrDept= (String) queryMap.get("wusrDept");
		String wusrEmail= (String) queryMap.get("wusrEmail");
		String wusrCompanyName= (String) queryMap.get("wusrCompanyName");
		String wusrTel= (String) queryMap.get("wusrTel");
		String wusrMobile= (String) queryMap.get("wusrMobile");
		String compCode= (String) queryMap.get("compCode");
		
		wusrPassword = CryptoUtil.MD5Encode(wusrPassword);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("wusrName", wusrName);
		
		List<WUser> userList = dao.findByProperties(map);
		if (userList != null && userList.size() > 0) {
			throw new BusinessException("ws.username.exist");
		}
		
		
		WUser user = new WUser();
		user.setCompCode(compCode);
		user.setWusrCompanyName(wusrCompanyName);
		user.setWusrDept(wusrDept);
		user.setWusrEmail(wusrEmail);
		user.setWusrFirstName(wusrFirstName);
		user.setWusrMobile(wusrMobile);
		user.setWusrName(wusrName);
		user.setWusrPassword(wusrPassword);
		user.setWusrTel(wusrTel);
		user.setWusrTitle(wusrTitle);
		user.setRowAction(RowAction.N);
		
		
		return user;
	}
	
	private void setLoginInfo(WUser entity) {		
		SessionManager.setAttr("WUID", entity.getWusrId());
		SessionManager.setAttr("WUSERNAME", entity.getWusrName());		
		SessionManager.setAttr(SessionKeyType.COMPCODE, entity.getCompCode());
		ActionLogUtil.log();
	}
}
