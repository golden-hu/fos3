package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCargoClass;

import java.util.List;
import java.util.Map;

public interface IGCargoClassDAO {
	public void save(GCargoClass entity);

	public List<GCargoClass> saveByRowAction(List<GCargoClass> entityList);

	public void delete(Integer id);

	public GCargoClass update(GCargoClass entity);

	public GCargoClass findById(Integer id);

	public List<GCargoClass> findByProperties(final Map<String, Object> propertyMap);
}
