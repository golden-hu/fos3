package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GContainerClass;

import java.util.Map;
import java.util.List;

public interface IGContainerClassDAO {
	public void save(GContainerClass entity);

	public void delete(Integer id);

	public GContainerClass update(GContainerClass entity);

	public GContainerClass findById(Integer id);

	public List<GContainerClass> findByProperties(
			final Map<String, Object> propertyMap);
}
