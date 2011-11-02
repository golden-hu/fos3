package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCountry;

import java.util.List;
import java.util.Map;

public interface IGCountryDAO {
	public void save(GCountry entity);

	public List<GCountry> saveByRowAction(List<GCountry> entityList);

	public void delete(Integer id);

	public GCountry update(GCountry entity);

	public GCountry findById(Integer id);

	public List<GCountry> findByProperties(final Map<String, Object> propertyMap);
}
