package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPRoleFunction;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_ROLE_FUNCTION" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PRoleFunction extends AbstractPRoleFunction {

	private static final long serialVersionUID = 7114795603052824179L;
}
