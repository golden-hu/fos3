package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GVehicleType;

import java.util.Map;
import java.util.List;

public interface IGVehicleTypeDAO {
	public void save(GVehicleType entity);

	public void delete(Integer id);

	public GVehicleType update(GVehicleType entity);

	public GVehicleType findById(Integer id);

	public List<GVehicleType> findByProperties(
			final Map<String, Object> propertyMap);
}
