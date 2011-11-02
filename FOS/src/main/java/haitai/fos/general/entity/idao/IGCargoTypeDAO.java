package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCargoType;

import java.util.List;
import java.util.Map;

public interface IGCargoTypeDAO {
	public void save(GCargoType entity);

	public List<GCargoType> saveByRowAction(List<GCargoType> entityList);

	public void delete(Integer id);

	public GCargoType update(GCargoType entity);

	public GCargoType findById(Integer id);

	public List<GCargoType> findByProperties(final Map<String, Object> propertyMap);
}
