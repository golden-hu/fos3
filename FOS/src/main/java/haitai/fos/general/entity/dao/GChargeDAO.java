package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGChargeDAO;
import haitai.fos.general.entity.table.GCharge;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GChargeDAO extends GenericDAO<GCharge, Integer> implements IGChargeDAO {

	public GChargeDAO() {
		super(GCharge.class);
	}
}
