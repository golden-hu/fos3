package haitai.fw.util;

import haitai.fw.log.FosLogger;

import javax.persistence.Id;
import java.lang.reflect.Method;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class MethodUtil {
	private static Map<String, Set<String>> methodNameCache = new ConcurrentHashMap<String, Set<String>>();
	private static Map<String, Set<Method>> methodCache = new ConcurrentHashMap<String, Set<Method>>();
	private static Map<String, Map<String, Method>> methodSetCache =
			new ConcurrentHashMap<String, Map<String, Method>>();
	private static FosLogger logger = new FosLogger(MethodUtil.class);

	private static Set<String> getMethodsName(Object obj) {
		Class<?> clazz = obj.getClass();
		return getMethodsName(clazz);
	}

	private static Set<String> getMethodsName(Class<?> clazz) {
		Set<String> methodSet;
		methodSet = methodNameCache.get(clazz.getSimpleName());
		if (methodSet == null) {
			methodSet = new HashSet<String>();
			Method[] methods = clazz.getMethods();
			for (Method method : methods) {
				methodSet.add(method.getName());
			}
			methodNameCache.put(clazz.getSimpleName(), methodSet);
		}
		return methodSet;
	}

	private static Set<Method> getMethods(Class<?> clazz) {
		Set<Method> methodSet;
		methodSet = methodCache.get(clazz.getSimpleName());
		if (methodSet == null) {
			methodSet = new HashSet<Method>();
			Method[] methods = clazz.getMethods();
			Collections.addAll(methodSet, methods);
			methodCache.put(clazz.getSimpleName(), methodSet);
		}
		return methodSet;
	}

	@SuppressWarnings("unchecked")
	public static Method getPkMethod(Object ret) {
		Method getIdMethod = null;
		Class<?> clazz;
		if (ret instanceof List) {
			clazz = ((List<Object>) ret).get(0).getClass();
		} else {
			clazz = ret.getClass();
		}
		Set<Method> f = getMethods(clazz);
		for (Method m : f) {
			if (m.getAnnotation(Id.class) != null
					&& m.getName().startsWith("get")) {
				getIdMethod = m;
				break;
			}
		}
		return getIdMethod;
	}

	@SuppressWarnings("unchecked")
	public static void doSetMethod(Object entity, String fieldName, Class paramClass, Object paramValue) {
		Set<String> methodSet = getMethodsName(entity);
		if (methodSet.contains("set" + StringUtil.capitalize(fieldName))) {
			try {
				Method method = entity.getClass().getMethod("set" + StringUtil.capitalize(fieldName),
						new Class[]{paramClass});
				method.invoke(entity, paramValue);
			} catch (Exception e) {
				logger.error("do set method " + fieldName, e);
			}
		}
	}

	public static Object doGetMethod(Object entity, String fieldName) {
		Object ret = null;
		Set<String> methodSet = getMethodsName(entity);
		if (methodSet.contains("get" + StringUtil.capitalize(fieldName))
				|| methodSet.contains(StringUtil.uncapitalize(fieldName))) {
			Method method;
			try {
				method = entity.getClass().getMethod("get" + StringUtil.capitalize(fieldName));
				ret = method.invoke(entity);
			} catch (Exception e) {
				logger.error("do get method " + fieldName, e);
			}
		}
		return ret;
	}

	@SuppressWarnings("unchecked")
	public static Map<String, Method> getSetMethods(Object obj) {
		Class clazz = obj.getClass();
		Map<String, Method> methodMap = methodSetCache.get(clazz.getSimpleName());
		if (methodMap == null) {
			methodMap = new HashMap<String, Method>();
			Set<Method> methods = getMethods(clazz);
			for (Method method : methods) {
				if (method.getName().startsWith("set")) {
					methodMap.put(StringUtil.uncapitalize(method.getName().substring(3)), method);
				}
			}
			methodSetCache.put(clazz.getSimpleName(), methodMap);
		}
		return methodMap;
	}

}
