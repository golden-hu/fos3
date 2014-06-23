package haitai.fos.general.entity.idao;

import haitai.fos.general.entity.table.ShipSchedule;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IShipScheduleDAO {
	public void save(ShipSchedule entity);

	public ShipSchedule update(ShipSchedule entity);

	public List<ShipSchedule> findByProperties(final Map<String, Object> propertyMap);

	public abstract List<ShipSchedule> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);
}
