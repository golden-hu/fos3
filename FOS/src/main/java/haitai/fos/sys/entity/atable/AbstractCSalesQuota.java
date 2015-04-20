package haitai.fos.sys.entity.atable;

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
public abstract class AbstractCSalesQuota extends BaseDomain {

	private static final long serialVersionUID = 2781385991655609906L;
	private Integer saquId;
	private Integer version;
	private Integer saquSalesId;
	private String saquSalesName;
	private String saquYear;
	private String saquMonth;
	private Double saquBaseProfit;
	private Double saquCommissionRate;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "SAQU_ID", unique = true, nullable = false)
	public Integer getSaquId() {
		return this.saquId;
	}

	public void setSaquId(Integer saquId) {
		this.saquId = saquId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "SAQU_SALES_ID", nullable = false)
	public Integer getSaquSalesId() {
		return this.saquSalesId;
	}

	public void setSaquSalesId(Integer saquSalesId) {
		this.saquSalesId = saquSalesId;
	}

	@Column(name = "SAQU_SALES_NAME", nullable = false, length = 64)
	public String getSaquSalesName() {
		return this.saquSalesName;
	}

	public void setSaquSalesName(String saquSalesName) {
		this.saquSalesName = saquSalesName;
	}

	@Column(name = "SAQU_YEAR", length = 4)
	public String getSaquYear() {
		return this.saquYear;
	}

	public void setSaquYear(String saquYear) {
		this.saquYear = saquYear;
	}

	@Column(name = "SAQU_MONTH", length = 2)
	public String getSaquMonth() {
		return this.saquMonth;
	}

	public void setSaquMonth(String saquMonth) {
		this.saquMonth = saquMonth;
	}

	@Column(name = "SAQU_BASE_PROFIT", precision = 12)
	public Double getSaquBaseProfit() {
		return this.saquBaseProfit;
	}

	public void setSaquBaseProfit(Double saquBaseProfit) {
		this.saquBaseProfit = saquBaseProfit;
	}

	@Column(name = "SAQU_COMMISSION_RATE", precision = 9, scale = 4)
	public Double getSaquCommissionRate() {
		return this.saquCommissionRate;
	}

	public void setSaquCommissionRate(Double saquCommissionRate) {
		this.saquCommissionRate = saquCommissionRate;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
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