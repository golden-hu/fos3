package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PTemplateMap;

import java.util.Map;
import java.util.List;

public interface IPTemplateMapDAO {
	public void save(PTemplateMap entity);

	public void delete(Integer id);

	public PTemplateMap update(PTemplateMap entity);

	public PTemplateMap findById(Integer id);

	public List<PTemplateMap> findByProperties(
			final Map<String, Object> propertyMap);
}
