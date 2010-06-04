package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCargoTypeDAO;
import haitai.fos.general.entity.table.GCargoType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCargoTypeDAO extends GenericDAO<GCargoType, Integer> implements IGCargoTypeDAO {

	public GCargoTypeDAO() {
		super(GCargoType.class);
	}
}
