package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GContainerClass;

import java.util.List;
import java.util.Map;

public interface IGContainerClassDAO {
	public void save(GContainerClass entity);

	public List<GContainerClass> saveByRowAction(List<GContainerClass> entityList);

	public void delete(Integer id);

	public GContainerClass update(GContainerClass entity);

	public GContainerClass findById(Integer id);

	public List<GContainerClass> findByProperties(final Map<String, Object> propertyMap);
}
