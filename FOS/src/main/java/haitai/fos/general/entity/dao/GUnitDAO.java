package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGUnitDAO;
import haitai.fos.general.entity.table.GUnit;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GUnitDAO extends GenericDAO<GUnit, Integer> implements IGUnitDAO {

	public GUnitDAO() {
		super(GUnit.class);
	}
}
