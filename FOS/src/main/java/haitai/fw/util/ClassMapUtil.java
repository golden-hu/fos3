package haitai.fw.util;

import haitai.fw.log.FosLogger;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.persistence.EntityManagerFactory;

import org.springframework.orm.jpa.EntityManagerFactoryInfo;

public class ClassMapUtil {
	private static final FosLogger logger = new FosLogger(ClassMapUtil.class);
	@SuppressWarnings("rawtypes")
	private static Map<String, Class> classMap = new ConcurrentHashMap<String, Class>();
	static {
		init();
	}

	@SuppressWarnings("unchecked")
	public static Class getClass(String className) {
		return classMap.get(className);
	}

	@SuppressWarnings("unchecked")
	public static Map<String, Class> getMap(){
		return classMap;
	}
	
	private static void init() {
		EntityManagerFactory emf = SpringContextHolder
				.getBean("entityManagerFactory");
		if (emf instanceof EntityManagerFactoryInfo) {
			EntityManagerFactoryInfo emfi = (EntityManagerFactoryInfo) emf;

			List<String> clazzList = emfi.getPersistenceUnitInfo()
					.getManagedClassNames();
			for (String clazzName : clazzList) {
				try {
					Class<?> clazz = Class.forName(clazzName);
					classMap.put(clazz.getSimpleName(), clazz);
				} catch (ClassNotFoundException e) {
					logger.error(MessageUtil
							.getMessage(MessageUtil.FW_ERROR_CLASS_NOT_FOUND),
							e);
				}
			}
		}
	}
}
