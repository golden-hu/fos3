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
public abstract class AbstractCPriceSheet extends BaseDomain {

	private static final long serialVersionUID = 2055819606320084580L;
	private Integer prshId;
	private Integer version;
	private Integer prshVendorId;
	private String prshVendorName;
	private Integer prshCarrier;
	private String prshCarrierName;
	private String prshBizType;
	private String prshContractNo;
	private Integer prshPol;
	private String prshPolEn;
	private String prshPolHarbour;
	private Integer shliId;
	private String shliName;
	private Integer vessId;
	private String vessName;
	private Integer voyaId;
	private String voyaName;
	private Date prshStartDate;
	private Date prshEndDate;
	private String prshRemarks;
	private Short prshStatus;
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
	@Column(name = "PRSH_ID", unique = true, nullable = false)
	public Integer getPrshId() {
		return this.prshId;
	}

	public void setPrshId(Integer prshId) {
		this.prshId = prshId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PRSH_VENDOR_ID")
	public Integer getPrshVendorId() {
		return this.prshVendorId;
	}

	public void setPrshVendorId(Integer prshVendorId) {
		this.prshVendorId = prshVendorId;
	}

	@Column(name = "PRSH_VENDOR_NAME", length = 64)
	public String getPrshVendorName() {
		return this.prshVendorName;
	}

	public void setPrshVendorName(String prshVendorName) {
		this.prshVendorName = prshVendorName;
	}

	@Column(name = "PRSH_CARRIER")
	public Integer getPrshCarrier() {
		return this.prshCarrier;
	}

	public void setPrshCarrier(Integer prshCarrier) {
		this.prshCarrier = prshCarrier;
	}

	@Column(name = "PRSH_CARRIER_NAME", length = 64)
	public String getPrshCarrierName() {
		return this.prshCarrierName;
	}

	public void setPrshCarrierName(String prshCarrierName) {
		this.prshCarrierName = prshCarrierName;
	}

	@Column(name = "PRSH_BIZ_TYPE", length = 1)
	public String getPrshBizType() {
		return this.prshBizType;
	}

	public void setPrshBizType(String prshBizType) {
		this.prshBizType = prshBizType;
	}

	@Column(name = "PRSH_CONTRACT_NO", length = 32)
	public String getPrshContractNo() {
		return this.prshContractNo;
	}

	public void setPrshContractNo(String prshContractNo) {
		this.prshContractNo = prshContractNo;
	}

	@Column(name = "PRSH_POL")
	public Integer getPrshPol() {
		return this.prshPol;
	}

	public void setPrshPol(Integer prshPol) {
		this.prshPol = prshPol;
	}

	@Column(name = "PRSH_POL_EN", length = 64)
	public String getPrshPolEn() {
		return this.prshPolEn;
	}

	public void setPrshPolEn(String prshPolEn) {
		this.prshPolEn = prshPolEn;
	}

	@Column(name = "PRSH_POL_HARBOUR", length = 200)
	public String getPrshPolHarbour() {
		return this.prshPolHarbour;
	}

	public void setPrshPolHarbour(String prshPolHarbour) {
		this.prshPolHarbour = prshPolHarbour;
	}

	@Column(name = "SHLI_ID")
	public Integer getShliId() {
		return this.shliId;
	}

	public void setShliId(Integer shliId) {
		this.shliId = shliId;
	}

	@Column(name = "SHLI_NAME", length = 32)
	public String getShliName() {
		return this.shliName;
	}

	public void setShliName(String shliName) {
		this.shliName = shliName;
	}

	@Column(name = "VESS_ID")
	public Integer getVessId() {
		return this.vessId;
	}

	public void setVessId(Integer vessId) {
		this.vessId = vessId;
	}

	@Column(name = "VESS_NAME", length = 64)
	public String getVessName() {
		return this.vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Column(name = "VOYA_ID")
	public Integer getVoyaId() {
		return this.voyaId;
	}

	public void setVoyaId(Integer voyaId) {
		this.voyaId = voyaId;
	}

	@Column(name = "VOYA_NAME", length = 32)
	public String getVoyaName() {
		return this.voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PRSH_START_DATE", length = 10)
	public Date getPrshStartDate() {
		return this.prshStartDate;
	}

	public void setPrshStartDate(Date prshStartDate) {
		this.prshStartDate = prshStartDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PRSH_END_DATE", length = 10)
	public Date getPrshEndDate() {
		return this.prshEndDate;
	}

	public void setPrshEndDate(Date prshEndDate) {
		this.prshEndDate = prshEndDate;
	}

	@Column(name = "PRSH_REMARKS", length = 500)
	public String getPrshRemarks() {
		return this.prshRemarks;
	}

	public void setPrshRemarks(String prshRemarks) {
		this.prshRemarks = prshRemarks;
	}

	@Column(name = "PRSH_STATUS")
	public Short getPrshStatus() {
		return this.prshStatus;
	}

	public void setPrshStatus(Short prshStatus) {
		this.prshStatus = prshStatus;
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