package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFTransTask;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_TRANS_TASK" , uniqueConstraints = {})
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FTransTask extends AbstractFTransTask {

	private static final long serialVersionUID = 7619648576720641322L;
}
