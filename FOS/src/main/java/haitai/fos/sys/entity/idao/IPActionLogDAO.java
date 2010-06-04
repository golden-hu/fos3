package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PActionLog;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IPActionLogDAO {
	public void save(PActionLog entity);

	public void delete(Integer id);

	public PActionLog update(PActionLog entity);

	public PActionLog findById(Integer id);

	public List<PActionLog> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<PActionLog> complexQuery(
			final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
