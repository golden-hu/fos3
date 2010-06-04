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
public abstract class AbstractSBillItem extends BaseDomain {

	private static final long serialVersionUID = 2415405933962993987L;
	private Integer biitId;
	private Integer version;
	private Integer billId;
	private Integer expeId;
	private Integer custId;
	private String custName;
	private String custSname;
	private Integer charId;
	private String charName;
	private Integer unitId;
	private String unitName;
	private String currCode;
	private String expeType;
	private Integer expePaymentType;
	private Date expeDate;
	private Double expeUnitPrice;
	private Double expeNum;
	private Double expeCommission;
	private Double expeCommissionRate;
	private Double expeTotalAmount;
	private Double expeExRate;
	private Short expeStatus;
	private String expeRemarks;
	private Short expeForwardFlag;
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
	@Column(name = "BIIT_ID", unique = true, nullable = false)
	public Integer getBiitId() {
		return this.biitId;
	}

	public void setBiitId(Integer biitId) {
		this.biitId = biitId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "BILL_ID", nullable = false)
	public Integer getBillId() {
		return this.billId;
	}

	public void setBillId(Integer billId) {
		this.billId = billId;
	}

	@Column(name = "EXPE_ID", nullable = false)
	public Integer getExpeId() {
		return this.expeId;
	}

	public void setExpeId(Integer expeId) {
		this.expeId = expeId;
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

	@Column(name = "CHAR_ID")
	public Integer getCharId() {
		return this.charId;
	}

	public void setCharId(Integer charId) {
		this.charId = charId;
	}

	@Column(name = "CHAR_NAME", length = 64)
	public String getCharName() {
		return this.charName;
	}

	public void setCharName(String charName) {
		this.charName = charName;
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

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "EXPE_TYPE", length = 1)
	public String getExpeType() {
		return this.expeType;
	}

	public void setExpeType(String expeType) {
		this.expeType = expeType;
	}

	@Column(name = "EXPE_PAYMENT_TYPE")
	public Integer getExpePaymentType() {
		return this.expePaymentType;
	}

	public void setExpePaymentType(Integer expePaymentType) {
		this.expePaymentType = expePaymentType;
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

	@Column(name = "EXPE_EX_RATE", precision = 9, scale = 4)
	public Double getExpeExRate() {
		return this.expeExRate;
	}

	public void setExpeExRate(Double expeExRate) {
		this.expeExRate = expeExRate;
	}

	@Column(name = "EXPE_STATUS")
	public Short getExpeStatus() {
		return this.expeStatus;
	}

	public void setExpeStatus(Short expeStatus) {
		this.expeStatus = expeStatus;
	}

	@Column(name = "EXPE_REMARKS", length = 500)
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