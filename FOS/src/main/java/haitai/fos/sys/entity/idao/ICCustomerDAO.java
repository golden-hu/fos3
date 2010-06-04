package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.CCustomer;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface ICCustomerDAO {
	public void save(CCustomer entity);

	public void delete(Integer id);

	public CCustomer update(CCustomer entity);

	public CCustomer findById(Integer id);

	public List<CCustomer> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<CCustomer> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);

	public abstract void mergeCust(Integer fromId, Integer toId);
}
