package haitai.fw.platform;

import haitai.fos.sys.entity.idao.IActionDAO;
import haitai.fos.sys.entity.table.Action;
import haitai.fw.exception.BusinessException;
import haitai.fw.util.SpringContextHolder;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ActionManager implements InitializingBean {
	private static final Map<String, Action> ACTION_PROFILE = new ConcurrentHashMap<String, Action>();

	@Transactional(readOnly = true)
	private static void load() {
		IActionDAO dao = SpringContextHolder.getBean(IActionDAO.class);
		List<Action> actList = dao.findAll();
		for (Action action : actList) {
			ACTION_PROFILE.put(action.getActName(), action);
		}
	}

	public static Action getAction(String actName) {
		Action action = ACTION_PROFILE.get(actName);
		if (action == null) {
			load();
			action = ACTION_PROFILE.get(actName);
		}
		if (action == null) {
			throw new BusinessException("Action name not found");
		}
		return action;
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		load();
	}
}
