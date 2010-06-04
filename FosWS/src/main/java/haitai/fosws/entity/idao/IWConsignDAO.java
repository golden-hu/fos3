package haitai.fosws.entity.idao;

import haitai.fosws.entity.table.WConsign;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IWConsignDAO {
	public void save(WConsign entity);

	public void delete(Integer id);

	public WConsign update(WConsign entity);

	public WConsign findById(Integer id);

	public List<WConsign> findByProperties(final Map<String, Object> propertyMap);

	@SuppressWarnings("unchecked")
	public abstract List complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
