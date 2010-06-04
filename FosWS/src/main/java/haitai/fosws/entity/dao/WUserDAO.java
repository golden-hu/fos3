package haitai.fosws.entity.dao;

import haitai.fosws.entity.idao.IWUserDAO;
import haitai.fosws.entity.table.WUser;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class WUserDAO extends GenericDAO<WUser, Integer> implements
		IWUserDAO {

	public WUserDAO() {
		super(WUser.class);
	}
}
