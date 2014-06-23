package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractShipSchedule;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "SHIP_SCHEDULE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ShipSchedule extends AbstractShipSchedule {

	private static final long serialVersionUID = 407518185024634695L;
}
