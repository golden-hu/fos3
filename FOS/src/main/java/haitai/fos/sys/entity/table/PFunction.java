package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPFunction;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_FUNCTION" )
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
public class PFunction extends AbstractPFunction {

	private static final long serialVersionUID = -3986412747217846306L;
}
