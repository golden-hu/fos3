package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCargoClass;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CARGO_CLASS")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCargoClass extends AbstractGCargoClass {

	private static final long serialVersionUID = -7367115998026868114L;
}
