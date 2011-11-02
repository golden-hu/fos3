package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGChargeClassDAO;
import haitai.fos.general.entity.table.GChargeClass;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GChargeClassDAO extends GenericDAO<GChargeClass, Integer> implements IGChargeClassDAO {

	public GChargeClassDAO() {
		super(GChargeClass.class);
	}
}
