package haitai.fos.exp.entity.idao;

import java.util.Map;

import haitai.fos.exp.entity.table.TVoucherItem;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface ITVoucherItemDAO {
	public void save(TVoucherItem entity);

	public void delete(Integer id);

	public TVoucherItem update(TVoucherItem entity);

	public TVoucherItem findById(Integer id);

	public List<TVoucherItem> findByProperties(
			final Map<String, Object> propertyMap);

	public List<TVoucherItem> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
