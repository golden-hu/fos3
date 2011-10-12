package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFAttach;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_ATTACH" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FAttach extends AbstractFAttach {

	private static final long serialVersionUID = -2395239664446291006L;
}
