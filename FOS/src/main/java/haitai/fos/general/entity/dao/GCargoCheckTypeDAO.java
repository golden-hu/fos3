package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGCargoCheckTypeDAO;
import haitai.fos.general.entity.table.GCargoCheckType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GCargoCheckTypeDAO extends GenericDAO<GCargoCheckType, Integer> implements IGCargoCheckTypeDAO {

	public GCargoCheckTypeDAO() {
		super(GCargoCheckType.class);
	}
}
