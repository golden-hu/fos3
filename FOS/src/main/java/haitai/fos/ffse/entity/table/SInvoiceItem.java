package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSInvoiceItem;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_INVOICE_ITEM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SInvoiceItem extends AbstractSInvoiceItem {

	private static final long serialVersionUID = 7389051654323983972L;
}
