package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCharge;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CHARGE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCharge extends AbstractGCharge {

	private static final long serialVersionUID = 4761212037600980266L;
}
