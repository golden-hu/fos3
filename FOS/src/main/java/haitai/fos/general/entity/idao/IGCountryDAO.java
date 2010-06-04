package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCountry;

import java.util.Map;
import java.util.List;

public interface IGCountryDAO {
	public void save(GCountry entity);

	public void delete(Integer id);

	public GCountry update(GCountry entity);

	public GCountry findById(Integer id);

	public List<GCountry> findByProperties(
			final Map<String, Object> propertyMap);
}
