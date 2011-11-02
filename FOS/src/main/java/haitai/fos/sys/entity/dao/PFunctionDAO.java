package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPFunctionDAO;
import haitai.fos.sys.entity.table.PFunction;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PFunctionDAO extends GenericDAO<PFunction, Integer> implements IPFunctionDAO {

	public PFunctionDAO() {
		super(PFunction.class);
	}
}
