package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CVendorCategory;

import java.util.List;
import java.util.Map;

public interface ICVendorCategoryDAO {
	public void save(CVendorCategory entity);

	public List<CVendorCategory> saveByRowAction(List<CVendorCategory> entityList);

	public void delete(Integer id);

	public CVendorCategory update(CVendorCategory entity);

	public CVendorCategory findById(Integer id);

	public List<CVendorCategory> findByProperties(final Map<String, Object> propertyMap);
}
