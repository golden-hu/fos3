package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGVehicleType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_VEHICLE_TYPE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GVehicleType extends AbstractGVehicleType {

	private static final long serialVersionUID = 7168516656173415667L;
}
