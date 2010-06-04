package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFSecondShip;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_SECOND_SHIP" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FSecondShip extends AbstractFSecondShip {

	private static final long serialVersionUID = 4643734238963886785L;
}
