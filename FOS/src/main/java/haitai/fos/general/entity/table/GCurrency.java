package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCurrency;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CURRENCY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCurrency extends AbstractGCurrency {

	private static final long serialVersionUID = 1867265094786286497L;
}
