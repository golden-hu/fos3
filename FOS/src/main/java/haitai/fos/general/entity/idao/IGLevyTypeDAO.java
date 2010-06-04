package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GLevyType;

import java.util.Map;
import java.util.List;

public interface IGLevyTypeDAO {
	public void save(GLevyType entity);

	public void delete(Integer id);

	public GLevyType update(GLevyType entity);

	public GLevyType findById(Integer id);

	public List<GLevyType> findByProperties(
			final Map<String, Object> propertyMap);
}
