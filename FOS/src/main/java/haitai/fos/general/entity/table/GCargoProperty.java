package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCargoProperty;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CARGO_PROPERTY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCargoProperty extends AbstractGCargoProperty {

	private static final long serialVersionUID = -7367115998026868114L;
}
