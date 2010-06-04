package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISInvoiceEntryDAO;
import haitai.fos.ffse.entity.table.SInvoiceEntry;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SInvoiceEntryDAO extends GenericDAO<SInvoiceEntry, Integer>
		implements ISInvoiceEntryDAO {

	public SInvoiceEntryDAO() {
		super(SInvoiceEntry.class);
	}

}
