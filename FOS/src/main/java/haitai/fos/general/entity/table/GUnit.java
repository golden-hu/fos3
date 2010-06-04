package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGUnit;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_UNIT")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GUnit extends AbstractGUnit {

	private static final long serialVersionUID = -7891529748655317653L;
}
