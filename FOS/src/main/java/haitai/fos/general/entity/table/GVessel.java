package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGVessel;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_VESSEL")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GVessel extends AbstractGVessel {

	private static final long serialVersionUID = 8201145277141157352L;
}
