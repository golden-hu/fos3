package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GVessel;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IGVesselDAO {
	public void save(GVessel entity);

	public void delete(Integer id);

	public GVessel update(GVessel entity);

	public GVessel findById(Integer id);

	public List<GVessel> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<GVessel> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
