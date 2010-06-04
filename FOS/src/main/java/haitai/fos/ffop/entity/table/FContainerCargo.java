package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFContainerCargo;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CONTAINER_CARGO" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FContainerCargo extends AbstractFContainerCargo {

	private static final long serialVersionUID = 5972269563771599834L;
}
