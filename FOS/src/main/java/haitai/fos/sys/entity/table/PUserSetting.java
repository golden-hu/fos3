package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPUserSetting;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_USER_SETTING")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PUserSetting extends AbstractPUserSetting {

	private static final long serialVersionUID = -8445407658463386343L;

}
