package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPUserExpePermission;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_USER_EXPE_PERMISSION")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PUserExpePermission extends AbstractPUserExpePermission {

	private static final long serialVersionUID = -1272056258696357136L;

}
