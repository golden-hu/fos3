package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GUnit;

import java.util.Map;
import java.util.List;

public interface IGUnitDAO {
	public void save(GUnit entity);

	public void delete(Integer id);

	public GUnit update(GUnit entity);

	public GUnit findById(Integer id);

	public List<GUnit> findByProperties(final Map<String, Object> propertyMap);
}
