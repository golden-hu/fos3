package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GTransType;

import java.util.Map;
import java.util.List;

public interface IGTransTypeDAO {
	public void save(GTransType entity);

	public void delete(Integer id);

	public GTransType update(GTransType entity);

	public GTransType findById(Integer id);

	public List<GTransType> findByProperties(
			final Map<String, Object> propertyMap);
}
