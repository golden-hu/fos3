package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.GVehicleType;

import java.util.List;
import java.util.Map;

public interface IGVehicleTypeDAO {
	public void save(GVehicleType entity);

	public List<GVehicleType> saveByRowAction(List<GVehicleType> entityList);

	public void delete(Integer id);

	public GVehicleType update(GVehicleType entity);

	public GVehicleType findById(Integer id);

	public List<GVehicleType> findByProperties(final Map<String, Object> propertyMap);
}
