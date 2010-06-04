package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCPriceLine;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_PRICE_LINE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CPriceLine extends AbstractCPriceLine {

	private static final long serialVersionUID = -4744046776200957023L;
}
