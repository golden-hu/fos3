package haitai.fos.ffop.entity.idao;

import haitai.fos.ffop.entity.table.FSecondShip;

import java.util.List;
import java.util.Map;

public interface IFSecondShipDAO {
	public void save(FSecondShip entity);

	public List<FSecondShip> saveByRowAction(List<FSecondShip> entityList);

	public void delete(Integer id);

	public FSecondShip update(FSecondShip entity);

	public FSecondShip findById(Integer id);

	public List<FSecondShip> findByProperties(final Map<String, Object> propertyMap);
}
