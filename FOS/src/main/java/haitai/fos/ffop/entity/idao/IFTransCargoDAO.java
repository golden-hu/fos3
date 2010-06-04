package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FTransCargo;

import java.util.Map;
import java.util.List;

public interface IFTransCargoDAO {
	public void save(FTransCargo entity);

	public void delete(Integer id);

	public FTransCargo update(FTransCargo entity);

	public FTransCargo findById(Integer id);

	public List<FTransCargo> findByProperties(
			final Map<String, Object> propertyMap);
}
