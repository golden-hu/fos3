package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCSalesCommission;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_SALES_COMMISSION")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CSalesCommission extends AbstractCSalesCommission {
	private static final long serialVersionUID = 6772755858753272470L;
	private Double baseAmount;
	private Double commission;
	@Transient
	public Double getBaseAmount() {
		return baseAmount;
	}

	public void setBaseAmount(Double baseAmount) {
		this.baseAmount = baseAmount;
	}

	@Transient
	public Double getCommission() {
		return commission;
	}

	public void setCommission(Double commission) {
		this.commission = commission;
	}
	
}
