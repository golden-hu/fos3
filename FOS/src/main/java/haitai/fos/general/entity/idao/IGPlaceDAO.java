package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GPlace;

import java.util.Map;
import java.util.List;

public interface IGPlaceDAO {
	public void save(GPlace entity);

	public void delete(Integer id);

	public GPlace update(GPlace entity);

	public GPlace findById(Integer id);

	public List<GPlace> findByProperties(final Map<String, Object> propertyMap);
}
