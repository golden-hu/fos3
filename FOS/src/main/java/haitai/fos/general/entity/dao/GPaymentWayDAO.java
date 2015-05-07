package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGPaymentWayDAO;
import haitai.fos.general.entity.table.GPaymentWay;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GPaymentWayDAO extends GenericDAO<GPaymentWay, Integer> implements IGPaymentWayDAO {

	public GPaymentWayDAO() {
		super(GPaymentWay.class);
	}
}
