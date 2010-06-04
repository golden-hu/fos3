package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPort;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IGPortDAO {
	public void save(GPort entity);

	public void delete(Integer id);

	public GPort update(GPort entity);

	public GPort findById(Integer id);

	public List<GPort> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<GPort> complexQuery(final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
