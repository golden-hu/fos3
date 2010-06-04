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
public abstract class AbstractSBulkExpense extends BaseDomain {

	private static final long serialVersionUID = -118402924918938768L;
	private Integer buexId;
	private Integer version;
	private Integer fconId;
	private String fconNo;
	private String fconContractNo;
	private Integer paliId;
	private String paliLabel;
	private String paliTrackNo;
	private Integer custId;
	private String custName;
	private String custSname;
	private Integer charId;
	private String charName;
	private Integer unitId;
	private String unitName;
	private String currCode;
	private String buexType;
	private Integer pateId;
	private String pateCode;
	private Date buexDate;
	private Double buexUnitPrice;
	private Double buexNum;
	private Double buexNum2;
	private Double buexTotalAmount;
	private Double buexExRate;
	private Short buexStatus;
	private Short buexExportFlag;
	private String buexRemarks;
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
	@Column(name = "BUEX_ID", unique = true, nullable = false)
	public Integer getBuexId() {
		return this.buexId;
	}

	public void setBuexId(Integer buexId) {
		this.buexId = buexId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FCON_ID", nullable = false)
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Column(name = "FCON_NO", length = 32)
	public String getFconNo() {
		return this.fconNo;
	}

	public void setFconNo(String fconNo) {
		this.fconNo = fconNo;
	}

	@Column(name = "FCON_CONTRACT_NO", nullable = false, length = 32)
	public String getFconContractNo() {
		return this.fconContractNo;
	}

	public void setFconContractNo(String fconContractNo) {
		this.fconContractNo = fconContractNo;
	}

	@Column(name = "PALI_ID")
	public Integer getPaliId() {
		return this.paliId;
	}

	public void setPaliId(Integer paliId) {
		this.paliId = paliId;
	}

	@Column(name = "PALI_LABEL", length = 32)
	public String getPaliLabel() {
		return this.paliLabel;
	}

	public void setPaliLabel(String paliLabel) {
		this.paliLabel = paliLabel;
	}

	@Column(name = "PALI_TRACK_NO", length = 32)
	public String getPaliTrackNo() {
		return this.paliTrackNo;
	}

	public void setPaliTrackNo(String paliTrackNo) {
		this.paliTrackNo = paliTrackNo;
	}

	@Column(name = "CUST_ID", nullable = false)
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

	@Column(name = "CHAR_ID", nullable = false)
	public Integer getCharId() {
		return this.charId;
	}

	public void setCharId(Integer charId) {
		this.charId = charId;
	}

	@Column(name = "CHAR_NAME", length = 32)
	public String getCharName() {
		return this.charName;
	}

	public void setCharName(String charName) {
		this.charName = charName;
	}

	@Column(name = "UNIT_ID")
	public Integer getUnitId() {
		return this.unitId;
	}

	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}

	@Column(name = "UNIT_NAME", length = 32)
	public String getUnitName() {
		return this.unitName;
	}

	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	@Column(name = "CURR_CODE", nullable = false, length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "BUEX_TYPE", nullable = false, length = 1)
	public String getBuexType() {
		return this.buexType;
	}

	public void setBuexType(String buexType) {
		this.buexType = buexType;
	}

	@Column(name = "PATE_ID")
	public Integer getPateId() {
		return this.pateId;
	}

	public void setPateId(Integer pateId) {
		this.pateId = pateId;
	}

	@Column(name = "PATE_CODE", length = 1)
	public String getPateCode() {
		return this.pateCode;
	}

	public void setPateCode(String pateCode) {
		this.pateCode = pateCode;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BUEX_DATE", length = 10)
	public Date getBuexDate() {
		return this.buexDate;
	}

	public void setBuexDate(Date buexDate) {
		this.buexDate = buexDate;
	}

	@Column(name = "BUEX_UNIT_PRICE", precision = 12, scale = 4)
	public Double getBuexUnitPrice() {
		return this.buexUnitPrice;
	}

	public void setBuexUnitPrice(Double buexUnitPrice) {
		this.buexUnitPrice = buexUnitPrice;
	}

	@Column(name = "BUEX_NUM", precision = 14, scale = 6)
	public Double getBuexNum() {
		return this.buexNum;
	}

	public void setBuexNum(Double buexNum) {
		this.buexNum = buexNum;
	}

	@Column(name = "BUEX_NUM2", precision = 14, scale = 6)
	public Double getBuexNum2() {
		return this.buexNum2;
	}

	public void setBuexNum2(Double buexNum2) {
		this.buexNum2 = buexNum2;
	}

	@Column(name = "BUEX_TOTAL_AMOUNT", nullable = false, precision = 12)
	public Double getBuexTotalAmount() {
		return this.buexTotalAmount;
	}

	public void setBuexTotalAmount(Double buexTotalAmount) {
		this.buexTotalAmount = buexTotalAmount;
	}

	@Column(name = "BUEX_EX_RATE", precision = 9, scale = 4)
	public Double getBuexExRate() {
		return this.buexExRate;
	}

	public void setBuexExRate(Double buexExRate) {
		this.buexExRate = buexExRate;
	}

	@Column(name = "BUEX_STATUS")
	public Short getBuexStatus() {
		return this.buexStatus;
	}

	public void setBuexStatus(Short buexStatus) {
		this.buexStatus = buexStatus;
	}

	@Column(name = "BUEX_EXPORT_FLAG")
	public Short getBuexExportFlag() {
		return this.buexExportFlag;
	}

	public void setBuexExportFlag(Short buexExportFlag) {
		this.buexExportFlag = buexExportFlag;
	}

	@Column(name = "BUEX_REMARKS", length = 200)
	public String getBuexRemarks() {
		return this.buexRemarks;
	}

	public void setBuexRemarks(String buexRemarks) {
		this.buexRemarks = buexRemarks;
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

	@Column(name = "COMP_CODE", length = 4)
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