package haitai.fos.ffse.entity.atable;

import haitai.fw.entity.BaseDomain;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractSInterestRate extends BaseDomain {

	private static final long serialVersionUID = 2338128642592178069L;
	private Integer inraId;
	private Integer version;
	private String inraCurrency;
	private Date inraStartDate;
	private Date inraEndDate;
	private Double inraRate;
	private Short inraType;
	private Short active;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "INRA_ID", unique = true, nullable = false)
	public Integer getInraId() {
		return this.inraId;
	}

	public void setInraId(Integer inraId) {
		this.inraId = inraId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "INRA_CURRENCY", nullable = false, length = 3)
	public String getInraCurrency() {
		return this.inraCurrency;
	}

	public void setInraCurrency(String inraCurrency) {
		this.inraCurrency = inraCurrency;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INRA_START_DATE", nullable = false, length = 10)
	public Date getInraStartDate() {
		return this.inraStartDate;
	}

	public void setInraStartDate(Date inraStartDate) {
		this.inraStartDate = inraStartDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INRA_END_DATE", length = 10)
	public Date getInraEndDate() {
		return this.inraEndDate;
	}

	public void setInraEndDate(Date inraEndDate) {
		this.inraEndDate = inraEndDate;
	}

	@Column(name = "INRA_RATE", nullable = false, precision = 9, scale = 4)
	public Double getInraRate() {
		return this.inraRate;
	}

	public void setInraRate(Double inraRate) {
		this.inraRate = inraRate;
	}

	@Column(name = "INRA_TYPE")
	public Short getInraType() {
		return this.inraType;
	}

	public void setInraType(Short inraType) {
		this.inraType = inraType;
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

	@Column(name = "COMP_CODE", nullable = false, length = 4)
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