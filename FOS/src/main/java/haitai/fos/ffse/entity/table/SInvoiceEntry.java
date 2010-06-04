package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSInvoiceEntry;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_INVOICE_ENTRY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SInvoiceEntry extends AbstractSInvoiceEntry {
	private static final long serialVersionUID = 2927394445225351154L;
}
