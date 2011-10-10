/**
 * 
 */
package haitai.fw.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class SpringContextUtil implements ApplicationContextAware {
	private static ApplicationContext ac;

	public static ApplicationContext getContext() {
		return ac;
	}

	@Override
	public void setApplicationContext(ApplicationContext ctx)
			throws BeansException {
		ac = ctx;
	}

	@SuppressWarnings("unchecked")
	public static <T> T getBean(String beanName) {
		return (T) ac.getBean(beanName);
	}
}
