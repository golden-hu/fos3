package haitai.fos.general.entity.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import haitai.fos.general.entity.idao.IShipScheduleDAO;
import haitai.fos.general.entity.table.ShipSchedule;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class ShipScheduleDAO extends GenericDAO<ShipSchedule, Integer> implements IShipScheduleDAO {

	public ShipScheduleDAO() {
		super(ShipSchedule.class);
	}
	
	public List<?> findDistinctVessel(String vesselName){
		String sql = "select distinct v.vesselName,v.vesselNameCn FROM ShipSchedule v where v.vesselName like :vesselName";
		Map<String,String> qmap = new HashMap<String,String>();
		qmap.put("vesselName", vesselName+"%");
		return queryByJpql(sql,qmap);
	}
}
