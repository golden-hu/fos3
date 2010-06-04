package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPUserExpePermissionDAO;
import haitai.fos.sys.entity.table.PUserExpePermission;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PUserExpePermissionDAO extends GenericDAO<PUserExpePermission, Integer>
		implements IPUserExpePermissionDAO {

	public PUserExpePermissionDAO() {
		super(PUserExpePermission.class);
	}
}
