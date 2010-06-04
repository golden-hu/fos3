package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCPriceSheet;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_PRICE_SHEET" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CPriceSheet extends AbstractCPriceSheet {

	private static final long serialVersionUID = -8525078626225259273L;
}
