package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFCargo;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CARGO")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FCargo extends AbstractFCargo {

	private static final long serialVersionUID = -5261587290882473713L;
	private String consMblNo;
	private String consHblNo;
	private String custName;

	@Transient
	public String getConsMblNo() {
		return consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Transient
	public String getConsHblNo() {
		return consHblNo;
	}

	public void setConsHblNo(String consHblNo) {
		this.consHblNo = consHblNo;
	}

	@Transient
	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}
}
