package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GLinePort;

import java.util.List;
import java.util.Map;

public interface IGLinePortDAO {
	public void save(GLinePort entity);

	public List<GLinePort> saveByRowAction(List<GLinePort> entityList);

	public void delete(Integer id);

	public GLinePort update(GLinePort entity);

	public GLinePort findById(Integer id);

	public List<GLinePort> findByProperties(final Map<String, Object> propertyMap);
}
