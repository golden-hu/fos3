package haitai.fos.exp.entity.idao;

import java.util.Map;

import haitai.fos.exp.entity.table.TExportHistory;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface ITExportHistoryDAO {
	public void save(TExportHistory entity);

	public void delete(Integer id);

	public TExportHistory update(TExportHistory entity);

	public TExportHistory findById(Integer id);

	public List<TExportHistory> findByProperties(
			final Map<String, Object> propertyMap);

	public List<TExportHistory> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
