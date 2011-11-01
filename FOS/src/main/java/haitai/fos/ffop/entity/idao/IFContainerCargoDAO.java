package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FContainerCargo;

import java.util.List;
import java.util.Map;

public interface IFContainerCargoDAO {
	public void save(FContainerCargo entity);

	public List<FContainerCargo> saveByRowAction(List<FContainerCargo> entityList);

	public void delete(Integer id);

	public FContainerCargo update(FContainerCargo entity);

	public FContainerCargo findById(Integer id);

	public List<FContainerCargo> findByProperties(final Map<String, Object> propertyMap);
}
