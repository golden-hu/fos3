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
public abstract class AbstractSExpense extends BaseDomain {

	private static final long serialVersionUID = 5038669367767074802L;
	private Integer expeId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private String consHblNo;
	private String consVessel;
	private String consVoyage;
	private Date consSailDate;
	private String consBizClass;
	private String consBizType;
	private String consShipType;
	private Integer consCustId;
	private String consCustName;
	private Integer chclId;
	private Integer charId;
	private String charName;
	private String charNameEn;
	private Integer unitId;
	private String unitName;
	private String currCode;
	private Integer custId;
	private String custName;
	private String custSname;
	private String expeType;
	private Integer pateId;
	private String pateCode;
	private Date expeDate;
	private Double expeUnitPrice;
	private Double expeNum;
	private Double expeNum2;
	private Double expeInnerPrice;
	private Double expeInnerAmount;
	private Double expeCommission;
	private Double expeCommissionRate;
	private Double expeTotalAmount;
	private Double expeExRate;
	private Double expeRcAmount;
	private String expeBillNo;
	private Short expeBillStatus;
	private String expeInvoiceNo;
	private String expeTaxInvoiceNo;
	private Date expeInvoiceDate;
	private Double expeInvoiceAmount;
	private Short expeInvoiceStatus;
	private Double expeWriteOffAmount;
	private Double expeWriteOffRcAmount;
	private Date expeWriteOffDate;
	private Short expeStatus;
	private Short expeWriteoffStatus;
	private String expeRemarks;
	private Short expeForwardFlag;
	private Integer fconId;
	private String fconNo;
	private String fconContractNo;
	private Integer paliId;
	private String paliLabel;
	private String paliTrackNo;
	private Integer buexId;
	private String expeUpdateBy;
	private Date expeUpdateTime;
	private String expeInvoiceBy;
	private String expeWriteOffBy;
	private Short expeAllocationFlag;
	private Short expeAllocatedFlag;
	private Integer expeIdM;
	private Integer consIdM;
	private String consNoM;
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
	@Column(name = "EXPE_ID", unique = true, nullable = false)
	public Integer getExpeId() {
		return this.expeId;
	}

	public void setExpeId(Integer expeId) {
		this.expeId = expeId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 16)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_MBL_NO", length = 32)
	public String getConsMblNo() {
		return this.consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Column(name = "CONS_HBL_NO", length = 32)
	public String getConsHblNo() {
		return this.consHblNo;
	}

	public void setConsHblNo(String consHblNo) {
		this.consHblNo = consHblNo;
	}

	@Column(name = "CONS_VESSEL", length = 64)
	public String getConsVessel() {
		return this.consVessel;
	}

	public void setConsVessel(String consVessel) {
		this.consVessel = consVessel;
	}

	@Column(name = "CONS_VOYAGE", length = 32)
	public String getConsVoyage() {
		return this.consVoyage;
	}

	public void setConsVoyage(String consVoyage) {
		this.consVoyage = consVoyage;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_SAIL_DATE", length = 10)
	public Date getConsSailDate() {
		return this.consSailDate;
	}

	public void setConsSailDate(Date consSailDate) {
		this.consSailDate = consSailDate;
	}

	@Column(name = "CONS_BIZ_CLASS", length = 1)
	public String getConsBizClass() {
		return this.consBizClass;
	}

	public void setConsBizClass(String consBizClass) {
		this.consBizClass = consBizClass;
	}

	@Column(name = "CONS_BIZ_TYPE", length = 1)
	public String getConsBizType() {
		return this.consBizType;
	}

	public void setConsBizType(String consBizType) {
		this.consBizType = consBizType;
	}

	@Column(name = "CONS_SHIP_TYPE", length = 4)
	public String getConsShipType() {
		return this.consShipType;
	}

	public void setConsShipType(String consShipType) {
		this.consShipType = consShipType;
	}

	@Column(name = "CONS_CUST_ID")
	public Integer getConsCustId() {
		return this.consCustId;
	}

	public void setConsCustId(Integer consCustId) {
		this.consCustId = consCustId;
	}

	@Column(name = "CONS_CUST_NAME", length = 64)
	public String getConsCustName() {
		return this.consCustName;
	}

	public void setConsCustName(String consCustName) {
		this.consCustName = consCustName;
	}

	@Column(name = "CHCL_ID")
	public Integer getChclId() {
		return this.chclId;
	}

	public void setChclId(Integer chclId) {
		this.chclId = chclId;
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

	@Column(name = "CHAR_NAME_EN", length = 64)
	public String getCharNameEn() {
		return this.charNameEn;
	}

	public void setCharNameEn(String charNameEn) {
		this.charNameEn = charNameEn;
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

	@Column(name = "EXPE_TYPE", nullable = false, length = 1)
	public String getExpeType() {
		return this.expeType;
	}

	public void setExpeType(String expeType) {
		this.expeType = expeType;
	}

	@Column(name = "PATE_ID")
	public Integer getPateId() {
		return this.pateId;
	}

	public void setPateId(Integer pateId) {
		this.pateId = pateId;
	}

	@Column(name = "PATE_CODE", nullable = false, length = 1)
	public String getPateCode() {
		return this.pateCode;
	}

	public void setPateCode(String pateCode) {
		this.pateCode = pateCode;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXPE_DATE", length = 10)
	public Date getExpeDate() {
		return this.expeDate;
	}

	public void setExpeDate(Date expeDate) {
		this.expeDate = expeDate;
	}

	@Column(name = "EXPE_UNIT_PRICE", precision = 12, scale = 4)
	public Double getExpeUnitPrice() {
		return this.expeUnitPrice;
	}

	public void setExpeUnitPrice(Double expeUnitPrice) {
		this.expeUnitPrice = expeUnitPrice;
	}

	@Column(name = "EXPE_NUM", precision = 14, scale = 6)
	public Double getExpeNum() {
		return this.expeNum;
	}

	public void setExpeNum(Double expeNum) {
		this.expeNum = expeNum;
	}

	@Column(name = "EXPE_NUM2", precision = 14, scale = 6)
	public Double getExpeNum2() {
		return this.expeNum2;
	}

	public void setExpeNum2(Double expeNum2) {
		this.expeNum2 = expeNum2;
	}

	@Column(name = "EXPE_INNER_PRICE", precision = 12, scale = 4)
	public Double getExpeInnerPrice() {
		return this.expeInnerPrice;
	}

	public void setExpeInnerPrice(Double expeInnerPrice) {
		this.expeInnerPrice = expeInnerPrice;
	}

	@Column(name = "EXPE_INNER_AMOUNT", precision = 12, scale = 4)
	public Double getExpeInnerAmount() {
		return this.expeInnerAmount;
	}

	public void setExpeInnerAmount(Double expeInnerAmount) {
		this.expeInnerAmount = expeInnerAmount;
	}

	@Column(name = "EXPE_COMMISSION", precision = 12, scale = 4)
	public Double getExpeCommission() {
		return this.expeCommission;
	}

	public void setExpeCommission(Double expeCommission) {
		this.expeCommission = expeCommission;
	}

	@Column(name = "EXPE_COMMISSION_RATE", precision = 12, scale = 4)
	public Double getExpeCommissionRate() {
		return this.expeCommissionRate;
	}

	public void setExpeCommissionRate(Double expeCommissionRate) {
		this.expeCommissionRate = expeCommissionRate;
	}

	@Column(name = "EXPE_TOTAL_AMOUNT", nullable = false, precision = 12, scale = 4)
	public Double getExpeTotalAmount() {
		return this.expeTotalAmount;
	}

	public void setExpeTotalAmount(Double expeTotalAmount) {
		this.expeTotalAmount = expeTotalAmount;
	}

	@Column(name = "EXPE_EX_RATE", precision = 9, scale = 4)
	public Double getExpeExRate() {
		return this.expeExRate;
	}

	public void setExpeExRate(Double expeExRate) {
		this.expeExRate = expeExRate;
	}

	@Column(name = "EXPE_RC_AMOUNT", precision = 12, scale = 4)
	public Double getExpeRcAmount() {
		return this.expeRcAmount;
	}

	public void setExpeRcAmount(Double expeRcAmount) {
		this.expeRcAmount = expeRcAmount;
	}

	@Column(name = "EXPE_BILL_NO", length = 32)
	public String getExpeBillNo() {
		return this.expeBillNo;
	}

	public void setExpeBillNo(String expeBillNo) {
		this.expeBillNo = expeBillNo;
	}

	@Column(name = "EXPE_BILL_STATUS")
	public Short getExpeBillStatus() {
		return this.expeBillStatus;
	}

	public void setExpeBillStatus(Short expeBillStatus) {
		this.expeBillStatus = expeBillStatus;
	}

	@Column(name = "EXPE_INVOICE_NO", length = 200)
	public String getExpeInvoiceNo() {
		return this.expeInvoiceNo;
	}

	public void setExpeInvoiceNo(String expeInvoiceNo) {
		this.expeInvoiceNo = expeInvoiceNo;
	}

	@Column(name = "EXPE_TAX_INVOICE_NO", length = 200)
	public String getExpeTaxInvoiceNo() {
		return this.expeTaxInvoiceNo;
	}

	public void setExpeTaxInvoiceNo(String expeTaxInvoiceNo) {
		this.expeTaxInvoiceNo = expeTaxInvoiceNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXPE_INVOICE_DATE", length = 10)
	public Date getExpeInvoiceDate() {
		return this.expeInvoiceDate;
	}

	public void setExpeInvoiceDate(Date expeInvoiceDate) {
		this.expeInvoiceDate = expeInvoiceDate;
	}

	@Column(name = "EXPE_INVOICE_AMOUNT", precision = 12, scale = 4)
	public Double getExpeInvoiceAmount() {
		return this.expeInvoiceAmount;
	}

	public void setExpeInvoiceAmount(Double expeInvoiceAmount) {
		this.expeInvoiceAmount = expeInvoiceAmount;
	}

	@Column(name = "EXPE_INVOICE_STATUS")
	public Short getExpeInvoiceStatus() {
		return this.expeInvoiceStatus;
	}

	public void setExpeInvoiceStatus(Short expeInvoiceStatus) {
		this.expeInvoiceStatus = expeInvoiceStatus;
	}

	@Column(name = "EXPE_WRITE_OFF_AMOUNT", precision = 12, scale = 4)
	public Double getExpeWriteOffAmount() {
		return this.expeWriteOffAmount;
	}

	public void setExpeWriteOffAmount(Double expeWriteOffAmount) {
		this.expeWriteOffAmount = expeWriteOffAmount;
	}

	@Column(name = "EXPE_WRITE_OFF_RC_AMOUNT", precision = 12, scale = 4)
	public Double getExpeWriteOffRcAmount() {
		return this.expeWriteOffRcAmount;
	}

	public void setExpeWriteOffRcAmount(Double expeWriteOffRcAmount) {
		this.expeWriteOffRcAmount = expeWriteOffRcAmount;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXPE_WRITE_OFF_DATE", length = 10)
	public Date getExpeWriteOffDate() {
		return this.expeWriteOffDate;
	}

	public void setExpeWriteOffDate(Date expeWriteOffDate) {
		this.expeWriteOffDate = expeWriteOffDate;
	}

	@Column(name = "EXPE_STATUS")
	public Short getExpeStatus() {
		return this.expeStatus;
	}

	public void setExpeStatus(Short expeStatus) {
		this.expeStatus = expeStatus;
	}

	@Column(name = "EXPE_WRITEOFF_STATUS")
	public Short getExpeWriteoffStatus() {
		return this.expeWriteoffStatus;
	}

	public void setExpeWriteoffStatus(Short expeWriteoffStatus) {
		this.expeWriteoffStatus = expeWriteoffStatus;
	}

	@Column(name = "EXPE_REMARKS", length = 200)
	public String getExpeRemarks() {
		return this.expeRemarks;
	}

	public void setExpeRemarks(String expeRemarks) {
		this.expeRemarks = expeRemarks;
	}

	@Column(name = "EXPE_FORWARD_FLAG")
	public Short getExpeForwardFlag() {
		return this.expeForwardFlag;
	}

	public void setExpeForwardFlag(Short expeForwardFlag) {
		this.expeForwardFlag = expeForwardFlag;
	}

	@Column(name = "FCON_ID")
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

	@Column(name = "FCON_CONTRACT_NO", length = 32)
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

	@Column(name = "BUEX_ID")
	public Integer getBuexId() {
		return this.buexId;
	}

	public void setBuexId(Integer buexId) {
		this.buexId = buexId;
	}

	@Column(name = "EXPE_UPDATE_BY", length = 32)
	public String getExpeUpdateBy() {
		return this.expeUpdateBy;
	}

	public void setExpeUpdateBy(String expeUpdateBy) {
		this.expeUpdateBy = expeUpdateBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "EXPE_UPDATE_TIME", length = 19)
	public Date getExpeUpdateTime() {
		return this.expeUpdateTime;
	}

	public void setExpeUpdateTime(Date expeUpdateTime) {
		this.expeUpdateTime = expeUpdateTime;
	}

	@Column(name = "EXPE_INVOICE_BY", length = 32)
	public String getExpeInvoiceBy() {
		return this.expeInvoiceBy;
	}

	public void setExpeInvoiceBy(String expeInvoiceBy) {
		this.expeInvoiceBy = expeInvoiceBy;
	}

	@Column(name = "EXPE_WRITE_OFF_BY", length = 32)
	public String getExpeWriteOffBy() {
		return this.expeWriteOffBy;
	}

	public void setExpeWriteOffBy(String expeWriteOffBy) {
		this.expeWriteOffBy = expeWriteOffBy;
	}

	@Column(name = "EXPE_ALLOCATION_FLAG")
	public Short getExpeAllocationFlag() {
		return this.expeAllocationFlag;
	}

	public void setExpeAllocationFlag(Short expeAllocationFlag) {
		this.expeAllocationFlag = expeAllocationFlag;
	}

	@Column(name = "EXPE_ALLOCATED_FLAG")
	public Short getExpeAllocatedFlag() {
		return this.expeAllocatedFlag;
	}

	public void setExpeAllocatedFlag(Short expeAllocatedFlag) {
		this.expeAllocatedFlag = expeAllocatedFlag;
	}

	@Column(name = "EXPE_ID_M")
	public Integer getExpeIdM() {
		return this.expeIdM;
	}

	public void setExpeIdM(Integer expeIdM) {
		this.expeIdM = expeIdM;
	}

	@Column(name = "CONS_ID_M")
	public Integer getConsIdM() {
		return this.consIdM;
	}

	public void setConsIdM(Integer consIdM) {
		this.consIdM = consIdM;
	}

	@Column(name = "CONS_NO_M", length = 32)
	public String getConsNoM() {
		return this.consNoM;
	}

	public void setConsNoM(String consNoM) {
		this.consNoM = consNoM;
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