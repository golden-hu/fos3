package haitai.fw.aop;

import haitai.fw.entity.BaseDomain;
import haitai.fw.entity.FosQuery;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.*;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Aspect
public class DaoAspect {

	FosLogger logger = new FosLogger(DaoAspect.class);

	@SuppressWarnings("unused")
	@Pointcut(value = "(execution(* haitai.fos.*.entity.dao.*DAO.saveSingleByRowAction(..)) " +
			"|| execution(* haitai.fw.entity.GenericDAO.saveSingleByRowAction(..))) && args(entity)")
	private void saveSingleByRowAction(BaseDomain entity) {
	}

	@Around(value = "saveSingleByRowAction(entity)")
	public void aroundSaveSingleByRowAction(ProceedingJoinPoint jp, BaseDomain entity) throws Throwable {
		RowAction rowAction = entity.getRowAction();
		if (rowAction == rowAction.N) {
			prepareSaveField(entity);
		} else {
			prepareUpdateField(entity);
		}
		Object uuid = MethodUtil.doGetMethod(entity, "Id");
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting");
			jp.proceed(new Object[]{entity});
			logger.info(methodName + " success");
			MethodUtil.doSetMethod(entity, "RowAction", RowAction.class, RowAction.O);
			MethodUtil.doSetMethod(entity, "Id", String.class, uuid);
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}
	}

	@SuppressWarnings("unused")
	@Pointcut(value = "(execution(* haitai.fos.*.entity.dao.*DAO.saveByRowAction(..)) " +
			"|| execution(* haitai.fw.entity.GenericDAO.saveByRowAction(..))) && args(entityList)")
	private void saveByRowAction(List<BaseDomain> entityList) {
	}

	@SuppressWarnings("unchecked")
	@Around(value = "saveByRowAction(entityList)")
	public Object aroundSaveByRowAction(ProceedingJoinPoint jp, List<BaseDomain> entityList) throws Throwable {
		Map<BaseDomain, String> idMap = new HashMap<BaseDomain, String>();
		for (BaseDomain entity : entityList) {
			RowAction rowAction = entity.getRowAction();
			if (rowAction == RowAction.N) {
				prepareSaveField(entity);
			} else {
				prepareUpdateField(entity);
			}
			idMap.put(entity, entity.getId());
		}
		List<BaseDomain> retList = (List<BaseDomain>) jp.proceed(new Object[]{entityList});
		for (BaseDomain entity : retList) {
			entity.setRowAction(RowAction.O);
			entity.setId(idMap.get(entity));
		}
		return retList;
	}

	@SuppressWarnings("unused")
	@Pointcut("(execution(* haitai.fos.*.entity.dao.*DAO.save(..)) "
			+ "|| execution(* haitai.fw.entity.GenericDAO.save(..))) "
			+ "&& args(entity)")
	private void save(Object entity) {
	}

	@Around(value = "save(entity)", argNames = "jp, entity")
	public void aroundSave(ProceedingJoinPoint jp, Object entity) throws Throwable {
		prepareSaveField(entity);
		//把前台的uuid再传回去
		Object uuid = MethodUtil.doGetMethod(entity, "Id");
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting");
			jp.proceed(new Object[]{entity});
			logger.info(methodName + " success");
			MethodUtil.doSetMethod(entity, "RowAction", RowAction.class, RowAction.O);
			MethodUtil.doSetMethod(entity, "Id", String.class, uuid);
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}
	}

	private void prepareSaveField(Object entity) {
		Integer userId = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		String userName = SessionManager.getStringAttr(SessionKeyType.USERNAME);
		Integer grouId = (Integer) SessionManager.getAttr(SessionKeyType.GID);
		String compCode = SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		MethodUtil.doSetMethod(entity, "Removed", Short.class, ConstUtil.FalseShort);
		MethodUtil.doSetMethod(entity, "CompCode", String.class, compCode);
		if (!"USER_S".equals(SessionManager.getStringAttr(SessionKeyType.ACTNAME))
				&& !"USEP_S".equals(SessionManager.getStringAttr(SessionKeyType.ACTNAME))
				&& !"GRUS_S".equals(SessionManager.getStringAttr(SessionKeyType.ACTNAME))
		) {
			MethodUtil.doSetMethod(entity, "UserId", Integer.class, userId);
		}
		if (!"GROU_S".equals(SessionManager.getStringAttr(SessionKeyType.ACTNAME))
				&&!"GRUS_S".equals(SessionManager.getStringAttr(SessionKeyType.ACTNAME))) {
			MethodUtil.doSetMethod(entity, "GrouId", Integer.class, grouId);
		}
		MethodUtil.doSetMethod(entity, "CreateBy", Integer.class, userId);
		MethodUtil.doSetMethod(entity, "CreateByName", String.class, userName);
		MethodUtil.doSetMethod(entity, "CreateTime", Date.class, TimeUtil.getNow());
		MethodUtil.doSetMethod(entity, "ModifyBy", Integer.class, userId);
		MethodUtil.doSetMethod(entity, "ModifyByName", String.class, userName);
		MethodUtil.doSetMethod(entity, "ModifyTime", Date.class, TimeUtil.getNow());
		MethodUtil.doSetMethod(entity, "version", Integer.class, ConstUtil.FalseInt);
	}

	@SuppressWarnings("unused")
	@Pointcut("(execution(* haitai.fos.*.entity.dao.*DAO.update(..)) "
			+ "|| execution(* haitai.fw.entity.GenericDAO.update(..))) "
			+ "&& args(entity)")
	private void update(Object entity) {
	}

	@Around(value = "update(entity)", argNames = "jp,entity")
	public Object aroundUpdate(ProceedingJoinPoint jp, Object entity) throws Throwable {
		prepareUpdateField(entity);
		//把前台的uuid再传回去
		Object uuid = MethodUtil.doGetMethod(entity, "Id");
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting");
			Object retObj = jp.proceed(new Object[]{entity});
			logger.info(methodName + " success");
			MethodUtil.doSetMethod(retObj, "RowAction", RowAction.class, RowAction.O);
			MethodUtil.doSetMethod(retObj, "Id", String.class, uuid);
			return retObj;
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}
	}

	private void prepareUpdateField(Object entity) {
		RowAction rowAction = (RowAction) MethodUtil.doGetMethod(entity, "RowAction");
		if (rowAction == RowAction.R) {
			MethodUtil.doSetMethod(entity, "Removed", Short.class, ConstUtil.TrueShort);
		} else {
			MethodUtil.doSetMethod(entity, "Removed", Short.class, ConstUtil.FalseShort);
		}
		//如果是新增, 要把version字段初始化成0
		if (rowAction == RowAction.N) {
			MethodUtil.doSetMethod(entity, "version", Integer.class, ConstUtil.FalseInt);
		}
		Integer userId = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		String userName = SessionManager.getStringAttr(SessionKeyType.USERNAME);
		MethodUtil.doSetMethod(entity, "ModifyBy", Integer.class, userId);
		MethodUtil.doSetMethod(entity, "ModifyByName", String.class, userName);
		MethodUtil.doSetMethod(entity, "ModifyTime", Date.class, TimeUtil.getNow());
	}

	@SuppressWarnings("unused")
	@Pointcut("execution(* haitai.fos.*.entity.dao.*DAO.delete(..))"
			+ "|| execution(* haitai.fw.entity.GenericDAO.delete(..))")
	private void delete() {
	}

	@Around("delete()")
	public void aroundDelete(ProceedingJoinPoint jp) throws Throwable {
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting");
			jp.proceed();
			logger.info(methodName + " success");
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}
	}

	@SuppressWarnings("unused")
	@Pointcut("(execution(* haitai.fos.*.entity.dao.*DAO.findById(..)) "
			+ "|| execution(* haitai.fw.entity.GenericDAO.findById(..))) "
			+ "&& args(id)")
	private void queryById(Number id) {
	}

	@Around(value = "queryById(id)", argNames = "jp,id")
	public Object aroundQueryById(ProceedingJoinPoint jp, Number id) throws Throwable {
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting with id = " + id.longValue());
			Object retObj = jp.proceed(new Object[]{id});
			copyId2uuid(retObj);
			logger.info(methodName + " success");
			return retObj;
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}

	}

	@SuppressWarnings("unused")
	@Pointcut("(execution(* haitai.fos.*.entity.dao.*DAO.findByProperties(..)) "
			+ "|| execution(* haitai.fw.entity.GenericDAO.findByProperties(..))) "
			+ "&& args(propertyMap)")
	private void query(Map<String, Object> propertyMap) {
	}

	@Around(value = "query(propertyMap)", argNames = "jp,propertyMap")
	public Object aroundQuery(ProceedingJoinPoint jp, Map<String, Object> propertyMap) throws Throwable {
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting with property Map = " + propertyMap);
			if (!ConstUtil.ACT_LOGIN.equalsIgnoreCase(SessionManager.getStringAttr(SessionKeyType.ACTNAME))
					&& StringUtil.isNotBlank(SessionManager.getStringAttr(SessionKeyType.COMPCODE))) {
				propertyMap.put(ConstUtil.CompCode, SessionManager.getStringAttr(SessionKeyType.COMPCODE));
			}
			propertyMap.put(ConstUtil.Removed, ConstUtil.FalseShort);
			Object retObj = jp.proceed(new Object[]{propertyMap});
			copyId2uuid(retObj);
			logger.info(methodName + " success");
			return retObj;
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}

	}

	@SuppressWarnings("unused")
	@Pointcut(value = "(execution(* haitai.fos.*.entity.dao.*DAO.complexQuery*(..)) "
			+ "|| execution(* haitai.fw.entity.GenericDAO.complexQuery(..))) "
			+ "&& args(conditions, propertyMap)", argNames = "conditions,propertyMap")
	private void complexQuery(List<FosQuery> conditions, Map<String, Object> propertyMap) {
	}

	@Around(value = "complexQuery(conditions, propertyMap)", argNames = "jp,conditions,propertyMap")
	public Object aroundComplexQuery(ProceedingJoinPoint jp, List<FosQuery> conditions,
									 Map<String, Object> propertyMap) throws Throwable {
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting with conditions List = " + conditions + ", " +
					"property Map = " + propertyMap);
			String compCode = SessionManager.getStringAttr(SessionKeyType.COMPCODE);
			if (conditions != null) {
				if (!conditions.contains(QueryUtil.removedCondition()))
					conditions.add(QueryUtil.removedCondition());
				if (!conditions.contains(QueryUtil.compCodeCondition()) && StringUtil.isNotBlank(compCode))
					conditions.add(QueryUtil.compCodeCondition());
			} else if (propertyMap != null) {
				propertyMap.put(ConstUtil.Removed, ConstUtil.FalseShort);
				if (!StringUtil.isNotBlank(compCode))
					propertyMap.put(ConstUtil.CompCode, SessionManager.getStringAttr(SessionKeyType.COMPCODE));
			}
			Object retObj = jp.proceed(new Object[]{conditions, propertyMap});
			copyId2uuid(retObj);
			logger.info(methodName + " success");
			return retObj;
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}

	}

	@Around("!execution(* haitai.fos.*.entity.dao.*DAO.save(..)) "
			+ "&& !execution(* haitai.fos.*.entity.dao.*DAO.update(..)) "
			+ "&& !execution(* haitai.fos.*.entity.dao.*DAO.delete(..)) "
			+ "&& !execution(* haitai.fos.*.entity.dao.*DAO.findById(..)) "
			+ "&& !execution(* haitai.fos.*.entity.dao.*DAO.findByProperties(..)) "
			+ "&& !execution(* haitai.fos.*.entity.dao.*DAO.complexQuery*(..)) "
			+ "&& execution(* haitai.fos.*.entity.dao.*DAO.*(..))")
	public Object aroundOther(ProceedingJoinPoint jp) throws Throwable {
		String methodName = null;
		try {
			methodName = jp.getTarget().getClass().getSimpleName() + "." + jp.getSignature().getName();
			logger.info(methodName + " starting");
			Object retObj = jp.proceed();
			logger.info(methodName + " success");
			return retObj;
		} catch (RuntimeException e) {
			logger.info(methodName + " failed");
			throw e;
		}
	}

	@SuppressWarnings("unchecked")
	private void copyId2uuid(Object entity) throws IllegalAccessException,
			InvocationTargetException, NoSuchMethodException {
		if (entity != null) {
			if (entity instanceof List) {
				// 返回对象的类型
				List<Object> entityList = (List<Object>) entity;
				if (entityList.size() > 0) {
					if (entityList.get(0) instanceof Object[]) {
						for (Object object : entityList) {
							Object[] objArr = (Object[]) object;
							for (Object item : objArr) {
								Method getPk = null;
								if (item instanceof BaseDomain) {
									getPk = MethodUtil.getPkMethod(item);
								}
								if (getPk != null) {
									Object uuid = getPk.invoke(item);
									MethodUtil.doSetMethod(item, "Id", String.class, String.valueOf(uuid));
								}
							}
						}
					} else {
						Method getIdMethod = MethodUtil.getPkMethod(entityList);
						if (getIdMethod != null) {
							// 把前台的uuid再传回去
							for (Object item : entityList) {
								Object uuid = getIdMethod.invoke(item);
								MethodUtil.doSetMethod(item, "Id",
										String.class, String.valueOf(uuid));
							}
						}
					}
				}
			} else {
				Method getIdMethod = MethodUtil.getPkMethod(entity);
				if (getIdMethod != null) {
					// 把前台的uuid再传回去
					Object uuid = getIdMethod.invoke(entity);
					MethodUtil.doSetMethod(entity, "Id", String.class, String.valueOf(uuid));
				}
			}
		}
	}
}
