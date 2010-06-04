package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGVesselDAO;
import haitai.fos.general.entity.table.GVessel;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GVesselDAO extends GenericDAO<GVessel, Integer> implements
		IGVesselDAO {

	public GVesselDAO() {
		super(GVessel.class);
	}
}
