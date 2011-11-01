package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GUsage;

import java.util.List;
import java.util.Map;

public interface IGUsageDAO {
	public void save(GUsage entity);

	public List<GUsage> saveByRowAction(List<GUsage> entityList);

	public void delete(Integer id);

	public GUsage update(GUsage entity);

	public GUsage findById(Integer id);

	public List<GUsage> findByProperties(final Map<String, Object> propertyMap);
}
