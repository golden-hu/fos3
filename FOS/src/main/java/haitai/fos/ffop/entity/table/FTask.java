package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFTask;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_TASK")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FTask extends AbstractFTask {

	private static final long serialVersionUID = -2612280090087197273L;
}
