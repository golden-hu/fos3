package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSPrItem;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_PR_ITEM" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SPrItem extends AbstractSPrItem implements java.io.Serializable {

	private static final long serialVersionUID = 3617524766192514114L;
}
