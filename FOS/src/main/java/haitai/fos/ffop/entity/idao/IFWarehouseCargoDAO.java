package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FWarehouseCargo;

import java.util.List;
import java.util.Map;

public interface IFWarehouseCargoDAO {
	public void save(FWarehouseCargo entity);

	public void delete(Integer id);

	public FWarehouseCargo update(FWarehouseCargo entity);

	public FWarehouseCargo findById(Integer id);

	public List<FWarehouseCargo> findByProperties(final Map<String, Object> propertyMap);
}