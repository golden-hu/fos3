package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GContainerType;

import java.util.List;
import java.util.Map;

public interface IGContainerTypeDAO {
	public void save(GContainerType entity);

	public List<GContainerType> saveByRowAction(List<GContainerType> entityList);

	public void delete(Integer id);

	public GContainerType update(GContainerType entity);

	public GContainerType findById(Integer id);

	public List<GContainerType> findByProperties(final Map<String, Object> propertyMap);
}
