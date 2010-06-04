package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSExpenseB;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_EXPENSE_B")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SExpenseB extends AbstractSExpenseB {

	private static final long serialVersionUID = 982150917755475240L;
}
