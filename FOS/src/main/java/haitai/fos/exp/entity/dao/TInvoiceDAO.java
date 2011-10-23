package haitai.fos.exp.entity.dao;

import haitai.fos.exp.entity.idao.ITInvoiceDAO;
import haitai.fos.exp.entity.table.TInvoice;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class TInvoiceDAO extends GenericDAO<TInvoice, Integer> implements ITInvoiceDAO {

	public TInvoiceDAO() {
		super(TInvoice.class);
	}
}
