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
public abstract class AbstractSInvoice extends BaseDomain {

	private static final long serialVersionUID = 4723842297269092094L;
	private Integer invoId;
	private Integer version;
	private String invoNo;
	private String invoTaxNo;
	private Integer custId;
	private String custName;
	private String custSname;
	private Short invoPaymentType;
	private String invoTitle;
	private String invoType;
	private String invoCheckNo;
	private Date invoDate;
	private Date invoDueDate;
	private String currCode;
	private Double invoExRate;
	private Double invoAmount;
	private String invoAmountCapital;
	private String invoAmountCapitalEn;
	private Double invoAmountPaid;
	private Double invoAmountWriteOff;
	private String invoBank;
	private String invoAccount;
	private String invoBizClass;
	private String invoVessel;
	private String invoVoyage;
	private String invoBlNo;
	private Date invoSailDate;
	private String invoPol;
	private String invoPod;
	private String invoDeliveryPlace;
	private String invoOperator;
	private String invoContractNo;
	private String invoRemarks;
	private String invoIssuer;
	private Date invoIssueDate;
	private String invoChecker;
	private Date invoCheckDate;
	private String invoSigner;
	private Date invoSingDate;
	private String invoConsNo;
	private String invoCargoName;
	private String invoCargoPackages;
	private String invoCargoGrossWeight;
	private String invoCargoMeasurement;
	private String invoContainersInfo;
	private String invoEntrustNo;
	private Integer invoPrintTimes;
	private Short invoStatus;
	private Short invoWriteOffStatus;
	private Short invoPrFlag;
	private String invoWriteOffNo;
	private Integer invoWriteOffBy;
	private Date invoWriteOffDate;
	private String voucNo;
	private Short invoDebitnoteFlag;
	private Short invoUploadFlag;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;
	private String attr1;
	private String attr2;
	private String attr3;
	private String attr4;
	private String attr5;
	private String attr6;
	private String attr7;
	private String attr8;
	private String attr9;
	private String attr10;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "INVO_ID", unique = true, nullable = false)
	public Integer getInvoId() {
		return this.invoId;
	}

	public void setInvoId(Integer invoId) {
		this.invoId = invoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "INVO_NO", nullable = false, length = 32)
	public String getInvoNo() {
		return this.invoNo;
	}

	public void setInvoNo(String invoNo) {
		this.invoNo = invoNo;
	}

	@Column(name = "INVO_TAX_NO", length = 32)
	public String getInvoTaxNo() {
		return this.invoTaxNo;
	}

	public void setInvoTaxNo(String invoTaxNo) {
		this.invoTaxNo = invoTaxNo;
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

	@Column(name = "INVO_PAYMENT_TYPE")
	public Short getInvoPaymentType() {
		return this.invoPaymentType;
	}

	public void setInvoPaymentType(Short invoPaymentType) {
		this.invoPaymentType = invoPaymentType;
	}

	@Column(name = "INVO_TITLE", nullable = false, length = 64)
	public String getInvoTitle() {
		return this.invoTitle;
	}

	public void setInvoTitle(String invoTitle) {
		this.invoTitle = invoTitle;
	}

	@Column(name = "INVO_TYPE", nullable = false, length = 1)
	public String getInvoType() {
		return this.invoType;
	}

	public void setInvoType(String invoType) {
		this.invoType = invoType;
	}

	@Column(name = "INVO_CHECK_NO", length = 32)
	public String getInvoCheckNo() {
		return this.invoCheckNo;
	}

	public void setInvoCheckNo(String invoCheckNo) {
		this.invoCheckNo = invoCheckNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_DATE", length = 10)
	public Date getInvoDate() {
		return this.invoDate;
	}

	public void setInvoDate(Date invoDate) {
		this.invoDate = invoDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_DUE_DATE", length = 10)
	public Date getInvoDueDate() {
		return this.invoDueDate;
	}

	public void setInvoDueDate(Date invoDueDate) {
		this.invoDueDate = invoDueDate;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "INVO_EX_RATE", precision = 9, scale = 4)
	public Double getInvoExRate() {
		return this.invoExRate;
	}

	public void setInvoExRate(Double invoExRate) {
		this.invoExRate = invoExRate;
	}

	@Column(name = "INVO_AMOUNT", precision = 12)
	public Double getInvoAmount() {
		return this.invoAmount;
	}

	public void setInvoAmount(Double invoAmount) {
		this.invoAmount = invoAmount;
	}

	@Column(name = "INVO_AMOUNT_CAPITAL", length = 200)
	public String getInvoAmountCapital() {
		return this.invoAmountCapital;
	}

	public void setInvoAmountCapital(String invoAmountCapital) {
		this.invoAmountCapital = invoAmountCapital;
	}

	@Column(name = "INVO_AMOUNT_CAPITAL_EN", length = 200)
	public String getInvoAmountCapitalEn() {
		return this.invoAmountCapitalEn;
	}

	public void setInvoAmountCapitalEn(String invoAmountCapitalEn) {
		this.invoAmountCapitalEn = invoAmountCapitalEn;
	}

	@Column(name = "INVO_AMOUNT_WRITE_OFF", precision = 12)
	public Double getInvoAmountWriteOff() {
		return this.invoAmountWriteOff;
	}

	public void setInvoAmountWriteOff(Double invoAmountWriteOff) {
		this.invoAmountWriteOff = invoAmountWriteOff;
	}
	
	@Column(name = "INVO_AMOUNT_PAID", precision = 12)
	public Double getInvoAmountPaid() {
		return invoAmountPaid;
	}

	public void setInvoAmountPaid(Double invoAmountPaid) {
		this.invoAmountPaid = invoAmountPaid;
	}

	@Column(name = "INVO_BANK", length = 64)
	public String getInvoBank() {
		return this.invoBank;
	}

	public void setInvoBank(String invoBank) {
		this.invoBank = invoBank;
	}

	@Column(name = "INVO_ACCOUNT", length = 32)
	public String getInvoAccount() {
		return this.invoAccount;
	}

	public void setInvoAccount(String invoAccount) {
		this.invoAccount = invoAccount;
	}

	@Column(name = "INVO_BIZ_CLASS", length = 1)
	public String getInvoBizClass() {
		return this.invoBizClass;
	}

	public void setInvoBizClass(String invoBizClass) {
		this.invoBizClass = invoBizClass;
	}

	@Column(name = "INVO_VESSEL", length = 64)
	public String getInvoVessel() {
		return this.invoVessel;
	}

	public void setInvoVessel(String invoVessel) {
		this.invoVessel = invoVessel;
	}

	@Column(name = "INVO_VOYAGE", length = 32)
	public String getInvoVoyage() {
		return this.invoVoyage;
	}

	public void setInvoVoyage(String invoVoyage) {
		this.invoVoyage = invoVoyage;
	}

	@Column(name = "INVO_BL_NO", length = 500)
	public String getInvoBlNo() {
		return this.invoBlNo;
	}

	public void setInvoBlNo(String invoBlNo) {
		this.invoBlNo = invoBlNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_SAIL_DATE", length = 10)
	public Date getInvoSailDate() {
		return this.invoSailDate;
	}

	public void setInvoSailDate(Date invoSailDate) {
		this.invoSailDate = invoSailDate;
	}

	@Column(name = "INVO_POL", length = 32)
	public String getInvoPol() {
		return this.invoPol;
	}

	public void setInvoPol(String invoPol) {
		this.invoPol = invoPol;
	}

	@Column(name = "INVO_POD", length = 32)
	public String getInvoPod() {
		return this.invoPod;
	}

	public void setInvoPod(String invoPod) {
		this.invoPod = invoPod;
	}

	@Column(name = "INVO_DELIVERY_PLACE", length = 32)
	public String getInvoDeliveryPlace() {
		return this.invoDeliveryPlace;
	}

	public void setInvoDeliveryPlace(String invoDeliveryPlace) {
		this.invoDeliveryPlace = invoDeliveryPlace;
	}

	@Column(name = "INVO_OPERATOR", length = 32)
	public String getInvoOperator() {
		return this.invoOperator;
	}

	public void setInvoOperator(String invoOperator) {
		this.invoOperator = invoOperator;
	}

	@Column(name = "INVO_CONTRACT_NO", length = 32)
	public String getInvoContractNo() {
		return this.invoContractNo;
	}

	public void setInvoContractNo(String invoContractNo) {
		this.invoContractNo = invoContractNo;
	}

	@Column(name = "INVO_REMARKS", length = 200)
	public String getInvoRemarks() {
		return this.invoRemarks;
	}

	public void setInvoRemarks(String invoRemarks) {
		this.invoRemarks = invoRemarks;
	}

	@Column(name = "INVO_ISSUER", length = 32)
	public String getInvoIssuer() {
		return this.invoIssuer;
	}

	public void setInvoIssuer(String invoIssuer) {
		this.invoIssuer = invoIssuer;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_ISSUE_DATE", length = 10)
	public Date getInvoIssueDate() {
		return this.invoIssueDate;
	}

	public void setInvoIssueDate(Date invoIssueDate) {
		this.invoIssueDate = invoIssueDate;
	}

	@Column(name = "INVO_CHECKER", length = 32)
	public String getInvoChecker() {
		return this.invoChecker;
	}

	public void setInvoChecker(String invoChecker) {
		this.invoChecker = invoChecker;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_CHECK_DATE", length = 10)
	public Date getInvoCheckDate() {
		return this.invoCheckDate;
	}

	public void setInvoCheckDate(Date invoCheckDate) {
		this.invoCheckDate = invoCheckDate;
	}

	@Column(name = "INVO_SIGNER", length = 32)
	public String getInvoSigner() {
		return this.invoSigner;
	}

	public void setInvoSigner(String invoSigner) {
		this.invoSigner = invoSigner;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_SING_DATE", length = 10)
	public Date getInvoSingDate() {
		return this.invoSingDate;
	}

	public void setInvoSingDate(Date invoSingDate) {
		this.invoSingDate = invoSingDate;
	}

	@Column(name = "INVO_CONS_NO", length = 500)
	public String getInvoConsNo() {
		return this.invoConsNo;
	}

	public void setInvoConsNo(String invoConsNo) {
		this.invoConsNo = invoConsNo;
	}

	@Column(name = "INVO_CARGO_NAME", length = 2000)
	public String getInvoCargoName() {
		return this.invoCargoName;
	}

	public void setInvoCargoName(String invoCargoName) {
		this.invoCargoName = invoCargoName;
	}

	@Column(name = "INVO_CARGO_PACKAGES", length = 64)
	public String getInvoCargoPackages() {
		return this.invoCargoPackages;
	}

	public void setInvoCargoPackages(String invoCargoPackages) {
		this.invoCargoPackages = invoCargoPackages;
	}

	@Column(name = "INVO_CARGO_GROSS_WEIGHT", length = 32)
	public String getInvoCargoGrossWeight() {
		return this.invoCargoGrossWeight;
	}

	public void setInvoCargoGrossWeight(String invoCargoGrossWeight) {
		this.invoCargoGrossWeight = invoCargoGrossWeight;
	}

	@Column(name = "INVO_CARGO_MEASUREMENT", length = 32)
	public String getInvoCargoMeasurement() {
		return this.invoCargoMeasurement;
	}

	public void setInvoCargoMeasurement(String invoCargoMeasurement) {
		this.invoCargoMeasurement = invoCargoMeasurement;
	}

	@Column(name = "INVO_CONTAINERS_INFO", length = 500)
	public String getInvoContainersInfo() {
		return this.invoContainersInfo;
	}

	public void setInvoContainersInfo(String invoContainersInfo) {
		this.invoContainersInfo = invoContainersInfo;
	}

	@Column(name = "INVO_ENTRUST_NO", length = 32)
	public String getInvoEntrustNo() {
		return this.invoEntrustNo;
	}

	public void setInvoEntrustNo(String invoEntrustNo) {
		this.invoEntrustNo = invoEntrustNo;
	}

	@Column(name = "INVO_PRINT_TIMES")
	public Integer getInvoPrintTimes() {
		return this.invoPrintTimes;
	}

	public void setInvoPrintTimes(Integer invoPrintTimes) {
		this.invoPrintTimes = invoPrintTimes;
	}

	@Column(name = "INVO_STATUS")
	public Short getInvoStatus() {
		return this.invoStatus;
	}

	public void setInvoStatus(Short invoStatus) {
		this.invoStatus = invoStatus;
	}

	@Column(name = "INVO_WRITE_OFF_STATUS")
	public Short getInvoWriteOffStatus() {
		return this.invoWriteOffStatus;
	}

	public void setInvoWriteOffStatus(Short invoWriteOffStatus) {
		this.invoWriteOffStatus = invoWriteOffStatus;
	}

	@Column(name = "INVO_PR_FLAG")
	public Short getInvoPrFlag() {
		return this.invoPrFlag;
	}

	public void setInvoPrFlag(Short invoPrFlag) {
		this.invoPrFlag = invoPrFlag;
	}

	@Column(name = "INVO_WRITE_OFF_NO", length = 200)
	public String getInvoWriteOffNo() {
		return this.invoWriteOffNo;
	}

	public void setInvoWriteOffNo(String invoWriteOffNo) {
		this.invoWriteOffNo = invoWriteOffNo;
	}

	@Column(name = "INVO_WRITE_OFF_BY")
	public Integer getInvoWriteOffBy() {
		return this.invoWriteOffBy;
	}

	public void setInvoWriteOffBy(Integer invoWriteOffBy) {
		this.invoWriteOffBy = invoWriteOffBy;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_WRITE_OFF_DATE", length = 10)
	public Date getInvoWriteOffDate() {
		return this.invoWriteOffDate;
	}

	public void setInvoWriteOffDate(Date invoWriteOffDate) {
		this.invoWriteOffDate = invoWriteOffDate;
	}

	@Column(name = "VOUC_NO", length = 200)
	public String getVoucNo() {
		return this.voucNo;
	}

	public void setVoucNo(String voucNo) {
		this.voucNo = voucNo;
	}

	@Column(name = "INVO_DEBITNOTE_FLAG")
	public Short getInvoDebitnoteFlag() {
		return this.invoDebitnoteFlag;
	}

	public void setInvoDebitnoteFlag(Short invoDebitnoteFlag) {
		this.invoDebitnoteFlag = invoDebitnoteFlag;
	}
	
	@Column(name = "INVO_UPLOAD_FLAG", nullable = false)
	public Short getInvoUploadFlag() {
		return this.invoUploadFlag;
	}

	public void setInvoUploadFlag(Short invoUploadFlag) {
		this.invoUploadFlag = invoUploadFlag;
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

	@Column(name = "ATTR1", length = 32)
	public String getAttr1() {
		return this.attr1;
	}

	public void setAttr1(String attr1) {
		this.attr1 = attr1;
	}

	@Column(name = "ATTR2", length = 32)
	public String getAttr2() {
		return this.attr2;
	}

	public void setAttr2(String attr2) {
		this.attr2 = attr2;
	}

	@Column(name = "ATTR3", length = 32)
	public String getAttr3() {
		return this.attr3;
	}

	public void setAttr3(String attr3) {
		this.attr3 = attr3;
	}

	@Column(name = "ATTR4", length = 32)
	public String getAttr4() {
		return this.attr4;
	}

	public void setAttr4(String attr4) {
		this.attr4 = attr4;
	}

	@Column(name = "ATTR5", length = 32)
	public String getAttr5() {
		return this.attr5;
	}

	public void setAttr5(String attr5) {
		this.attr5 = attr5;
	}

	@Column(name = "ATTR6", length = 32)
	public String getAttr6() {
		return this.attr6;
	}

	public void setAttr6(String attr6) {
		this.attr6 = attr6;
	}

	@Column(name = "ATTR7", length = 32)
	public String getAttr7() {
		return this.attr7;
	}

	public void setAttr7(String attr7) {
		this.attr7 = attr7;
	}

	@Column(name = "ATTR8", length = 32)
	public String getAttr8() {
		return this.attr8;
	}

	public void setAttr8(String attr8) {
		this.attr8 = attr8;
	}

	@Column(name = "ATTR9", length = 200)
	public String getAttr9() {
		return this.attr9;
	}

	public void setAttr9(String attr9) {
		this.attr9 = attr9;
	}

	@Column(name = "ATTR10", length = 200)
	public String getAttr10() {
		return this.attr10;
	}

	public void setAttr10(String attr10) {
		this.attr10 = attr10;
	}

}