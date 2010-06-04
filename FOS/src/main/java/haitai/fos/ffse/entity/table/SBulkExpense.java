package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSBulkExpense;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_BULK_EXPENSE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SBulkExpense extends AbstractSBulkExpense {
	private static final long serialVersionUID = 1860930706272253560L;
}
