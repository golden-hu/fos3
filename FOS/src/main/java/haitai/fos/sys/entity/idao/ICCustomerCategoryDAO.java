package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCustomerCategory;

import java.util.List;
import java.util.Map;

public interface ICCustomerCategoryDAO {
	public void save(CCustomerCategory entity);

	public List<CCustomerCategory> saveByRowAction(List<CCustomerCategory> entityList);

	public void delete(Integer id);

	public CCustomerCategory update(CCustomerCategory entity);

	public CCustomerCategory findById(Integer id);

	public List<CCustomerCategory> findByProperties(
			final Map<String, Object> propertyMap);
}
