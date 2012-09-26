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
public abstract class AbstractSPr extends BaseDomain {

	private static final long serialVersionUID = -6573955137971346715L;
	private Integer prId;
	private Integer version;
	private String prNo;
	private String prType;
	private Integer custId;
	private String custName;
	private String custSname;
	private String custBank;
	private String custAccount;
	private Double prAmount;
	private String currCode;
	private Double prExRate;
	private String prPayType;
	private Integer prPaymentType;
	private String prBank;
	private String prAccount;
	private String prRemarks;
	private String prFinApproveBy;
	private Date prFinApproveDate;
	private String prApproveBy;
	private Date prApproveDate;
	private Short prStatus;
	private Short prWriteOffStatus;
	private Date prDate;
	private Short prPrintFlag;
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
	@Column(name = "PR_ID", unique = true, nullable = false)
	public Integer getPrId() {
		return this.prId;
	}

	public void setPrId(Integer prId) {
		this.prId = prId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PR_NO", nullable = false, length = 32)
	public String getPrNo() {
		return this.prNo;
	}

	public void setPrNo(String prNo) {
		this.prNo = prNo;
	}

	@Column(name = "PR_TYPE", length = 1)
	public String getPrType() {
		return this.prType;
	}

	public void setPrType(String prType) {
		this.prType = prType;
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

	@Column(name = "CUST_BANK", length = 32)
	public String getCustBank() {
		return this.custBank;
	}

	public void setCustBank(String custBank) {
		this.custBank = custBank;
	}

	@Column(name = "CUST_ACCOUNT", length = 32)
	public String getCustAccount() {
		return this.custAccount;
	}

	public void setCustAccount(String custAccount) {
		this.custAccount = custAccount;
	}

	@Column(name = "PR_AMOUNT", nullable = false, precision = 12)
	public Double getPrAmount() {
		return this.prAmount;
	}

	public void setPrAmount(Double prAmount) {
		this.prAmount = prAmount;
	}

	@Column(name = "CURR_CODE", nullable = false, length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "PR_EX_RATE", precision = 9, scale = 4)
	public Double getPrExRate() {
		return this.prExRate;
	}

	public void setPrExRate(Double prExRate) {
		this.prExRate = prExRate;
	}

	@Column(name = "PR_PAY_TYPE", length = 1)
	public String getPrPayType() {
		return this.prPayType;
	}

	public void setPrPayType(String prPayType) {
		this.prPayType = prPayType;
	}

	@Column(name = "PR_PAYMENT_TYPE")
	public Integer getPrPaymentType() {
		return this.prPaymentType;
	}

	public void setPrPaymentType(Integer prPaymentType) {
		this.prPaymentType = prPaymentType;
	}

	@Column(name = "PR_BANK", length = 32)
	public String getPrBank() {
		return this.prBank;
	}

	public void setPrBank(String prBank) {
		this.prBank = prBank;
	}

	@Column(name = "PR_ACCOUNT", length = 32)
	public String getPrAccount() {
		return this.prAccount;
	}

	public void setPrAccount(String prAccount) {
		this.prAccount = prAccount;
	}

	@Column(name = "PR_REMARKS", length = 500)
	public String getPrRemarks() {
		return this.prRemarks;
	}

	public void setPrRemarks(String prRemarks) {
		this.prRemarks = prRemarks;
	}

	@Column(name = "PR_FIN_APPROVE_BY")
	public String getPrFinApproveBy() {
		return this.prFinApproveBy;
	}

	public void setPrFinApproveBy(String prFinApproveBy) {
		this.prFinApproveBy = prFinApproveBy;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PR_FIN_APPROVE_DATE", length = 10)
	public Date getPrFinApproveDate() {
		return this.prFinApproveDate;
	}

	public void setPrFinApproveDate(Date prFinApproveDate) {
		this.prFinApproveDate = prFinApproveDate;
	}

	@Column(name = "PR_APPROVE_BY")
	public String getPrApproveBy() {
		return this.prApproveBy;
	}

	public void setPrApproveBy(String prApproveBy) {
		this.prApproveBy = prApproveBy;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PR_APPROVE_DATE", length = 10)
	public Date getPrApproveDate() {
		return this.prApproveDate;
	}

	public void setPrApproveDate(Date prApproveDate) {
		this.prApproveDate = prApproveDate;
	}

	@Column(name = "PR_STATUS")
	public Short getPrStatus() {
		return this.prStatus;
	}

	public void setPrStatus(Short prStatus) {
		this.prStatus = prStatus;
	}

	
	@Column(name = "PR_WRITE_OFF_STATUS")
	public Short getPrWriteOffStatus() {
		return this.prWriteOffStatus;
	}

	public void setPrWriteOffStatus(Short prWriteOffStatus) {
		this.prWriteOffStatus = prWriteOffStatus;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "PR_DATE", length = 10)
	public Date getPrDate() {
		return this.prDate;
	}

	public void setPrDate(Date prDate) {
		this.prDate = prDate;
	}

	@Column(name = "PR_PRINT_FLAG")
	public Short getPrPrintFlag() {
		return this.prPrintFlag;
	}

	public void setPrPrintFlag(Short prPrintFlag) {
		this.prPrintFlag = prPrintFlag;
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