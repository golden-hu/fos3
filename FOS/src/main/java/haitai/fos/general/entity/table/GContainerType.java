package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGContainerType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CONTAINER_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GContainerType extends AbstractGContainerType {

	private static final long serialVersionUID = 5971433222411991135L;
}
