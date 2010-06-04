package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSBalance;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_BALANCE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SBalance extends AbstractSBalance {

	private static final long serialVersionUID = -182566663041187206L;

}
