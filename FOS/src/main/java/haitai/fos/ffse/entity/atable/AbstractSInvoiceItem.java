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
public abstract class AbstractSInvoiceItem extends BaseDomain {

	private static final long serialVersionUID = -6610931382280633119L;
	private Integer initId;
	private Integer version;
	private Integer invoId;
	private String invoNo;
	private String invoTaxNo;
	private Date invoDate;
	private Integer expeId;
	private String expeType;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private String consHblNo;
	private String consVessel;
	private String consVoyage;
	private Date consSailDate;
	private Integer custId;
	private String custName;
	private String custSname;
	private String charName;
	private String charNameEn;
	private String unitName;
	private String expeCurrCode;
	private Double expeUnitPrice;
	private Double expeNum;
	private Double expeCommission;
	private Double expeCommissionRate;
	private Double expeTotalAmount;
	private Double expeInvoiceAmount;
	private Double expeExRate;
	private String expeRemarks;
	private Double initInvoiceAmountOri;
	private Double initInvoiceAmount;
	private Double initInvoiceAmountOriW;
	private Double initInvoiceAmountW;
	private String invoCurrCode;
	private Double initExRate;
	private Double invoExRate;
	private String voucNo;
	private String invoTitle;
	private Short initWriteOffStatus;
	private String initWriteOffNo;
	private Integer initWriteOffBy;
	private Date initWriteOffDate;
	private Short initCancelFlag;
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

	@Column(name = "EXPE_ID", nullable = false)
	public Integer getExpeId() {
		return this.expeId;
	}

	public void setExpeId(Integer expeId) {
		this.expeId = expeId;
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

	@Column(name = "CHAR_NAME_EN", length = 64)
	public String getCharNameEn() {
		return this.charNameEn;
	}

	public void setCharNameEn(String charNameEn) {
		this.charNameEn = charNameEn;
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

	@Column(name = "EXPE_UNIT_PRICE", precision = 12, scale = 4)
	public Double getExpeUnitPrice() {
		return this.expeUnitPrice;
	}

	public void setExpeUnitPrice(Double expeUnitPrice) {
		this.expeUnitPrice = expeUnitPrice;
	}

	@Column(name = "EXPE_NUM", precision = 12, scale = 4)
	public Double getExpeNum() {
		return this.expeNum;
	}

	public void setExpeNum(Double expeNum) {
		this.expeNum = expeNum;
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

	@Column(name = "EXPE_TOTAL_AMOUNT", precision = 12, scale = 4)
	public Double getExpeTotalAmount() {
		return this.expeTotalAmount;
	}

	public void setExpeTotalAmount(Double expeTotalAmount) {
		this.expeTotalAmount = expeTotalAmount;
	}

	@Column(name = "EXPE_INVOICE_AMOUNT", precision = 12, scale = 4)
	public Double getExpeInvoiceAmount() {
		return this.expeInvoiceAmount;
	}

	public void setExpeInvoiceAmount(Double expeInvoiceAmount) {
		this.expeInvoiceAmount = expeInvoiceAmount;
	}

	@Column(name = "EXPE_EX_RATE", precision = 9, scale = 4)
	public Double getExpeExRate() {
		return this.expeExRate;
	}

	public void setExpeExRate(Double expeExRate) {
		this.expeExRate = expeExRate;
	}

	@Column(name = "EXPE_REMARKS", length = 200)
	public String getExpeRemarks() {
		return this.expeRemarks;
	}

	public void setExpeRemarks(String expeRemarks) {
		this.expeRemarks = expeRemarks;
	}

	@Column(name = "INIT_INVOICE_AMOUNT_ORI", precision = 12, scale = 4)
	public Double getInitInvoiceAmountOri() {
		return this.initInvoiceAmountOri;
	}

	public void setInitInvoiceAmountOri(Double initInvoiceAmountOri) {
		this.initInvoiceAmountOri = initInvoiceAmountOri;
	}

	@Column(name = "INIT_INVOICE_AMOUNT", precision = 12, scale = 4)
	public Double getInitInvoiceAmount() {
		return this.initInvoiceAmount;
	}

	public void setInitInvoiceAmount(Double initInvoiceAmount) {
		this.initInvoiceAmount = initInvoiceAmount;
	}

	@Column(name = "INIT_INVOICE_AMOUNT_ORI_W", precision = 12, scale = 4)
	public Double getInitInvoiceAmountOriW() {
		return this.initInvoiceAmountOriW;
	}

	public void setInitInvoiceAmountOriW(Double initInvoiceAmountOriW) {
		this.initInvoiceAmountOriW = initInvoiceAmountOriW;
	}

	@Column(name = "INIT_INVOICE_AMOUNT_W", precision = 12, scale = 4)
	public Double getInitInvoiceAmountW() {
		return this.initInvoiceAmountW;
	}

	public void setInitInvoiceAmountW(Double initInvoiceAmountW) {
		this.initInvoiceAmountW = initInvoiceAmountW;
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

	@Column(name = "VOUC_NO", length = 200)
	public String getVoucNo() {
		return this.voucNo;
	}

	public void setVoucNo(String voucNo) {
		this.voucNo = voucNo;
	}
	
	@Column(name = "INVO_TITLE", length = 200)
	public String getInvoTitle() {
		return invoTitle;
	}

	public void setInvoTitle(String invoTitle) {
		this.invoTitle = invoTitle;
	}

	@Column(name = "INIT_WRITE_OFF_STATUS")
	public Short getInitWriteOffStatus() {
		return this.initWriteOffStatus;
	}

	public void setInitWriteOffStatus(Short initWriteOffStatus) {
		this.initWriteOffStatus = initWriteOffStatus;
	}

	@Column(name = "INIT_WRITE_OFF_NO", length = 200)
	public String getInitWriteOffNo() {
		return this.initWriteOffNo;
	}

	public void setInitWriteOffNo(String initWriteOffNo) {
		this.initWriteOffNo = initWriteOffNo;
	}

	@Column(name = "INIT_WRITE_OFF_BY")
	public Integer getInitWriteOffBy() {
		return this.initWriteOffBy;
	}

	public void setInitWriteOffBy(Integer initWriteOffBy) {
		this.initWriteOffBy = initWriteOffBy;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INIT_WRITE_OFF_DATE", length = 10)
	public Date getInitWriteOffDate() {
		return this.initWriteOffDate;
	}

	public void setInitWriteOffDate(Date initWriteOffDate) {
		this.initWriteOffDate = initWriteOffDate;
	}

	@Column(name = "INIT_CANCEL_FLAG")
	public Short getInitCancelFlag() {
		return this.initCancelFlag;
	}

	public void setInitCancelFlag(Short initCancelFlag) {
		this.initCancelFlag = initCancelFlag;
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