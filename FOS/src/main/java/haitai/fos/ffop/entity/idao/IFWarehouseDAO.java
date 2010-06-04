package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FWarehouse;

import java.util.List;
import java.util.Map;

public interface IFWarehouseDAO {
	public void save(FWarehouse entity);

	public void delete(Integer id);

	public FWarehouse update(FWarehouse entity);

	public FWarehouse findById(Integer id);

	public List<FWarehouse> findByProperties(final Map<String, Object> propertyMap);
}