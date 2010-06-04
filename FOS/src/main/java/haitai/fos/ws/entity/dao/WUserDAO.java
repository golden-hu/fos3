package haitai.fos.ws.entity.dao;

import haitai.fos.ws.entity.idao.IWUserDAO;
import haitai.fos.ws.entity.table.WUser;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class WUserDAO extends GenericDAO<WUser, Integer> implements
		IWUserDAO {

	public WUserDAO() {
		super(WUser.class);
	}
}
