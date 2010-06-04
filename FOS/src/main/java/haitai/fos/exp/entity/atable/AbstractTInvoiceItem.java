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
public abstract class AbstractTInvoiceItem extends BaseDomain {

	private static final long serialVersionUID = 1702328194365814565L;
	private Integer initId;
	private Integer version;
	private Integer exhiId;
	private Short exhiFlag;
	private Integer exhiLine;
	private Integer invoId;
	private String invoNo;
	private String expeType;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private String consHblNo;
	private String charName;
	private String charNameEn;
	private Double initInvoiceAmountOri;
	private Double initInvoiceAmount;
	private String invoCurrCode;
	private Double initExRate;
	private Double invoExRate;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@Column(name = "INIT_ID", unique = true, nullable = false)
	public Integer getInitId() {
		return this.initId;
	}

	public void setInitId(Integer initId) {
		this.initId = initId;
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

	@Column(name = "INIT_INVOICE_AMOUNT_ORI", precision = 12)
	public Double getInitInvoiceAmountOri() {
		return this.initInvoiceAmountOri;
	}

	public void setInitInvoiceAmountOri(Double initInvoiceAmountOri) {
		this.initInvoiceAmountOri = initInvoiceAmountOri;
	}

	@Column(name = "INIT_INVOICE_AMOUNT", precision = 12)
	public Double getInitInvoiceAmount() {
		return this.initInvoiceAmount;
	}

	public void setInitInvoiceAmount(Double initInvoiceAmount) {
		this.initInvoiceAmount = initInvoiceAmount;
	}

	@Column(name = "INVO_CURR_CODE", length = 3)
	public String getInvoCurrCode() {
		return this.invoCurrCode;
	}

	public void setInvoCurrCode(String invoCurrCode) {
		this.invoCurrCode = invoCurrCode;
	}

	@Column(name = "INIT_EX_RATE", precision = 9, scale = 4)
	public Double getInitExRate() {
		return this.initExRate;
	}

	public void setInitExRate(Double initExRate) {
		this.initExRate = initExRate;
	}

	@Column(name = "INVO_EX_RATE", precision = 9, scale = 4)
	public Double getInvoExRate() {
		return this.invoExRate;
	}

	public void setInvoExRate(Double invoExRate) {
		this.invoExRate = invoExRate;
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
