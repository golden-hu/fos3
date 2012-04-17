package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICCustomerSiteDAO;
import haitai.fos.sys.entity.table.CCustomerSite;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class CCustomerSiteDAO extends GenericDAO<CCustomerSite, Integer> implements ICCustomerSiteDAO {

	public CCustomerSiteDAO() {
		super(CCustomerSite.class);
	}
}
