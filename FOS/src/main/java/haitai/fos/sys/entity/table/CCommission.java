package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCCommission;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_COMMISSION")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CCommission extends AbstractCCommission {

	private static final long serialVersionUID = -187715415060407768L;
}
