package haitai.fos.exp.entity.table;

import haitai.fos.exp.entity.atable.AbstractTInvoiceItem;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "T_INVOICE_ITEM")
public class TInvoiceItem extends AbstractTInvoiceItem {

	private static final long serialVersionUID = -2500062015806430273L;

}
