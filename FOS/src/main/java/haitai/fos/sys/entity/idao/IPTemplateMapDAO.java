package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PTemplateMap;

import java.util.List;
import java.util.Map;

public interface IPTemplateMapDAO {
	public void save(PTemplateMap entity);

	public List<PTemplateMap> saveByRowAction(List<PTemplateMap> entityList);

	public void delete(Integer id);

	public PTemplateMap update(PTemplateMap entity);

	public PTemplateMap findById(Integer id);

	public List<PTemplateMap> findByProperties(final Map<String, Object> propertyMap);
}
