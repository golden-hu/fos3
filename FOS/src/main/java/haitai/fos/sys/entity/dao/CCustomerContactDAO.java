package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICCustomerContactDAO;
import haitai.fos.sys.entity.table.CCustomerContact;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class CCustomerContactDAO extends GenericDAO<CCustomerContact, Integer>
		implements ICCustomerContactDAO {

	public CCustomerContactDAO() {
		super(CCustomerContact.class);
	}
}
