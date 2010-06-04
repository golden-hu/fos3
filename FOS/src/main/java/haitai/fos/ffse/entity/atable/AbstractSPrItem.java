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
public abstract class AbstractSPrItem extends BaseDomain {

	private static final long serialVersionUID = -8956586562094856846L;
	private Integer pritId;
	private Integer version;
	private Integer prId;
	private Integer invoId;
	private String invoNo;
	private String invoTaxNo;
	private Date invoDate;
	private Date invoDueDate;
	private Double invoAmount;
	private Double invoAmountWriteOff;
	private Double prAmount;
	private String invoBank;
	private String inovAccount;
	private String currCode;
	private Double invoExRate;
	private String custName;
	private String custSname;
	private String invoIssuer;
	private Date invoIssueDate;
	private String invoChecker;
	private Date invoCheckDate;
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
	@Column(name = "PRIT_ID", unique = true, nullable = false)
	public Integer getPritId() {
		return this.pritId;
	}

	public void setPritId(Integer pritId) {
		this.pritId = pritId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PR_ID", nullable = false)
	public Integer getPrId() {
		return this.prId;
	}

	public void setPrId(Integer prId) {
		this.prId = prId;
	}

	@Column(name = "INVO_ID", nullable = false)
	public Integer getInvoId() {
		return this.invoId;
	}

	public void setInvoId(Integer invoId) {
		this.invoId = invoId;
	}

	@Column(name = "INVO_NO", length = 32)
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

	@Column(name = "INVO_AMOUNT", precision = 12, scale = 4)
	public Double getInvoAmount() {
		return this.invoAmount;
	}

	public void setInvoAmount(Double invoAmount) {
		this.invoAmount = invoAmount;
	}

	@Column(name = "INVO_AMOUNT_WRITE_OFF", precision = 12, scale = 4)
	public Double getInvoAmountWriteOff() {
		return this.invoAmountWriteOff;
	}

	public void setInvoAmountWriteOff(Double invoAmountWriteOff) {
		this.invoAmountWriteOff = invoAmountWriteOff;
	}

	@Column(name = "PR_AMOUNT", precision = 12, scale = 4)
	public Double getPrAmount() {
		return this.prAmount;
	}

	public void setPrAmount(Double prAmount) {
		this.prAmount = prAmount;
	}

	@Column(name = "INVO_BANK", length = 64)
	public String getInvoBank() {
		return this.invoBank;
	}

	public void setInvoBank(String invoBank) {
		this.invoBank = invoBank;
	}

	@Column(name = "INOV_ACCOUNT", length = 32)
	public String getInovAccount() {
		return this.inovAccount;
	}

	public void setInovAccount(String inovAccount) {
		this.inovAccount = inovAccount;
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