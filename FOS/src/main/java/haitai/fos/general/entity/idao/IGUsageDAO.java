package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GUsage;

import java.util.Map;
import java.util.List;

public interface IGUsageDAO {
	public void save(GUsage entity);

	public void delete(Integer id);

	public GUsage update(GUsage entity);

	public GUsage findById(Integer id);

	public List<GUsage> findByProperties(final Map<String, Object> propertyMap);
}
