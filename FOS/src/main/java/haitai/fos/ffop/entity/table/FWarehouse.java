package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFWarehouse;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_WAREHOUSE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FWarehouse extends AbstractFWarehouse {

	private static final long serialVersionUID = 2455406264305684809L;
}
