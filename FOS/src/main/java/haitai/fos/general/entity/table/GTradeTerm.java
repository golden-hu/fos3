package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGTradeTerm;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_TRADE_TERM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GTradeTerm extends AbstractGTradeTerm {

	private static final long serialVersionUID = 6801031514873392109L;
}
