package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFRailwayBl;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_RAILWAY_BL")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FRailwayBl extends AbstractFRailwayBl {

	private static final long serialVersionUID = -7827460483701151910L;
}
