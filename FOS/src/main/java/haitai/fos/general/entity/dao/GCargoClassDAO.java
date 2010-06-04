package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCargoClassDAO;
import haitai.fos.general.entity.table.GCargoClass;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCargoClassDAO extends GenericDAO<GCargoClass, Integer> implements
		IGCargoClassDAO {

	public GCargoClassDAO() {
		super(GCargoClass.class);
	}

}
