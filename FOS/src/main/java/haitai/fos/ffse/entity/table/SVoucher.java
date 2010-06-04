package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSVoucher;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_VOUCHER" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SVoucher extends AbstractSVoucher {

	private static final long serialVersionUID = -1346401909772208148L;
}
