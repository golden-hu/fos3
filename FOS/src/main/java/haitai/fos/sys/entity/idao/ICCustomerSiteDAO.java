package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCustomerSite;

import java.util.List;
import java.util.Map;

public interface ICCustomerSiteDAO {
	public void save(CCustomerSite entity);

	public List<CCustomerSite> saveByRowAction(List<CCustomerSite> entityList);

	public void delete(Integer id);

	public CCustomerSite update(CCustomerSite entity);

	public CCustomerSite findById(Integer id);

	public List<CCustomerSite> findByProperties(
			final Map<String, Object> propertyMap);
}
