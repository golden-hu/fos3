package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GLinePort;

import java.util.Map;
import java.util.List;

public interface IGLinePortDAO {
	public void save(GLinePort entity);

	public void delete(Integer id);

	public GLinePort update(GLinePort entity);

	public GLinePort findById(Integer id);

	public List<GLinePort> findByProperties(
			final Map<String, Object> propertyMap);
}
