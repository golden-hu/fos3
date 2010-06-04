package haitai.fos.ffse.entity.idao;

import haitai.fos.ffse.entity.table.SVoucherItem;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface ISVoucherItemDAO {
	public void save(SVoucherItem entity);

	public void delete(Integer id);

	public SVoucherItem update(SVoucherItem entity);

	public SVoucherItem findById(Integer id);

	public List<SVoucherItem> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<SVoucherItem> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<SVoucherItem> complexQueryByParent(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

	public abstract List<Object> complexQueryCust(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
