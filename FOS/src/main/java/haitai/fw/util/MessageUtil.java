package haitai.fw.util;

import org.springframework.context.MessageSource;

public class MessageUtil {
	private static MessageSource ms = SpringContextHolder.getContext();

	public static String getMessage(String code) {
		return ms.getMessage(code, null, ConstUtil.LOCALE_DEFAULT);
	}
}
