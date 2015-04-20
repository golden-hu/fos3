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
public abstract class AbstractSInvoiceEntry extends BaseDomain {

	private static final long serialVersionUID = 5815226678166468196L;
	private Integer inenId;
	private Integer version;
	private Integer invoId;
	private String charName;
	private String charNameEn;
	private String unitName;
	private String currCode;
	private Double inenUnitPrice;
	private Double inenNum;
	private Double inenTotalAmount;
	private Double inenExRate;
	private Double expeCommission;
	private Double expeCommissionRate;
	private Double inenInvoiceAmount;
	private String inenPaymentType;
	private Integer expeId;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private String consHblNo;
	private String consVessel;
	private String consVoyage;
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
	@Column(name = "INEN_ID", unique = true, nullable = false)
	public Integer getInenId() {
		return this.inenId;
	}

	public void setInenId(Integer inenId) {
		this.inenId = inenId;
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

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "INEN_UNIT_PRICE", precision = 12, scale = 4)
	public Double getInenUnitPrice() {
		return this.inenUnitPrice;
	}

	public void setInenUnitPrice(Double inenUnitPrice) {
		this.inenUnitPrice = inenUnitPrice;
	}

	@Column(name = "INEN_NUM", precision = 12, scale = 4)
	public Double getInenNum() {
		return this.inenNum;
	}

	public void setInenNum(Double inenNum) {
		this.inenNum = inenNum;
	}

	@Column(name = "INEN_TOTAL_AMOUNT", precision = 12, scale = 4)
	public Double getInenTotalAmount() {
		return this.inenTotalAmount;
	}

	public void setInenTotalAmount(Double inenTotalAmount) {
		this.inenTotalAmount = inenTotalAmount;
	}

	@Column(name = "INEN_EX_RATE", precision = 9, scale = 4)
	public Double getInenExRate() {
		return this.inenExRate;
	}

	public void setInenExRate(Double inenExRate) {
		this.inenExRate = inenExRate;
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

	@Column(name = "INEN_INVOICE_AMOUNT", precision = 12, scale = 4)
	public Double getInenInvoiceAmount() {
		return this.inenInvoiceAmount;
	}

	public void setInenInvoiceAmount(Double inenInvoiceAmount) {
		this.inenInvoiceAmount = inenInvoiceAmount;
	}

	@Column(name = "INEN_PAYMENT_TYPE", length = 1)
	public String getInenPaymentType() {
		return this.inenPaymentType;
	}

	public void setInenPaymentType(String inenPaymentType) {
		this.inenPaymentType = inenPaymentType;
	}

	@Column(name = "EXPE_ID")
	public Integer getExpeId() {
		return this.expeId;
	}

	public void setExpeId(Integer expeId) {
		this.expeId = expeId;
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