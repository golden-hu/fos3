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
public abstract class AbstractFTrans extends BaseDomain {

	private static final long serialVersionUID = -4550681214649516594L;
	private Integer tranId;
	private Integer version;
	private String tranNo;
	private Integer consId;
	private String consNo;
	private String tranContractNo;
	private Date tranDate;
	private Integer tranVendorId;
	private String tranVendorName;
	private String tranVendorContact;
	private String tranVendorTel;
	private String tranVendorFax;
	private Date tranExpiryDate;
	private Integer tranType;
	private Integer tranOperationType;
	private Integer tranVehicleType;
	private Short tranIcFlag;
	private Integer tranIcDays;
	private Short tranPreFlag;
	private Short tranInspFlag;
	private Short tranRearFlag;
	private Short tranContFlag;
	private String tranLoadFactory;
	private String tranLoadContact;
	private String tranLoadTel;
	private String tranLoadPlace;
	private String tranLoadAddress;
	private Date tranStartDate;
	private Date tranCompleteDate;
	private Date tranLoadDate;
	private String tranDeliveryAddress;
	private Integer tranCustomsBroker;
	private String tranCustomsBrokerName;
	private String tranCustomsContact;
	private String tranCustomsTel;
	private String tranCustomsAddress;
	private Integer tranContainerCompany;
	private String tranContainerCompanyName;
	private String tranContainerInfo;
	private String tranVessel;
	private String tranVoyage;
	private Date tranEtd;
	private String tranSoNo;
	private String tranPol;
	private String tranCyDraw;
	private Date tranDrawDate;
	private String tranCyBack;
	private Date tranBackDate;
	private Double tranEmptyMiles;
	private Double tranHeavyMiles;
	private Integer tranTotalPackages;
	private Double tranTotalGrossWeight;
	private Double tranTotalMeasurement;
	private String packName;
	private String tranRemarks;
	private Integer tranStatus;
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
	@Column(name = "TRAN_ID", unique = true, nullable = false)
	public Integer getTranId() {
		return this.tranId;
	}

	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}

	@Version
	@Column(name = "VERSION")
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TRAN_NO", nullable = false, length = 32)
	public String getTranNo() {
		return this.tranNo;
	}

	public void setTranNo(String tranNo) {
		this.tranNo = tranNo;
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

	@Column(name = "TRAN_CONTRACT_NO", length = 32)
	public String getTranContractNo() {
		return this.tranContractNo;
	}

	public void setTranContractNo(String tranContractNo) {
		this.tranContractNo = tranContractNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_DATE", length = 10)
	public Date getTranDate() {
		return this.tranDate;
	}

	public void setTranDate(Date tranDate) {
		this.tranDate = tranDate;
	}

	@Column(name = "TRAN_VENDOR_ID")
	public Integer getTranVendorId() {
		return this.tranVendorId;
	}

	public void setTranVendorId(Integer tranVendorId) {
		this.tranVendorId = tranVendorId;
	}

	@Column(name = "TRAN_VENDOR_NAME", length = 64)
	public String getTranVendorName() {
		return this.tranVendorName;
	}

	public void setTranVendorName(String tranVendorName) {
		this.tranVendorName = tranVendorName;
	}

	@Column(name = "TRAN_VENDOR_CONTACT", length = 32)
	public String getTranVendorContact() {
		return this.tranVendorContact;
	}

	public void setTranVendorContact(String tranVendorContact) {
		this.tranVendorContact = tranVendorContact;
	}

	@Column(name = "TRAN_VENDOR_TEL", length = 32)
	public String getTranVendorTel() {
		return this.tranVendorTel;
	}

	public void setTranVendorTel(String tranVendorTel) {
		this.tranVendorTel = tranVendorTel;
	}

	@Column(name = "TRAN_VENDOR_FAX", length = 32)
	public String getTranVendorFax() {
		return this.tranVendorFax;
	}

	public void setTranVendorFax(String tranVendorFax) {
		this.tranVendorFax = tranVendorFax;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_EXPIRY_DATE", length = 10)
	public Date getTranExpiryDate() {
		return this.tranExpiryDate;
	}

	public void setTranExpiryDate(Date tranExpiryDate) {
		this.tranExpiryDate = tranExpiryDate;
	}

	@Column(name = "TRAN_TYPE")
	public Integer getTranType() {
		return this.tranType;
	}

	public void setTranType(Integer tranType) {
		this.tranType = tranType;
	}

	@Column(name = "TRAN_OPERATION_TYPE")
	public Integer getTranOperationType() {
		return this.tranOperationType;
	}

	public void setTranOperationType(Integer tranOperationType) {
		this.tranOperationType = tranOperationType;
	}

	@Column(name = "TRAN_VEHICLE_TYPE")
	public Integer getTranVehicleType() {
		return this.tranVehicleType;
	}

	public void setTranVehicleType(Integer tranVehicleType) {
		this.tranVehicleType = tranVehicleType;
	}

	@Column(name = "TRAN_IC_FLAG")
	public Short getTranIcFlag() {
		return this.tranIcFlag;
	}

	public void setTranIcFlag(Short tranIcFlag) {
		this.tranIcFlag = tranIcFlag;
	}

	@Column(name = "TRAN_IC_DAYS")
	public Integer getTranIcDays() {
		return this.tranIcDays;
	}

	public void setTranIcDays(Integer tranIcDays) {
		this.tranIcDays = tranIcDays;
	}

	@Column(name = "TRAN_PRE_FLAG")
	public Short getTranPreFlag() {
		return this.tranPreFlag;
	}

	public void setTranPreFlag(Short tranPreFlag) {
		this.tranPreFlag = tranPreFlag;
	}

	@Column(name = "TRAN_INSP_FLAG")
	public Short getTranInspFlag() {
		return this.tranInspFlag;
	}

	public void setTranInspFlag(Short tranInspFlag) {
		this.tranInspFlag = tranInspFlag;
	}

	@Column(name = "TRAN_REAR_FLAG")
	public Short getTranRearFlag() {
		return this.tranRearFlag;
	}

	public void setTranRearFlag(Short tranRearFlag) {
		this.tranRearFlag = tranRearFlag;
	}

	@Column(name = "TRAN_CONT_FLAG")
	public Short getTranContFlag() {
		return this.tranContFlag;
	}

	public void setTranContFlag(Short tranContFlag) {
		this.tranContFlag = tranContFlag;
	}

	@Column(name = "TRAN_LOAD_FACTORY", length = 64)
	public String getTranLoadFactory() {
		return this.tranLoadFactory;
	}

	public void setTranLoadFactory(String tranLoadFactory) {
		this.tranLoadFactory = tranLoadFactory;
	}

	@Column(name = "TRAN_LOAD_CONTACT", length = 32)
	public String getTranLoadContact() {
		return this.tranLoadContact;
	}

	public void setTranLoadContact(String tranLoadContact) {
		this.tranLoadContact = tranLoadContact;
	}

	@Column(name = "TRAN_LOAD_TEL", length = 32)
	public String getTranLoadTel() {
		return this.tranLoadTel;
	}

	public void setTranLoadTel(String tranLoadTel) {
		this.tranLoadTel = tranLoadTel;
	}

	@Column(name = "TRAN_LOAD_PLACE", length = 32)
	public String getTranLoadPlace() {
		return this.tranLoadPlace;
	}

	public void setTranLoadPlace(String tranLoadPlace) {
		this.tranLoadPlace = tranLoadPlace;
	}

	@Column(name = "TRAN_LOAD_ADDRESS", length = 200)
	public String getTranLoadAddress() {
		return this.tranLoadAddress;
	}

	public void setTranLoadAddress(String tranLoadAddress) {
		this.tranLoadAddress = tranLoadAddress;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_START_DATE", length = 10)
	public Date getTranStartDate() {
		return this.tranStartDate;
	}

	public void setTranStartDate(Date tranStartDate) {
		this.tranStartDate = tranStartDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_COMPLETE_DATE", length = 10)
	public Date getTranCompleteDate() {
		return this.tranCompleteDate;
	}

	public void setTranCompleteDate(Date tranCompleteDate) {
		this.tranCompleteDate = tranCompleteDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_LOAD_DATE", length = 10)
	public Date getTranLoadDate() {
		return this.tranLoadDate;
	}

	public void setTranLoadDate(Date tranLoadDate) {
		this.tranLoadDate = tranLoadDate;
	}

	@Column(name = "TRAN_DELIVERY_ADDRESS", length = 200)
	public String getTranDeliveryAddress() {
		return this.tranDeliveryAddress;
	}

	public void setTranDeliveryAddress(String tranDeliveryAddress) {
		this.tranDeliveryAddress = tranDeliveryAddress;
	}

	@Column(name = "TRAN_CUSTOMS_BROKER")
	public Integer getTranCustomsBroker() {
		return this.tranCustomsBroker;
	}

	public void setTranCustomsBroker(Integer tranCustomsBroker) {
		this.tranCustomsBroker = tranCustomsBroker;
	}

	@Column(name = "TRAN_CUSTOMS_BROKER_NAME", length = 64)
	public String getTranCustomsBrokerName() {
		return this.tranCustomsBrokerName;
	}

	public void setTranCustomsBrokerName(String tranCustomsBrokerName) {
		this.tranCustomsBrokerName = tranCustomsBrokerName;
	}

	@Column(name = "TRAN_CUSTOMS_CONTACT", length = 32)
	public String getTranCustomsContact() {
		return this.tranCustomsContact;
	}

	public void setTranCustomsContact(String tranCustomsContact) {
		this.tranCustomsContact = tranCustomsContact;
	}

	@Column(name = "TRAN_CUSTOMS_TEL", length = 32)
	public String getTranCustomsTel() {
		return this.tranCustomsTel;
	}

	public void setTranCustomsTel(String tranCustomsTel) {
		this.tranCustomsTel = tranCustomsTel;
	}

	@Column(name = "TRAN_CUSTOMS_ADDRESS", length = 200)
	public String getTranCustomsAddress() {
		return this.tranCustomsAddress;
	}

	public void setTranCustomsAddress(String tranCustomsAddress) {
		this.tranCustomsAddress = tranCustomsAddress;
	}

	@Column(name = "TRAN_CONTAINER_COMPANY")
	public Integer getTranContainerCompany() {
		return this.tranContainerCompany;
	}

	public void setTranContainerCompany(Integer tranContainerCompany) {
		this.tranContainerCompany = tranContainerCompany;
	}

	@Column(name = "TRAN_CONTAINER_COMPANY_NAME", length = 64)
	public String getTranContainerCompanyName() {
		return this.tranContainerCompanyName;
	}

	public void setTranContainerCompanyName(String tranContainerCompanyName) {
		this.tranContainerCompanyName = tranContainerCompanyName;
	}

	@Column(name = "TRAN_CONTAINER_INFO", length = 200)
	public String getTranContainerInfo() {
		return this.tranContainerInfo;
	}

	public void setTranContainerInfo(String tranContainerInfo) {
		this.tranContainerInfo = tranContainerInfo;
	}

	@Column(name = "TRAN_VESSEL", length = 32)
	public String getTranVessel() {
		return this.tranVessel;
	}

	public void setTranVessel(String tranVessel) {
		this.tranVessel = tranVessel;
	}

	@Column(name = "TRAN_VOYAGE", length = 32)
	public String getTranVoyage() {
		return this.tranVoyage;
	}

	public void setTranVoyage(String tranVoyage) {
		this.tranVoyage = tranVoyage;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_ETD", length = 10)
	public Date getTranEtd() {
		return this.tranEtd;
	}

	public void setTranEtd(Date tranEtd) {
		this.tranEtd = tranEtd;
	}

	@Column(name = "TRAN_SO_NO", length = 16)
	public String getTranSoNo() {
		return this.tranSoNo;
	}

	public void setTranSoNo(String tranSoNo) {
		this.tranSoNo = tranSoNo;
	}

	@Column(name = "TRAN_POL", length = 64)
	public String getTranPol() {
		return this.tranPol;
	}

	public void setTranPol(String tranPol) {
		this.tranPol = tranPol;
	}

	@Column(name = "TRAN_CY_DRAW", length = 64)
	public String getTranCyDraw() {
		return this.tranCyDraw;
	}

	public void setTranCyDraw(String tranCyDraw) {
		this.tranCyDraw = tranCyDraw;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_DRAW_DATE", length = 10)
	public Date getTranDrawDate() {
		return this.tranDrawDate;
	}

	public void setTranDrawDate(Date tranDrawDate) {
		this.tranDrawDate = tranDrawDate;
	}

	@Column(name = "TRAN_CY_BACK", length = 64)
	public String getTranCyBack() {
		return this.tranCyBack;
	}

	public void setTranCyBack(String tranCyBack) {
		this.tranCyBack = tranCyBack;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRAN_BACK_DATE", length = 10)
	public Date getTranBackDate() {
		return this.tranBackDate;
	}

	public void setTranBackDate(Date tranBackDate) {
		this.tranBackDate = tranBackDate;
	}

	@Column(name = "TRAN_EMPTY_MILES", precision = 9)
	public Double getTranEmptyMiles() {
		return this.tranEmptyMiles;
	}

	public void setTranEmptyMiles(Double tranEmptyMiles) {
		this.tranEmptyMiles = tranEmptyMiles;
	}

	@Column(name = "TRAN_HEAVY_MILES", precision = 9)
	public Double getTranHeavyMiles() {
		return this.tranHeavyMiles;
	}

	public void setTranHeavyMiles(Double tranHeavyMiles) {
		this.tranHeavyMiles = tranHeavyMiles;
	}

	@Column(name = "TRAN_TOTAL_PACKAGES")
	public Integer getTranTotalPackages() {
		return this.tranTotalPackages;
	}

	public void setTranTotalPackages(Integer tranTotalPackages) {
		this.tranTotalPackages = tranTotalPackages;
	}

	@Column(name = "TRAN_TOTAL_GROSS_WEIGHT", precision = 9)
	public Double getTranTotalGrossWeight() {
		return this.tranTotalGrossWeight;
	}

	public void setTranTotalGrossWeight(Double tranTotalGrossWeight) {
		this.tranTotalGrossWeight = tranTotalGrossWeight;
	}

	@Column(name = "TRAN_TOTAL_MEASUREMENT", precision = 9)
	public Double getTranTotalMeasurement() {
		return this.tranTotalMeasurement;
	}

	public void setTranTotalMeasurement(Double tranTotalMeasurement) {
		this.tranTotalMeasurement = tranTotalMeasurement;
	}

	@Column(name = "PACK_NAME", length = 64)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "TRAN_REMARKS", length = 1000)
	public String getTranRemarks() {
		return this.tranRemarks;
	}

	public void setTranRemarks(String tranRemarks) {
		this.tranRemarks = tranRemarks;
	}

	@Column(name = "TRAN_STATUS")
	public Integer getTranStatus() {
		return this.tranStatus;
	}

	public void setTranStatus(Integer tranStatus) {
		this.tranStatus = tranStatus;
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

	@Column(name = "COMP_CODE", length = 4)
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