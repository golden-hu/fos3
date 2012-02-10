package haitai.fos.ffop.entity.atable;

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
public abstract class AbstractFConsign extends BaseDomain {

	private static final long serialVersionUID = -6161139110044834046L;
	private Integer consId;
	private Integer version;
	private String consNo;
	private String consType;
	private String consShipType;
	private String consLclType;
	private String consActionType;
	private String consBizClass;
	private String consBizType;
	private Short consMasterFlag;
	private Integer consMasterId;
	private String consMasterNo;
	private Short consMergeFlag;
	private Integer consMergeId;
	private Integer consMergeNo;
	private String consRefNo;
	private String consContractNo;
	private String consSource;
	private Date consDate;
	private Integer consSalesRepId;
	private String consSalesRepName;
	private Integer consOperatorId;
	private String consOperatorName;
	private String consTradeContractNo;
	private String consCreditNo;
	private String consInsuranceFee;
	private Integer custId;
	private String custName;
	private String custSname;
	private String custContact;
	private String custTel;
	private String custFax;
	private Integer custSalesId;
	private String custSalesName;
	private Integer consOverseaAgency;
	private String consOverseaAgencyName;
	private String consShipper;
	private String consConsignee;
	private String consNotifyParty;
	private String consNotifyParty2;
	private String consFShipper;
	private String consFConsignee;
	private String consFNotifyParty;
	private Integer consPol;
	private String consPolEn;
	private String consReceiptPlace;
	private Integer consPod;
	private String consPodEn;
	private Integer consPot;
	private String consPotEn;
	private String consDeliveryPlace;
	private String consDestination;
	private String consTranCountry;
	private String consTradeCountry;
	private Integer fconHarbourId;
	private String consHarbour;
	private Integer consCargoOwner;
	private String consCargoOwnerName;
	private Integer consCfs;
	private String consCfsName;
	private Integer consWarehouse;
	private String consWarehouseContact;
	private String consWarehouseName;
	private String consWarehouseTel;
	private String consWarehouseAddress;
	private String consWarehouseRemarks;
	private Date consContainerLoadDate;
	private Integer consContainerCompany;
	private String consContainerCompanyName;
	private Integer consCustomsVendor;
	private String consCustomsVendorName;
	private Integer consInspectionVendor;
	private String consInspectionVendorName;
	private Integer consTrackVendor;
	private String consTrackVendorName;
	private String consTrackContact;
	private Date consTrackLoadDate;
	private String consTrackLoadAddress;
	private String consTrackRemarks;
	private String consTrackTel;	
	private Integer consDoAgency;
	private String consDoAgencyName;
	private Integer consBookingAgency;
	private String consBookingAgencyName;
	private String consBookingAgencySname;
	private Date consBookingDate;
	private String consBookingContractNo;
	private String consSoNo;
	private String consPrecarriage;
	private Integer consCarrier;
	private String consCarrierName;
	private Integer vessId;
	private String vessName;
	private String vessNameCn;
	private Integer voyaId;
	private String voyaName;
	private Date consEtd;
	private Date consEta;
	private Date consRecvDate;
	private Date consLoadDate;
	private Date consExpiryDate;
	private Date consDeliveryDate;
	private Date consSailDate;
	private Date consBlIssueDate;
	private String consMblNo;
	private String consHblNo;
	private String consScacCode;
	private String consContainerNo;
	private String consSealNo;
	private String consCargoDesc;
	private String consCargoMarks;
	private String consCargoPackages;
	private String consCargoNetWeight;
	private String consCargoGrossWeight;
	private String consCargoMeasurement;
	private String consCargoNameEn;
	private String consCargoNameCn;
	private String consCargoSpecial;
	private Integer consTotalPackages;
	private String consTotalPackagesInWord;
	private Double consTotalGrossWeight;
	private Double consTotalNetWeight;
	private Double consTotalMeasurement;
	private Integer consTotalContainers;
	private Double consTotalChargeWeight;
	private Integer blCargoPackages;
	private Double blCargoGrossWeight;
	private Double blCargoNetWeight;
	private Double blCargoMeasurement;
	private Integer consShippedPackages;
	private Double consShippedGrossWeight;
	private Double consShippedNetWeight;
	private Double consShippedMeasurement;
	private String cargBigFlag;
	private Double cargLength;
	private Double cargWidth;
	private Double cargHigh;
	private String cargReeterFlag;
	private Double cargTemperature;
	private String cargTemperatureUnit;
	private Double cargTemperatureLow;
	private Double cargTemperatureHigh;
	private Double cargHumidity;
	private String cargVentOutlet;
	private String cargDanagerFlag;
	private String cargDanagerClass;
	private String cargPollutionFlag;
	private String cargDanagerProperty;
	private String cargImdgPage;
	private String cargSubLabel;
	private String cargUnNo;
	private String cargFlashPoint;
	private String cargMfagNo;
	private String cargEmsNo;
	private String cargPkgGroup;
	private String cargEmgTel;
	private Short cargQuitFlag;
	private Short cargCudeType;
	private Integer unitId;
	private String unitCode;
	private Integer unitIdM;
	private String unitCodeM;
	private Integer consCustPackages;
	private Double consCustGrossWeight;
	private Double consCustMeasurement;
	private Double consCustChargeWeight;
	private Integer consContainers20;
	private Integer consContainers40;
	private Integer consContainers40h;
	private Integer consContainers45;
	private Integer consContainersTeu;
	private String consContainersInfo;
	private Integer packId;
	private String packName;
	private Integer coclId;
	private String coclName;
	private Integer caclId;
	private String caclName;
	private Integer trteId;
	private Integer trtyId;
	private Integer tranId;
	private String tranCode;
	private Integer tranIdCarrier;
	private String tranCodeCarrier;
	private Integer pateId;
	private String pateName;
	private Integer pateIdP;
	private String pateNameP;
	private Integer istyId;
	private Integer shliId;
	private String shliCode;
	private Integer swithId;
	private String consBlIssuePlace;
	private String consBlRemarks;
	private String consPaidAt;
	private Short consTransFlag;
	private Short consPartialFlag;
	private Short consFumigateFlag;
	private Short consQuarantineFlag;
	private Short consTransferringFlag;
	private String consOriginalBlNum;
	private Integer consCopyBlNum;
	private String consRemarks;
	private String consBookRemarks;
	private String consServiceRequired;
	private String consServiceSpec;
	private Integer consBVesselId;
	private String consBVessel;
	private Integer consBVoyageId;
	private String consBVoyage;
	private Date consBEtd;
	private Date consBEta;
	private Integer consBPol;
	private String consBPolEn;
	private String consBCountryD;
	private String consBCountryT;
	private Integer consBPod;
	private String consBPodEn;
	private Integer consBPot;
	private String consBPotEn;
	private String consBShipper;
	private String consBConsignee;
	private String consBBookingNo;
	private Date consBBookingDate;
	private Integer consBCarrierId;
	private String consBCarrier;
	private String consBHarbour;
	private Short consBHkFlag;
	private Short consBInternationalFlag;
	private String consBRemarks;
	private String consLoadingListNo;
	private String consSplitNo;
	private String consShipCode;
	private String consSplitContact;
	private String consSplitTel;
	private String consSplitConsignee;
	private String consSplitConsigneeTel;
	private Date consSplitCreateTime;
	private Integer consSplitCreateBy;
	private Short consStatus;
	private Short consStatusBooking;
	private Short consStatusSwitchBl;
	private Short consStatusClearance;
	private Short consStatusSplit;
	private Short consStatusInsp;
	private Short consStatusCont;
	private Short consStatusCarg;
	private Short consStatusMbl;
	private Short consStatusHbl;
	private Short consStatusBBook;
	private Short consStatusDepa;
	private Short consStatusDocs;
	private Short consStatusExp;
	private Short consStatusAr;
	private Short consStatusAp;
	private Date consArWriteOffDate;
	private Date consApWriteOffDate;
	private Short consStatusInvoR;
	private Short consStatusInvoP;
	private Date consInvoRDate;
	private Date consInvoPDate;
	private Short consStatusAud;
	private Short consStatusInCy;
	private Short consStatusInCfs;
	private Short consStatusOnBoard;
	private Short consStatusEir;
	private Short consStatusSendCont;
	private Short consStatusLock;
	private Short consRebookFlag;
	private String consChargeRemarks;
	private String consNotOnBoardReason;
	private String consNotOnBoardRemarks;
	private String consBookingDeclareNoUs;
	private Short consUsFullShip;
	private Short consStatusSettlement;
	private Date consSettlementDate;
	private String consCancelReason;
	private String consBookingCancelReason;
	private String consPackingListNo;
	private Integer fconId;
	private Date fconShipDateF;
	private Date fconShipDateT;
	private Date voyaShipDateF;
	private Date voyaShipDateT;
	private Integer loliId;
	private Integer deptId;
	private Short consExternalFlag;
	private Short consCudeType;
	private Short consInvoiceFlag;
	private Short consInspectionFlag;
	private Short consWsFlag;
	private Short consWsAcceptFlag;
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

	private String consCompany;
	private String consVerificationNo;
	private String consManualNo;	
	private String consCustomRegNo;
	private String consFreeTableNo;
	private String cargHsCode;
	private Double consTax;
	private Double consReliefTariff;
	private Double consReliefVat;
	private Double consMargin;
	
	private Date consCloseDate;
	private Date consManualExpirationDate;
	private Date consAuditDate;
	private Date consAuditDate2;	
	private Date consCustomRegDate;
	private Date consBusinessLicenseDate;
	private Date consOrgDate;
	private Date consCustomsDeclearDate;
	
	private Short consEportReg;
	private Short consInspReg;
	
	private String consCustomsDeclearationNo;
	private Short consRequireVerification;
	private Short consRequireRelief;
	
	private String consLoadFactory;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CONS_ID", unique = true, nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CONS_NO", unique = true, nullable = false, length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_TYPE", nullable = false, length = 1)
	public String getConsType() {
		return this.consType;
	}

	public void setConsType(String consType) {
		this.consType = consType;
	}

	@Column(name = "CONS_SHIP_TYPE", length = 4)
	public String getConsShipType() {
		return this.consShipType;
	}

	public void setConsShipType(String consShipType) {
		this.consShipType = consShipType;
	}

	@Column(name = "CONS_LCL_TYPE", length = 1)
	public String getConsLclType() {
		return this.consLclType;
	}

	public void setConsLclType(String consLclType) {
		this.consLclType = consLclType;
	}

	@Column(name = "CONS_ACTION_TYPE", length = 1)
	public String getConsActionType() {
		return this.consActionType;
	}

	public void setConsActionType(String consActionType) {
		this.consActionType = consActionType;
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

	@Column(name = "CONS_MASTER_FLAG")
	public Short getConsMasterFlag() {
		return this.consMasterFlag;
	}

	public void setConsMasterFlag(Short consMasterFlag) {
		this.consMasterFlag = consMasterFlag;
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

	@Column(name = "CONS_MERGE_FLAG")
	public Short getConsMergeFlag() {
		return this.consMergeFlag;
	}

	public void setConsMergeFlag(Short consMergeFlag) {
		this.consMergeFlag = consMergeFlag;
	}

	@Column(name = "CONS_MERGE_ID")
	public Integer getConsMergeId() {
		return this.consMergeId;
	}

	public void setConsMergeId(Integer consMergeId) {
		this.consMergeId = consMergeId;
	}

	@Column(name = "CONS_MERGE_NO")
	public Integer getConsMergeNo() {
		return this.consMergeNo;
	}

	public void setConsMergeNo(Integer consMergeNo) {
		this.consMergeNo = consMergeNo;
	}

	@Column(name = "CONS_REF_NO", length = 32)
	public String getConsRefNo() {
		return this.consRefNo;
	}

	public void setConsRefNo(String consRefNo) {
		this.consRefNo = consRefNo;
	}

	@Column(name = "CONS_CONTRACT_NO", length = 32)
	public String getConsContractNo() {
		return this.consContractNo;
	}

	public void setConsContractNo(String consContractNo) {
		this.consContractNo = consContractNo;
	}

	@Column(name = "CONS_SOURCE", length = 1)
	public String getConsSource() {
		return this.consSource;
	}

	public void setConsSource(String consSource) {
		this.consSource = consSource;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_DATE", length = 10)
	public Date getConsDate() {
		return this.consDate;
	}

	public void setConsDate(Date consDate) {
		this.consDate = consDate;
	}

	@Column(name = "CONS_SALES_REP_ID")
	public Integer getConsSalesRepId() {
		return this.consSalesRepId;
	}

	public void setConsSalesRepId(Integer consSalesRepId) {
		this.consSalesRepId = consSalesRepId;
	}

	@Column(name = "CONS_SALES_REP_NAME", length = 32)
	public String getConsSalesRepName() {
		return this.consSalesRepName;
	}

	public void setConsSalesRepName(String consSalesRepName) {
		this.consSalesRepName = consSalesRepName;
	}

	@Column(name = "CONS_OPERATOR_ID")
	public Integer getConsOperatorId() {
		return this.consOperatorId;
	}

	public void setConsOperatorId(Integer consOperatorId) {
		this.consOperatorId = consOperatorId;
	}

	@Column(name = "CONS_OPERATOR_NAME", length = 32)
	public String getConsOperatorName() {
		return this.consOperatorName;
	}

	public void setConsOperatorName(String consOperatorName) {
		this.consOperatorName = consOperatorName;
	}

	@Column(name = "CONS_TRADE_CONTRACT_NO", length = 32)
	public String getConsTradeContractNo() {
		return this.consTradeContractNo;
	}

	public void setConsTradeContractNo(String consTradeContractNo) {
		this.consTradeContractNo = consTradeContractNo;
	}

	@Column(name = "CONS_CREDIT_NO", length = 32)
	public String getConsCreditNo() {
		return this.consCreditNo;
	}

	public void setConsCreditNo(String consCreditNo) {
		this.consCreditNo = consCreditNo;
	}

	@Column(name = "CONS_INSURANCE_FEE", length = 64)
	public String getConsInsuranceFee() {
		return this.consInsuranceFee;
	}

	public void setConsInsuranceFee(String consInsuranceFee) {
		this.consInsuranceFee = consInsuranceFee;
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

	@Column(name = "CUST_CONTACT", length = 32)
	public String getCustContact() {
		return this.custContact;
	}

	public void setCustContact(String custContact) {
		this.custContact = custContact;
	}

	@Column(name = "CUST_TEL", length = 32)
	public String getCustTel() {
		return this.custTel;
	}

	public void setCustTel(String custTel) {
		this.custTel = custTel;
	}

	@Column(name = "CUST_FAX", length = 32)
	public String getCustFax() {
		return this.custFax;
	}

	public void setCustFax(String custFax) {
		this.custFax = custFax;
	}

	@Column(name = "CUST_SALES_ID")
	public Integer getCustSalesId() {
		return this.custSalesId;
	}

	public void setCustSalesId(Integer custSalesId) {
		this.custSalesId = custSalesId;
	}

	@Column(name = "CUST_SALES_NAME", length = 32)
	public String getCustSalesName() {
		return this.custSalesName;
	}

	public void setCustSalesName(String custSalesName) {
		this.custSalesName = custSalesName;
	}

	@Column(name = "CONS_OVERSEA_AGENCY")
	public Integer getConsOverseaAgency() {
		return this.consOverseaAgency;
	}

	public void setConsOverseaAgency(Integer consOverseaAgency) {
		this.consOverseaAgency = consOverseaAgency;
	}

	@Column(name = "CONS_OVERSEA_AGENCY_NAME", length = 64)
	public String getConsOverseaAgencyName() {
		return this.consOverseaAgencyName;
	}

	public void setConsOverseaAgencyName(String consOverseaAgencyName) {
		this.consOverseaAgencyName = consOverseaAgencyName;
	}

	@Column(name = "CONS_SHIPPER", length = 500)
	public String getConsShipper() {
		return this.consShipper;
	}

	public void setConsShipper(String consShipper) {
		this.consShipper = consShipper;
	}

	@Column(name = "CONS_CONSIGNEE", length = 500)
	public String getConsConsignee() {
		return this.consConsignee;
	}

	public void setConsConsignee(String consConsignee) {
		this.consConsignee = consConsignee;
	}

	@Column(name = "CONS_NOTIFY_PARTY", length = 500)
	public String getConsNotifyParty() {
		return this.consNotifyParty;
	}

	public void setConsNotifyParty(String consNotifyParty) {
		this.consNotifyParty = consNotifyParty;
	}

	@Column(name = "CONS_NOTIFY_PARTY2", length = 500)
	public String getConsNotifyParty2() {
		return this.consNotifyParty2;
	}

	public void setConsNotifyParty2(String consNotifyParty2) {
		this.consNotifyParty2 = consNotifyParty2;
	}

	@Column(name = "CONS_F_SHIPPER", length = 500)
	public String getConsFShipper() {
		return this.consFShipper;
	}

	public void setConsFShipper(String consFShipper) {
		this.consFShipper = consFShipper;
	}

	@Column(name = "CONS_F_CONSIGNEE", length = 500)
	public String getConsFConsignee() {
		return this.consFConsignee;
	}

	public void setConsFConsignee(String consFConsignee) {
		this.consFConsignee = consFConsignee;
	}

	@Column(name = "CONS_F_NOTIFY_PARTY", length = 500)
	public String getConsFNotifyParty() {
		return this.consFNotifyParty;
	}

	public void setConsFNotifyParty(String consFNotifyParty) {
		this.consFNotifyParty = consFNotifyParty;
	}

	@Column(name = "CONS_POL")
	public Integer getConsPol() {
		return this.consPol;
	}

	public void setConsPol(Integer consPol) {
		this.consPol = consPol;
	}

	@Column(name = "CONS_POL_EN", length = 64)
	public String getConsPolEn() {
		return this.consPolEn;
	}

	public void setConsPolEn(String consPolEn) {
		this.consPolEn = consPolEn;
	}

	@Column(name = "CONS_RECEIPT_PLACE", length = 64)
	public String getConsReceiptPlace() {
		return this.consReceiptPlace;
	}

	public void setConsReceiptPlace(String consReceiptPlace) {
		this.consReceiptPlace = consReceiptPlace;
	}

	@Column(name = "CONS_POD")
	public Integer getConsPod() {
		return this.consPod;
	}

	public void setConsPod(Integer consPod) {
		this.consPod = consPod;
	}

	@Column(name = "CONS_POD_EN", length = 64)
	public String getConsPodEn() {
		return this.consPodEn;
	}

	public void setConsPodEn(String consPodEn) {
		this.consPodEn = consPodEn;
	}

	@Column(name = "CONS_POT")
	public Integer getConsPot() {
		return this.consPot;
	}

	public void setConsPot(Integer consPot) {
		this.consPot = consPot;
	}

	@Column(name = "CONS_POT_EN", length = 64)
	public String getConsPotEn() {
		return this.consPotEn;
	}

	public void setConsPotEn(String consPotEn) {
		this.consPotEn = consPotEn;
	}

	@Column(name = "CONS_DELIVERY_PLACE", length = 64)
	public String getConsDeliveryPlace() {
		return this.consDeliveryPlace;
	}

	public void setConsDeliveryPlace(String consDeliveryPlace) {
		this.consDeliveryPlace = consDeliveryPlace;
	}

	@Column(name = "CONS_DESTINATION", length = 64)
	public String getConsDestination() {
		return this.consDestination;
	}

	public void setConsDestination(String consDestination) {
		this.consDestination = consDestination;
	}

	@Column(name = "CONS_TRAN_COUNTRY", length = 2)
	public String getConsTranCountry() {
		return this.consTranCountry;
	}

	public void setConsTranCountry(String consTranCountry) {
		this.consTranCountry = consTranCountry;
	}

	@Column(name = "CONS_TRADE_COUNTRY", length = 2)
	public String getConsTradeCountry() {
		return this.consTradeCountry;
	}

	public void setConsTradeCountry(String consTradeCountry) {
		this.consTradeCountry = consTradeCountry;
	}

	@Column(name = "FCON_HARBOUR_ID")
	public Integer getFconHarbourId() {
		return this.fconHarbourId;
	}

	public void setFconHarbourId(Integer fconHarbourId) {
		this.fconHarbourId = fconHarbourId;
	}

	@Column(name = "CONS_HARBOUR", length = 64)
	public String getConsHarbour() {
		return this.consHarbour;
	}

	public void setConsHarbour(String consHarbour) {
		this.consHarbour = consHarbour;
	}

	@Column(name = "CONS_CARGO_OWNER")
	public Integer getConsCargoOwner() {
		return this.consCargoOwner;
	}

	public void setConsCargoOwner(Integer consCargoOwner) {
		this.consCargoOwner = consCargoOwner;
	}

	@Column(name = "CONS_CARGO_OWNER_NAME", length = 64)
	public String getConsCargoOwnerName() {
		return this.consCargoOwnerName;
	}

	public void setConsCargoOwnerName(String consCargoOwnerName) {
		this.consCargoOwnerName = consCargoOwnerName;
	}

	@Column(name = "CONS_CFS")
	public Integer getConsCfs() {
		return this.consCfs;
	}

	public void setConsCfs(Integer consCfs) {
		this.consCfs = consCfs;
	}

	@Column(name = "CONS_CFS_NAME", length = 64)
	public String getConsCfsName() {
		return this.consCfsName;
	}

	public void setConsCfsName(String consCfsName) {
		this.consCfsName = consCfsName;
	}

	@Column(name = "CONS_WAREHOUSE")
	public Integer getConsWarehouse() {
		return this.consWarehouse;
	}

	public void setConsWarehouse(Integer consWarehouse) {
		this.consWarehouse = consWarehouse;
	}

	@Column(name = "CONS_WAREHOUSE_CONTACT", length = 32)
	public String getConsWarehouseContact() {
		return this.consWarehouseContact;
	}

	public void setConsWarehouseContact(String consWarehouseContact) {
		this.consWarehouseContact = consWarehouseContact;
	}

	@Column(name = "CONS_WAREHOUSE_NAME", length = 64)
	public String getConsWarehouseName() {
		return this.consWarehouseName;
	}

	public void setConsWarehouseName(String consWarehouseName) {
		this.consWarehouseName = consWarehouseName;
	}

	@Column(name = "CONS_WAREHOUSE_TEL", length = 32)
	public String getConsWarehouseTel() {
		return this.consWarehouseTel;
	}

	public void setConsWarehouseTel(String consWarehouseTel) {
		this.consWarehouseTel = consWarehouseTel;
	}

	@Column(name = "CONS_WAREHOUSE_ADDRESS", length = 200)
	public String getConsWarehouseAddress() {
		return this.consWarehouseAddress;
	}

	public void setConsWarehouseAddress(String consWarehouseAddress) {
		this.consWarehouseAddress = consWarehouseAddress;
	}

	@Column(name = "CONS_WAREHOUSE_REMARKS", length = 500)
	public String getConsWarehouseRemarks() {
		return this.consWarehouseRemarks;
	}

	public void setConsWarehouseRemarks(String consWarehouseRemarks) {
		this.consWarehouseRemarks = consWarehouseRemarks;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_CONTAINER_LOAD_DATE", length = 10)
	public Date getConsContainerLoadDate() {
		return this.consContainerLoadDate;
	}

	public void setConsContainerLoadDate(Date consContainerLoadDate) {
		this.consContainerLoadDate = consContainerLoadDate;
	}

	@Column(name = "CONS_CONTAINER_COMPANY")
	public Integer getConsContainerCompany() {
		return this.consContainerCompany;
	}

	public void setConsContainerCompany(Integer consContainerCompany) {
		this.consContainerCompany = consContainerCompany;
	}

	@Column(name = "CONS_CONTAINER_COMPANY_NAME", length = 64)
	public String getConsContainerCompanyName() {
		return this.consContainerCompanyName;
	}

	public void setConsContainerCompanyName(String consContainerCompanyName) {
		this.consContainerCompanyName = consContainerCompanyName;
	}

	@Column(name = "CONS_CUSTOMS_VENDOR")
	public Integer getConsCustomsVendor() {
		return this.consCustomsVendor;
	}

	public void setConsCustomsVendor(Integer consCustomsVendor) {
		this.consCustomsVendor = consCustomsVendor;
	}

	@Column(name = "CONS_CUSTOMS_VENDOR_NAME", length = 64)
	public String getConsCustomsVendorName() {
		return this.consCustomsVendorName;
	}

	public void setConsCustomsVendorName(String consCustomsVendorName) {
		this.consCustomsVendorName = consCustomsVendorName;
	}

	@Column(name = "CONS_INSPECTION_VENDOR")
	public Integer getConsInspectionVendor() {
		return this.consInspectionVendor;
	}

	public void setConsInspectionVendor(Integer consInspectionVendor) {
		this.consInspectionVendor = consInspectionVendor;
	}

	@Column(name = "CONS_INSPECTION_VENDOR_NAME", length = 64)
	public String getConsInspectionVendorName() {
		return this.consInspectionVendorName;
	}

	public void setConsInspectionVendorName(String consInspectionVendorName) {
		this.consInspectionVendorName = consInspectionVendorName;
	}

	@Column(name = "CONS_TRACK_VENDOR")
	public Integer getConsTrackVendor() {
		return this.consTrackVendor;
	}

	public void setConsTrackVendor(Integer consTrackVendor) {
		this.consTrackVendor = consTrackVendor;
	}

	@Column(name = "CONS_TRACK_VENDOR_NAME", length = 64)
	public String getConsTrackVendorName() {
		return this.consTrackVendorName;
	}

	public void setConsTrackVendorName(String consTrackVendorName) {
		this.consTrackVendorName = consTrackVendorName;
	}

	@Column(name = "CONS_TRACK_CONTACT", length = 32)
	public String getConsTrackContact() {
		return this.consTrackContact;
	}

	public void setConsTrackContact(String consTrackContact) {
		this.consTrackContact = consTrackContact;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_TRACK_LOAD_DATE", length = 10)
	public Date getConsTrackLoadDate() {
		return this.consTrackLoadDate;
	}

	public void setConsTrackLoadDate(Date consTrackLoadDate) {
		this.consTrackLoadDate = consTrackLoadDate;
	}

	@Column(name = "CONS_TRACK_LOAD_ADDRESS", length = 200)
	public String getConsTrackLoadAddress() {
		return this.consTrackLoadAddress;
	}

	public void setConsTrackLoadAddress(String consTrackLoadAddress) {
		this.consTrackLoadAddress = consTrackLoadAddress;
	}

	@Column(name = "CONS_TRACK_REMARKS", length = 500)
	public String getConsTrackRemarks() {
		return this.consTrackRemarks;
	}

	public void setConsTrackRemarks(String consTrackRemarks) {
		this.consTrackRemarks = consTrackRemarks;
	}

	@Column(name = "CONS_TRACK_TEL", length = 32)
	public String getConsTrackTel() {
		return this.consTrackTel;
	}

	public void setConsTrackTel(String consTrackTel) {
		this.consTrackTel = consTrackTel;
	}

	@Column(name = "CONS_DO_AGENCY")
	public Integer getConsDoAgency() {
		return this.consDoAgency;
	}

	public void setConsDoAgency(Integer consDoAgency) {
		this.consDoAgency = consDoAgency;
	}

	@Column(name = "CONS_DO_AGENCY_NAME", length = 64)
	public String getConsDoAgencyName() {
		return this.consDoAgencyName;
	}

	public void setConsDoAgencyName(String consDoAgencyName) {
		this.consDoAgencyName = consDoAgencyName;
	}

	@Column(name = "CONS_BOOKING_AGENCY")
	public Integer getConsBookingAgency() {
		return this.consBookingAgency;
	}

	public void setConsBookingAgency(Integer consBookingAgency) {
		this.consBookingAgency = consBookingAgency;
	}

	@Column(name = "CONS_BOOKING_AGENCY_NAME", length = 64)
	public String getConsBookingAgencyName() {
		return this.consBookingAgencyName;
	}

	public void setConsBookingAgencyName(String consBookingAgencyName) {
		this.consBookingAgencyName = consBookingAgencyName;
	}

	@Column(name = "CONS_BOOKING_AGENCY_SNAME", length = 64)
	public String getConsBookingAgencySname() {
		return this.consBookingAgencySname;
	}

	public void setConsBookingAgencySname(String consBookingAgencySname) {
		this.consBookingAgencySname = consBookingAgencySname;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_BOOKING_DATE", length = 10)
	public Date getConsBookingDate() {
		return this.consBookingDate;
	}

	public void setConsBookingDate(Date consBookingDate) {
		this.consBookingDate = consBookingDate;
	}

	@Column(name = "CONS_BOOKING_CONTRACT_NO", length = 32)
	public String getConsBookingContractNo() {
		return this.consBookingContractNo;
	}

	public void setConsBookingContractNo(String consBookingContractNo) {
		this.consBookingContractNo = consBookingContractNo;
	}

	@Column(name = "CONS_SO_NO", length = 32)
	public String getConsSoNo() {
		return this.consSoNo;
	}

	public void setConsSoNo(String consSoNo) {
		this.consSoNo = consSoNo;
	}

	@Column(name = "CONS_PRECARRIAGE", length = 32)
	public String getConsPrecarriage() {
		return this.consPrecarriage;
	}

	public void setConsPrecarriage(String consPrecarriage) {
		this.consPrecarriage = consPrecarriage;
	}

	@Column(name = "CONS_CARRIER")
	public Integer getConsCarrier() {
		return this.consCarrier;
	}

	public void setConsCarrier(Integer consCarrier) {
		this.consCarrier = consCarrier;
	}

	@Column(name = "CONS_CARRIER_NAME", length = 64)
	public String getConsCarrierName() {
		return this.consCarrierName;
	}

	public void setConsCarrierName(String consCarrierName) {
		this.consCarrierName = consCarrierName;
	}

	@Column(name = "VESS_ID")
	public Integer getVessId() {
		return this.vessId;
	}

	public void setVessId(Integer vessId) {
		this.vessId = vessId;
	}

	@Column(name = "VESS_NAME", length = 64)
	public String getVessName() {
		return this.vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Column(name = "VESS_NAME_CN", length = 64)
	public String getVessNameCn() {
		return this.vessNameCn;
	}

	public void setVessNameCn(String vessNameCn) {
		this.vessNameCn = vessNameCn;
	}

	@Column(name = "VOYA_ID")
	public Integer getVoyaId() {
		return this.voyaId;
	}

	public void setVoyaId(Integer voyaId) {
		this.voyaId = voyaId;
	}

	@Column(name = "VOYA_NAME", length = 32)
	public String getVoyaName() {
		return this.voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_ETD", length = 10)
	public Date getConsEtd() {
		return this.consEtd;
	}

	public void setConsEtd(Date consEtd) {
		this.consEtd = consEtd;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_ETA", length = 10)
	public Date getConsEta() {
		return this.consEta;
	}

	public void setConsEta(Date consEta) {
		this.consEta = consEta;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_RECV_DATE", length = 10)
	public Date getConsRecvDate() {
		return this.consRecvDate;
	}

	public void setConsRecvDate(Date consRecvDate) {
		this.consRecvDate = consRecvDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_LOAD_DATE", length = 10)
	public Date getConsLoadDate() {
		return this.consLoadDate;
	}

	public void setConsLoadDate(Date consLoadDate) {
		this.consLoadDate = consLoadDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_EXPIRY_DATE", length = 10)
	public Date getConsExpiryDate() {
		return this.consExpiryDate;
	}

	public void setConsExpiryDate(Date consExpiryDate) {
		this.consExpiryDate = consExpiryDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_DELIVERY_DATE", length = 10)
	public Date getConsDeliveryDate() {
		return this.consDeliveryDate;
	}

	public void setConsDeliveryDate(Date consDeliveryDate) {
		this.consDeliveryDate = consDeliveryDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_SAIL_DATE", length = 10)
	public Date getConsSailDate() {
		return this.consSailDate;
	}

	public void setConsSailDate(Date consSailDate) {
		this.consSailDate = consSailDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_BL_ISSUE_DATE", length = 10)
	public Date getConsBlIssueDate() {
		return this.consBlIssueDate;
	}

	public void setConsBlIssueDate(Date consBlIssueDate) {
		this.consBlIssueDate = consBlIssueDate;
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

	@Column(name = "CONS_SCAC_CODE", length = 32)
	public String getConsScacCode() {
		return this.consScacCode;
	}

	public void setConsScacCode(String consScacCode) {
		this.consScacCode = consScacCode;
	}

	@Column(name = "CONS_CONTAINER_NO", length = 500)
	public String getConsContainerNo() {
		return this.consContainerNo;
	}

	public void setConsContainerNo(String consContainerNo) {
		this.consContainerNo = consContainerNo;
	}

	@Column(name = "CONS_SEAL_NO", length = 500)
	public String getConsSealNo() {
		return this.consSealNo;
	}

	public void setConsSealNo(String consSealNo) {
		this.consSealNo = consSealNo;
	}

	@Column(name = "CONS_CARGO_DESC", length = 65535)
	public String getConsCargoDesc() {
		return this.consCargoDesc;
	}

	public void setConsCargoDesc(String consCargoDesc) {
		this.consCargoDesc = consCargoDesc;
	}

	@Column(name = "CONS_CARGO_MARKS", length = 1000)
	public String getConsCargoMarks() {
		return this.consCargoMarks;
	}

	public void setConsCargoMarks(String consCargoMarks) {
		this.consCargoMarks = consCargoMarks;
	}

	@Column(name = "CONS_CARGO_PACKAGES", length = 500)
	public String getConsCargoPackages() {
		return this.consCargoPackages;
	}

	public void setConsCargoPackages(String consCargoPackages) {
		this.consCargoPackages = consCargoPackages;
	}

	@Column(name = "CONS_CARGO_NET_WEIGHT", length = 500)
	public String getConsCargoNetWeight() {
		return this.consCargoNetWeight;
	}

	public void setConsCargoNetWeight(String consCargoNetWeight) {
		this.consCargoNetWeight = consCargoNetWeight;
	}

	@Column(name = "CONS_CARGO_GROSS_WEIGHT", length = 500)
	public String getConsCargoGrossWeight() {
		return this.consCargoGrossWeight;
	}

	public void setConsCargoGrossWeight(String consCargoGrossWeight) {
		this.consCargoGrossWeight = consCargoGrossWeight;
	}

	@Column(name = "CONS_CARGO_MEASUREMENT", length = 500)
	public String getConsCargoMeasurement() {
		return this.consCargoMeasurement;
	}

	public void setConsCargoMeasurement(String consCargoMeasurement) {
		this.consCargoMeasurement = consCargoMeasurement;
	}

	@Column(name = "CONS_CARGO_NAME_EN", length = 1000)
	public String getConsCargoNameEn() {
		return this.consCargoNameEn;
	}

	public void setConsCargoNameEn(String consCargoNameEn) {
		this.consCargoNameEn = consCargoNameEn;
	}

	@Column(name = "CONS_CARGO_NAME_CN", length = 64)
	public String getConsCargoNameCn() {
		return this.consCargoNameCn;
	}

	public void setConsCargoNameCn(String consCargoNameCn) {
		this.consCargoNameCn = consCargoNameCn;
	}

	@Column(name = "CONS_CARGO_SPECIAL", length = 500)
	public String getConsCargoSpecial() {
		return this.consCargoSpecial;
	}

	public void setConsCargoSpecial(String consCargoSpecial) {
		this.consCargoSpecial = consCargoSpecial;
	}

	@Column(name = "CONS_TOTAL_PACKAGES")
	public Integer getConsTotalPackages() {
		return this.consTotalPackages;
	}

	public void setConsTotalPackages(Integer consTotalPackages) {
		this.consTotalPackages = consTotalPackages;
	}

	@Column(name = "CONS_TOTAL_PACKAGES_IN_WORD", length = 500)
	public String getConsTotalPackagesInWord() {
		return this.consTotalPackagesInWord;
	}

	public void setConsTotalPackagesInWord(String consTotalPackagesInWord) {
		this.consTotalPackagesInWord = consTotalPackagesInWord;
	}

	@Column(name = "CONS_TOTAL_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getConsTotalGrossWeight() {
		return this.consTotalGrossWeight;
	}

	public void setConsTotalGrossWeight(Double consTotalGrossWeight) {
		this.consTotalGrossWeight = consTotalGrossWeight;
	}

	@Column(name = "CONS_TOTAL_NET_WEIGHT", precision = 14, scale = 6)
	public Double getConsTotalNetWeight() {
		return this.consTotalNetWeight;
	}

	public void setConsTotalNetWeight(Double consTotalNetWeight) {
		this.consTotalNetWeight = consTotalNetWeight;
	}

	@Column(name = "CONS_TOTAL_MEASUREMENT", precision = 14, scale = 6)
	public Double getConsTotalMeasurement() {
		return this.consTotalMeasurement;
	}

	public void setConsTotalMeasurement(Double consTotalMeasurement) {
		this.consTotalMeasurement = consTotalMeasurement;
	}

	@Column(name = "CONS_TOTAL_CONTAINERS")
	public Integer getConsTotalContainers() {
		return this.consTotalContainers;
	}

	public void setConsTotalContainers(Integer consTotalContainers) {
		this.consTotalContainers = consTotalContainers;
	}

	@Column(name = "CONS_TOTAL_CHARGE_WEIGHT", precision = 14, scale = 6)
	public Double getConsTotalChargeWeight() {
		return this.consTotalChargeWeight;
	}

	public void setConsTotalChargeWeight(Double consTotalChargeWeight) {
		this.consTotalChargeWeight = consTotalChargeWeight;
	}

	@Column(name = "BL_CARGO_PACKAGES")
	public Integer getBlCargoPackages() {
		return blCargoPackages;
	}

	public void setBlCargoPackages(Integer blCargoPackages) {
		this.blCargoPackages = blCargoPackages;
	}

	@Column(name = "BL_CARGO_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getBlCargoGrossWeight() {
		return blCargoGrossWeight;
	}

	public void setBlCargoGrossWeight(Double blCargoGrossWeight) {
		this.blCargoGrossWeight = blCargoGrossWeight;
	}

	@Column(name = "BL_CARGO_NET_WEIGHT", precision = 14, scale = 6)
	public Double getBlCargoNetWeight() {
		return blCargoNetWeight;
	}

	public void setBlCargoNetWeight(Double blCargoNetWeight) {
		this.blCargoNetWeight = blCargoNetWeight;
	}

	@Column(name = "BL_CARGO_MEASUREMENT", precision = 14, scale = 6)
	public Double getBlCargoMeasurement() {
		return blCargoMeasurement;
	}

	public void setBlCargoMeasurement(Double blCargoMeasurement) {
		this.blCargoMeasurement = blCargoMeasurement;
	}

	@Column(name = "CONS_SHIPPED_PACKAGES")
	public Integer getConsShippedPackages() {
		return consShippedPackages;
	}

	public void setConsShippedPackages(Integer consShippedPackages) {
		this.consShippedPackages = consShippedPackages;
	}

	@Column(name = "CONS_SHIPPED_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getConsShippedGrossWeight() {
		return consShippedGrossWeight;
	}

	public void setConsShippedGrossWeight(Double consShippedGrossWeight) {
		this.consShippedGrossWeight = consShippedGrossWeight;
	}

	@Column(name = "CONS_SHIPPED_NET_WEIGHT", precision = 14, scale = 6)
	public Double getConsShippedNetWeight() {
		return consShippedNetWeight;
	}

	public void setConsShippedNetWeight(Double consShippedNetWeight) {
		this.consShippedNetWeight = consShippedNetWeight;
	}

	@Column(name = "CONS_SHIPPED_MEASUREMENT", precision = 14, scale = 6)
	public Double getConsShippedMeasurement() {
		return consShippedMeasurement;
	}

	public void setConsShippedMeasurement(Double consShippedMeasurement) {
		this.consShippedMeasurement = consShippedMeasurement;
	}

	@Column(name = "CARG_BIG_FLAG", length = 1)
	public String getCargBigFlag() {
		return this.cargBigFlag;
	}

	public void setCargBigFlag(String cargBigFlag) {
		this.cargBigFlag = cargBigFlag;
	}

	@Column(name = "CARG_LENGTH", precision = 9)
	public Double getCargLength() {
		return this.cargLength;
	}

	public void setCargLength(Double cargLength) {
		this.cargLength = cargLength;
	}

	@Column(name = "CARG_WIDTH", precision = 9)
	public Double getCargWidth() {
		return this.cargWidth;
	}

	public void setCargWidth(Double cargWidth) {
		this.cargWidth = cargWidth;
	}

	@Column(name = "CARG_HIGH", precision = 9)
	public Double getCargHigh() {
		return this.cargHigh;
	}

	public void setCargHigh(Double cargHigh) {
		this.cargHigh = cargHigh;
	}

	@Column(name = "CARG_REETER_FLAG", length = 1)
	public String getCargReeterFlag() {
		return this.cargReeterFlag;
	}

	public void setCargReeterFlag(String cargReeterFlag) {
		this.cargReeterFlag = cargReeterFlag;
	}

	@Column(name = "CARG_TEMPERATURE", precision = 9)
	public Double getCargTemperature() {
		return this.cargTemperature;
	}

	public void setCargTemperature(Double cargTemperature) {
		this.cargTemperature = cargTemperature;
	}

	@Column(name = "CARG_TEMPERATURE_UNIT", length = 1)
	public String getCargTemperatureUnit() {
		return this.cargTemperatureUnit;
	}

	public void setCargTemperatureUnit(String cargTemperatureUnit) {
		this.cargTemperatureUnit = cargTemperatureUnit;
	}

	@Column(name = "CARG_TEMPERATURE_LOW", precision = 9)
	public Double getCargTemperatureLow() {
		return this.cargTemperatureLow;
	}

	public void setCargTemperatureLow(Double cargTemperatureLow) {
		this.cargTemperatureLow = cargTemperatureLow;
	}

	@Column(name = "CARG_TEMPERATURE_HIGH", precision = 9)
	public Double getCargTemperatureHigh() {
		return this.cargTemperatureHigh;
	}

	public void setCargTemperatureHigh(Double cargTemperatureHigh) {
		this.cargTemperatureHigh = cargTemperatureHigh;
	}

	@Column(name = "CARG_HUMIDITY", precision = 9)
	public Double getCargHumidity() {
		return this.cargHumidity;
	}

	public void setCargHumidity(Double cargHumidity) {
		this.cargHumidity = cargHumidity;
	}

	@Column(name = "CARG_VENT_OUTLET", length = 64)
	public String getCargVentOutlet() {
		return this.cargVentOutlet;
	}

	public void setCargVentOutlet(String cargVentOutlet) {
		this.cargVentOutlet = cargVentOutlet;
	}

	@Column(name = "CARG_DANAGER_FLAG", length = 1)
	public String getCargDanagerFlag() {
		return this.cargDanagerFlag;
	}

	public void setCargDanagerFlag(String cargDanagerFlag) {
		this.cargDanagerFlag = cargDanagerFlag;
	}

	@Column(name = "CARG_DANAGER_CLASS", length = 16)
	public String getCargDanagerClass() {
		return this.cargDanagerClass;
	}

	public void setCargDanagerClass(String cargDanagerClass) {
		this.cargDanagerClass = cargDanagerClass;
	}

	@Column(name = "CARG_POLLUTION_FLAG", length = 1)
	public String getCargPollutionFlag() {
		return this.cargPollutionFlag;
	}

	public void setCargPollutionFlag(String cargPollutionFlag) {
		this.cargPollutionFlag = cargPollutionFlag;
	}

	@Column(name = "CARG_DANAGER_PROPERTY", length = 32)
	public String getCargDanagerProperty() {
		return this.cargDanagerProperty;
	}

	public void setCargDanagerProperty(String cargDanagerProperty) {
		this.cargDanagerProperty = cargDanagerProperty;
	}

	@Column(name = "CARG_IMDG_PAGE", length = 32)
	public String getCargImdgPage() {
		return this.cargImdgPage;
	}

	public void setCargImdgPage(String cargImdgPage) {
		this.cargImdgPage = cargImdgPage;
	}

	@Column(name = "CARG_SUB_LABEL", length = 32)
	public String getCargSubLabel() {
		return this.cargSubLabel;
	}

	public void setCargSubLabel(String cargSubLabel) {
		this.cargSubLabel = cargSubLabel;
	}

	@Column(name = "CARG_UN_NO", length = 32)
	public String getCargUnNo() {
		return this.cargUnNo;
	}

	public void setCargUnNo(String cargUnNo) {
		this.cargUnNo = cargUnNo;
	}

	@Column(name = "CARG_FLASH_POINT", length = 16)
	public String getCargFlashPoint() {
		return this.cargFlashPoint;
	}

	public void setCargFlashPoint(String cargFlashPoint) {
		this.cargFlashPoint = cargFlashPoint;
	}

	@Column(name = "CARG_MFAG_NO", length = 32)
	public String getCargMfagNo() {
		return this.cargMfagNo;
	}

	public void setCargMfagNo(String cargMfagNo) {
		this.cargMfagNo = cargMfagNo;
	}

	@Column(name = "CARG_EMS_NO", length = 32)
	public String getCargEmsNo() {
		return this.cargEmsNo;
	}

	public void setCargEmsNo(String cargEmsNo) {
		this.cargEmsNo = cargEmsNo;
	}

	@Column(name = "CARG_PKG_GROUP", length = 32)
	public String getCargPkgGroup() {
		return this.cargPkgGroup;
	}

	public void setCargPkgGroup(String cargPkgGroup) {
		this.cargPkgGroup = cargPkgGroup;
	}

	@Column(name = "CARG_EMG_TEL", length = 16)
	public String getCargEmgTel() {
		return this.cargEmgTel;
	}

	public void setCargEmgTel(String cargEmgTel) {
		this.cargEmgTel = cargEmgTel;
	}

	@Column(name = "CARG_QUIT_FLAG")
	public Short getCargQuitFlag() {
		return this.cargQuitFlag;
	}

	public void setCargQuitFlag(Short cargQuitFlag) {
		this.cargQuitFlag = cargQuitFlag;
	}

	@Column(name = "CARG_CUDE_TYPE")
	public Short getCargCudeType() {
		return this.cargCudeType;
	}

	public void setCargCudeType(Short cargCudeType) {
		this.cargCudeType = cargCudeType;
	}

	@Column(name = "UNIT_ID")
	public Integer getUnitId() {
		return this.unitId;
	}

	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}

	@Column(name = "UNIT_CODE", length = 32)
	public String getUnitCode() {
		return this.unitCode;
	}

	public void setUnitCode(String unitCode) {
		this.unitCode = unitCode;
	}

	@Column(name = "UNIT_ID_M")
	public Integer getUnitIdM() {
		return this.unitIdM;
	}

	public void setUnitIdM(Integer unitIdM) {
		this.unitIdM = unitIdM;
	}

	@Column(name = "UNIT_CODE_M", length = 32)
	public String getUnitCodeM() {
		return this.unitCodeM;
	}

	public void setUnitCodeM(String unitCodeM) {
		this.unitCodeM = unitCodeM;
	}

	@Column(name = "CONS_CUST_PACKAGES")
	public Integer getConsCustPackages() {
		return this.consCustPackages;
	}

	public void setConsCustPackages(Integer consCustPackages) {
		this.consCustPackages = consCustPackages;
	}

	@Column(name = "CONS_CUST_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getConsCustGrossWeight() {
		return this.consCustGrossWeight;
	}

	public void setConsCustGrossWeight(Double consCustGrossWeight) {
		this.consCustGrossWeight = consCustGrossWeight;
	}

	@Column(name = "CONS_CUST_MEASUREMENT", precision = 14, scale = 6)
	public Double getConsCustMeasurement() {
		return this.consCustMeasurement;
	}

	public void setConsCustMeasurement(Double consCustMeasurement) {
		this.consCustMeasurement = consCustMeasurement;
	}

	@Column(name = "CONS_CUST_CHARGE_WEIGHT", precision = 14, scale = 6)
	public Double getConsCustChargeWeight() {
		return this.consCustChargeWeight;
	}

	public void setConsCustChargeWeight(Double consCustChargeWeight) {
		this.consCustChargeWeight = consCustChargeWeight;
	}

	@Column(name = "CONS_CONTAINERS_20")
	public Integer getConsContainers20() {
		return this.consContainers20;
	}

	public void setConsContainers20(Integer consContainers20) {
		this.consContainers20 = consContainers20;
	}

	@Column(name = "CONS_CONTAINERS_40")
	public Integer getConsContainers40() {
		return this.consContainers40;
	}

	public void setConsContainers40(Integer consContainers40) {
		this.consContainers40 = consContainers40;
	}

	@Column(name = "CONS_CONTAINERS_40H")
	public Integer getConsContainers40h() {
		return this.consContainers40h;
	}

	public void setConsContainers40h(Integer consContainers40h) {
		this.consContainers40h = consContainers40h;
	}

	@Column(name = "CONS_CONTAINERS_45")
	public Integer getConsContainers45() {
		return this.consContainers45;
	}

	public void setConsContainers45(Integer consContainers45) {
		this.consContainers45 = consContainers45;
	}

	@Column(name = "CONS_CONTAINERS_TEU")
	public Integer getConsContainersTeu() {
		return this.consContainersTeu;
	}

	public void setConsContainersTeu(Integer consContainersTeu) {
		this.consContainersTeu = consContainersTeu;
	}

	@Column(name = "CONS_CONTAINERS_INFO", length = 500)
	public String getConsContainersInfo() {
		return this.consContainersInfo;
	}

	public void setConsContainersInfo(String consContainersInfo) {
		this.consContainersInfo = consContainersInfo;
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

	@Column(name = "COCL_ID")
	public Integer getCoclId() {
		return this.coclId;
	}

	public void setCoclId(Integer coclId) {
		this.coclId = coclId;
	}

	@Column(name = "COCL_NAME", length = 32)
	public String getCoclName() {
		return this.coclName;
	}

	public void setCoclName(String coclName) {
		this.coclName = coclName;
	}

	@Column(name = "CACL_ID")
	public Integer getCaclId() {
		return this.caclId;
	}

	public void setCaclId(Integer caclId) {
		this.caclId = caclId;
	}

	@Column(name = "CACL_NAME", length = 200)
	public String getCaclName() {
		return this.caclName;
	}

	public void setCaclName(String caclName) {
		this.caclName = caclName;
	}

	@Column(name = "TRTE_ID")
	public Integer getTrteId() {
		return this.trteId;
	}

	public void setTrteId(Integer trteId) {
		this.trteId = trteId;
	}

	@Column(name = "TRTY_ID")
	public Integer getTrtyId() {
		return this.trtyId;
	}

	public void setTrtyId(Integer trtyId) {
		this.trtyId = trtyId;
	}

	@Column(name = "TRAN_ID")
	public Integer getTranId() {
		return this.tranId;
	}

	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}

	@Column(name = "TRAN_CODE", length = 32)
	public String getTranCode() {
		return this.tranCode;
	}

	public void setTranCode(String tranCode) {
		this.tranCode = tranCode;
	}

	@Column(name = "TRAN_ID_CARRIER")
	public Integer getTranIdCarrier() {
		return this.tranIdCarrier;
	}

	public void setTranIdCarrier(Integer tranIdCarrier) {
		this.tranIdCarrier = tranIdCarrier;
	}

	@Column(name = "TRAN_CODE_CARRIER", length = 32)
	public String getTranCodeCarrier() {
		return this.tranCodeCarrier;
	}

	public void setTranCodeCarrier(String tranCodeCarrier) {
		this.tranCodeCarrier = tranCodeCarrier;
	}

	@Column(name = "PATE_ID")
	public Integer getPateId() {
		return this.pateId;
	}

	public void setPateId(Integer pateId) {
		this.pateId = pateId;
	}

	@Column(name = "PATE_NAME", length = 32)
	public String getPateName() {
		return this.pateName;
	}

	public void setPateName(String pateName) {
		this.pateName = pateName;
	}

	@Column(name = "PATE_ID_P")
	public Integer getPateIdP() {
		return this.pateIdP;
	}

	public void setPateIdP(Integer pateIdP) {
		this.pateIdP = pateIdP;
	}

	@Column(name = "PATE_NAME_P", length = 32)
	public String getPateNameP() {
		return this.pateNameP;
	}

	public void setPateNameP(String pateNameP) {
		this.pateNameP = pateNameP;
	}

	@Column(name = "ISTY_ID")
	public Integer getIstyId() {
		return this.istyId;
	}

	public void setIstyId(Integer istyId) {
		this.istyId = istyId;
	}

	@Column(name = "SHLI_ID")
	public Integer getShliId() {
		return this.shliId;
	}

	public void setShliId(Integer shliId) {
		this.shliId = shliId;
	}

	@Column(name = "SHLI_CODE", length = 32)
	public String getShliCode() {
		return this.shliCode;
	}

	public void setShliCode(String shliCode) {
		this.shliCode = shliCode;
	}

	@Column(name = "SWITH_ID")
	public Integer getSwithId() {
		return this.swithId;
	}

	public void setSwithId(Integer swithId) {
		this.swithId = swithId;
	}

	@Column(name = "CONS_BL_ISSUE_PLACE", length = 32)
	public String getConsBlIssuePlace() {
		return this.consBlIssuePlace;
	}

	public void setConsBlIssuePlace(String consBlIssuePlace) {
		this.consBlIssuePlace = consBlIssuePlace;
	}

	@Column(name = "CONS_BL_REMARKS", length = 500)
	public String getConsBlRemarks() {
		return this.consBlRemarks;
	}

	public void setConsBlRemarks(String consBlRemarks) {
		this.consBlRemarks = consBlRemarks;
	}

	@Column(name = "CONS_PAID_AT", length = 64)
	public String getConsPaidAt() {
		return this.consPaidAt;
	}

	public void setConsPaidAt(String consPaidAt) {
		this.consPaidAt = consPaidAt;
	}

	@Column(name = "CONS_TRANS_FLAG")
	public Short getConsTransFlag() {
		return this.consTransFlag;
	}

	public void setConsTransFlag(Short consTransFlag) {
		this.consTransFlag = consTransFlag;
	}

	@Column(name = "CONS_PARTIAL_FLAG")
	public Short getConsPartialFlag() {
		return this.consPartialFlag;
	}

	public void setConsPartialFlag(Short consPartialFlag) {
		this.consPartialFlag = consPartialFlag;
	}

	@Column(name = "CONS_FUMIGATE_FLAG")
	public Short getConsFumigateFlag() {
		return this.consFumigateFlag;
	}

	public void setConsFumigateFlag(Short consFumigateFlag) {
		this.consFumigateFlag = consFumigateFlag;
	}

	@Column(name = "CONS_QUARANTINE_FLAG")
	public Short getConsQuarantineFlag() {
		return this.consQuarantineFlag;
	}

	public void setConsQuarantineFlag(Short consQuarantineFlag) {
		this.consQuarantineFlag = consQuarantineFlag;
	}

	@Column(name = "CONS_TRANSFERRING_FLAG")
	public Short getConsTransferringFlag() {
		return this.consTransferringFlag;
	}

	public void setConsTransferringFlag(Short consTransferringFlag) {
		this.consTransferringFlag = consTransferringFlag;
	}

	@Column(name = "CONS_ORIGINAL_BL_NUM", length = 32)
	public String getConsOriginalBlNum() {
		return this.consOriginalBlNum;
	}

	public void setConsOriginalBlNum(String consOriginalBlNum) {
		this.consOriginalBlNum = consOriginalBlNum;
	}

	@Column(name = "CONS_COPY_BL_NUM")
	public Integer getConsCopyBlNum() {
		return this.consCopyBlNum;
	}

	public void setConsCopyBlNum(Integer consCopyBlNum) {
		this.consCopyBlNum = consCopyBlNum;
	}

	@Column(name = "CONS_REMARKS", length = 500)
	public String getConsRemarks() {
		return this.consRemarks;
	}

	public void setConsRemarks(String consRemarks) {
		this.consRemarks = consRemarks;
	}

	@Column(name = "CONS_BOOK_REMARKS", length = 500)
	public String getConsBookRemarks() {
		return this.consBookRemarks;
	}

	public void setConsBookRemarks(String consBookRemarks) {
		this.consBookRemarks = consBookRemarks;
	}

	@Column(name = "CONS_SERVICE_REQUIRED", length = 32)
	public String getConsServiceRequired() {
		return this.consServiceRequired;
	}

	public void setConsServiceRequired(String consServiceRequired) {
		this.consServiceRequired = consServiceRequired;
	}

	@Column(name = "CONS_SERVICE_SPEC", length = 500)
	public String getConsServiceSpec() {
		return this.consServiceSpec;
	}

	public void setConsServiceSpec(String consServiceSpec) {
		this.consServiceSpec = consServiceSpec;
	}

	@Column(name = "CONS_B_VESSEL_ID")
	public Integer getConsBVesselId() {
		return this.consBVesselId;
	}

	public void setConsBVesselId(Integer consBVesselId) {
		this.consBVesselId = consBVesselId;
	}

	@Column(name = "CONS_B_VESSEL", length = 64)
	public String getConsBVessel() {
		return this.consBVessel;
	}

	public void setConsBVessel(String consBVessel) {
		this.consBVessel = consBVessel;
	}

	@Column(name = "CONS_B_VOYAGE_ID")
	public Integer getConsBVoyageId() {
		return this.consBVoyageId;
	}

	public void setConsBVoyageId(Integer consBVoyageId) {
		this.consBVoyageId = consBVoyageId;
	}

	@Column(name = "CONS_B_VOYAGE", length = 32)
	public String getConsBVoyage() {
		return this.consBVoyage;
	}

	public void setConsBVoyage(String consBVoyage) {
		this.consBVoyage = consBVoyage;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_B_ETD", length = 10)
	public Date getConsBEtd() {
		return this.consBEtd;
	}

	public void setConsBEtd(Date consBEtd) {
		this.consBEtd = consBEtd;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_B_ETA", length = 10)
	public Date getConsBEta() {
		return this.consBEta;
	}

	public void setConsBEta(Date consBEta) {
		this.consBEta = consBEta;
	}

	@Column(name = "CONS_B_POL")
	public Integer getConsBPol() {
		return this.consBPol;
	}

	public void setConsBPol(Integer consBPol) {
		this.consBPol = consBPol;
	}

	@Column(name = "CONS_B_POL_EN", length = 64)
	public String getConsBPolEn() {
		return this.consBPolEn;
	}

	public void setConsBPolEn(String consBPolEn) {
		this.consBPolEn = consBPolEn;
	}

	@Column(name = "CONS_B_COUNTRY_D", length = 2)
	public String getConsBCountryD() {
		return this.consBCountryD;
	}

	public void setConsBCountryD(String consBCountryD) {
		this.consBCountryD = consBCountryD;
	}

	@Column(name = "CONS_B_COUNTRY_T", length = 2)
	public String getConsBCountryT() {
		return this.consBCountryT;
	}

	public void setConsBCountryT(String consBCountryT) {
		this.consBCountryT = consBCountryT;
	}

	@Column(name = "CONS_B_POD")
	public Integer getConsBPod() {
		return this.consBPod;
	}

	public void setConsBPod(Integer consBPod) {
		this.consBPod = consBPod;
	}

	@Column(name = "CONS_B_POD_EN", length = 64)
	public String getConsBPodEn() {
		return this.consBPodEn;
	}

	public void setConsBPodEn(String consBPodEn) {
		this.consBPodEn = consBPodEn;
	}

	@Column(name = "CONS_B_POT")
	public Integer getConsBPot() {
		return this.consBPot;
	}

	public void setConsBPot(Integer consBPot) {
		this.consBPot = consBPot;
	}

	@Column(name = "CONS_B_POT_EN", length = 64)
	public String getConsBPotEn() {
		return this.consBPotEn;
	}

	public void setConsBPotEn(String consBPotEn) {
		this.consBPotEn = consBPotEn;
	}

	@Column(name = "CONS_B_SHIPPER", length = 500)
	public String getConsBShipper() {
		return this.consBShipper;
	}

	public void setConsBShipper(String consBShipper) {
		this.consBShipper = consBShipper;
	}

	@Column(name = "CONS_B_CONSIGNEE", length = 500)
	public String getConsBConsignee() {
		return this.consBConsignee;
	}

	public void setConsBConsignee(String consBConsignee) {
		this.consBConsignee = consBConsignee;
	}

	@Column(name = "CONS_B_BOOKING_NO", length = 32)
	public String getConsBBookingNo() {
		return this.consBBookingNo;
	}

	public void setConsBBookingNo(String consBBookingNo) {
		this.consBBookingNo = consBBookingNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_B_BOOKING_DATE", length = 10)
	public Date getConsBBookingDate() {
		return this.consBBookingDate;
	}

	public void setConsBBookingDate(Date consBBookingDate) {
		this.consBBookingDate = consBBookingDate;
	}

	@Column(name = "CONS_B_CARRIER_ID")
	public Integer getConsBCarrierId() {
		return this.consBCarrierId;
	}

	public void setConsBCarrierId(Integer consBCarrierId) {
		this.consBCarrierId = consBCarrierId;
	}

	@Column(name = "CONS_B_CARRIER", length = 64)
	public String getConsBCarrier() {
		return this.consBCarrier;
	}

	public void setConsBCarrier(String consBCarrier) {
		this.consBCarrier = consBCarrier;
	}

	@Column(name = "CONS_B_HARBOUR", length = 64)
	public String getConsBHarbour() {
		return this.consBHarbour;
	}

	public void setConsBHarbour(String consBHarbour) {
		this.consBHarbour = consBHarbour;
	}

	@Column(name = "CONS_B_HK_FLAG")
	public Short getConsBHkFlag() {
		return this.consBHkFlag;
	}

	public void setConsBHkFlag(Short consBHkFlag) {
		this.consBHkFlag = consBHkFlag;
	}

	@Column(name = "CONS_B_INTERNATIONAL_FLAG")
	public Short getConsBInternationalFlag() {
		return this.consBInternationalFlag;
	}

	public void setConsBInternationalFlag(Short consBInternationalFlag) {
		this.consBInternationalFlag = consBInternationalFlag;
	}

	@Column(name = "CONS_B_REMARKS", length = 500)
	public String getConsBRemarks() {
		return this.consBRemarks;
	}

	public void setConsBRemarks(String consBRemarks) {
		this.consBRemarks = consBRemarks;
	}

	@Column(name = "CONS_LOADING_LIST_NO", length = 32)
	public String getConsLoadingListNo() {
		return this.consLoadingListNo;
	}

	public void setConsLoadingListNo(String consLoadingListNo) {
		this.consLoadingListNo = consLoadingListNo;
	}

	@Column(name = "CONS_SPLIT_NO", length = 32)
	public String getConsSplitNo() {
		return this.consSplitNo;
	}

	public void setConsSplitNo(String consSplitNo) {
		this.consSplitNo = consSplitNo;
	}

	@Column(name = "CONS_SHIP_CODE", length = 32)
	public String getConsShipCode() {
		return this.consShipCode;
	}

	public void setConsShipCode(String consShipCode) {
		this.consShipCode = consShipCode;
	}

	@Column(name = "CONS_SPLIT_CONTACT", length = 64)
	public String getConsSplitContact() {
		return this.consSplitContact;
	}

	public void setConsSplitContact(String consSplitContact) {
		this.consSplitContact = consSplitContact;
	}

	@Column(name = "CONS_SPLIT_TEL", length = 32)
	public String getConsSplitTel() {
		return this.consSplitTel;
	}

	public void setConsSplitTel(String consSplitTel) {
		this.consSplitTel = consSplitTel;
	}

	@Column(name = "CONS_SPLIT_CONSIGNEE", length = 64)
	public String getConsSplitConsignee() {
		return this.consSplitConsignee;
	}

	public void setConsSplitConsignee(String consSplitConsignee) {
		this.consSplitConsignee = consSplitConsignee;
	}

	@Column(name = "CONS_SPLIT_CONSIGNEE_TEL", length = 32)
	public String getConsSplitConsigneeTel() {
		return this.consSplitConsigneeTel;
	}

	public void setConsSplitConsigneeTel(String consSplitConsigneeTel) {
		this.consSplitConsigneeTel = consSplitConsigneeTel;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CONS_SPLIT_CREATE_TIME", length = 19)
	public Date getConsSplitCreateTime() {
		return this.consSplitCreateTime;
	}

	public void setConsSplitCreateTime(Date consSplitCreateTime) {
		this.consSplitCreateTime = consSplitCreateTime;
	}

	@Column(name = "CONS_SPLIT_CREATE_BY")
	public Integer getConsSplitCreateBy() {
		return this.consSplitCreateBy;
	}

	public void setConsSplitCreateBy(Integer consSplitCreateBy) {
		this.consSplitCreateBy = consSplitCreateBy;
	}

	@Column(name = "CONS_STATUS")
	public Short getConsStatus() {
		return this.consStatus;
	}

	public void setConsStatus(Short consStatus) {
		this.consStatus = consStatus;
	}

	@Column(name = "CONS_STATUS_BOOKING")
	public Short getConsStatusBooking() {
		return this.consStatusBooking;
	}

	public void setConsStatusBooking(Short consStatusBooking) {
		this.consStatusBooking = consStatusBooking;
	}

	@Column(name = "CONS_STATUS_SWITCH_BL")
	public Short getConsStatusSwitchBl() {
		return this.consStatusSwitchBl;
	}

	public void setConsStatusSwitchBl(Short consStatusSwitchBl) {
		this.consStatusSwitchBl = consStatusSwitchBl;
	}

	@Column(name = "CONS_STATUS_CLEARANCE")
	public Short getConsStatusClearance() {
		return this.consStatusClearance;
	}

	public void setConsStatusClearance(Short consStatusClearance) {
		this.consStatusClearance = consStatusClearance;
	}

	@Column(name = "CONS_STATUS_SPLIT")
	public Short getConsStatusSplit() {
		return this.consStatusSplit;
	}

	public void setConsStatusSplit(Short consStatusSplit) {
		this.consStatusSplit = consStatusSplit;
	}

	@Column(name = "CONS_STATUS_INSP")
	public Short getConsStatusInsp() {
		return this.consStatusInsp;
	}

	public void setConsStatusInsp(Short consStatusInsp) {
		this.consStatusInsp = consStatusInsp;
	}

	@Column(name = "CONS_STATUS_CONT")
	public Short getConsStatusCont() {
		return this.consStatusCont;
	}

	public void setConsStatusCont(Short consStatusCont) {
		this.consStatusCont = consStatusCont;
	}

	@Column(name = "CONS_STATUS_CARG")
	public Short getConsStatusCarg() {
		return this.consStatusCarg;
	}

	public void setConsStatusCarg(Short consStatusCarg) {
		this.consStatusCarg = consStatusCarg;
	}

	@Column(name = "CONS_STATUS_MBL")
	public Short getConsStatusMbl() {
		return this.consStatusMbl;
	}

	public void setConsStatusMbl(Short consStatusMbl) {
		this.consStatusMbl = consStatusMbl;
	}

	@Column(name = "CONS_STATUS_HBL")
	public Short getConsStatusHbl() {
		return this.consStatusHbl;
	}

	public void setConsStatusHbl(Short consStatusHbl) {
		this.consStatusHbl = consStatusHbl;
	}

	@Column(name = "CONS_STATUS_B_BOOK")
	public Short getConsStatusBBook() {
		return this.consStatusBBook;
	}

	public void setConsStatusBBook(Short consStatusBBook) {
		this.consStatusBBook = consStatusBBook;
	}

	@Column(name = "CONS_STATUS_DEPA")
	public Short getConsStatusDepa() {
		return this.consStatusDepa;
	}

	public void setConsStatusDepa(Short consStatusDepa) {
		this.consStatusDepa = consStatusDepa;
	}

	@Column(name = "CONS_STATUS_DOCS")
	public Short getConsStatusDocs() {
		return this.consStatusDocs;
	}

	public void setConsStatusDocs(Short consStatusDocs) {
		this.consStatusDocs = consStatusDocs;
	}

	@Column(name = "CONS_STATUS_EXP")
	public Short getConsStatusExp() {
		return this.consStatusExp;
	}

	public void setConsStatusExp(Short consStatusExp) {
		this.consStatusExp = consStatusExp;
	}

	@Column(name = "CONS_STATUS_AR")
	public Short getConsStatusAr() {
		return this.consStatusAr;
	}

	public void setConsStatusAr(Short consStatusAr) {
		this.consStatusAr = consStatusAr;
	}

	@Column(name = "CONS_STATUS_AP")
	public Short getConsStatusAp() {
		return this.consStatusAp;
	}

	public void setConsStatusAp(Short consStatusAp) {
		this.consStatusAp = consStatusAp;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_AR_WRITE_OFF_DATE", length = 10)
	public Date getConsArWriteOffDate() {
		return this.consArWriteOffDate;
	}

	public void setConsArWriteOffDate(Date consArWriteOffDate) {
		this.consArWriteOffDate = consArWriteOffDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_AP_WRITE_OFF_DATE", length = 10)
	public Date getConsApWriteOffDate() {
		return this.consApWriteOffDate;
	}

	public void setConsApWriteOffDate(Date consApWriteOffDate) {
		this.consApWriteOffDate = consApWriteOffDate;
	}

	@Column(name = "CONS_STATUS_INVO_R")
	public Short getConsStatusInvoR() {
		return this.consStatusInvoR;
	}

	public void setConsStatusInvoR(Short consStatusInvoR) {
		this.consStatusInvoR = consStatusInvoR;
	}

	@Column(name = "CONS_STATUS_INVO_P")
	public Short getConsStatusInvoP() {
		return this.consStatusInvoP;
	}

	public void setConsStatusInvoP(Short consStatusInvoP) {
		this.consStatusInvoP = consStatusInvoP;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_INVO_R_DATE", length = 10)
	public Date getConsInvoRDate() {
		return this.consInvoRDate;
	}

	public void setConsInvoRDate(Date consInvoRDate) {
		this.consInvoRDate = consInvoRDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_INVO_P_DATE", length = 10)
	public Date getConsInvoPDate() {
		return this.consInvoPDate;
	}

	public void setConsInvoPDate(Date consInvoPDate) {
		this.consInvoPDate = consInvoPDate;
	}

	@Column(name = "CONS_STATUS_AUD")
	public Short getConsStatusAud() {
		return this.consStatusAud;
	}

	public void setConsStatusAud(Short consStatusAud) {
		this.consStatusAud = consStatusAud;
	}

	@Column(name = "CONS_STATUS_IN_CY")
	public Short getConsStatusInCy() {
		return this.consStatusInCy;
	}

	public void setConsStatusInCy(Short consStatusInCy) {
		this.consStatusInCy = consStatusInCy;
	}

	@Column(name = "CONS_STATUS_IN_CFS")
	public Short getConsStatusInCfs() {
		return this.consStatusInCfs;
	}

	public void setConsStatusInCfs(Short consStatusInCfs) {
		this.consStatusInCfs = consStatusInCfs;
	}

	@Column(name = "CONS_STATUS_ON_BOARD")
	public Short getConsStatusOnBoard() {
		return this.consStatusOnBoard;
	}

	public void setConsStatusOnBoard(Short consStatusOnBoard) {
		this.consStatusOnBoard = consStatusOnBoard;
	}

	@Column(name = "CONS_STATUS_EIR")
	public Short getConsStatusEir() {
		return this.consStatusEir;
	}

	public void setConsStatusEir(Short consStatusEir) {
		this.consStatusEir = consStatusEir;
	}

	@Column(name = "CONS_STATUS_SEND_CONT")
	public Short getConsStatusSendCont() {
		return this.consStatusSendCont;
	}

	public void setConsStatusSendCont(Short consStatusSendCont) {
		this.consStatusSendCont = consStatusSendCont;
	}

	@Column(name = "CONS_STATUS_LOCK")
	public Short getConsStatusLock() {
		return this.consStatusLock;
	}

	public void setConsStatusLock(Short consStatusLock) {
		this.consStatusLock = consStatusLock;
	}

	@Column(name = "CONS_REBOOK_FLAG")
	public Short getConsRebookFlag() {
		return this.consRebookFlag;
	}

	public void setConsRebookFlag(Short consRebookFlag) {
		this.consRebookFlag = consRebookFlag;
	}

	@Column(name = "CONS_CHARGE_REMARKS", length = 200)
	public String getConsChargeRemarks() {
		return this.consChargeRemarks;
	}

	public void setConsChargeRemarks(String consChargeRemarks) {
		this.consChargeRemarks = consChargeRemarks;
	}

	@Column(name = "CONS_NOT_ON_BOARD_REASON", length = 16)
	public String getConsNotOnBoardReason() {
		return this.consNotOnBoardReason;
	}

	public void setConsNotOnBoardReason(String consNotOnBoardReason) {
		this.consNotOnBoardReason = consNotOnBoardReason;
	}

	@Column(name = "CONS_NOT_ON_BOARD_REMARKS", length = 200)
	public String getConsNotOnBoardRemarks() {
		return this.consNotOnBoardRemarks;
	}

	public void setConsNotOnBoardRemarks(String consNotOnBoardRemarks) {
		this.consNotOnBoardRemarks = consNotOnBoardRemarks;
	}

	@Column(name = "CONS_BOOKING_DECLARE_NO_US", length = 32)
	public String getConsBookingDeclareNoUs() {
		return this.consBookingDeclareNoUs;
	}

	public void setConsBookingDeclareNoUs(String consBookingDeclareNoUs) {
		this.consBookingDeclareNoUs = consBookingDeclareNoUs;
	}

	@Column(name = "CONS_US_FULL_SHIP")
	public Short getConsUsFullShip() {
		return this.consUsFullShip;
	}

	public void setConsUsFullShip(Short consUsFullShip) {
		this.consUsFullShip = consUsFullShip;
	}

	@Column(name = "CONS_STATUS_SETTLEMENT")
	public Short getConsStatusSettlement() {
		return this.consStatusSettlement;
	}

	public void setConsStatusSettlement(Short consStatusSettlement) {
		this.consStatusSettlement = consStatusSettlement;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_SETTLEMENT_DATE", length = 10)
	public Date getConsSettlementDate() {
		return this.consSettlementDate;
	}

	public void setConsSettlementDate(Date consSettlementDate) {
		this.consSettlementDate = consSettlementDate;
	}

	@Column(name = "CONS_CANCEL_REASON", length = 200)
	public String getConsCancelReason() {
		return this.consCancelReason;
	}

	public void setConsCancelReason(String consCancelReason) {
		this.consCancelReason = consCancelReason;
	}

	@Column(name = "CONS_BOOKING_CANCEL_REASON", length = 200)
	public String getConsBookingCancelReason() {
		return this.consBookingCancelReason;
	}

	public void setConsBookingCancelReason(String consBookingCancelReason) {
		this.consBookingCancelReason = consBookingCancelReason;
	}

	@Column(name = "CONS_PACKING_LIST_NO", length = 32)
	public String getConsPackingListNo() {
		return this.consPackingListNo;
	}

	public void setConsPackingListNo(String consPackingListNo) {
		this.consPackingListNo = consPackingListNo;
	}

	@Column(name = "FCON_ID")
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FCON_SHIP_DATE_F", length = 10)
	public Date getFconShipDateF() {
		return fconShipDateF;
	}

	public void setFconShipDateF(Date fconShipDateF) {
		this.fconShipDateF = fconShipDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FCON_SHIP_DATE_T", length = 10)
	public Date getFconShipDateT() {
		return fconShipDateT;
	}

	public void setFconShipDateT(Date fconShipDateT) {
		this.fconShipDateT = fconShipDateT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SHIP_DATE_F", length = 10)
	public Date getVoyaShipDateF() {
		return voyaShipDateF;
	}

	public void setVoyaShipDateF(Date voyaShipDateF) {
		this.voyaShipDateF = voyaShipDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SHIP_DATE_T", length = 10)
	public Date getVoyaShipDateT() {
		return voyaShipDateT;
	}

	public void setVoyaShipDateT(Date voyaShipDateT) {
		this.voyaShipDateT = voyaShipDateT;
	}

	@Column(name = "LOLI_ID")
	public Integer getLoliId() {
		return this.loliId;
	}

	public void setLoliId(Integer loliId) {
		this.loliId = loliId;
	}

	@Column(name = "DEPT_ID", nullable = false)
	public Integer getDeptId() {
		return this.deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	@Column(name = "CONS_EXTERNAL_FLAG")
	public Short getConsExternalFlag() {
		return this.consExternalFlag;
	}

	public void setConsExternalFlag(Short consExternalFlag) {
		this.consExternalFlag = consExternalFlag;
	}

	@Column(name = "CONS_CUDE_TYPE")
	public Short getConsCudeType() {
		return this.consCudeType;
	}

	public void setConsCudeType(Short consCudeType) {
		this.consCudeType = consCudeType;
	}

	@Column(name = "CONS_INVOICE_FLAG")
	public Short getConsInvoiceFlag() {
		return this.consInvoiceFlag;
	}

	public void setConsInvoiceFlag(Short consInvoiceFlag) {
		this.consInvoiceFlag = consInvoiceFlag;
	}

	@Column(name = "CONS_INSPECTION_FLAG")
	public Short getConsInspectionFlag() {
		return this.consInspectionFlag;
	}

	public void setConsInspectionFlag(Short consInspectionFlag) {
		this.consInspectionFlag = consInspectionFlag;
	}

	@Column(name = "CONS_WS_FLAG")
	public Short getConsWsFlag() {
		return consWsFlag;
	}

	public void setConsWsFlag(Short consWsFlag) {
		this.consWsFlag = consWsFlag;
	}

	@Column(name = "CONS_WS_ACCEPT_FLAG")
	public Short getConsWsAcceptFlag() {
		return consWsAcceptFlag;
	}

	public void setConsWsAcceptFlag(Short consWsAcceptFlag) {
		this.consWsAcceptFlag = consWsAcceptFlag;
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

	@Column(name = "CONS_COMPANY", length = 64)
	public String getConsCompany() {
		return consCompany;
	}

	public void setConsCompany(String consCompany) {
		this.consCompany = consCompany;
	}

	@Column(name = "CONS_VERIFICATION_NO", length = 32)
	public String getConsVerificationNo() {
		return consVerificationNo;
	}

	public void setConsVerificationNo(String consVerificationNo) {
		this.consVerificationNo = consVerificationNo;
	}

	@Column(name = "CONS_MANUAL_NO", length = 32)
	public String getConsManualNo() {
		return consManualNo;
	}

	public void setConsManualNo(String consManualNo) {
		this.consManualNo = consManualNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_CLOSE_DATE", length = 10)
	public Date getConsCloseDate() {
		return consCloseDate;
	}

	public void setConsCloseDate(Date consCloseDate) {
		this.consCloseDate = consCloseDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_MANUAL_EXPIRATION_DATE", length = 10)
	public Date getConsManualExpirationDate() {
		return consManualExpirationDate;
	}

	public void setConsManualExpirationDate(Date consManualExpirationDate) {
		this.consManualExpirationDate = consManualExpirationDate;
	}

	@Column(name = "CONS_FREE_TABLE_NO", length = 32)
	public String getConsFreeTableNo() {
		return consFreeTableNo;
	}

	@Column(name = "CARG_HS_CODE", length = 32)
	public String getCargHsCode() {
		return cargHsCode;
	}

	public void setCargHsCode(String cargHsCode) {
		this.cargHsCode = cargHsCode;
	}
	
	public void setConsFreeTableNo(String consFreeTableNo) {
		this.consFreeTableNo = consFreeTableNo;
	}

	@Column(name = "CONS_TAX", precision = 9)
	public Double getConsTax() {
		return consTax;
	}

	public void setConsTax(Double consTax) {
		this.consTax = consTax;
	}

	@Column(name = "CONS_RELIEF_TARIFF", precision = 9)
	public Double getConsReliefTariff() {
		return consReliefTariff;
	}

	public void setConsReliefTariff(Double consReliefTariff) {
		this.consReliefTariff = consReliefTariff;
	}

	@Column(name = "CONS_RELIEF_VAT", precision = 9)
	public Double getConsReliefVat() {
		return consReliefVat;
	}

	public void setConsReliefVat(Double consReliefVat) {
		this.consReliefVat = consReliefVat;
	}

	@Column(name = "CONS_MARGIN", precision = 9)
	public Double getConsMargin() {
		return consMargin;
	}

	public void setConsMargin(Double consMargin) {
		this.consMargin = consMargin;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_AUDIT_DATE", length = 10)
	public Date getConsAuditDate() {
		return consAuditDate;
	}

	public void setConsAuditDate(Date consAuditDate) {
		this.consAuditDate = consAuditDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_AUDIT_DATE2", length = 10)
	public Date getConsAuditDate2() {
		return consAuditDate2;
	}

	public void setConsAuditDate2(Date consAuditDate2) {
		this.consAuditDate2 = consAuditDate2;
	}

	@Column(name = "CONS_CUSTOM_REG_NO", length = 32)
	public String getConsCustomRegNo() {
		return consCustomRegNo;
	}

	public void setConsCustomRegNo(String consCustomRegNo) {
		this.consCustomRegNo = consCustomRegNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_CUSTOM_REG_DATE", length = 10)
	public Date getConsCustomRegDate() {
		return consCustomRegDate;
	}

	public void setConsCustomRegDate(Date consCustomRegDate) {
		this.consCustomRegDate = consCustomRegDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_BUSINESS_LICENSE_DATE", length = 10)
	public Date getConsBusinessLicenseDate() {
		return consBusinessLicenseDate;
	}

	public void setConsBusinessLicenseDate(Date consBusinessLicenseDate) {
		this.consBusinessLicenseDate = consBusinessLicenseDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_ORG_DATE", length = 10)
	public Date getConsOrgDate() {
		return consOrgDate;
	}

	public void setConsOrgDate(Date consOrgDate) {
		this.consOrgDate = consOrgDate;
	}

	@Column(name = "CONS_EPORT_REG")
	public Short getConsEportReg() {
		return consEportReg;
	}

	public void setConsEportReg(Short consEportReg) {
		this.consEportReg = consEportReg;
	}

	@Column(name = "CONS_INSP_REG")
	public Short getConsInspReg() {
		return consInspReg;
	}

	public void setConsInspReg(Short consInspReg) {
		this.consInspReg = consInspReg;
	}

	@Column(name = "CONS_CUSTOMS_DECLEARATION_NO", length = 32)
	public String getConsCustomsDeclearationNo() {
		return consCustomsDeclearationNo;
	}

	public void setConsCustomsDeclearationNo(String consCustomsDeclearationNo) {
		this.consCustomsDeclearationNo = consCustomsDeclearationNo;
	}
	
	@Column(name = "CONS_REQUIRE_VERIFICATION")
	public Short getConsRequireVerification() {
		return consRequireVerification;
	}

	public void setConsRequireVerification(Short consRequireVerification) {
		this.consRequireVerification = consRequireVerification;
	}
	
	@Column(name = "CONS_REQUIRE_RELIEF")
	public Short getConsRequireRelief() {
		return consRequireRelief;
	}

	public void setConsRequireRelief(Short consRequireRelief) {
		this.consRequireRelief = consRequireRelief;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CONS_CUSTOMS_DECLEAR_DATE", length = 10)
	public Date getConsCustomsDeclearDate() {
		return consCustomsDeclearDate;
	}

	public void setConsCustomsDeclearDate(Date consCustomsDeclearDate) {
		this.consCustomsDeclearDate = consCustomsDeclearDate;
	}
		
	@Column(name = "CONS_LOAD_FACTORY", length = 64)
	public String getConsLoadFactory() {
		return this.consLoadFactory;
	}

	public void setConsLoadFactory(String consLoadFactory) {
		this.consLoadFactory = consLoadFactory;
	}
	
}