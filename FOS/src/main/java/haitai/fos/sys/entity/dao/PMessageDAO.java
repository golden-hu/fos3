package haitai.fos.sys.entity.dao;

import java.util.List;
import java.util.Map;

import haitai.fos.sys.entity.idao.IPMessageDAO;
import haitai.fos.sys.entity.table.PMessage;
import haitai.fw.entity.GenericDAO;
import haitai.fw.entity.HttpHeader;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.StringUtil;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class PMessageDAO extends GenericDAO<PMessage, Long> implements
		IPMessageDAO {

	public PMessageDAO() {
		super(PMessage.class);
	}

	@Transactional
	public PMessage updateSendFlag(PMessage entity) {
		return getJpaTemplate().merge(entity);
	}
	
	@SuppressWarnings("unchecked")
	public List<PMessage> queryOwn(Map<String, Object> propertyMap){
		Integer uid = (Integer) SessionManager.getAttr(SessionKeyType.UID);
		String tid = (String) propertyMap.get("userId");
		String joinSql = null;
		if (StringUtil.isBlank(tid)) {
			joinSql = "(t1.messFromUserId = " + uid + " or t1.messToUserId = "
					+ uid + ")";
		} else {
			joinSql = "((t1.messFromUserId = " + uid
					+ " and t1.messToUserId = " + tid
					+ ") or (t1.messFromUserId = " + tid
					+ " and t1.messToUserId = " + uid + "))";
		}
		Class clazz = PMessage.class;
		List retList = complexQuery(propertyMap, "t1", joinSql, clazz);
		String rowCount = String.valueOf(complexQuerySize(propertyMap, "t1",
				joinSql, clazz));
		propertyMap.put(HttpHeader.ROWCOUNT, rowCount);
		return retList;		
	}
}
