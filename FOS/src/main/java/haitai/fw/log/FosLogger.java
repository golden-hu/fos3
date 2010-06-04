package haitai.fw.log;

import java.lang.reflect.Method;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FosLogger {
	private Logger logger;

	public FosLogger(String name) {
		this.logger = LoggerFactory.getLogger(name);
	}

	@SuppressWarnings("unchecked")
	public FosLogger(Class clazz) {
		this(clazz.getName());
	}

	public void debug(Object msg) {
		logger.debug("{}",msg);
	}

	public void debug(String msg, Throwable t) {
		logger.debug(msg, t);
		logNestedException(msg, t);
	}

	public boolean isDebugEnabled() {
		return logger.isDebugEnabled();
	}

	public void info(Object msg) {
		logger.info("{}", msg);
	}

	public void info(String msg, Throwable t) {
		logger.info(msg, t);
		logNestedException(msg, t);
	}

	public boolean isInfoEnabled() {
		return logger.isInfoEnabled();
	}

	public void warn(Object msg) {
		logger.warn("{}", msg);
	}

	public void warn(String msg, Throwable t) {
		logger.warn(msg, t);
		logNestedException(msg, t);
	}

	public void error(Object msg) {
		logger.error("{}",msg);
	}

	public void error(String msg, Throwable t) {
		logger.error(msg, t);
		logNestedException(msg, t);
	}

	@SuppressWarnings("unchecked")
	void logNestedException(Object msg, Throwable t) {
		if (t == null)
			return;

		try {
			Class tC = t.getClass();
			Method mA[] = tC.getMethods();
			Method nextThrowableMethod = null;
			for (int i = 0; i < mA.length; i++) {
				if ("getCause".equals(mA[i].getName())
						|| "getRootCause".equals(mA[i].getName())
						|| "getNextException".equals(mA[i].getName())
						|| "getException".equals(mA[i].getName())) {
					// check param types
					Class params[] = mA[i].getParameterTypes();
					if (params == null || params.length == 0) {
						nextThrowableMethod = mA[i];
						break;
					}
				}
			}

			if (nextThrowableMethod != null) {
				Throwable nextT = (Throwable) nextThrowableMethod.invoke(t,
						new Object[0]);
				if (nextT != null) {
					this.logger.debug("Previous log CONTINUED: Please check log file for detail",
							nextT);
				}
			}
		} catch (Exception e) {
			// do nothing
		}
	}
}
