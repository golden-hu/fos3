package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPRole;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_ROLE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PRole extends AbstractPRole {

	private static final long serialVersionUID = -5067641266376894041L;
}
