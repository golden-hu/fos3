package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGPlaceDAO;
import haitai.fos.general.entity.table.GPlace;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GPlaceDAO extends GenericDAO<GPlace, Integer> implements
		IGPlaceDAO {

	public GPlaceDAO() {
		super(GPlace.class);
	}
}
