package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISBillItemDAO;
import haitai.fos.ffse.entity.table.SBillItem;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SBillItemDAO extends GenericDAO<SBillItem, Integer> implements
		ISBillItemDAO {

	public SBillItemDAO() {
		super(SBillItem.class);
	}

}
