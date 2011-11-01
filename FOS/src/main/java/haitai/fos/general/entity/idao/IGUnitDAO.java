package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GUnit;

import java.util.List;
import java.util.Map;

public interface IGUnitDAO {
	public void save(GUnit entity);

	public List<GUnit> saveByRowAction(List<GUnit> entityList);

	public void delete(Integer id);

	public GUnit update(GUnit entity);

	public GUnit findById(Integer id);

	public List<GUnit> findByProperties(final Map<String, Object> propertyMap);
}
