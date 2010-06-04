package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPTemplate;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_TEMPLATE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PTemplate extends AbstractPTemplate {

	private static final long serialVersionUID = -111851541351999097L;
}
