package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGTrainStationDao;
import haitai.fos.general.entity.table.GTrainStation;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GTrainStationDao extends GenericDAO<GTrainStation, Integer> implements IGTrainStationDao {

	public GTrainStationDao() {
		super(GTrainStation.class);
	}
}
