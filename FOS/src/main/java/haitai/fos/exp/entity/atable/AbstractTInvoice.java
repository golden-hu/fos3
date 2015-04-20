package haitai.fos.exp.entity.atable;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractTInvoice extends BaseDomain {

	private static final long serialVersionUID = 3896514176514773373L;
	private Integer invoId;
	private Integer version;
	private Integer exhiId;
	private Short exhiFlag;
	private String invoNo;
	private String invoTaxNo;
	private Integer custId;
	private String custName;
	private String custSname;
	private String invoTitle;
	private String invoType;
	private Date invoDate;
	private String currCode;
	private Double invoExRate;
	private Double invoAmount;
	private String invoBlNo;
	private String invoContractNo;
	private String invoRemarks;
	private String invoConsNo;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
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

	@Temporal(TemporalType.DATE)
	@Column(name = "INVO_DATE", length = 10)
	public Date getInvoDate() {
		return this.invoDate;
	}

	public void setInvoDate(Date invoDate) {
		this.invoDate = invoDate;
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

	@Column(name = "INVO_BL_NO", length = 500)
	public String getInvoBlNo() {
		return this.invoBlNo;
	}

	public void setInvoBlNo(String invoBlNo) {
		this.invoBlNo = invoBlNo;
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

	@Column(name = "INVO_CONS_NO", length = 500)
	public String getInvoConsNo() {
		return this.invoConsNo;
	}

	public void setInvoConsNo(String invoConsNo) {
		this.invoConsNo = invoConsNo;
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
