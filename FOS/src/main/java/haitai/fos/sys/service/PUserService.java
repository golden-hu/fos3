package haitai.fos.sys.service;

import haitai.fos.sys.entity.idao.*;
import haitai.fos.sys.entity.table.*;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class PUserService {
	private static Map<Integer, Object[]> onlineMap = new ConcurrentHashMap<Integer, Object[]>();
	@Autowired
	private IPUserDAO dao;
	@Autowired
	private IPRoleDAO roleDao;
	@Autowired
	private IPGroupDAO groupDao;
	@Autowired
	private IPGroupUserDAO groupUserDao;
	@Autowired
	private IPUserRoleDAO userRoleDao;
	@Autowired
	private IPRoleFunctionDAO roleFunctionDao;
	@Autowired
	private LicenseUtil licenseUtil;
	@Autowired
	@Qualifier(value = "appConfig")
	private Properties appConfig;
	private static FosLogger logger = new FosLogger(PUserService.class);

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Transactional
	public List save(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();

		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof PUser) {
				PUser entity = (PUser) obj;
				// 保存旧id, 对于新增的对象, id为前台传递的负数
				Integer oldId = entity.getUserId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					licenseUtil.checkUserAvailable();
					entity.setUserId(null);
					entity.setUserPassword(CryptoUtil.MD5Encode(entity.getUserPassword()));
					entity.setUserPasswordModifyDate(TimeUtil.getNow());
					dao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					PUser retEntity = dao.findById(entity.getUserId());
					// 不修改密码, 有单独修改密码服务
					entity.setUserPassword(retEntity.getUserPassword());
					retList.add(dao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					PUser delEntity = dao.findById(entity.getUserId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					dao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				// 主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getUserId());
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof PUserRole) {
				PUserRole entity = (PUserRole) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setUsroId(null);
					// 前台传的id(负数)->后台生成id
					entity.setUserId(NumberUtil.frontId2DbId(idMap, entity.getUserId()));
					userRoleDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(userRoleDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					userRoleDao.delete(entity.getUsroId());
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Transactional
	public List saveGroup(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();

		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof PGroup) {
				PGroup entity = (PGroup) obj;
				entity.setCompCode(SessionManager.getStringAttr(SessionKeyType.COMPCODE));
				// 保存旧id, 对于新增的对象, id为前台传递的负数
				Integer oldId = entity.getGrouId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setGrouId(null);
					groupDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(groupDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					PGroup delEntity = groupDao.findById(entity.getGrouId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					groupDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				// 主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getGrouId());
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof PGroupUser) {
				PGroupUser entity = (PGroupUser) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setGrusId(null);
					// 前台传的id(负数)->后台生成id
					entity.setGrouId(NumberUtil.frontId2DbId(idMap, entity.getGrouId()));
					groupUserDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(groupUserDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					groupUserDao.delete(entity.getGrusId());
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Transactional
	public List saveRole(List entityList) {
		List retList = new ArrayList();
		Map<Integer, Integer> idMap = new HashMap<Integer, Integer>();

		// handle parent first
		for (Object obj : entityList) {
			if (obj instanceof PRole) {
				PRole entity = (PRole) obj;
				// 保存旧id, 对于新增的对象, id为前台传递的负数
				Integer oldId = entity.getRoleId();
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setRoleId(null);
					roleDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(roleDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					PRole delEntity = roleDao.findById(entity.getRoleId());
					delEntity.setRowAction(ConstUtil.ROW_R);
					roleDao.update(delEntity);
				} else {
					throw new BusinessException("fw.row_action_null");
				}
				// 主子表关联的话, 需要前台传的id(负数)->后台生成id的一个映射关系
				idMap.put(oldId, entity.getRoleId());
			}
		}

		// handle child
		for (Object obj : entityList) {
			if (obj instanceof PRoleFunction) {
				PRoleFunction entity = (PRoleFunction) obj;
				if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
					entity.setRofuId(null);
					// 前台传的id(负数)->后台生成id
					entity.setRoleId(NumberUtil.frontId2DbId(idMap, entity.getRoleId()));
					roleFunctionDao.save(entity);
					retList.add(entity);
				} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
					retList.add(roleFunctionDao.update(entity));
				} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
					roleFunctionDao.delete(entity.getRofuId());
				} else {
					throw new BusinessException("fw.row_action_null");
				}
			}
		}
		return retList;
	}

	@Transactional
	public void updatePassword(Map<String, Object> queryMap) {
		// Integer userId = Integer.parseInt((String) queryMap.get("userId"));
		Integer userId = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		String oldPassword = (String) queryMap.get("oldPassword");
		String newPassword = (String) queryMap.get("newPassword");
		String newPassword2 = (String) queryMap.get("newPassword2");

		if (newPassword != null && newPassword.equals(newPassword2)) {
			PUser user = dao.findById(userId);
			if (oldPassword != null && CryptoUtil.MD5Encode(oldPassword).equals(user.getUserPassword())) {
				user.setUserPassword(CryptoUtil.MD5Encode(newPassword));
				user.setUserPasswordModifyDate(TimeUtil.getNow());
				dao.update(user);
			} else {
				throw new BusinessException("the old password not match");
			}
		} else {
			throw new BusinessException("the two new password not match");
		}
	}

	@Transactional
	public void updatePasswordByAdmin(Map<String, Object> queryMap) {
		Integer userId = Integer.parseInt((String) queryMap.get("userId"));
		String newPassword = (String) queryMap.get("newPassword");
		String newPassword2 = (String) queryMap.get("newPassword2");

		if (newPassword != null && newPassword.equals(newPassword2)) {
			PUser user = dao.findById(userId);
			user.setUserPassword(CryptoUtil.MD5Encode(newPassword));
			user.setUserPasswordModifyDate(TimeUtil.getNow());
			dao.update(user);
		} else {
			throw new BusinessException("the two new password not match");
		}
	}

	@SuppressWarnings("rawtypes")
	@Transactional(readOnly = true)
	public PUser login(Map<String, Object> queryMap) {
		// String compCode = (String) queryMap.get("compCode");
		String userLoginName = (String) queryMap.get("userLoginName");
		String userPassword = (String) queryMap.get("userPassword");
		if (StringUtil.isBlank(userLoginName) || StringUtil.isBlank(userPassword)) {
			throw new BusinessException("fw.login.fail");
		}
		userPassword = CryptoUtil.MD5Encode(userPassword);
		List<PUser> userList = dao.queryByNameOrEmail(userLoginName, userPassword);
		if (userList != null && userList.size() == 1) {
			PUser user = userList.get(0);
			if (ConstUtil.FalseShort.equals(user.getActive()))
				throw new BusinessException("fw.login.user_deactived");
			checkPasswordExpire(user);
			if (ConstUtil.TrueStr.equals(appConfig.getProperty(ConstUtil.CONFIG_CHECK_USER_REPEAT_LOGIN))) {
				checkRepeatLogin(user);
			}
			SessionManager.setAttr(SessionKeyType.UID, user.getUserId());
			SessionManager.setAttr(SessionKeyType.GID, user.getUserDefaultGroup());
			SessionManager.setAttr(SessionKeyType.USERNAME, user.getUserName());
			SessionManager.setAttr(SessionKeyType.COMPCODE, user.getCompCode());
			SessionManager.setAttr(SessionKeyType.USER, user);

			licenseUtil.checkLicense();

			List objList = dao.queryFuncCode();
			StringBuilder sb = new StringBuilder();
			for (Object obj : objList) {
				if (obj instanceof String) {
					sb.append((String) obj).append(ConstUtil.COMMA);
				}
			}
			user.setFuncCode(sb.toString());
			ActionLogUtil.log();
			return user;
		} else {
			throw new BusinessException("fw.login.fail");
		}
	}

	public static void checkRepeatLogin() {
		PUser user = (PUser) SessionManager.getAttr(SessionKeyType.USER);
		checkRepeatLogin(user);
	}

	public static void checkRepeatLogin(PUser user) {
		String ip = (String) SessionManager.getAttr(SessionKeyType.HOSTNAME);
		Integer id = user.getUserId();
		if (!onlineMap.containsKey(id)) {
			onlineMap.put(id, new Object[] { user.getUserName(), ip, TimeUtil.getMillis(),user.getCompCode() });
		} else if (!((String) onlineMap.get(id)[1]).equalsIgnoreCase(ip)) {
			throw new BusinessException("fw.login.repeat");
		} else {
			onlineMap.get(id)[2] = TimeUtil.getMillis();
			logger.info(onlineMap.get(id)[2]);
		}
	}

	public void clearTimeoutUsers() {
		for (Integer id : onlineMap.keySet()) {
			long lastTime = (Long) onlineMap.get(id)[2];
			if (TimeUtil.getMillis() - lastTime >= 5 * 60 * 1000) {
				logger.info("clear online user: " + onlineMap.get(id)[0]);
				onlineMap.remove(id);
			}
		}
	}

	/**
	 * @param user the user
	 */
	private void checkPasswordExpire(PUser user) {
		Date pwDate = user.getUserPasswordModifyDate();
		String expireDays = CompanyConfigUtil.getCompanyConfig(ConstUtil.COMCF_PASSWORD_EXPIRY_DAYS);
		int intExpireDays = 0;
		if (StringUtil.isNotBlank(expireDays)) {
			intExpireDays = Integer.parseInt(expireDays);
		}
		if (pwDate != null && intExpireDays > 0
				&& TimeUtil.getDiffDays(pwDate, TimeUtil.getNow()) >= intExpireDays) {
			throw new BusinessException("fw.login.password_expire");
		}
	}

	@SuppressWarnings({ "rawtypes" })
	public PUser queryCurrentUser() {
		PUser user = dao.findById((Integer) SessionManager.getAttr(SessionKeyType.UID));
		List objList = dao.queryFuncCode();
		StringBuilder sb = new StringBuilder();
		for (Object obj : objList) {
			if (obj instanceof String) {
				sb.append((String) obj).append(ConstUtil.COMMA);
			}
		}
		user.setFuncCode(sb.toString());
		return user;
	}

	@Transactional(readOnly = true)
	public List<PUser> query(Map<String, Object> queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PGroup> queryGroup(Map<String, Object> queryMap) {
		return groupDao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PRole> queryRole(Map<String, Object> queryMap) {
		return roleDao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PGroupUser> queryGroupUser(Map<String, Object> queryMap) {
		return groupUserDao.findByProperties(queryMap);
	}

	@Transactional(readOnly = true)
	public List<PUserRole> queryUserRole(Map<String, Object> queryMap) {
		return userRoleDao.findByProperties(queryMap);
	}

	public void killOnlineUser(PUser user) {
		onlineMap.remove(user.getUserId());
	}

	public static void killOnlineUser(Integer userId) {
		onlineMap.remove(userId);
	}

	public static void killMe(Integer userId) {
		killOnlineUser(userId);
	}

	public List<PUser> listOnlineUsers() {
		List<PUser> list = new ArrayList<PUser>();
		String compCode = SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		for (Integer id : onlineMap.keySet()) {
			//只返回本公司在线用户
			if(compCode.equals(onlineMap.get(id)[3])){
				PUser user = new PUser();
				user.setUserId(id);
				user.setUserName((String) onlineMap.get(id)[0]);
				user.setIp((String) onlineMap.get(id)[1]);
				list.add(user);
			}
		}
		return list;
	}

}
