package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCargoPropertyDAO;
import haitai.fos.general.entity.table.GCargoProperty;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCargoPropertyDAO extends GenericDAO<GCargoProperty, Integer> implements IGCargoPropertyDAO {

	public GCargoPropertyDAO() {
		super(GCargoProperty.class);
	}

}
