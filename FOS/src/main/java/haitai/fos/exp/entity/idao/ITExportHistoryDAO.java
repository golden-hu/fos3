package haitai.fos.exp.entity.idao;

import haitai.fos.exp.entity.table.TExportHistory;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface ITExportHistoryDAO {
	public void save(TExportHistory entity);

	public List<TExportHistory> saveByRowAction(List<TExportHistory> entityList);

	public void delete(Integer id);

	public TExportHistory update(TExportHistory entity);

	public TExportHistory findById(Integer id);

	public List<TExportHistory> findByProperties(
			final Map<String, Object> propertyMap);

	public List<TExportHistory> complexQuery(final List<FosQuery> conditions,
											 final Map<String, Object> propertyMap);

}
