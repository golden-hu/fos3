package haitai.fos.exp.entity.dao;

import haitai.fos.exp.entity.idao.ITInvoiceItemDAO;
import haitai.fos.exp.entity.table.TInvoiceItem;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class TInvoiceItemDAO extends GenericDAO<TInvoiceItem, Integer> implements ITInvoiceItemDAO {

	public TInvoiceItemDAO() {
		super(TInvoiceItem.class);
	}
}
