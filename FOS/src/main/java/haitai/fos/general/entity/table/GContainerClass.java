package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGContainerClass;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CONTAINER_CLASS")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GContainerClass extends AbstractGContainerClass {

	private static final long serialVersionUID = 5666663735226715404L;
}
