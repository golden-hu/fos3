package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPBranch;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * @author Gordon
 *
 */


@Entity
@Table(name = "P_BRANCH")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PBranch extends AbstractPBranch {

	private static final long serialVersionUID = 4388368991716624434L;

}
