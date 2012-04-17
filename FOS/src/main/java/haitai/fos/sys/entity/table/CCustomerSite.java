package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCCustomerSite;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_CUSTOMER_SITE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CCustomerSite extends AbstractCCustomerSite {

	private static final long serialVersionUID = 2185384805883653324L;
}
