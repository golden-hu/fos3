package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCCustomer;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_CUSTOMER")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CCustomer extends AbstractCCustomer {

	private static final long serialVersionUID = 8471108842872123436L;
	
	private Short editable;

	@Transient
	public Short getEditable() {
		return editable;
	}

	public void setEditable(Short editable) {
		this.editable = editable;
	}
	
	
}
