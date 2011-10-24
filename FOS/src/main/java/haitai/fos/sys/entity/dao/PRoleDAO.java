package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPRoleDAO;
import haitai.fos.sys.entity.table.PRole;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PRoleDAO extends GenericDAO<PRole, Integer> implements IPRoleDAO {

	public PRoleDAO() {
		super(PRole.class);
	}
}
