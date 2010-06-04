package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPGroupUser;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_GROUP_USER" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PGroupUser extends AbstractPGroupUser {

	private static final long serialVersionUID = 6075745603473865025L;
}
