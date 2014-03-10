package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPUserRoleDAO;
import haitai.fos.sys.entity.table.PRole;
import haitai.fos.sys.entity.table.PUserRole;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class PUserRoleDAO extends GenericDAO<PUserRole, Integer> implements IPUserRoleDAO {

	public PUserRoleDAO() {
		super(PUserRole.class);
	}

	@SuppressWarnings({"rawtypes"})
	public List<PUserRole> findByProperties(final Map<String, Object> propertyMap) {
		List<PUserRole> retList = new ArrayList<PUserRole>();
		List list = queryEager(propertyMap, PUserRole.class);
		for (Object obj : list) {
			Object[] array = (Object[]) obj;
			PUserRole ur = (PUserRole) array[0];
			String roleName = (String) array[1];
			ur.setRoleName(roleName);
			retList.add(ur);
		}
		return retList;
	}

	@SuppressWarnings({"rawtypes"})
	private List queryEager(final Map<String, Object> propertyMap,
			final Class clazz) {
		Class t1 = PUserRole.class;
		Class t2 = PRole.class;
		String fieldSql = "t1,t2.roleName";
		String joinSql = "t1.roleId = t2.roleId";
		List retList = complexQuery(propertyMap, fieldSql, joinSql, t1, t2);
		return retList;
	}
}
