package haitai.fos.ffop.entity.atable;

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
public abstract class AbstractFContainerTrace extends BaseDomain {

	private static final long serialVersionUID = -126663786830677349L;
	
	private Integer cotrId;
	private Integer consId;
	private String consNo;
	private String contNo;
	private String contType;
	private String contOwner;
	private Integer contOwnerId;
	private Integer contNum;
	private Date consEta;
	private Date consExpiryDate;
	private Short custFreeDay;
	private Double custExtendedRate;
	private Double custExtendedFee;
	private Short custExtendedDay;
	private Short tenantFreeDay;
	private Double tenantExtendedRate;
	private Double tenantExtendedFee;
	private Short tenantExtendedDay;
	private String contRemarks;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Integer version;
	private Short removed;
	
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COTR_ID", unique = true, nullable = false)
	public Integer getCotrId() {
		return cotrId;
	}
	public void setCotrId(Integer cotrId) {
		this.cotrId = cotrId;
	}
	
	@Column(name = "CONS_ID", length = 11)
	public Integer getConsId() {
		return consId;
	}
	public void setConsId(Integer consId) {
		this.consId = consId;
	}
	
	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return consNo;
	}
	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}
	
	@Column(name = "CONT_NO", length = 32)
	public String getContNo() {
		return contNo;
	}
	public void setContNo(String contNo) {
		this.contNo = contNo;
	}
	
	@Column(name = "CONT_TYPE", length = 10)
	public String getContType() {
		return contType;
	}
	public void setContType(String contType) {
		this.contType = contType;
	}
	
	@Column(name = "CONT_OWNER", length = 64)
	public String getContOwner() {
		return contOwner;
	}
	public void setContOwner(String contOwner) {
		this.contOwner = contOwner;
	}
	
	@Column(name = "CONT_OWNER_ID", length = 11)
	public Integer getContOwnerId() {
		return contOwnerId;
	}
	public void setContOwnerId(Integer contOwnerId) {
		this.contOwnerId = contOwnerId;
	}
	
	@Column(name = "CONT_NUM", length = 11)
	public Integer getContNum() {
		return contNum;
	}
	public void setContNum(Integer contNum) {
		this.contNum = contNum;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_ETA", length = 10)
	public Date getConsEta() {
		return consEta;
	}
	public void setConsEta(Date consEta) {
		this.consEta = consEta;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_EXPIRY_DATE", length = 10)
	public Date getConsExpiryDate() {
		return consExpiryDate;
	}
	public void setConsExpiryDate(Date consExpiryDate) {
		this.consExpiryDate = consExpiryDate;
	}
	
	@Column(name = "CUST_FREE_DAY", length = 10)
	public Short getCustFreeDay() {
		return custFreeDay;
	}
	public void setCustFreeDay(Short custFreeDay) {
		this.custFreeDay = custFreeDay;
	}
	
	@Column(name = "CUST_EXTENDED_RATE", precision = 9)
	public Double getCustExtendedRate() {
		return custExtendedRate;
	}
	public void setCustExtendedRate(Double custExtendedRate) {
		this.custExtendedRate = custExtendedRate;
	}
	
	@Column(name = "CUST_EXTENDED_FEE", precision = 9)
	public Double getCustExtendedFee() {
		return custExtendedFee;
	}
	public void setCustExtendedFee(Double custExtendedFee) {
		this.custExtendedFee = custExtendedFee;
	}
	
	@Column(name = "CUST_EXTENDED_DAY", length = 10)
	public Short getCustExtendedDay() {
		return custExtendedDay;
	}
	public void setCustExtendedDay(Short custExtendedDay) {
		this.custExtendedDay = custExtendedDay;
	}
	
	
	@Column(name = "TENANT_FREE_DAY", length = 10)
	public Short getTenantFreeDay() {
		return tenantFreeDay;
	}
	public void setTenantFreeDay(Short tenantFreeDay) {
		this.tenantFreeDay = tenantFreeDay;
	}
	
	@Column(name = "TENANT_EXTENDED_RATE", precision = 9)
	public Double getTenantExtendedRate() {
		return tenantExtendedRate;
	}
	public void setTenantExtendedRate(Double tenantExtendedRate) {
		this.tenantExtendedRate = tenantExtendedRate;
	}
	
	@Column(name = "TENANT_EXTENDED_FEE", precision = 9)
	public Double getTenantExtendedFee() {
		return tenantExtendedFee;
	}
	public void setTenantExtendedFee(Double tenantExtendedFee) {
		this.tenantExtendedFee = tenantExtendedFee;
	}
	
	@Column(name = "TENANT_EXTENDED_DAY", length = 10)
	public Short getTenantExtendedDay() {
		return tenantExtendedDay;
	}
	public void setTenantExtendedDay(Short tenantExtendedDay) {
		this.tenantExtendedDay = tenantExtendedDay;
	}
	
	@Column(name = "CONT_REMARKS", length=500)
	public String getContRemarks() {
		return contRemarks;
	}
	public void setContRemarks(String contRemarks) {
		this.contRemarks = contRemarks;
	}
	
	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return createBy;
	}
	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return modifyBy;
	}
	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return modifyTime;
	}
	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}
	
	@Column(name = "COMP_CODE", nullable = false, length = 4)
	public String getCompCode() {
		return compCode;
	}
	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}
	
	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	
	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return removed;
	}
	public void setRemoved(Short removed) {
		this.removed = removed;
	}
}