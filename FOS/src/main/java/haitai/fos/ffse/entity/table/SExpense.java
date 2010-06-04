package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSExpense;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_EXPENSE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SExpense extends AbstractSExpense {

	private static final long serialVersionUID = 5120327915540955190L;
	private Short editable;

	@Transient
	public Short getEditable() {
		return editable;
	}

	public void setEditable(Short editable) {
		this.editable = editable;
	}

}
