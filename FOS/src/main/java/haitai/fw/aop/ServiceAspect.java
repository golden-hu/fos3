package haitai.fw.aop;

import haitai.fos.sys.service.PTableInfoService;
import haitai.fw.entity.FosQuery;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.ActionLogUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.MethodUtil;
import haitai.fw.util.QueryUtil;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Aspect
public class ServiceAspect {

	FosLogger logger = new FosLogger(ServiceAspect.class);
	@Autowired
	ActionLogUtil actLogUtil;
	@Autowired
	PTableInfoService tableInfoService;

	@SuppressWarnings("unused")
	@Pointcut("execution(* haitai.fos.*.service.*Service.query*(..)) && args(queryMap)")
	private void entityQuery(Map<String, Object> queryMap) {
	}

	@SuppressWarnings("unused")
	@Pointcut("execution(* haitai.fos.*.service.*Service.complexQuery*(..)) && args(conditions, queryMap)")
	private void entityComplexQuery(List<FosQuery> conditions,
									Map<String, Object> queryMap) {
	}

	@Before("entityQuery(queryMap)")
	public void addQueryParam(Map<String, Object> queryMap) {
		queryMap.put(ConstUtil.CompCode, SessionManager.getStringAttr(SessionKeyType.COMPCODE));
		queryMap.put(ConstUtil.Removed, ConstUtil.FalseShort);
	}

	@Before("entityComplexQuery(conditions, queryMap)")
	public void addQueryParam(List<FosQuery> conditions, Map<String, Object> queryMap) {
		if (conditions == null) {
			addQueryParam(queryMap);
		} else {
			conditions.add(QueryUtil.compCodeCondition());
			conditions.add(QueryUtil.removedCondition());
		}
	}

	@SuppressWarnings("unused")
	@Pointcut("execution(* haitai.fos.*.service.*Service.save*(..)) && args(entityList)")
	private void save(List<Object> entityList) {
	}

	@SuppressWarnings("unchecked")
	@Around("save(entityList)")
	public Object aroundSave(ProceedingJoinPoint jp, List<Object> entityList) throws Throwable {
		Map<Object, String> idMap = new HashMap<Object, String>();
		for (Object entity : entityList) {
			String rowAction = (String) MethodUtil.doGetMethod(entity, "RowAction");
			String className = entity.getClass().getSimpleName();
			if (ConstUtil.ROW_N.equalsIgnoreCase(rowAction)) {
				Object uuid = MethodUtil.doGetMethod(entity, "Id");
				idMap.put(entity, (String) uuid);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(rowAction)) {
				Object uuid = MethodUtil.doGetMethod(entity, "Id");
				idMap.put(getObjKey(entity), (String) uuid);
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(rowAction)
					&& tableInfoService.constains(className)) {
				actLogUtil.saveActionLog(entity);
			}
		}
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting");
			Object retObj = jp.proceed(new Object[]{entityList});
			logger.info(methodName + " success");
			if (retObj instanceof List) {
				List<Object> retList = (List<Object>) retObj;
				for (Object entity : retList) {
					String className = entity.getClass().getSimpleName();
					if (tableInfoService.constains(className)) {
						actLogUtil.saveActionLog(entity);
					}
					if (idMap.containsKey(entity)) {
						MethodUtil.doSetMethod(entity, "Id", String.class, idMap.get(entity));
					} else if (idMap.containsKey(getObjKey(entity))) {
						MethodUtil.doSetMethod(entity, "Id", String.class, idMap.get(getObjKey(entity)));
					}
				}
			}
			return retObj;
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}
	}

	private String getObjKey(Object entity) throws IllegalAccessException, InvocationTargetException {
		return entity.getClass().getSimpleName() + ConstUtil.STRING_SHARP
				+ String.valueOf(MethodUtil.getPkMethod(entity).invoke(entity));
	}
}
