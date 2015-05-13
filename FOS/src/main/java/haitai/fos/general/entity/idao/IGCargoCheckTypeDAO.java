package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GCargoCheckType;

import java.util.List;
import java.util.Map;

public interface IGCargoCheckTypeDAO {
	public void save(GCargoCheckType entity);

	public List<GCargoCheckType> saveByRowAction(List<GCargoCheckType> entityList);

	public void delete(Integer id);

	public GCargoCheckType update(GCargoCheckType entity);

	public GCargoCheckType findById(Integer id);

	public List<GCargoCheckType> findByProperties(final Map<String, Object> propertyMap);
}
