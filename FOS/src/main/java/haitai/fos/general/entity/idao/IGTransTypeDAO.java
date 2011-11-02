package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTransType;

import java.util.List;
import java.util.Map;

public interface IGTransTypeDAO {
	public void save(GTransType entity);

	public List<GTransType> saveByRowAction(List<GTransType> entityList);

	public void delete(Integer id);

	public GTransType update(GTransType entity);

	public GTransType findById(Integer id);

	public List<GTransType> findByProperties(final Map<String, Object> propertyMap);
}
