package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGPaymentTermDAO;
import haitai.fos.general.entity.table.GPaymentTerm;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GPaymentTermDAO extends GenericDAO<GPaymentTerm, Integer> implements IGPaymentTermDAO {

	public GPaymentTermDAO() {
		super(GPaymentTerm.class);
	}
}
