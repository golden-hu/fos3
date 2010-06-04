package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPUserRole;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_USER_ROLE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PUserRole extends AbstractPUserRole {

	private static final long serialVersionUID = -5778887350420542666L;
	private String roleName;

	@Transient
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
}
