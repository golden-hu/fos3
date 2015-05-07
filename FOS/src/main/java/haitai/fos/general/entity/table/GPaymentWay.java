package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGPaymentWay;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_PAYMENT_WAY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GPaymentWay extends AbstractGPaymentWay {

	private static final long serialVersionUID = 6125946824668171106L;
}
