package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCustomerCategory;

import java.util.Map;
import java.util.List;

public interface ICCustomerCategoryDAO {
	public void save(CCustomerCategory entity);

	public void delete(Integer id);

	public CCustomerCategory update(CCustomerCategory entity);

	public CCustomerCategory findById(Integer id);

	public List<CCustomerCategory> findByProperties(
			final Map<String, Object> propertyMap);
}
