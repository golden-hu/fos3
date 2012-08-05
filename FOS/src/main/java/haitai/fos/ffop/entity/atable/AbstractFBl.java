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
public abstract class AbstractFBl extends BaseDomain {
	
	private static final long serialVersionUID = 7017791579834505366L;
	private Integer blId;
	private Integer version;
	private String mblNo;
	private String blNo;
	private String blType;
	private Integer consId;
	private String consNo;
	private Integer consMasterId;
	private String consMasterNo;
	private String consBizClass;
	private String consBizType;
	private String consShipType;
	private String consTradeContractNo;
	private String consChargeRemarks;
	private Integer custId;
	private String custName;
	private String blShipper;
	private String blConsignee;
	private String blNotifyParty;
	private String blNotifyParty2;
	private String blOverseaAgency;
	private String blPrecarriage;
	private Integer blCarrier;
	private String blCarrierName;
	private String blVessel;
	private String blVoyage;
	private String blPol;
	private String blPod;
	private String blPot;
	private Date blLoadDate;
	private String blEtd;
	private String blEta;
	private String blReceiptPlace;
	private String blDeliveryPlace;
	private String blContainerNo;
    private String blSealNo;
	private String blPackages;
	private String blCargoDesc;
	private String blGrossWeight;
	private String blNetWeight;
	private String blMeasurement;
	private String blTotalSay;
	private String blMarks;
	private Integer packId;
	private String packName;
	private Integer unitId;
	private String unitName;
	private Double cargGrossWeight;
	private Double cargNetWeight;
	private Double cargMeasurement;
	private Integer cargPackages;
	private String blPaymentTerm;
	private String blPaidAt;
	private String blTransTerm;
	private String blContainerInfo;
	private String blOriginalNum;
	private Integer istyId;
	private Date blIssueDate;
	private String blIssueBy;
	private String blIssuePlace;
	private String blRemarks;
	private String blReceiver;
	private Short blThirdPlaceFlag;
	private Short blAdvancedFlag;
	private Short blBackFlag;
	private Short blCleanFlag;
	private Short bl500Flag;
	private Integer blReleaseBy;
	private Date blReleaseDate;
	private String blReleaseRemarks;
	private Short blStatus;
	private String blAgentIataCode;
	private String blAccountNo;
	private String blAccountingInfo;
	private String blToFirst;
	private String blByFirst;
	private String blToSecond;
	private String blBySecond;
	private String blToThird;
	private String blByThird;
	private String currCode;
	private String blWeightPayment;
	private String blValuePayment;
	private String blOtherPayment;
	private String blDvCarriage;
	private String blDvCustoms;
	private String blAmountInsurance;
	private String blTsRemarks;
	private String blDimension;
	private String blHandlingInfo;
	private String blBookingRequirement;
	private String blRateClass;
	private Double blChargeWeight;
	private Double blChargeRate;
	private Double blTotalCharge;
	private Double blWeightChargePp;
	private Double blWeightChargeCc;
	private Double blValuationChargePp;
	private Double blValuationChargeCc;
	private Double blTaxPp;
	private Double blTaxCc;
	private Double blOtherDaPp;
	private Double blOtherDaCc;
	private Double blOtherDcPp;
	private Double blOtherDcCc;
	private Double blTotalPp;
	private Double blTotalCc;
	private Short blMergeFlag;
	private Short blSplitFlag;
	private Short blMasterFlag;
	private Integer blMBlId;
	private String blMBlNo;
	private Integer fconId;
	private String fconContractNo;
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
	@Column(name = "BL_ID", unique = true, nullable = false)
	public Integer getBlId() {
		return this.blId;
	}

	public void setBlId(Integer blId) {
		this.blId = blId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "MBL_NO", length = 32)
	public String getMblNo() {
		return this.mblNo;
	}

	public void setMblNo(String mblNo) {
		this.mblNo = mblNo;
	}

	@Column(name = "BL_NO", length = 32)
	public String getBlNo() {
		return this.blNo;
	}

	public void setBlNo(String blNo) {
		this.blNo = blNo;
	}
	
	@Column(name = "BL_TYPE", nullable = false, length = 4)
	public String getBlType() {
		return this.blType;
	}

	public void setBlType(String blType) {
		this.blType = blType;
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

	@Column(name = "CONS_MASTER_ID")
	public Integer getConsMasterId() {
		return this.consMasterId;
	}

	public void setConsMasterId(Integer consMasterId) {
		this.consMasterId = consMasterId;
	}

	@Column(name = "CONS_MASTER_NO", length = 32)
	public String getConsMasterNo() {
		return this.consMasterNo;
	}

	public void setConsMasterNo(String consMasterNo) {
		this.consMasterNo = consMasterNo;
	}

	@Column(name = "CONS_BIZ_CLASS", length = 1)
	public String getConsBizClass() {
		return this.consBizClass;
	}

	public void setConsBizClass(String consBizClass) {
		this.consBizClass = consBizClass;
	}

	@Column(name = "CONS_BIZ_TYPE", length = 1)
	public String getConsBizType() {
		return this.consBizType;
	}

	public void setConsBizType(String consBizType) {
		this.consBizType = consBizType;
	}

	@Column(name = "CONS_SHIP_TYPE", length = 4)
	public String getConsShipType() {
		return this.consShipType;
	}

	public void setConsShipType(String consShipType) {
		this.consShipType = consShipType;
	}

	@Column(name = "CONS_TRADE_CONTRACT_NO", length = 32)
	public String getConsTradeContractNo() {
		return this.consTradeContractNo;
	}

	public void setConsTradeContractNo(String consTradeContractNo) {
		this.consTradeContractNo = consTradeContractNo;
	}

	@Column(name = "CONS_CHARGE_REMARKS", length = 200)
	public String getConsChargeRemarks() {
		return this.consChargeRemarks;
	}

	public void setConsChargeRemarks(String consChargeRemarks) {
		this.consChargeRemarks = consChargeRemarks;
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

	@Column(name = "BL_SHIPPER", length = 500)
	public String getBlShipper() {
		return this.blShipper;
	}

	public void setBlShipper(String blShipper) {
		this.blShipper = blShipper;
	}

	@Column(name = "BL_CONSIGNEE", length = 500)
	public String getBlConsignee() {
		return this.blConsignee;
	}

	public void setBlConsignee(String blConsignee) {
		this.blConsignee = blConsignee;
	}

	@Column(name = "BL_NOTIFY_PARTY", length = 500)
	public String getBlNotifyParty() {
		return this.blNotifyParty;
	}

	public void setBlNotifyParty(String blNotifyParty) {
		this.blNotifyParty = blNotifyParty;
	}

	@Column(name = "BL_NOTIFY_PARTY2", length = 500)
	public String getBlNotifyParty2() {
		return this.blNotifyParty2;
	}

	public void setBlNotifyParty2(String blNotifyParty2) {
		this.blNotifyParty2 = blNotifyParty2;
	}

	@Column(name = "BL_OVERSEA_AGENCY", length = 500)
	public String getBlOverseaAgency() {
		return this.blOverseaAgency;
	}

	public void setBlOverseaAgency(String blOverseaAgency) {
		this.blOverseaAgency = blOverseaAgency;
	}

	@Column(name = "BL_PRECARRIAGE", length = 64)
	public String getBlPrecarriage() {
		return this.blPrecarriage;
	}

	public void setBlPrecarriage(String blPrecarriage) {
		this.blPrecarriage = blPrecarriage;
	}

	@Column(name = "BL_CARRIER")
	public Integer getBlCarrier() {
		return this.blCarrier;
	}

	public void setBlCarrier(Integer blCarrier) {
		this.blCarrier = blCarrier;
	}

	@Column(name = "BL_CARRIER_NAME", length = 64)
	public String getBlCarrierName() {
		return this.blCarrierName;
	}

	public void setBlCarrierName(String blCarrierName) {
		this.blCarrierName = blCarrierName;
	}

	@Column(name = "BL_VESSEL", length = 64)
	public String getBlVessel() {
		return this.blVessel;
	}

	public void setBlVessel(String blVessel) {
		this.blVessel = blVessel;
	}

	@Column(name = "BL_VOYAGE", length = 32)
	public String getBlVoyage() {
		return this.blVoyage;
	}

	public void setBlVoyage(String blVoyage) {
		this.blVoyage = blVoyage;
	}

	@Column(name = "BL_POL", length = 200)
	public String getBlPol() {
		return this.blPol;
	}

	public void setBlPol(String blPol) {
		this.blPol = blPol;
	}

	@Column(name = "BL_POD", length = 200)
	public String getBlPod() {
		return this.blPod;
	}

	public void setBlPod(String blPod) {
		this.blPod = blPod;
	}

	@Column(name = "BL_POT", length = 200)
	public String getBlPot() {
		return this.blPot;
	}

	public void setBlPot(String blPot) {
		this.blPot = blPot;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BL_LOAD_DATE", length = 10)
	public Date getBlLoadDate() {
		return this.blLoadDate;
	}

	public void setBlLoadDate(Date blLoadDate) {
		this.blLoadDate = blLoadDate;
	}

	@Column(name = "BL_ETD", length = 32)
	public String getBlEtd() {
		return this.blEtd;
	}

	public void setBlEtd(String blEtd) {
		this.blEtd = blEtd;
	}

	@Column(name = "BL_ETA", length = 32)
	public String getBlEta() {
		return this.blEta;
	}

	public void setBlEta(String blEta) {
		this.blEta = blEta;
	}

	@Column(name = "BL_RECEIPT_PLACE", length = 32)
	public String getBlReceiptPlace() {
		return this.blReceiptPlace;
	}

	public void setBlReceiptPlace(String blReceiptPlace) {
		this.blReceiptPlace = blReceiptPlace;
	}

	@Column(name = "BL_DELIVERY_PLACE", length = 32)
	public String getBlDeliveryPlace() {
		return this.blDeliveryPlace;
	}

	public void setBlDeliveryPlace(String blDeliveryPlace) {
		this.blDeliveryPlace = blDeliveryPlace;
	}

	@Column(name = "BL_CONTAINER_NO", length = 500)
	public String getBlContainerNo() {
		return this.blContainerNo;
	}

	public void setBlContainerNo(String blContainerNo) {
		this.blContainerNo = blContainerNo;
	}
	
	
	@Column(name = "BL_SEAL_NO", length = 500)
	public String getBlSealNo() {
		return blSealNo;
	}

	public void setBlSealNo(String blSealNo) {
		this.blSealNo = blSealNo;
	}

	@Column(name = "BL_PACKAGES", length = 500)
	public String getBlPackages() {
		return this.blPackages;
	}

	public void setBlPackages(String blPackages) {
		this.blPackages = blPackages;
	}

	@Column(name = "BL_CARGO_DESC", length = 5000)
	public String getBlCargoDesc() {
		return this.blCargoDesc;
	}

	public void setBlCargoDesc(String blCargoDesc) {
		this.blCargoDesc = blCargoDesc;
	}

	@Column(name = "BL_GROSS_WEIGHT", length = 500)
	public String getBlGrossWeight() {
		return this.blGrossWeight;
	}

	public void setBlGrossWeight(String blGrossWeight) {
		this.blGrossWeight = blGrossWeight;
	}

	@Column(name = "BL_NET_WEIGHT", length = 500)
	public String getBlNetWeight() {
		return this.blNetWeight;
	}

	public void setBlNetWeight(String blNetWeight) {
		this.blNetWeight = blNetWeight;
	}

	@Column(name = "BL_MEASUREMENT", length = 500)
	public String getBlMeasurement() {
		return this.blMeasurement;
	}

	public void setBlMeasurement(String blMeasurement) {
		this.blMeasurement = blMeasurement;
	}

	@Column(name = "BL_TOTAL_SAY", length = 500)
	public String getBlTotalSay() {
		return this.blTotalSay;
	}

	public void setBlTotalSay(String blTotalSay) {
		this.blTotalSay = blTotalSay;
	}

	@Column(name = "BL_MARKS", length = 500)
	public String getBlMarks() {
		return this.blMarks;
	}

	public void setBlMarks(String blMarks) {
		this.blMarks = blMarks;
	}

	@Column(name = "PACK_ID")
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "PACK_NAME", length = 32)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
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

	@Column(name = "CARG_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getCargGrossWeight() {
		return this.cargGrossWeight;
	}

	public void setCargGrossWeight(Double cargGrossWeight) {
		this.cargGrossWeight = cargGrossWeight;
	}

	@Column(name = "CARG_NET_WEIGHT", precision = 14, scale = 6)
	public Double getCargNetWeight() {
		return this.cargNetWeight;
	}

	public void setCargNetWeight(Double cargNetWeight) {
		this.cargNetWeight = cargNetWeight;
	}

	@Column(name = "CARG_MEASUREMENT", precision = 14, scale = 6)
	public Double getCargMeasurement() {
		return this.cargMeasurement;
	}

	public void setCargMeasurement(Double cargMeasurement) {
		this.cargMeasurement = cargMeasurement;
	}

	@Column(name = "CARG_PACKAGES")
	public Integer getCargPackages() {
		return this.cargPackages;
	}

	public void setCargPackages(Integer cargPackages) {
		this.cargPackages = cargPackages;
	}

	@Column(name = "BL_PAYMENT_TERM", length = 32)
	public String getBlPaymentTerm() {
		return this.blPaymentTerm;
	}

	public void setBlPaymentTerm(String blPaymentTerm) {
		this.blPaymentTerm = blPaymentTerm;
	}

	@Column(name = "BL_PAID_AT", length = 32)
	public String getBlPaidAt() {
		return this.blPaidAt;
	}

	public void setBlPaidAt(String blPaidAt) {
		this.blPaidAt = blPaidAt;
	}

	@Column(name = "BL_TRANS_TERM", length = 32)
	public String getBlTransTerm() {
		return this.blTransTerm;
	}

	public void setBlTransTerm(String blTransTerm) {
		this.blTransTerm = blTransTerm;
	}

	@Column(name = "BL_CONTAINER_INFO", length = 200)
	public String getBlContainerInfo() {
		return this.blContainerInfo;
	}

	public void setBlContainerInfo(String blContainerInfo) {
		this.blContainerInfo = blContainerInfo;
	}

	@Column(name = "BL_ORIGINAL_NUM", length = 16)
	public String getBlOriginalNum() {
		return this.blOriginalNum;
	}

	public void setBlOriginalNum(String blOriginalNum) {
		this.blOriginalNum = blOriginalNum;
	}

	@Column(name = "ISTY_ID")
	public Integer getIstyId() {
		return this.istyId;
	}

	public void setIstyId(Integer istyId) {
		this.istyId = istyId;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BL_ISSUE_DATE", length = 10)
	public Date getBlIssueDate() {
		return this.blIssueDate;
	}

	public void setBlIssueDate(Date blIssueDate) {
		this.blIssueDate = blIssueDate;
	}

	@Column(name = "BL_ISSUE_BY", length = 32)
	public String getBlIssueBy() {
		return this.blIssueBy;
	}

	public void setBlIssueBy(String blIssueBy) {
		this.blIssueBy = blIssueBy;
	}

	@Column(name = "BL_ISSUE_PLACE", length = 32)
	public String getBlIssuePlace() {
		return this.blIssuePlace;
	}

	public void setBlIssuePlace(String blIssuePlace) {
		this.blIssuePlace = blIssuePlace;
	}

	@Column(name = "BL_REMARKS", length = 500)
	public String getBlRemarks() {
		return this.blRemarks;
	}

	public void setBlRemarks(String blRemarks) {
		this.blRemarks = blRemarks;
	}

	@Column(name = "BL_RECEIVER", length = 32)
	public String getBlReceiver() {
		return this.blReceiver;
	}

	public void setBlReceiver(String blReceiver) {
		this.blReceiver = blReceiver;
	}

	@Column(name = "BL_THIRD_PLACE_FLAG")
	public Short getBlThirdPlaceFlag() {
		return this.blThirdPlaceFlag;
	}

	public void setBlThirdPlaceFlag(Short blThirdPlaceFlag) {
		this.blThirdPlaceFlag = blThirdPlaceFlag;
	}

	@Column(name = "BL_ADVANCED_FLAG")
	public Short getBlAdvancedFlag() {
		return this.blAdvancedFlag;
	}

	public void setBlAdvancedFlag(Short blAdvancedFlag) {
		this.blAdvancedFlag = blAdvancedFlag;
	}

	@Column(name = "BL_BACK_FLAG")
	public Short getBlBackFlag() {
		return this.blBackFlag;
	}

	public void setBlBackFlag(Short blBackFlag) {
		this.blBackFlag = blBackFlag;
	}

	@Column(name = "BL_CLEAN_FLAG")
	public Short getBlCleanFlag() {
		return this.blCleanFlag;
	}

	public void setBlCleanFlag(Short blCleanFlag) {
		this.blCleanFlag = blCleanFlag;
	}

	@Column(name = "BL_500_FLAG")
	public Short getBl500Flag() {
		return this.bl500Flag;
	}

	public void setBl500Flag(Short bl500Flag) {
		this.bl500Flag = bl500Flag;
	}

	@Column(name = "BL_RELEASE_BY")
	public Integer getBlReleaseBy() {
		return this.blReleaseBy;
	}

	public void setBlReleaseBy(Integer blReleaseBy) {
		this.blReleaseBy = blReleaseBy;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "BL_RELEASE_DATE", length = 10)
	public Date getBlReleaseDate() {
		return this.blReleaseDate;
	}

	public void setBlReleaseDate(Date blReleaseDate) {
		this.blReleaseDate = blReleaseDate;
	}

	@Column(name = "BL_RELEASE_REMARKS", length = 500)
	public String getBlReleaseRemarks() {
		return this.blReleaseRemarks;
	}

	public void setBlReleaseRemarks(String blReleaseRemarks) {
		this.blReleaseRemarks = blReleaseRemarks;
	}

	@Column(name = "BL_STATUS")
	public Short getBlStatus() {
		return this.blStatus;
	}

	public void setBlStatus(Short blStatus) {
		this.blStatus = blStatus;
	}

	@Column(name = "BL_AGENT_IATA_CODE", length = 16)
	public String getBlAgentIataCode() {
		return this.blAgentIataCode;
	}

	public void setBlAgentIataCode(String blAgentIataCode) {
		this.blAgentIataCode = blAgentIataCode;
	}

	@Column(name = "BL_ACCOUNT_NO", length = 32)
	public String getBlAccountNo() {
		return this.blAccountNo;
	}

	public void setBlAccountNo(String blAccountNo) {
		this.blAccountNo = blAccountNo;
	}

	@Column(name = "BL_ACCOUNTING_INFO", length = 500)
	public String getBlAccountingInfo() {
		return this.blAccountingInfo;
	}

	public void setBlAccountingInfo(String blAccountingInfo) {
		this.blAccountingInfo = blAccountingInfo;
	}

	@Column(name = "BL_TO_FIRST", length = 32)
	public String getBlToFirst() {
		return this.blToFirst;
	}

	public void setBlToFirst(String blToFirst) {
		this.blToFirst = blToFirst;
	}

	@Column(name = "BL_BY_FIRST", length = 32)
	public String getBlByFirst() {
		return this.blByFirst;
	}

	public void setBlByFirst(String blByFirst) {
		this.blByFirst = blByFirst;
	}

	@Column(name = "BL_TO_SECOND", length = 32)
	public String getBlToSecond() {
		return this.blToSecond;
	}

	public void setBlToSecond(String blToSecond) {
		this.blToSecond = blToSecond;
	}

	@Column(name = "BL_BY_SECOND", length = 32)
	public String getBlBySecond() {
		return this.blBySecond;
	}

	public void setBlBySecond(String blBySecond) {
		this.blBySecond = blBySecond;
	}

	@Column(name = "BL_TO_THIRD", length = 32)
	public String getBlToThird() {
		return this.blToThird;
	}

	public void setBlToThird(String blToThird) {
		this.blToThird = blToThird;
	}

	@Column(name = "BL_BY_THIRD", length = 32)
	public String getBlByThird() {
		return this.blByThird;
	}

	public void setBlByThird(String blByThird) {
		this.blByThird = blByThird;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "BL_WEIGHT_PAYMENT", length = 16)
	public String getBlWeightPayment() {
		return this.blWeightPayment;
	}

	public void setBlWeightPayment(String blWeightPayment) {
		this.blWeightPayment = blWeightPayment;
	}

	@Column(name = "BL_VALUE_PAYMENT", length = 16)
	public String getBlValuePayment() {
		return this.blValuePayment;
	}

	public void setBlValuePayment(String blValuePayment) {
		this.blValuePayment = blValuePayment;
	}

	@Column(name = "BL_OTHER_PAYMENT", length = 16)
	public String getBlOtherPayment() {
		return this.blOtherPayment;
	}

	public void setBlOtherPayment(String blOtherPayment) {
		this.blOtherPayment = blOtherPayment;
	}

	@Column(name = "BL_DV_CARRIAGE", length = 32)
	public String getBlDvCarriage() {
		return this.blDvCarriage;
	}

	public void setBlDvCarriage(String blDvCarriage) {
		this.blDvCarriage = blDvCarriage;
	}

	@Column(name = "BL_DV_CUSTOMS", length = 32)
	public String getBlDvCustoms() {
		return this.blDvCustoms;
	}

	public void setBlDvCustoms(String blDvCustoms) {
		this.blDvCustoms = blDvCustoms;
	}

	@Column(name = "BL_AMOUNT_INSURANCE", length = 32)
	public String getBlAmountInsurance() {
		return this.blAmountInsurance;
	}

	public void setBlAmountInsurance(String blAmountInsurance) {
		this.blAmountInsurance = blAmountInsurance;
	}

	@Column(name = "BL_TS_REMARKS", length = 200)
	public String getBlTsRemarks() {
		return this.blTsRemarks;
	}

	public void setBlTsRemarks(String blTsRemarks) {
		this.blTsRemarks = blTsRemarks;
	}

	@Column(name = "BL_DIMENSION", length = 500)
	public String getBlDimension() {
		return this.blDimension;
	}

	public void setBlDimension(String blDimension) {
		this.blDimension = blDimension;
	}

	@Column(name = "BL_HANDLING_INFO", length = 500)
	public String getBlHandlingInfo() {
		return this.blHandlingInfo;
	}

	public void setBlHandlingInfo(String blHandlingInfo) {
		this.blHandlingInfo = blHandlingInfo;
	}

	@Column(name = "BL_BOOKING_REQUIREMENT", length = 500)
	public String getBlBookingRequirement() {
		return this.blBookingRequirement;
	}

	public void setBlBookingRequirement(String blBookingRequirement) {
		this.blBookingRequirement = blBookingRequirement;
	}

	@Column(name = "BL_RATE_CLASS", length = 16)
	public String getBlRateClass() {
		return this.blRateClass;
	}

	public void setBlRateClass(String blRateClass) {
		this.blRateClass = blRateClass;
	}

	@Column(name = "BL_CHARGE_WEIGHT", precision = 12, scale = 4)
	public Double getBlChargeWeight() {
		return this.blChargeWeight;
	}

	public void setBlChargeWeight(Double blChargeWeight) {
		this.blChargeWeight = blChargeWeight;
	}

	@Column(name = "BL_CHARGE_RATE", precision = 12, scale = 4)
	public Double getBlChargeRate() {
		return this.blChargeRate;
	}

	public void setBlChargeRate(Double blChargeRate) {
		this.blChargeRate = blChargeRate;
	}

	@Column(name = "BL_TOTAL_CHARGE", precision = 12)
	public Double getBlTotalCharge() {
		return this.blTotalCharge;
	}

	public void setBlTotalCharge(Double blTotalCharge) {
		this.blTotalCharge = blTotalCharge;
	}

	@Column(name = "BL_WEIGHT_CHARGE_PP", precision = 12)
	public Double getBlWeightChargePp() {
		return this.blWeightChargePp;
	}

	public void setBlWeightChargePp(Double blWeightChargePp) {
		this.blWeightChargePp = blWeightChargePp;
	}

	@Column(name = "BL_WEIGHT_CHARGE_CC", precision = 12)
	public Double getBlWeightChargeCc() {
		return this.blWeightChargeCc;
	}

	public void setBlWeightChargeCc(Double blWeightChargeCc) {
		this.blWeightChargeCc = blWeightChargeCc;
	}

	@Column(name = "BL_VALUATION_CHARGE_PP", precision = 12)
	public Double getBlValuationChargePp() {
		return this.blValuationChargePp;
	}

	public void setBlValuationChargePp(Double blValuationChargePp) {
		this.blValuationChargePp = blValuationChargePp;
	}

	@Column(name = "BL_VALUATION_CHARGE_CC", precision = 12)
	public Double getBlValuationChargeCc() {
		return this.blValuationChargeCc;
	}

	public void setBlValuationChargeCc(Double blValuationChargeCc) {
		this.blValuationChargeCc = blValuationChargeCc;
	}

	@Column(name = "BL_TAX_PP", precision = 12)
	public Double getBlTaxPp() {
		return this.blTaxPp;
	}

	public void setBlTaxPp(Double blTaxPp) {
		this.blTaxPp = blTaxPp;
	}

	@Column(name = "BL_TAX_CC", precision = 12)
	public Double getBlTaxCc() {
		return this.blTaxCc;
	}

	public void setBlTaxCc(Double blTaxCc) {
		this.blTaxCc = blTaxCc;
	}

	@Column(name = "BL_OTHER_DA_PP", precision = 12)
	public Double getBlOtherDaPp() {
		return this.blOtherDaPp;
	}

	public void setBlOtherDaPp(Double blOtherDaPp) {
		this.blOtherDaPp = blOtherDaPp;
	}

	@Column(name = "BL_OTHER_DA_CC", precision = 12)
	public Double getBlOtherDaCc() {
		return this.blOtherDaCc;
	}

	public void setBlOtherDaCc(Double blOtherDaCc) {
		this.blOtherDaCc = blOtherDaCc;
	}

	@Column(name = "BL_OTHER_DC_PP", precision = 12)
	public Double getBlOtherDcPp() {
		return this.blOtherDcPp;
	}

	public void setBlOtherDcPp(Double blOtherDcPp) {
		this.blOtherDcPp = blOtherDcPp;
	}

	@Column(name = "BL_OTHER_DC_CC", precision = 12)
	public Double getBlOtherDcCc() {
		return this.blOtherDcCc;
	}

	public void setBlOtherDcCc(Double blOtherDcCc) {
		this.blOtherDcCc = blOtherDcCc;
	}

	@Column(name = "BL_TOTAL_PP", precision = 12)
	public Double getBlTotalPp() {
		return this.blTotalPp;
	}

	public void setBlTotalPp(Double blTotalPp) {
		this.blTotalPp = blTotalPp;
	}

	@Column(name = "BL_TOTAL_CC", precision = 12)
	public Double getBlTotalCc() {
		return this.blTotalCc;
	}

	public void setBlTotalCc(Double blTotalCc) {
		this.blTotalCc = blTotalCc;
	}

	@Column(name = "BL_MERGE_FLAG")
	public Short getBlMergeFlag() {
		return this.blMergeFlag;
	}

	public void setBlMergeFlag(Short blMergeFlag) {
		this.blMergeFlag = blMergeFlag;
	}

	@Column(name = "BL_SPLIT_FLAG")
	public Short getBlSplitFlag() {
		return this.blSplitFlag;
	}

	public void setBlSplitFlag(Short blSplitFlag) {
		this.blSplitFlag = blSplitFlag;
	}

	@Column(name = "BL_MASTER_FLAG")
	public Short getBlMasterFlag() {
		return blMasterFlag;
	}

	public void setBlMasterFlag(Short blMasterFlag) {
		this.blMasterFlag = blMasterFlag;
	}

	@Column(name = "BL_M_BL_ID")
	public Integer getBlMBlId() {
		return blMBlId;
	}

	public void setBlMBlId(Integer blMBlId) {
		this.blMBlId = blMBlId;
	}

	@Column(name = "BL_M_BL_NO", length = 32)
	public String getBlMBlNo() {
		return this.blMBlNo;
	}

	public void setBlMBlNo(String blMBlNo) {
		this.blMBlNo = blMBlNo;
	}

	@Column(name = "FCON_ID")
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Column(name = "FCON_CONTRACT_NO", length = 32)
	public String getFconContractNo() {
		return this.fconContractNo;
	}

	public void setFconContractNo(String fconContractNo) {
		this.fconContractNo = fconContractNo;
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