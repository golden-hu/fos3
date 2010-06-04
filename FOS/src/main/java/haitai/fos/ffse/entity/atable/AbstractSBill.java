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
public abstract class AbstractSBill extends BaseDomain {

	private static final long serialVersionUID = -8851574090592582705L;
	private Integer billId;
	private Integer version;
	private String billNo;
	private Integer custId;
	private String custName;
	private String custSname;
	private String billType;
	private Date billDate;
	private String currCode;
	private Double billAmount;
	private Double billAmountCny;
	private Double billAmountUsd;
	private String billVessel;
	private String billVoyage;
	private String billBlNo;
	private Date billSailDate;
	private String billPol;
	private String billPod;
	private String billDeliveryPlace;
	private String billRemarks;
	private String billIssuer;
	private Date billIssueDate;
	private String billConsNo;
	private String billCargoName;
	private String billCargoQwm;
	private String billContainersInfo;
	private Short billStatus;
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
	@Column(name = "BILL_ID", unique = true, nullable = false)
	public Integer getBillId() {
		return this.billId;
	}

	public void setBillId(Integer billId) {
		this.billId = billId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "BILL_NO", nullable = false, length = 32)
	public String getBillNo() {
		return this.billNo;
	}

	public void setBillNo(String billNo) {
		this.billNo = billNo;
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

	@Column(name = "BILL_TYPE", nullable = false, length = 1)
	public String getBillType() {
		return this.billType;
	}

	public void setBillType(String billType) {
		this.billType = billType;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BILL_DATE", length = 10)
	public Date getBillDate() {
		return this.billDate;
	}

	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "BILL_AMOUNT", precision = 12)
	public Double getBillAmount() {
		return this.billAmount;
	}

	public void setBillAmount(Double billAmount) {
		this.billAmount = billAmount;
	}

	@Column(name = "BILL_AMOUNT_CNY", precision = 12)
	public Double getBillAmountCny() {
		return this.billAmountCny;
	}

	public void setBillAmountCny(Double billAmountCny) {
		this.billAmountCny = billAmountCny;
	}

	@Column(name = "BILL_AMOUNT_USD", precision = 12)
	public Double getBillAmountUsd() {
		return this.billAmountUsd;
	}

	public void setBillAmountUsd(Double billAmountUsd) {
		this.billAmountUsd = billAmountUsd;
	}

	@Column(name = "BILL_VESSEL", length = 64)
	public String getBillVessel() {
		return this.billVessel;
	}

	public void setBillVessel(String billVessel) {
		this.billVessel = billVessel;
	}

	@Column(name = "BILL_VOYAGE", length = 32)
	public String getBillVoyage() {
		return this.billVoyage;
	}

	public void setBillVoyage(String billVoyage) {
		this.billVoyage = billVoyage;
	}

	@Column(name = "BILL_BL_NO", length = 500)
	public String getBillBlNo() {
		return this.billBlNo;
	}

	public void setBillBlNo(String billBlNo) {
		this.billBlNo = billBlNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BILL_SAIL_DATE", length = 10)
	public Date getBillSailDate() {
		return this.billSailDate;
	}

	public void setBillSailDate(Date billSailDate) {
		this.billSailDate = billSailDate;
	}

	@Column(name = "BILL_POL", length = 32)
	public String getBillPol() {
		return this.billPol;
	}

	public void setBillPol(String billPol) {
		this.billPol = billPol;
	}

	@Column(name = "BILL_POD", length = 32)
	public String getBillPod() {
		return this.billPod;
	}

	public void setBillPod(String billPod) {
		this.billPod = billPod;
	}

	@Column(name = "BILL_DELIVERY_PLACE", length = 32)
	public String getBillDeliveryPlace() {
		return this.billDeliveryPlace;
	}

	public void setBillDeliveryPlace(String billDeliveryPlace) {
		this.billDeliveryPlace = billDeliveryPlace;
	}

	@Column(name = "BILL_REMARKS", length = 200)
	public String getBillRemarks() {
		return this.billRemarks;
	}

	public void setBillRemarks(String billRemarks) {
		this.billRemarks = billRemarks;
	}

	@Column(name = "BILL_ISSUER", length = 32)
	public String getBillIssuer() {
		return this.billIssuer;
	}

	public void setBillIssuer(String billIssuer) {
		this.billIssuer = billIssuer;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BILL_ISSUE_DATE", length = 10)
	public Date getBillIssueDate() {
		return this.billIssueDate;
	}

	public void setBillIssueDate(Date billIssueDate) {
		this.billIssueDate = billIssueDate;
	}

	@Column(name = "BILL_CONS_NO", length = 500)
	public String getBillConsNo() {
		return this.billConsNo;
	}

	public void setBillConsNo(String billConsNo) {
		this.billConsNo = billConsNo;
	}

	@Column(name = "BILL_CARGO_NAME", length = 200)
	public String getBillCargoName() {
		return this.billCargoName;
	}

	public void setBillCargoName(String billCargoName) {
		this.billCargoName = billCargoName;
	}

	@Column(name = "BILL_CARGO_QWM", length = 64)
	public String getBillCargoQwm() {
		return this.billCargoQwm;
	}

	public void setBillCargoQwm(String billCargoQwm) {
		this.billCargoQwm = billCargoQwm;
	}

	@Column(name = "BILL_CONTAINERS_INFO", length = 500)
	public String getBillContainersInfo() {
		return this.billContainersInfo;
	}

	public void setBillContainersInfo(String billContainersInfo) {
		this.billContainersInfo = billContainersInfo;
	}

	@Column(name = "BILL_STATUS")
	public Short getBillStatus() {
		return this.billStatus;
	}

	public void setBillStatus(Short billStatus) {
		this.billStatus = billStatus;
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