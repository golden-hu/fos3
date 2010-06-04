package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CVendorCategory;

import java.util.Map;
import java.util.List;

public interface ICVendorCategoryDAO {
	public void save(CVendorCategory entity);

	public void delete(Integer id);

	public CVendorCategory update(CVendorCategory entity);

	public CVendorCategory findById(Integer id);

	public List<CVendorCategory> findByProperties(
			final Map<String, Object> propertyMap);
}
