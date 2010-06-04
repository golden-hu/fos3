package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPTaskType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_TASK_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PTaskType extends AbstractPTaskType {

	private static final long serialVersionUID = 8847451225577799700L;
}
