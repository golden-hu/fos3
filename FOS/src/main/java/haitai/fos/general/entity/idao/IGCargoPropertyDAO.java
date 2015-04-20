package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCargoProperty;

import java.util.List;
import java.util.Map;

public interface IGCargoPropertyDAO {
	public void save(GCargoProperty entity);

	public List<GCargoProperty> saveByRowAction(List<GCargoProperty> entityList);

	public void delete(Integer id);

	public GCargoProperty update(GCargoProperty entity);

	public GCargoProperty findById(Integer id);

	public List<GCargoProperty> findByProperties(final Map<String, Object> propertyMap);
}
