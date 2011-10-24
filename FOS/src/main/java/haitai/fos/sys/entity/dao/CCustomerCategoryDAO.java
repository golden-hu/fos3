package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICCustomerCategoryDAO;
import haitai.fos.sys.entity.table.CCustomerCategory;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class CCustomerCategoryDAO extends GenericDAO<CCustomerCategory, Integer> implements ICCustomerCategoryDAO {

	public CCustomerCategoryDAO() {
		super(CCustomerCategory.class);
	}
}
