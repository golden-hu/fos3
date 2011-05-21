package haitai.fw.util;

import haitai.fw.exception.NestedRuntimeException;

/**
 * Helper class for implementing exception classes which are capable of
 * holding nested exceptions. Necessary because we can't share a base
 * class among different exception types.
 *
 * <p>Mainly for use within the framework.
 *
 * @author Juergen Hoeller
 * @since 2.0
 * @see NestedRuntimeException
 * @see org.springframework.web.util.NestedServletException
 */
public abstract class ExceptionUtil {

	/**
	 * Build a message for the given base message and root cause.
	 * @param message the base message
	 * @param cause the root cause
	 * @return the full exception message
	 */
	public static String buildMessage(String message, Throwable cause) {
		if (cause != null) {
            StringBuilder buf = new StringBuilder();
			if (message != null) {
				buf.append(message).append("; ");
			}
			buf.append("nested exception is ").append(cause);
			return buf.toString();
		}
		else {
			return message;
		}
	}
	
	/**
	 * Check if the exception contains the exType
	 * @param exType the exception type
	 * @param ex the exception
	 * @return true if the ex nestly contains exType
	 */
	public static boolean contains(Class<? extends Throwable> exType, Throwable ex) {
		if (exType == null) {
			return false;
		}
		if (exType.isInstance(ex)) {
			return true;
		}
		Throwable cause = ex.getCause();
		if (cause == ex) {
			return false;
		}
		if (cause instanceof NestedRuntimeException) {
			return ((NestedRuntimeException) cause).contains(exType);
		}
		else {
			while (cause != null) {
				if (exType.isInstance(cause)) {
					return true;
				}
				if (cause.getCause() == cause) {
					break;
				}
				cause = cause.getCause();
			}
			return false;
		}
	}

	public static Throwable getTypeException(Class<? extends Throwable> exType, Throwable ex) {
		if (exType == null || exType.isInstance(ex)) {
			return ex;
		}
		Throwable cause = ex.getCause();
		if (cause == ex) {
			return ex;
		}
		while (cause != null) {
			if (exType.isInstance(cause)) {
				return cause;
			}
			if (cause.getCause() == cause) {
				break;
			}
			cause = cause.getCause();
		}
		return cause;
	}
}