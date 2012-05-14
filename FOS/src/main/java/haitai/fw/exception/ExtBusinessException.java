package haitai.fw.exception;

import org.springframework.core.NestedRuntimeException;

import haitai.fw.exception.MessageMapper;
import haitai.fw.exception.Messageable;
import haitai.fw.util.SpringContextHolder;

public class ExtBusinessException extends NestedRuntimeException {
	private Messageable code;
	private Object[] messageParams;
	private String businessMessage;

	public ExtBusinessException(Messageable code, Object... messageParams) {
		super(code.toString());
		this.code = code;
		this.messageParams = messageParams;
		this.businessMessage = SpringContextHolder.getBean(MessageMapper.class).getMessage(code,
				messageParams);
	}

	public ExtBusinessException(Messageable code, Exception e, Object... messageParams) {
		super(code.toString(), e);
		this.code = code;
		this.messageParams = messageParams;
		this.businessMessage = SpringContextHolder.getBean(MessageMapper.class).getMessage(code,
				messageParams);
	}

	private static final long serialVersionUID = -5728437203705004795L;

	public Messageable getCode() {
		return code;
	}

	public Object[] getMessageParams() {
		return messageParams;
	}

	public String getBusinessMessage() {
		return businessMessage;
	}

}
