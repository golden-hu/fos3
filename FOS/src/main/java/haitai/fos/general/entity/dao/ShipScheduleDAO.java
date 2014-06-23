package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IShipScheduleDAO;
import haitai.fos.general.entity.table.ShipSchedule;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class ShipScheduleDAO extends GenericDAO<ShipSchedule, Integer> implements IShipScheduleDAO {

	public ShipScheduleDAO() {
		super(ShipSchedule.class);
	}
}
