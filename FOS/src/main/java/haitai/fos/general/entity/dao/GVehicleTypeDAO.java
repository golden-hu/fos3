package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGVehicleTypeDAO;
import haitai.fos.general.entity.table.GVehicleType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GVehicleTypeDAO extends GenericDAO<GVehicleType, Integer>
		implements IGVehicleTypeDAO {

	public GVehicleTypeDAO() {
		super(GVehicleType.class);
	}
}
