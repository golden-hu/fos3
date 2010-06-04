package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPGroupUserDAO;
import haitai.fos.sys.entity.table.PGroupUser;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PGroupUserDAO extends GenericDAO<PGroupUser, Integer> implements
		IPGroupUserDAO {

	public PGroupUserDAO() {
		super(PGroupUser.class);
	}
}
