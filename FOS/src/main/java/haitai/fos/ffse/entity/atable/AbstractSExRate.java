package haitai.fos.ffse.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractSExRate extends BaseDomain {

	private static final long serialVersionUID = 8131929636236720502L;
	private Integer exraId;
	private Integer version;
	private String exraBaseCurrency;
	private String exraExCurrency;
	private Date exraStartDate;
	private Date exraEndDate;
	private Double exraRate;
	private Short active;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "EXRA_ID", unique = true, nullable = false)
	public Integer getExraId() {
		return this.exraId;
	}

	public void setExraId(Integer exraId) {
		this.exraId = exraId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "EXRA_BASE_CURRENCY", nullable = false, length = 3)
	public String getExraBaseCurrency() {
		return this.exraBaseCurrency;
	}

	public void setExraBaseCurrency(String exraBaseCurrency) {
		this.exraBaseCurrency = exraBaseCurrency;
	}

	@Column(name = "EXRA_EX_CURRENCY", nullable = false, length = 3)
	public String getExraExCurrency() {
		return this.exraExCurrency;
	}

	public void setExraExCurrency(String exraExCurrency) {
		this.exraExCurrency = exraExCurrency;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXRA_START_DATE", nullable = false, length = 10)
	public Date getExraStartDate() {
		return this.exraStartDate;
	}

	public void setExraStartDate(Date exraStartDate) {
		this.exraStartDate = exraStartDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXRA_END_DATE", length = 10)
	public Date getExraEndDate() {
		return this.exraEndDate;
	}

	public void setExraEndDate(Date exraEndDate) {
		this.exraEndDate = exraEndDate;
	}

	@Column(name = "EXRA_RATE", nullable = false, precision = 9, scale = 4)
	public Double getExraRate() {
		return this.exraRate;
	}

	public void setExraRate(Double exraRate) {
		this.exraRate = exraRate;
	}

	@Column(name = "ACTIVE", nullable = false)
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return this.modifyBy;
	}

	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Column(name = "COMP_CODE", nullable = false)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}