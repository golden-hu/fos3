package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFTransCargo;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_TRANS_CARGO" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FTransCargo extends AbstractFTransCargo {

	private static final long serialVersionUID = -2634334405782216459L;
}
