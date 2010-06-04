package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCCustomerCategory;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_CUSTOMER_CATEGORY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CCustomerCategory extends AbstractCCustomerCategory {

	private static final long serialVersionUID = 7512966461328038620L;
}
