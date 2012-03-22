package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPComments;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_COMMENTS" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PComments extends AbstractPComments {

	private static final long serialVersionUID = -19153152861793397L;
}
