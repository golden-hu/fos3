package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPlace;

import java.util.List;
import java.util.Map;

public interface IGPlaceDAO {
	public void save(GPlace entity);

	public List<GPlace> saveByRowAction(List<GPlace> entityList);

	public void delete(Integer id);

	public GPlace update(GPlace entity);

	public GPlace findById(Integer id);

	public List<GPlace> findByProperties(final Map<String, Object> propertyMap);
}
