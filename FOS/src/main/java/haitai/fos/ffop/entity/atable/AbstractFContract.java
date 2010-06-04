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
public abstract class AbstractFContract extends BaseDomain {

	private static final long serialVersionUID = -3245777895025297006L;
	private Integer fconId;
	private Integer version;
	private String fconNo;
	private Integer custId;
	private String custName;
	private String custSname;
	private Integer charterId;
	private String charterName;
	private String charterSname;
	private String custContact;
	private String custTel;
	private String custFax;
	private String fconContractNo;
	private Double fconContractQuantity;
	private Double fconForcastQuantity;
	private Double fconShippedQuantity;
	private Double fconFactQuantity;
	private Double fconForcastCbm;
	private Double fconShippedCbm;
	private Double fconFactCbm;
	private Integer fconTotalPackages;
	private Double fconTotalGrossWeight;
	private Double fconArrivedGrossWeight;
	private Integer fconArrivedPackages;
	private String unitName;
	private Integer unitId;
	private Integer unitIdCarrier;
	private String unitNameCarrier;
	private String fconShipper;
	private String fconConsignee;
	private String fconNotifyParty;
	private Integer fconPol;
	private String fconPolEn;
	private Integer fconPod;
	private String fconPodEn;
	private String fconCargoDesc;
	private Integer tranId;
	private String tranName;
	private String tranNameCarrier;
	private Integer tranIdCarrier;
	private Integer shliId;
	private String shliName;
	private Integer pateIdR;
	private String pateNameR;
	private Integer pateIdP;
	private String pateNameP;
	private Integer packId;
	private String packName;
	private String cargNameCn;
	private String cargNameEn;
	private Double fconUnitPriceR;
	private Double fconTotalPriceR;
	private Double fconUnitPriceP;
	private Double fconTotalPriceP;
	private Date fconLoadDate;
	private Date fconShipDateF;
	private Date fconShipDateT;
	private Date voyaShipDateF;
	private Date voyaShipDateT;
	private Date voyaSailDate;
	private Short voyaSailedFlag;
	private String fconVesselVoyage;
	private String fconVessNameCn;
	private String fconCarrier;
	private String fconRemarks;
	private String fconServiceSpec;
	private Short fconStatus;
	private Integer fconOperatorId;
	private String fconOperatorName;
	private Integer fconSalesRepId;
	private String fconSalesRepName;
	private Integer consId;
	private String consNo;
	private String consMblNo;
	private Short fconInvoiceFlag;
	private Short fconInspectionFlag;
	private Short fconCudeType;
	private Double fconInwareGrossWeight;
	private Short fconSumListFlag;
	private Short fconCopyFlag;
	private Short fconExpeConfirmFlag;
	private Short fconCudeDocFlag;
	private Short fconPhotoFlag;
	private Short fconMatesReceiptFlag;
	private Integer blCargoPackages;
	private Double blCargoGrossWeight;
	private Double blCargoNetWeight;
	private Double blCargoMeasurement;
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
	@Column(name = "FCON_ID", unique = true, nullable = false)
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FCON_NO", length = 32)
	public String getFconNo() {
		return this.fconNo;
	}

	public void setFconNo(String fconNo) {
		this.fconNo = fconNo;
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

	@Column(name = "CHARTER_ID")
	public Integer getCharterId() {
		return this.charterId;
	}

	public void setCharterId(Integer charterId) {
		this.charterId = charterId;
	}

	@Column(name = "CHARTER_NAME", length = 64)
	public String getCharterName() {
		return this.charterName;
	}

	public void setCharterName(String charterName) {
		this.charterName = charterName;
	}

	@Column(name = "CHARTER_SNAME", length = 64)
	public String getCharterSname() {
		return this.charterSname;
	}

	public void setCharterSname(String charterSname) {
		this.charterSname = charterSname;
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

	@Column(name = "FCON_CONTRACT_NO", nullable = false, length = 32)
	public String getFconContractNo() {
		return this.fconContractNo;
	}

	public void setFconContractNo(String fconContractNo) {
		this.fconContractNo = fconContractNo;
	}

	@Column(name = "FCON_CONTRACT_QUANTITY", precision = 14, scale = 6)
	public Double getFconContractQuantity() {
		return this.fconContractQuantity;
	}

	public void setFconContractQuantity(Double fconContractQuantity) {
		this.fconContractQuantity = fconContractQuantity;
	}

	@Column(name = "FCON_FORCAST_QUANTITY", precision = 14, scale = 6)
	public Double getFconForcastQuantity() {
		return this.fconForcastQuantity;
	}

	public void setFconForcastQuantity(Double fconForcastQuantity) {
		this.fconForcastQuantity = fconForcastQuantity;
	}

	@Column(name = "FCON_SHIPPED_QUANTITY", precision = 14, scale = 6)
	public Double getFconShippedQuantity() {
		return this.fconShippedQuantity;
	}

	public void setFconShippedQuantity(Double fconShippedQuantity) {
		this.fconShippedQuantity = fconShippedQuantity;
	}

	@Column(name = "FCON_FACT_QUANTITY", precision = 14, scale = 6)
	public Double getFconFactQuantity() {
		return this.fconFactQuantity;
	}

	public void setFconFactQuantity(Double fconFactQuantity) {
		this.fconFactQuantity = fconFactQuantity;
	}

	@Column(name = "FCON_FORCAST_CBM", precision = 14, scale = 6)
	public Double getFconForcastCbm() {
		return this.fconForcastCbm;
	}

	public void setFconForcastCbm(Double fconForcastCbm) {
		this.fconForcastCbm = fconForcastCbm;
	}

	@Column(name = "FCON_SHIPPED_CBM", precision = 14, scale = 6)
	public Double getFconShippedCbm() {
		return this.fconShippedCbm;
	}

	public void setFconShippedCbm(Double fconShippedCbm) {
		this.fconShippedCbm = fconShippedCbm;
	}

	@Column(name = "FCON_FACT_CBM", precision = 14, scale = 6)
	public Double getFconFactCbm() {
		return this.fconFactCbm;
	}

	public void setFconFactCbm(Double fconFactCbm) {
		this.fconFactCbm = fconFactCbm;
	}

	@Column(name = "FCON_TOTAL_PACKAGES")
	public Integer getFconTotalPackages() {
		return this.fconTotalPackages;
	}

	public void setFconTotalPackages(Integer fconTotalPackages) {
		this.fconTotalPackages = fconTotalPackages;
	}

	@Column(name = "FCON_TOTAL_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getFconTotalGrossWeight() {
		return this.fconTotalGrossWeight;
	}

	public void setFconTotalGrossWeight(Double fconTotalGrossWeight) {
		this.fconTotalGrossWeight = fconTotalGrossWeight;
	}

	@Column(name = "FCON_ARRIVED_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getFconArrivedGrossWeight() {
		return this.fconArrivedGrossWeight;
	}

	public void setFconArrivedGrossWeight(Double fconArrivedGrossWeight) {
		this.fconArrivedGrossWeight = fconArrivedGrossWeight;
	}

	@Column(name = "FCON_ARRIVED_PACKAGES")
	public Integer getFconArrivedPackages() {
		return this.fconArrivedPackages;
	}

	public void setFconArrivedPackages(Integer fconArrivedPackages) {
		this.fconArrivedPackages = fconArrivedPackages;
	}

	@Column(name = "UNIT_NAME", length = 32)
	public String getUnitName() {
		return this.unitName;
	}

	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	@Column(name = "UNIT_ID")
	public Integer getUnitId() {
		return this.unitId;
	}

	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}

	@Column(name = "UNIT_ID_CARRIER")
	public Integer getUnitIdCarrier() {
		return this.unitIdCarrier;
	}

	public void setUnitIdCarrier(Integer unitIdCarrier) {
		this.unitIdCarrier = unitIdCarrier;
	}

	@Column(name = "UNIT_NAME_CARRIER", length = 32)
	public String getUnitNameCarrier() {
		return this.unitNameCarrier;
	}

	public void setUnitNameCarrier(String unitNameCarrier) {
		this.unitNameCarrier = unitNameCarrier;
	}

	@Column(name = "FCON_SHIPPER", length = 500)
	public String getFconShipper() {
		return this.fconShipper;
	}

	public void setFconShipper(String fconShipper) {
		this.fconShipper = fconShipper;
	}

	@Column(name = "FCON_CONSIGNEE", length = 500)
	public String getFconConsignee() {
		return this.fconConsignee;
	}

	public void setFconConsignee(String fconConsignee) {
		this.fconConsignee = fconConsignee;
	}

	@Column(name = "FCON_NOTIFY_PARTY", length = 500)
	public String getFconNotifyParty() {
		return this.fconNotifyParty;
	}

	public void setFconNotifyParty(String fconNotifyParty) {
		this.fconNotifyParty = fconNotifyParty;
	}

	@Column(name = "FCON_POL")
	public Integer getFconPol() {
		return this.fconPol;
	}

	public void setFconPol(Integer fconPol) {
		this.fconPol = fconPol;
	}

	@Column(name = "FCON_POL_EN", length = 64)
	public String getFconPolEn() {
		return this.fconPolEn;
	}

	public void setFconPolEn(String fconPolEn) {
		this.fconPolEn = fconPolEn;
	}

	@Column(name = "FCON_POD")
	public Integer getFconPod() {
		return this.fconPod;
	}

	public void setFconPod(Integer fconPod) {
		this.fconPod = fconPod;
	}

	@Column(name = "FCON_POD_EN", length = 64)
	public String getFconPodEn() {
		return this.fconPodEn;
	}

	public void setFconPodEn(String fconPodEn) {
		this.fconPodEn = fconPodEn;
	}

	@Column(name = "FCON_CARGO_DESC", length = 500)
	public String getFconCargoDesc() {
		return this.fconCargoDesc;
	}

	public void setFconCargoDesc(String fconCargoDesc) {
		this.fconCargoDesc = fconCargoDesc;
	}

	@Column(name = "TRAN_ID")
	public Integer getTranId() {
		return this.tranId;
	}

	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}

	@Column(name = "TRAN_NAME", length = 32)
	public String getTranName() {
		return this.tranName;
	}

	public void setTranName(String tranName) {
		this.tranName = tranName;
	}

	@Column(name = "TRAN_NAME_CARRIER", length = 32)
	public String getTranNameCarrier() {
		return this.tranNameCarrier;
	}

	public void setTranNameCarrier(String tranNameCarrier) {
		this.tranNameCarrier = tranNameCarrier;
	}

	@Column(name = "TRAN_ID_CARRIER")
	public Integer getTranIdCarrier() {
		return this.tranIdCarrier;
	}

	public void setTranIdCarrier(Integer tranIdCarrier) {
		this.tranIdCarrier = tranIdCarrier;
	}

	@Column(name = "SHLI_ID")
	public Integer getShliId() {
		return this.shliId;
	}

	public void setShliId(Integer shliId) {
		this.shliId = shliId;
	}

	@Column(name = "SHLI_NAME", length = 32)
	public String getShliName() {
		return this.shliName;
	}

	public void setShliName(String shliName) {
		this.shliName = shliName;
	}

	@Column(name = "PATE_ID_R")
	public Integer getPateIdR() {
		return this.pateIdR;
	}

	public void setPateIdR(Integer pateIdR) {
		this.pateIdR = pateIdR;
	}

	@Column(name = "PATE_NAME_R", length = 32)
	public String getPateNameR() {
		return this.pateNameR;
	}

	public void setPateNameR(String pateNameR) {
		this.pateNameR = pateNameR;
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

	@Column(name = "CARG_NAME_CN", length = 200)
	public String getCargNameCn() {
		return this.cargNameCn;
	}

	public void setCargNameCn(String cargNameCn) {
		this.cargNameCn = cargNameCn;
	}

	@Column(name = "CARG_NAME_EN", length = 200)
	public String getCargNameEn() {
		return this.cargNameEn;
	}

	public void setCargNameEn(String cargNameEn) {
		this.cargNameEn = cargNameEn;
	}

	@Column(name = "FCON_UNIT_PRICE_R", precision = 12, scale = 4)
	public Double getFconUnitPriceR() {
		return this.fconUnitPriceR;
	}

	public void setFconUnitPriceR(Double fconUnitPriceR) {
		this.fconUnitPriceR = fconUnitPriceR;
	}

	@Column(name = "FCON_TOTAL_PRICE_R", precision = 12)
	public Double getFconTotalPriceR() {
		return this.fconTotalPriceR;
	}

	public void setFconTotalPriceR(Double fconTotalPriceR) {
		this.fconTotalPriceR = fconTotalPriceR;
	}

	@Column(name = "FCON_UNIT_PRICE_P", precision = 12, scale = 4)
	public Double getFconUnitPriceP() {
		return this.fconUnitPriceP;
	}

	public void setFconUnitPriceP(Double fconUnitPriceP) {
		this.fconUnitPriceP = fconUnitPriceP;
	}

	@Column(name = "FCON_TOTAL_PRICE_P", precision = 12)
	public Double getFconTotalPriceP() {
		return this.fconTotalPriceP;
	}

	public void setFconTotalPriceP(Double fconTotalPriceP) {
		this.fconTotalPriceP = fconTotalPriceP;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FCON_LOAD_DATE", length = 10)
	public Date getFconLoadDate() {
		return this.fconLoadDate;
	}

	public void setFconLoadDate(Date fconLoadDate) {
		this.fconLoadDate = fconLoadDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FCON_SHIP_DATE_F", length = 10)
	public Date getFconShipDateF() {
		return this.fconShipDateF;
	}

	public void setFconShipDateF(Date fconShipDateF) {
		this.fconShipDateF = fconShipDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FCON_SHIP_DATE_T", length = 10)
	public Date getFconShipDateT() {
		return this.fconShipDateT;
	}

	public void setFconShipDateT(Date fconShipDateT) {
		this.fconShipDateT = fconShipDateT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SHIP_DATE_F", length = 10)
	public Date getVoyaShipDateF() {
		return this.voyaShipDateF;
	}

	public void setVoyaShipDateF(Date voyaShipDateF) {
		this.voyaShipDateF = voyaShipDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SHIP_DATE_T", length = 10)
	public Date getVoyaShipDateT() {
		return this.voyaShipDateT;
	}

	public void setVoyaShipDateT(Date voyaShipDateT) {
		this.voyaShipDateT = voyaShipDateT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SAIL_DATE", length = 10)
	public Date getVoyaSailDate() {
		return this.voyaSailDate;
	}

	public void setVoyaSailDate(Date voyaSailDate) {
		this.voyaSailDate = voyaSailDate;
	}

	@Column(name = "VOYA_SAILED_FLAG")
	public Short getVoyaSailedFlag() {
		return voyaSailedFlag;
	}

	public void setVoyaSailedFlag(Short voyaSailedFlag) {
		this.voyaSailedFlag = voyaSailedFlag;
	}

	@Column(name = "FCON_VESSEL_VOYAGE", length = 1000)
	public String getFconVesselVoyage() {
		return this.fconVesselVoyage;
	}

	public void setFconVesselVoyage(String fconVesselVoyage) {
		this.fconVesselVoyage = fconVesselVoyage;
	}

	@Column(name = "FCON_VESS_NAME_CN", length = 1000)
	public String getFconVessNameCn() {
		return this.fconVessNameCn;
	}

	public void setFconVessNameCn(String fconVessNameCn) {
		this.fconVessNameCn = fconVessNameCn;
	}

	@Column(name = "FCON_CARRIER", length = 1000)
	public String getFconCarrier() {
		return this.fconCarrier;
	}

	public void setFconCarrier(String fconCarrier) {
		this.fconCarrier = fconCarrier;
	}

	@Column(name = "FCON_REMARKS", length = 1000)
	public String getFconRemarks() {
		return this.fconRemarks;
	}

	public void setFconRemarks(String fconRemarks) {
		this.fconRemarks = fconRemarks;
	}

	@Column(name = "FCON_SERVICE_SPEC", length = 500)
	public String getFconServiceSpec() {
		return this.fconServiceSpec;
	}

	public void setFconServiceSpec(String fconServiceSpec) {
		this.fconServiceSpec = fconServiceSpec;
	}

	@Column(name = "FCON_STATUS")
	public Short getFconStatus() {
		return this.fconStatus;
	}

	public void setFconStatus(Short fconStatus) {
		this.fconStatus = fconStatus;
	}

	@Column(name = "FCON_OPERATOR_ID")
	public Integer getFconOperatorId() {
		return this.fconOperatorId;
	}

	public void setFconOperatorId(Integer fconOperatorId) {
		this.fconOperatorId = fconOperatorId;
	}

	@Column(name = "FCON_OPERATOR_NAME", length = 32)
	public String getFconOperatorName() {
		return this.fconOperatorName;
	}

	public void setFconOperatorName(String fconOperatorName) {
		this.fconOperatorName = fconOperatorName;
	}

	@Column(name = "FCON_SALES_REP_ID")
	public Integer getFconSalesRepId() {
		return this.fconSalesRepId;
	}

	public void setFconSalesRepId(Integer fconSalesRepId) {
		this.fconSalesRepId = fconSalesRepId;
	}

	@Column(name = "FCON_SALES_REP_NAME", length = 32)
	public String getFconSalesRepName() {
		return this.fconSalesRepName;
	}

	public void setFconSalesRepName(String fconSalesRepName) {
		this.fconSalesRepName = fconSalesRepName;
	}

	@Column(name = "CONS_ID")
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 200)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_MBL_NO", length = 200)
	public String getConsMblNo() {
		return this.consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Column(name = "FCON_INVOICE_FLAG")
	public Short getFconInvoiceFlag() {
		return this.fconInvoiceFlag;
	}

	public void setFconInvoiceFlag(Short fconInvoiceFlag) {
		this.fconInvoiceFlag = fconInvoiceFlag;
	}

	@Column(name = "FCON_INSPECTION_FLAG")
	public Short getFconInspectionFlag() {
		return this.fconInspectionFlag;
	}

	public void setFconInspectionFlag(Short fconInspectionFlag) {
		this.fconInspectionFlag = fconInspectionFlag;
	}

	@Column(name = "FCON_CUDE_TYPE")
	public Short getFconCudeType() {
		return this.fconCudeType;
	}

	public void setFconCudeType(Short fconCudeType) {
		this.fconCudeType = fconCudeType;
	}

	@Column(name = "FCON_INWARE_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getFconInwareGrossWeight() {
		return this.fconInwareGrossWeight;
	}

	public void setFconInwareGrossWeight(Double fconInwareGrossWeight) {
		this.fconInwareGrossWeight = fconInwareGrossWeight;
	}

	@Column(name = "FCON_SUM_LIST_FLAG")
	public Short getFconSumListFlag() {
		return this.fconSumListFlag;
	}

	public void setFconSumListFlag(Short fconSumListFlag) {
		this.fconSumListFlag = fconSumListFlag;
	}

	@Column(name = "FCON_COPY_FLAG")
	public Short getFconCopyFlag() {
		return this.fconCopyFlag;
	}

	public void setFconCopyFlag(Short fconCopyFlag) {
		this.fconCopyFlag = fconCopyFlag;
	}

	@Column(name = "FCON_EXPE_CONFIRM_FLAG")
	public Short getFconExpeConfirmFlag() {
		return this.fconExpeConfirmFlag;
	}

	public void setFconExpeConfirmFlag(Short fconExpeConfirmFlag) {
		this.fconExpeConfirmFlag = fconExpeConfirmFlag;
	}

	@Column(name = "FCON_CUDE_DOC_FLAG")
	public Short getFconCudeDocFlag() {
		return this.fconCudeDocFlag;
	}

	public void setFconCudeDocFlag(Short fconCudeDocFlag) {
		this.fconCudeDocFlag = fconCudeDocFlag;
	}

	@Column(name = "FCON_PHOTO_FLAG")
	public Short getFconPhotoFlag() {
		return this.fconPhotoFlag;
	}

	public void setFconPhotoFlag(Short fconPhotoFlag) {
		this.fconPhotoFlag = fconPhotoFlag;
	}

	@Column(name = "FCON_MATES_RECEIPT_FLAG")
	public Short getFconMatesReceiptFlag() {
		return this.fconMatesReceiptFlag;
	}

	public void setFconMatesReceiptFlag(Short fconMatesReceiptFlag) {
		this.fconMatesReceiptFlag = fconMatesReceiptFlag;
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

}