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
public abstract class AbstractTVoucherItem extends BaseDomain {

	private static final long serialVersionUID = 8424220611435089574L;
	private Integer voitId;
	private Integer version;
	private Integer exhiId;
	private Short exhiFlag;
	private Integer exhiLine;
	private Integer initId;
	private Integer invoId;
	private String invoNo;
	private String invoTaxNo;
	private Date invoDate;
	private String expeType;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private String consHblNo;
	private Integer custId;
	private String custName;
	private String custSname;
	private String charName;
	private String unitName;
	private String expeCurrCode;
	private Double expeExRate;
	private Double expeTotalAmount;
	private String voitWriteOffNo;
	private Integer voucId;
	private String voucNo;
	private Date voucDate;
	private String voucCurrCode;
	private Double voucExRate;
	private Double voitAmountVoucW;
	private String voitRemarks;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@Column(name = "VOIT_ID", unique = true, nullable = false)
	public Integer getVoitId() {
		return this.voitId;
	}

	public void setVoitId(Integer voitId) {
		this.voitId = voitId;
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

	@Column(name = "EXHI_LINE", nullable = false)
	public Integer getExhiLine() {
		return this.exhiLine;
	}

	public void setExhiLine(Integer exhiLine) {
		this.exhiLine = exhiLine;
	}

	@Column(name = "INIT_ID", nullable = false)
	public Integer getInitId() {
		return this.initId;
	}

	public void setInitId(Integer initId) {
		this.initId = initId;
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

	@Column(name = "EXPE_TYPE", length = 1)
	public String getExpeType() {
		return this.expeType;
	}

	public void setExpeType(String expeType) {
		this.expeType = expeType;
	}

	@Column(name = "CONS_ID")
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 32)
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

	@Column(name = "CUST_ID")
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

	@Column(name = "CHAR_NAME", length = 32)
	public String getCharName() {
		return this.charName;
	}

	public void setCharName(String charName) {
		this.charName = charName;
	}

	@Column(name = "UNIT_NAME", length = 32)
	public String getUnitName() {
		return this.unitName;
	}

	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	@Column(name = "EXPE_CURR_CODE", length = 3)
	public String getExpeCurrCode() {
		return this.expeCurrCode;
	}

	public void setExpeCurrCode(String expeCurrCode) {
		this.expeCurrCode = expeCurrCode;
	}

	@Column(name = "EXPE_EX_RATE", precision = 9, scale = 4)
	public Double getExpeExRate() {
		return this.expeExRate;
	}

	public void setExpeExRate(Double expeExRate) {
		this.expeExRate = expeExRate;
	}

	@Column(name = "EXPE_TOTAL_AMOUNT", precision = 12)
	public Double getExpeTotalAmount() {
		return this.expeTotalAmount;
	}

	public void setExpeTotalAmount(Double expeTotalAmount) {
		this.expeTotalAmount = expeTotalAmount;
	}

	@Column(name = "VOIT_WRITE_OFF_NO", length = 32)
	public String getVoitWriteOffNo() {
		return this.voitWriteOffNo;
	}

	public void setVoitWriteOffNo(String voitWriteOffNo) {
		this.voitWriteOffNo = voitWriteOffNo;
	}

	@Column(name = "VOUC_ID")
	public Integer getVoucId() {
		return this.voucId;
	}

	public void setVoucId(Integer voucId) {
		this.voucId = voucId;
	}

	@Column(name = "VOUC_NO", length = 32)
	public String getVoucNo() {
		return this.voucNo;
	}

	public void setVoucNo(String voucNo) {
		this.voucNo = voucNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOUC_DATE", length = 10)
	public Date getVoucDate() {
		return this.voucDate;
	}

	public void setVoucDate(Date voucDate) {
		this.voucDate = voucDate;
	}

	@Column(name = "VOUC_CURR_CODE", length = 3)
	public String getVoucCurrCode() {
		return this.voucCurrCode;
	}

	public void setVoucCurrCode(String voucCurrCode) {
		this.voucCurrCode = voucCurrCode;
	}

	@Column(name = "VOUC_EX_RATE", precision = 9, scale = 4)
	public Double getVoucExRate() {
		return this.voucExRate;
	}

	public void setVoucExRate(Double voucExRate) {
		this.voucExRate = voucExRate;
	}

	@Column(name = "VOIT_AMOUNT_VOUC_W", precision = 12)
	public Double getVoitAmountVoucW() {
		return this.voitAmountVoucW;
	}

	public void setVoitAmountVoucW(Double voitAmountVoucW) {
		this.voitAmountVoucW = voitAmountVoucW;
	}

	@Column(name = "VOIT_REMARKS", length = 200)
	public String getVoitRemarks() {
		return this.voitRemarks;
	}

	public void setVoitRemarks(String voitRemarks) {
		this.voitRemarks = voitRemarks;
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
