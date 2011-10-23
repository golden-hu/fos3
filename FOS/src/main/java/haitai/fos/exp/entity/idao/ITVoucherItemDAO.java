package haitai.fos.exp.entity.idao;

import haitai.fos.exp.entity.table.TVoucherItem;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ITVoucherItemDAO {
	public void save(TVoucherItem entity);

	public List<TVoucherItem> saveByRowAction(List<TVoucherItem> entityList);

	public void delete(Integer id);

	public TVoucherItem update(TVoucherItem entity);

	public TVoucherItem findById(Integer id);

	public List<TVoucherItem> findByProperties(
			final Map<String, Object> propertyMap);

	public List<TVoucherItem> complexQuery(final List<FosQuery> conditions,
										   final Map<String, Object> propertyMap);

}
