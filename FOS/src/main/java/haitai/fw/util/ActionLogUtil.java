package haitai.fw.util;

import haitai.fos.sys.entity.idao.IPActionLogDAO;
import haitai.fos.sys.entity.table.PActionLog;
import haitai.fos.sys.service.PTableInfoService;
import haitai.fw.log.FosLogger;
import haitai.fw.platform.ActionManager;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class ActionLogUtil {
	FosLogger logger = new FosLogger(ActionLogUtil.class);
	@Autowired
	IPActionLogDAO logDao;
	@Autowired
	PTableInfoService tableInfoService;

	public static void log() {
		ActionLogUtil actLogUtil = SpringContextHolder.getBean("actionLogUtil");
		actLogUtil.saveActLog();
	}

	@Transactional
	public void saveActLog(PActionLog... actLogs) {
		PActionLog actLog;
		if (actLogs.length > 0) {
			actLog = actLogs[0];
		} else {
			actLog = new PActionLog();
		}
		actLog.setAcloId(null);
		String actName = SessionManager.getStringAttr(SessionKeyType.ACTNAME);
		actLog.setAcloActName(actName);
		actLog.setAcloActRemark(ActionManager.getAction(actName).getActRemark());
		actLog.setAcloIp(SessionManager.getStringAttr(SessionKeyType.HOSTNAME));
		actLog.setAcloUserId((Integer) SessionManager.getAttr(SessionKeyType.UID));
		actLog.setAcloUserName(SessionManager.getStringAttr(SessionKeyType.USERNAME));
		actLog.setCompCode(SessionManager.getStringAttr(SessionKeyType.COMPCODE));
		actLog.setCreateTime(TimeUtil.getNow());
		actLog.setRowAction(ConstUtil.ROW_N);
		logDao.save(actLog);
	}

	@Transactional
	public void saveActionLog(Object entity) {
		PActionLog actLog = new PActionLog();
		String clazzName = entity.getClass().getSimpleName();
		actLog.setAcloTable(clazzName);
		try {
			actLog.setAcloTid((Integer) MethodUtil.doGetMethod(entity, tableInfoService.getId(clazzName)));
			if (StringUtil.isNotBlank(tableInfoService.getNo(clazzName))) {
				Object no = MethodUtil.doGetMethod(entity, tableInfoService.getNo(clazzName));
				String strNo = null;
				if (no instanceof String) {
					strNo = (String) no;
				} else if (no instanceof Integer) {
					strNo = String.valueOf(no);
				}
				actLog.setAcloTno(strNo);
			}
		} catch (Exception e) {
			logger.info("Action Log, can't get object primary key or business No!");
		}
		saveActLog(actLog);
	}
}
