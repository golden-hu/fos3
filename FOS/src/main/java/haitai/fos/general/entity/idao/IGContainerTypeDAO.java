package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GContainerType;

import java.util.Map;
import java.util.List;

public interface IGContainerTypeDAO {
	public void save(GContainerType entity);

	public void delete(Integer id);

	public GContainerType update(GContainerType entity);

	public GContainerType findById(Integer id);

	public List<GContainerType> findByProperties(
			final Map<String, Object> propertyMap);
}
