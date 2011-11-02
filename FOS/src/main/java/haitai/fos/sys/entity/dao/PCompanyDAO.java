package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPCompanyDAO;
import haitai.fos.sys.entity.table.PCompany;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PCompanyDAO extends GenericDAO<PCompany, Integer> implements IPCompanyDAO {

	public PCompanyDAO() {
		super(PCompany.class);
	}
}
