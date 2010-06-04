package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCargoClass;

import java.util.Map;
import java.util.List;

public interface IGCargoClassDAO {
	public void save(GCargoClass entity);

	public void delete(Integer id);

	public GCargoClass update(GCargoClass entity);

	public GCargoClass findById(Integer id);

	public List<GCargoClass> findByProperties(
			final Map<String, Object> propertyMap);
}
