package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCSalesQuota;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_SALES_QUOTA")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CSalesQuota extends AbstractCSalesQuota {

	private static final long serialVersionUID = -4313488563396800449L;
}
