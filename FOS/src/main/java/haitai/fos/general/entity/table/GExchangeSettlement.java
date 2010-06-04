package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGExchangeSettlement;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_EXCHANGE_SETTLEMENT")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GExchangeSettlement extends AbstractGExchangeSettlement {

	private static final long serialVersionUID = 3177385035651993977L;
}
