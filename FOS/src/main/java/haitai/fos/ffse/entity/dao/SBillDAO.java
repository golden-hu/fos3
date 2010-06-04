package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISBillDAO;
import haitai.fos.ffse.entity.table.SBill;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SBillDAO extends GenericDAO<SBill, Integer> implements ISBillDAO {

	public SBillDAO() {
		super(SBill.class);
	}
}
