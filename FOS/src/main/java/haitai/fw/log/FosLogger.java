package haitai.fw.log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Method;

public class FosLogger {
	private Logger logger;

	public FosLogger(String name) {
		this.logger = LoggerFactory.getLogger(name);
	}

	@SuppressWarnings({"rawtypes"})
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

	@SuppressWarnings({"rawtypes"})
	void logNestedException(Object msg, Throwable t) {
		if (t == null)
			return;

		try {
			Class tC = t.getClass();
			Method mA[] = tC.getMethods();
			Method nextThrowableMethod = null;
			for (Method aMA : mA) {
				if ("getCause".equals(aMA.getName())
						|| "getRootCause".equals(aMA.getName())
						|| "getNextException".equals(aMA.getName())
						|| "getException".equals(aMA.getName())) {
					// check param types
					Class params[] = aMA.getParameterTypes();
					if (params == null || params.length == 0) {
						nextThrowableMethod = aMA;
						break;
					}
				}
			}

			if (nextThrowableMethod != null) {
				Throwable nextT = (Throwable) nextThrowableMethod.invoke(t, new Object[0]);
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
