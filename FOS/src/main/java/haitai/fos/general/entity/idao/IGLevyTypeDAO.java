package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GLevyType;

import java.util.List;
import java.util.Map;

public interface IGLevyTypeDAO {
	public void save(GLevyType entity);

	public List<GLevyType> saveByRowAction(List<GLevyType> entityList);

	public void delete(Integer id);

	public GLevyType update(GLevyType entity);

	public GLevyType findById(Integer id);

	public List<GLevyType> findByProperties(final Map<String, Object> propertyMap);
}
