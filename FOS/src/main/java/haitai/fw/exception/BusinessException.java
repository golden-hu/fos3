package haitai.fw.exception;

public class BusinessException extends NestedRuntimeException {

	public BusinessException(String msg) {
		super(msg);
	}

	public BusinessException(String msg, Throwable cause) {
		super(msg, cause);
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = -5728437203705004795L;

}
