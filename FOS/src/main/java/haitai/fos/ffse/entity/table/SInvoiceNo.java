package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSInvoiceNo;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_INVOICE_NO")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SInvoiceNo extends AbstractSInvoiceNo {

	private static final long serialVersionUID = -6063511814723987198L;
}
