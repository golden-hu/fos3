package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSVoucherItem;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_VOUCHER_ITEM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SVoucherItem extends AbstractSVoucherItem {

	private static final long serialVersionUID = 9015527102542098639L;
}
