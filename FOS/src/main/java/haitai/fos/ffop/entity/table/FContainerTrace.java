package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFContainerTrace;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CONTAINER_TRACE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FContainerTrace extends AbstractFContainerTrace {

	private static final long serialVersionUID = 150298514339620698L;
	
	private Double custFee;
	private Double tenantFee;
	
	@Transient
	public Double getCustFee() {
		return custFee;
	}
	public void setCustFee(Double custFee) {
		this.custFee = custFee;
	}
	
	@Transient
	public Double getTenantFee() {
		return tenantFee;
	}
	public void setTenantFee(Double tenantFee) {
		this.tenantFee = tenantFee;
	}
	
	
}
