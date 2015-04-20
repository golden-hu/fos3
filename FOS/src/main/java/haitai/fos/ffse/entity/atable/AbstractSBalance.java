package haitai.fos.ffse.entity.atable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractSBalance extends BaseDomain {

	private static final long serialVersionUID = 8237575300068834156L;
	private Integer balaId;
	private Integer version;
	private Integer custId;
	private String custName;
	private String custSname;
	private String currCode;
	private Double balaAmount;
	private String remarks;
	private String compCode;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "BALA_ID", unique = true, nullable = false)
	public Integer getBalaId() {
		return this.balaId;
	}

	public void setBalaId(Integer balaId) {
		this.balaId = balaId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUST_ID")
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Column(name = "CUST_NAME", length = 64)
	public String getCustName() {
		return this.custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Column(name = "CUST_SNAME", length = 64)
	public String getCustSname() {
		return this.custSname;
	}

	public void setCustSname(String custSname) {
		this.custSname = custSname;
	}

	@Column(name = "CURR_CODE", nullable = false, length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "BALA_AMOUNT", nullable = false, precision = 9)
	public Double getBalaAmount() {
		return this.balaAmount;
	}

	public void setBalaAmount(Double balaAmount) {
		this.balaAmount = balaAmount;
	}

	@Column(name = "REMARKS")
	public String getRemarks() {
		return this.remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	@Column(name = "COMP_CODE", nullable = false)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

}
