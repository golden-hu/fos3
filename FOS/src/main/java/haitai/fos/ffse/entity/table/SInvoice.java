package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSInvoice;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_INVOICE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SInvoice extends AbstractSInvoice {
	private static final long serialVersionUID = 4197110599512051179L;
}
