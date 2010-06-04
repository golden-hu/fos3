package haitai.fos.exp.entity.atable;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractTVoucher extends BaseDomain {

	private static final long serialVersionUID = 4699274602901228850L;
	private Integer voucId;
	private Integer version;
	private Integer exhiId;
	private Short exhiFlag;
	private String voucNo;
	private String voucType;
	private Integer custId;
	private String custName;
	private String custSname;
	private String voucCheckNo;
	private String voucBank;
	private String voucAccount;
	private Double voucAmount;
	private Double voucWriteOffAmount;
	private Date voucDate;
	private Date voucGlDate;
	private String currCode;
	private Double voucExRate;
	private String voucBankReciptNo;
	private Date voucBankReciptDate;
	private Short voucPaymentType;
	private String voucInvoiceNo;
	private String voucTaxInvoiceNo;
	private Date voucInvoiceDate;
	private String voucConsNo;
	private String voucMblNo;
	private String voucHblNo;
	private Date voucSailDate;
	private Integer voucChecker;
	private Date voucCheckDate;
	private Short voucStatus;
	private String voucRemarks;
	private Short voucUploadFlag;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@Column(name = "VOUC_ID", unique = true, nullable = false)
	public Integer getVoucId() {
		return this.voucId;
	}

	public void setVoucId(Integer voucId) {
		this.voucId = voucId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "EXHI_ID", nullable = false)
	public Integer getExhiId() {
		return this.exhiId;
	}

	public void setExhiId(Integer exhiId) {
		this.exhiId = exhiId;
	}

	@Column(name = "EXHI_FLAG", nullable = false)
	public Short getExhiFlag() {
		return this.exhiFlag;
	}

	public void setExhiFlag(Short exhiFlag) {
		this.exhiFlag = exhiFlag;
	}

	@Column(name = "VOUC_NO", length = 32)
	public String getVoucNo() {
		return this.voucNo;
	}

	public void setVoucNo(String voucNo) {
		this.voucNo = voucNo;
	}

	@Column(name = "VOUC_TYPE", nullable = false, length = 1)
	public String getVoucType() {
		return this.voucType;
	}

	public void setVoucType(String voucType) {
		this.voucType = voucType;
	}

	@Column(name = "CUST_ID", nullable = false)
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Column(name = "CUST_NAME", length = 32)
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

	@Column(name = "VOUC_CHECK_NO", length = 32)
	public String getVoucCheckNo() {
		return this.voucCheckNo;
	}

	public void setVoucCheckNo(String voucCheckNo) {
		this.voucCheckNo = voucCheckNo;
	}

	@Column(name = "VOUC_BANK", length = 32)
	public String getVoucBank() {
		return this.voucBank;
	}

	public void setVoucBank(String voucBank) {
		this.voucBank = voucBank;
	}

	@Column(name = "VOUC_ACCOUNT", length = 32)
	public String getVoucAccount() {
		return this.voucAccount;
	}

	public void setVoucAccount(String voucAccount) {
		this.voucAccount = voucAccount;
	}

	@Column(name = "VOUC_AMOUNT", precision = 12)
	public Double getVoucAmount() {
		return this.voucAmount;
	}

	public void setVoucAmount(Double voucAmount) {
		this.voucAmount = voucAmount;
	}

	@Column(name = "VOUC_WRITE_OFF_AMOUNT", precision = 12)
	public Double getVoucWriteOffAmount() {
		return this.voucWriteOffAmount;
	}

	public void setVoucWriteOffAmount(Double voucWriteOffAmount) {
		this.voucWriteOffAmount = voucWriteOffAmount;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_DATE", length = 10)
	public Date getVoucDate() {
		return this.voucDate;
	}

	public void setVoucDate(Date voucDate) {
		this.voucDate = voucDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_GL_DATE", length = 10)
	public Date getVoucGlDate() {
		return this.voucGlDate;
	}

	public void setVoucGlDate(Date voucGlDate) {
		this.voucGlDate = voucGlDate;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "VOUC_EX_RATE", precision = 9)
	public Double getVoucExRate() {
		return this.voucExRate;
	}

	public void setVoucExRate(Double voucExRate) {
		this.voucExRate = voucExRate;
	}

	@Column(name = "VOUC_BANK_RECIPT_NO", length = 32)
	public String getVoucBankReciptNo() {
		return this.voucBankReciptNo;
	}

	public void setVoucBankReciptNo(String voucBankReciptNo) {
		this.voucBankReciptNo = voucBankReciptNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_BANK_RECIPT_DATE", length = 10)
	public Date getVoucBankReciptDate() {
		return this.voucBankReciptDate;
	}

	public void setVoucBankReciptDate(Date voucBankReciptDate) {
		this.voucBankReciptDate = voucBankReciptDate;
	}

	@Column(name = "VOUC_PAYMENT_TYPE")
	public Short getVoucPaymentType() {
		return this.voucPaymentType;
	}

	public void setVoucPaymentType(Short voucPaymentType) {
		this.voucPaymentType = voucPaymentType;
	}

	@Column(name = "VOUC_INVOICE_NO", length = 500)
	public String getVoucInvoiceNo() {
		return this.voucInvoiceNo;
	}

	public void setVoucInvoiceNo(String voucInvoiceNo) {
		this.voucInvoiceNo = voucInvoiceNo;
	}

	@Column(name = "VOUC_TAX_INVOICE_NO", length = 500)
	public String getVoucTaxInvoiceNo() {
		return this.voucTaxInvoiceNo;
	}

	public void setVoucTaxInvoiceNo(String voucTaxInvoiceNo) {
		this.voucTaxInvoiceNo = voucTaxInvoiceNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_INVOICE_DATE", length = 10)
	public Date getVoucInvoiceDate() {
		return this.voucInvoiceDate;
	}

	public void setVoucInvoiceDate(Date voucInvoiceDate) {
		this.voucInvoiceDate = voucInvoiceDate;
	}

	@Column(name = "VOUC_CONS_NO", length = 5000)
	public String getVoucConsNo() {
		return this.voucConsNo;
	}

	public void setVoucConsNo(String voucConsNo) {
		this.voucConsNo = voucConsNo;
	}

	@Column(name = "VOUC_MBL_NO", length = 32)
	public String getVoucMblNo() {
		return this.voucMblNo;
	}

	public void setVoucMblNo(String voucMblNo) {
		this.voucMblNo = voucMblNo;
	}

	@Column(name = "VOUC_HBL_NO", length = 32)
	public String getVoucHblNo() {
		return this.voucHblNo;
	}

	public void setVoucHblNo(String voucHblNo) {
		this.voucHblNo = voucHblNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_SAIL_DATE", length = 10)
	public Date getVoucSailDate() {
		return this.voucSailDate;
	}

	public void setVoucSailDate(Date voucSailDate) {
		this.voucSailDate = voucSailDate;
	}

	@Column(name = "VOUC_CHECKER")
	public Integer getVoucChecker() {
		return this.voucChecker;
	}

	public void setVoucChecker(Integer voucChecker) {
		this.voucChecker = voucChecker;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_CHECK_DATE", length = 10)
	public Date getVoucCheckDate() {
		return this.voucCheckDate;
	}

	public void setVoucCheckDate(Date voucCheckDate) {
		this.voucCheckDate = voucCheckDate;
	}

	@Column(name = "VOUC_STATUS")
	public Short getVoucStatus() {
		return this.voucStatus;
	}

	public void setVoucStatus(Short voucStatus) {
		this.voucStatus = voucStatus;
	}

	@Column(name = "VOUC_REMARKS", length = 500)
	public String getVoucRemarks() {
		return this.voucRemarks;
	}

	public void setVoucRemarks(String voucRemarks) {
		this.voucRemarks = voucRemarks;
	}

	@Column(name = "VOUC_UPLOAD_FLAG", nullable = false)
	public Short getVoucUploadFlag() {
		return this.voucUploadFlag;
	}

	public void setVoucUploadFlag(Short voucUploadFlag) {
		this.voucUploadFlag = voucUploadFlag;
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
