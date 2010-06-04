package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCVendorCategory;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_VENDOR_CATEGORY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CVendorCategory extends AbstractCVendorCategory {

	private static final long serialVersionUID = -1028652599456662103L;
}
