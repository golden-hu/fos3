package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFReassign;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_REASSIGN")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FReassign extends AbstractFReassign {

	private static final long serialVersionUID = 6326683791300096313L;
}
