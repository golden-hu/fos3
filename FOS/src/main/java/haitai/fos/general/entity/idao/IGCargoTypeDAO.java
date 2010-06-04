package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCargoType;

import java.util.Map;
import java.util.List;

public interface IGCargoTypeDAO {
	public void save(GCargoType entity);

	public void delete(Integer id);

	public GCargoType update(GCargoType entity);

	public GCargoType findById(Integer id);

	public List<GCargoType> findByProperties(
			final Map<String, Object> propertyMap);
}
