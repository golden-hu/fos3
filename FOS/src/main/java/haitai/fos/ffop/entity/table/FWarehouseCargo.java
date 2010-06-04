package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFWarehouseCargo;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_WAREHOUSE_CARGO" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FWarehouseCargo extends AbstractFWarehouseCargo {

	private static final long serialVersionUID = -6293048640127516813L;
}
