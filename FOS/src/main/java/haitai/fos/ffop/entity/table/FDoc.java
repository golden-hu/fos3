package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFDoc;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_DOC")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FDoc extends AbstractFDoc {

	private static final long serialVersionUID = -3633738490135360811L;
	private String vessName;
	private String voyaName;
	private String consMblNo;
	private String custName;
	private Date consSailDate;
	private String consCargoOwnerName;

	@Transient
	public String getVessName() {
		return vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Transient
	public String getVoyaName() {
		return voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Transient
	public String getConsMblNo() {
		return consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Transient
	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Transient
	public Date getConsSailDate() {
		return consSailDate;
	}

	public void setConsSailDate(Date consSailDate) {
		this.consSailDate = consSailDate;
	}

	@Transient
	public String getConsCargoOwnerName() {
		return consCargoOwnerName;
	}

	public void setConsCargoOwnerName(String consCargoOwnerName) {
		this.consCargoOwnerName = consCargoOwnerName;
	}
}
