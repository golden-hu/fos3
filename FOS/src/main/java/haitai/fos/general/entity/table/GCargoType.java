package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCargoType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CARGO_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCargoType extends AbstractGCargoType {

	private static final long serialVersionUID = -4111378114431954372L;
}
