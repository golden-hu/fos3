package haitai.fos.ffop.entity.atable;

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
public abstract class AbstractFWarehouse extends BaseDomain {

	private static final long serialVersionUID = -2193173127561642739L;
	private Integer wareId;
	private Integer version;
	private String wareNo;
	private Integer consId;
	private String consNo;
	private String wareVessel;
	private String wareVoyage;
	private String wareMblNo;
	private Integer wareTotalPackages;
	private Double wareTotalGrossWeight;
	private Double wareTotalMeasurement;
	private String packName;
	private String wareType;
	private Date wareDate;
	private Date wareBookDate;
	private Integer wareVendorId;
	private String wareVendorName;
	private String wareVendorContact;
	private String wareVendorTel;
	private String wareVendorFax;
	private Integer wareOperator;
	private String wareOperatorTel;
	private String wareOperatorFax;
	private String wareCustomerContact;
	private String wareCustomerTel;
	private String wareCustomerFax;
	private Short wareAcceptStatus;
	private Date wareAcceptDate;
	private String wareRefNo;
	private Integer wareTransVendor;
	private String wareTransVendorName;
	private String wareTrackNo;
	private String wareLoadFlag;
	private String wareContainerNo;
	private String wareRemarks;
	private Integer warePackagesNum;
	private String wareCargoName;
	private Double wareGrossWeight;
	private Double wareNetWeight;
	private Double wareMeasurement;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;
	private String arrt1;
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
	@Column(name = "WARE_ID", unique = true, nullable = false)
	public Integer getWareId() {
		return this.wareId;
	}

	public void setWareId(Integer wareId) {
		this.wareId = wareId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "WARE_NO", nullable = false, length = 32)
	public String getWareNo() {
		return this.wareNo;
	}

	public void setWareNo(String wareNo) {
		this.wareNo = wareNo;
	}

	@Column(name = "CONS_ID", nullable = false)
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

	@Column(name = "WARE_VESSEL", length = 64)
	public String getWareVessel() {
		return this.wareVessel;
	}

	public void setWareVessel(String wareVessel) {
		this.wareVessel = wareVessel;
	}

	@Column(name = "WARE_VOYAGE", length = 32)
	public String getWareVoyage() {
		return this.wareVoyage;
	}

	public void setWareVoyage(String wareVoyage) {
		this.wareVoyage = wareVoyage;
	}

	@Column(name = "WARE_MBL_NO", length = 32)
	public String getWareMblNo() {
		return this.wareMblNo;
	}

	public void setWareMblNo(String wareMblNo) {
		this.wareMblNo = wareMblNo;
	}

	@Column(name = "WARE_TOTAL_PACKAGES")
	public Integer getWareTotalPackages() {
		return this.wareTotalPackages;
	}

	public void setWareTotalPackages(Integer wareTotalPackages) {
		this.wareTotalPackages = wareTotalPackages;
	}

	@Column(name = "WARE_TOTAL_GROSS_WEIGHT", precision = 9)
	public Double getWareTotalGrossWeight() {
		return this.wareTotalGrossWeight;
	}

	public void setWareTotalGrossWeight(Double wareTotalGrossWeight) {
		this.wareTotalGrossWeight = wareTotalGrossWeight;
	}

	@Column(name = "WARE_TOTAL_MEASUREMENT", precision = 9)
	public Double getWareTotalMeasurement() {
		return this.wareTotalMeasurement;
	}

	public void setWareTotalMeasurement(Double wareTotalMeasurement) {
		this.wareTotalMeasurement = wareTotalMeasurement;
	}

	@Column(name = "PACK_NAME", length = 32)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "WARE_TYPE", length = 1)
	public String getWareType() {
		return this.wareType;
	}

	public void setWareType(String wareType) {
		this.wareType = wareType;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "WARE_DATE", length = 10)
	public Date getWareDate() {
		return this.wareDate;
	}

	public void setWareDate(Date wareDate) {
		this.wareDate = wareDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "WARE_BOOK_DATE", length = 10)
	public Date getWareBookDate() {
		return this.wareBookDate;
	}

	public void setWareBookDate(Date wareBookDate) {
		this.wareBookDate = wareBookDate;
	}

	@Column(name = "WARE_VENDOR_ID")
	public Integer getWareVendorId() {
		return this.wareVendorId;
	}

	public void setWareVendorId(Integer wareVendorId) {
		this.wareVendorId = wareVendorId;
	}

	@Column(name = "WARE_VENDOR_NAME", length = 64)
	public String getWareVendorName() {
		return this.wareVendorName;
	}

	public void setWareVendorName(String wareVendorName) {
		this.wareVendorName = wareVendorName;
	}

	@Column(name = "WARE_VENDOR_CONTACT", length = 32)
	public String getWareVendorContact() {
		return this.wareVendorContact;
	}

	public void setWareVendorContact(String wareVendorContact) {
		this.wareVendorContact = wareVendorContact;
	}

	@Column(name = "WARE_VENDOR_TEL", length = 32)
	public String getWareVendorTel() {
		return this.wareVendorTel;
	}

	public void setWareVendorTel(String wareVendorTel) {
		this.wareVendorTel = wareVendorTel;
	}

	@Column(name = "WARE_VENDOR_FAX", length = 32)
	public String getWareVendorFax() {
		return this.wareVendorFax;
	}

	public void setWareVendorFax(String wareVendorFax) {
		this.wareVendorFax = wareVendorFax;
	}

	@Column(name = "WARE_OPERATOR")
	public Integer getWareOperator() {
		return this.wareOperator;
	}

	public void setWareOperator(Integer wareOperator) {
		this.wareOperator = wareOperator;
	}

	@Column(name = "WARE_OPERATOR_TEL", length = 32)
	public String getWareOperatorTel() {
		return this.wareOperatorTel;
	}

	public void setWareOperatorTel(String wareOperatorTel) {
		this.wareOperatorTel = wareOperatorTel;
	}

	@Column(name = "WARE_OPERATOR_FAX", length = 32)
	public String getWareOperatorFax() {
		return this.wareOperatorFax;
	}

	public void setWareOperatorFax(String wareOperatorFax) {
		this.wareOperatorFax = wareOperatorFax;
	}

	@Column(name = "WARE_CUSTOMER_CONTACT", length = 32)
	public String getWareCustomerContact() {
		return this.wareCustomerContact;
	}

	public void setWareCustomerContact(String wareCustomerContact) {
		this.wareCustomerContact = wareCustomerContact;
	}

	@Column(name = "WARE_CUSTOMER_TEL", length = 32)
	public String getWareCustomerTel() {
		return this.wareCustomerTel;
	}

	public void setWareCustomerTel(String wareCustomerTel) {
		this.wareCustomerTel = wareCustomerTel;
	}

	@Column(name = "WARE_CUSTOMER_FAX", length = 32)
	public String getWareCustomerFax() {
		return this.wareCustomerFax;
	}

	public void setWareCustomerFax(String wareCustomerFax) {
		this.wareCustomerFax = wareCustomerFax;
	}

	@Column(name = "WARE_ACCEPT_STATUS")
	public Short getWareAcceptStatus() {
		return this.wareAcceptStatus;
	}

	public void setWareAcceptStatus(Short wareAcceptStatus) {
		this.wareAcceptStatus = wareAcceptStatus;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "WARE_ACCEPT_DATE", length = 10)
	public Date getWareAcceptDate() {
		return this.wareAcceptDate;
	}

	public void setWareAcceptDate(Date wareAcceptDate) {
		this.wareAcceptDate = wareAcceptDate;
	}

	@Column(name = "WARE_REF_NO", length = 32)
	public String getWareRefNo() {
		return this.wareRefNo;
	}

	public void setWareRefNo(String wareRefNo) {
		this.wareRefNo = wareRefNo;
	}

	@Column(name = "WARE_TRANS_VENDOR")
	public Integer getWareTransVendor() {
		return this.wareTransVendor;
	}

	public void setWareTransVendor(Integer wareTransVendor) {
		this.wareTransVendor = wareTransVendor;
	}

	@Column(name = "WARE_TRANS_VENDOR_NAME", length = 64)
	public String getWareTransVendorName() {
		return this.wareTransVendorName;
	}

	public void setWareTransVendorName(String wareTransVendorName) {
		this.wareTransVendorName = wareTransVendorName;
	}

	@Column(name = "WARE_TRACK_NO", length = 200)
	public String getWareTrackNo() {
		return this.wareTrackNo;
	}

	public void setWareTrackNo(String wareTrackNo) {
		this.wareTrackNo = wareTrackNo;
	}

	@Column(name = "WARE_LOAD_FLAG", length = 1)
	public String getWareLoadFlag() {
		return this.wareLoadFlag;
	}

	public void setWareLoadFlag(String wareLoadFlag) {
		this.wareLoadFlag = wareLoadFlag;
	}

	@Column(name = "WARE_CONTAINER_NO", length = 1000)
	public String getWareContainerNo() {
		return this.wareContainerNo;
	}

	public void setWareContainerNo(String wareContainerNo) {
		this.wareContainerNo = wareContainerNo;
	}

	@Column(name = "WARE_REMARKS", length = 1000)
	public String getWareRemarks() {
		return this.wareRemarks;
	}

	public void setWareRemarks(String wareRemarks) {
		this.wareRemarks = wareRemarks;
	}

	@Column(name = "WARE_PACKAGES_NUM")
	public Integer getWarePackagesNum() {
		return this.warePackagesNum;
	}

	public void setWarePackagesNum(Integer warePackagesNum) {
		this.warePackagesNum = warePackagesNum;
	}

	@Column(name = "WARE_CARGO_NAME", length = 64)
	public String getWareCargoName() {
		return this.wareCargoName;
	}

	public void setWareCargoName(String wareCargoName) {
		this.wareCargoName = wareCargoName;
	}

	@Column(name = "WARE_GROSS_WEIGHT", precision = 9)
	public Double getWareGrossWeight() {
		return this.wareGrossWeight;
	}

	public void setWareGrossWeight(Double wareGrossWeight) {
		this.wareGrossWeight = wareGrossWeight;
	}

	@Column(name = "WARE_NET_WEIGHT", precision = 9)
	public Double getWareNetWeight() {
		return this.wareNetWeight;
	}

	public void setWareNetWeight(Double wareNetWeight) {
		this.wareNetWeight = wareNetWeight;
	}

	@Column(name = "WARE_MEASUREMENT", precision = 9)
	public Double getWareMeasurement() {
		return this.wareMeasurement;
	}

	public void setWareMeasurement(Double wareMeasurement) {
		this.wareMeasurement = wareMeasurement;
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

	@Column(name = "COMP_CODE")
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

	@Column(name = "ARRT1", length = 32)
	public String getArrt1() {
		return this.arrt1;
	}

	public void setArrt1(String arrt1) {
		this.arrt1 = arrt1;
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

	@Column(name = "ATTR9", length = 500)
	public String getAttr9() {
		return this.attr9;
	}

	public void setAttr9(String attr9) {
		this.attr9 = attr9;
	}

	@Column(name = "ATTR10", length = 500)
	public String getAttr10() {
		return this.attr10;
	}

	public void setAttr10(String attr10) {
		this.attr10 = attr10;
	}

}