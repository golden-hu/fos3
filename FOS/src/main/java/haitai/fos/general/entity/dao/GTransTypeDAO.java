package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGTransTypeDAO;
import haitai.fos.general.entity.table.GTransType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GTransTypeDAO extends GenericDAO<GTransType, Integer> implements
		IGTransTypeDAO {

	public GTransTypeDAO() {
		super(GTransType.class);
	}
}
