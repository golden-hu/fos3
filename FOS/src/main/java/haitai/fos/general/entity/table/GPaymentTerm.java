package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGPaymentTerm;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_PAYMENT_TERM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GPaymentTerm extends AbstractGPaymentTerm {

	private static final long serialVersionUID = 2003443978863216931L;
}
