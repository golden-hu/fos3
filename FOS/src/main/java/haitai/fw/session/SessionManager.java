package haitai.fw.session;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;

public class SessionManager {
	private static final ThreadLocal<HttpSession> hmHttpSession;
	private static final ThreadLocal<Map<String, Object>> hmUserSession;
	private static final ThreadLocal<List<FileItem>> fileItems;
	static {
		hmHttpSession = new ThreadLocal<HttpSession>();
		hmUserSession = new ThreadLocal<Map<String, Object>>() {
			protected synchronized Map<String, Object> initialValue() {
				return new HashMap<String, Object>();
			}
		};
		fileItems = new ThreadLocal<List<FileItem>>();
	}

	public static void regSession(HttpSession session) {
		hmHttpSession.set(session);
	}

	public static void addFileItem(FileItem item) {
		if(getFileItems() == null) {
			List<FileItem> items = new ArrayList<FileItem>();
			fileItems.set(items);
		}
		fileItems.get().add(item);
	}

	public static List<FileItem> getFileItems() {
		return fileItems.get();
	}

	public static void setAttr(String key, Object obj) {
		if (SessionKeyType.ACTNAME.equals(key)) {
			hmUserSession.get().put(key, obj);
		} else {
			hmHttpSession.get().setAttribute(key, obj);
		}
	}

	public static Object getAttr(String key) {
		if (SessionKeyType.ACTNAME.equals(key)) {
			return hmUserSession.get().get(key);
		} else {
			return hmHttpSession.get().getAttribute(key);
		}
	}

	public static String getStringAttr(String key) {
		if (SessionKeyType.ACTNAME.equals(key)) {
			return (String) hmUserSession.get().get(key);
		} else {
			return (String) hmHttpSession.get().getAttribute(key);
		}
	}

	public static void logoutSession() {
		hmHttpSession.get().invalidate();
		hmUserSession.remove();
		fileItems.remove();
	}

	public static void unregSession() {
		hmHttpSession.remove();
		hmUserSession.remove();
		fileItems.remove();
	}
}
