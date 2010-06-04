package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPCompany;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_COMPANY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PCompany extends AbstractPCompany {

	private static final long serialVersionUID = 4388368991716624434L;

}
