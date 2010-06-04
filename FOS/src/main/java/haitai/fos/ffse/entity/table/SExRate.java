package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSExRate;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_EX_RATE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SExRate extends AbstractSExRate {

	private static final long serialVersionUID = 8473708271859475479L;
}
