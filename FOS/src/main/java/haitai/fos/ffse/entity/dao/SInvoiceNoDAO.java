package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISInvoiceNoDAO;
import haitai.fos.ffse.entity.table.SInvoiceNo;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SInvoiceNoDAO extends GenericDAO<SInvoiceNo, Integer> implements ISInvoiceNoDAO {

	public SInvoiceNoDAO() {
		super(SInvoiceNo.class);
	}

}
