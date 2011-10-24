package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPRoleFunctionDAO;
import haitai.fos.sys.entity.table.PRoleFunction;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PRoleFunctionDAO extends GenericDAO<PRoleFunction, Integer>
		implements IPRoleFunctionDAO {

	public PRoleFunctionDAO() {
		super(PRoleFunction.class);
	}
}
