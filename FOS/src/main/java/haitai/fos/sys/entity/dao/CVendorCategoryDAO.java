package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICVendorCategoryDAO;
import haitai.fos.sys.entity.table.CVendorCategory;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class CVendorCategoryDAO extends GenericDAO<CVendorCategory, Integer> implements ICVendorCategoryDAO {

	public CVendorCategoryDAO() {
		super(CVendorCategory.class);
	}
}
