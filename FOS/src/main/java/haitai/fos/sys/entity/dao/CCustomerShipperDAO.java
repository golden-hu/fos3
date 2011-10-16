package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICCustomerShipperDAO;
import haitai.fos.sys.entity.table.CCustomerShipper;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class CCustomerShipperDAO extends GenericDAO<CCustomerShipper, Integer>
		implements ICCustomerShipperDAO {

	public CCustomerShipperDAO() {
		super(CCustomerShipper.class);
	}
}
