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
public abstract class AbstractFCustomsDeclaration extends BaseDomain {

	private static final long serialVersionUID = -5933549255106085418L;
	private Integer cudeId;
	private Integer version;
	private String cudeNo;
	private Integer consId;
	private String consNo;
	private Integer consMasterId;
	private String consMasterNo;
	private String consBizClass;
	private String consBizType;
	private Integer custId;
	private String custName;
	private Integer cudeVendorId;
	private String cudeVendorName;
	private String cudeVendorContact;
	private String cudeVendorTel;
	private String cudePreNo;
	private String cudeCustomsNo;
	private String cudePol;
	private String cudePolEn;
	private String cudePod;
	private String cudePodEn;
	private String cudeRecordNo;
	private Date cudeEntryDate;
	private Date cudeDeclarDate;
	private String cudeCustomer;
	private String cudeCargoCompany;
	private String cudeShipper;
	private String cudeConsignee;
	private String tratCode;
	private String cudeConveyance;
	private String cudeBlNo;
	private String trtyCode;
	private String letyCode;
	private String exseCode;
	private String exseCodeEn;
	private String usagName;
	private String cudeCertificateNo;
	private String cudeLevyPercent;
	private String cudeApprovalNo;
	private String consContractNo;
	private String cudeContainerNo;
	private String cudeLoadCountry;
	private String cudeDischargeCountry;
	private String cudePortForeign;
	private String cudePortForeignEn;
	private String cudePlace;
	private String cudePlaceEn;
	private String trteCode;
	private String trteCodeEn;
	private String cudeFreight;
	private String cudeInsurance;
	private String cudeCharge;
	private String cudePackageNum;
	private String packCode;
	private String packCodeEn;
	private String cudeGrossWeight;
	private String cudeNetWeight;
	private String cudeManu;
	private String cudeMarks;
	private String cudeAttachment;
	private String cudeTaxLevy;
	private String cudeCreator;
	private String cudeCompany;
	private String cudeCompanyAddress;
	private String cudeCompanyTel;
	private String cudeCompanyZip;
	private String cudeDeclarent;
	private Date cudeCreateDate;
	private Date cudeDocSendDate;
	private Date cudeDocRecvDate;
	private Date cudeRefundDate;
	private Date cudeReleaseDate;
	private Date cudeShutoutDate;
	private Integer cudeDocNum;
	private String cudeDocColor;
	private String cudeInvoiceNo;
	private Date cudeInvoiceDate;
	private String cudeContractNo;
	private Date cudeContractDate;
	private Integer cudeRefundDocNum;
	private Short cudeTransitedFlag;
	private Short cudeRefundFlag;
	private Short cudeInspectionFlag;
	private Short cudeOpenFlag;
	private Short cudeStatus;
	private Short cudeDocStatus;
	private Integer cudeDocReleaseBy;
	private Date cudeDocReleaseTime;
	private String cudeDocReceiver;
	private String cudeType;
	private String cudeTotalSay;
	private Double cudeTotalAmount;
	private String cudeTotalAmountCap;
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

	private Short cudeTransFlag;
	private Short cudePartialFlag;
	private Date cudeShipDateF;
	private Date cudeShipDateT;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CUDE_ID", unique = true, nullable = false)
	public Integer getCudeId() {
		return this.cudeId;
	}

	public void setCudeId(Integer cudeId) {
		this.cudeId = cudeId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUDE_NO", length = 32)
	public String getCudeNo() {
		return this.cudeNo;
	}

	public void setCudeNo(String cudeNo) {
		this.cudeNo = cudeNo;
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
		return consMasterId;
	}

	public void setConsMasterId(Integer consMasterId) {
		this.consMasterId = consMasterId;
	}

	@Column(name = "CONS_MASTER_NO", length = 32)
	public String getConsMasterNo() {
		return consMasterNo;
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

	@Column(name = "CUDE_VENDOR_ID")
	public Integer getCudeVendorId() {
		return this.cudeVendorId;
	}

	public void setCudeVendorId(Integer cudeVendorId) {
		this.cudeVendorId = cudeVendorId;
	}

	@Column(name = "CUDE_VENDOR_NAME", length = 64)
	public String getCudeVendorName() {
		return this.cudeVendorName;
	}

	public void setCudeVendorName(String cudeVendorName) {
		this.cudeVendorName = cudeVendorName;
	}

	@Column(name = "CUDE_VENDOR_CONTACT", length = 16)
	public String getCudeVendorContact() {
		return this.cudeVendorContact;
	}

	public void setCudeVendorContact(String cudeVendorContact) {
		this.cudeVendorContact = cudeVendorContact;
	}

	@Column(name = "CUDE_VENDOR_TEL", length = 16)
	public String getCudeVendorTel() {
		return this.cudeVendorTel;
	}

	public void setCudeVendorTel(String cudeVendorTel) {
		this.cudeVendorTel = cudeVendorTel;
	}

	@Column(name = "CUDE_PRE_NO", length = 32)
	public String getCudePreNo() {
		return this.cudePreNo;
	}

	public void setCudePreNo(String cudePreNo) {
		this.cudePreNo = cudePreNo;
	}

	@Column(name = "CUDE_CUSTOMS_NO", length = 32)
	public String getCudeCustomsNo() {
		return this.cudeCustomsNo;
	}

	public void setCudeCustomsNo(String cudeCustomsNo) {
		this.cudeCustomsNo = cudeCustomsNo;
	}

	@Column(name = "CUDE_POL", length = 32)
	public String getCudePol() {
		return this.cudePol;
	}

	public void setCudePol(String cudePol) {
		this.cudePol = cudePol;
	}

	@Column(name = "CUDE_POL_EN", length = 64)
	public String getCudePolEn() {
		return this.cudePolEn;
	}

	public void setCudePolEn(String cudePolEn) {
		this.cudePolEn = cudePolEn;
	}
	
	@Column(name = "CUDE_POD", length = 32)
	public String getCudePod() {
		return this.cudePod;
	}

	public void setCudePod(String cudePod) {
		this.cudePod = cudePod;
	}
	
	@Column(name = "CUDE_POD_EN", length = 64)
	public String getCudePodEn() {
		return this.cudePodEn;
	}

	public void setCudePodEn(String cudePodEn) {
		this.cudePodEn = cudePodEn;
	}
	
	@Column(name = "CUDE_RECORD_NO", length = 32)
	public String getCudeRecordNo() {
		return this.cudeRecordNo;
	}

	public void setCudeRecordNo(String cudeRecordNo) {
		this.cudeRecordNo = cudeRecordNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_ENTRY_DATE", length = 10)
	public Date getCudeEntryDate() {
		return this.cudeEntryDate;
	}

	public void setCudeEntryDate(Date cudeEntryDate) {
		this.cudeEntryDate = cudeEntryDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_DECLAR_DATE", length = 10)
	public Date getCudeDeclarDate() {
		return this.cudeDeclarDate;
	}

	public void setCudeDeclarDate(Date cudeDeclarDate) {
		this.cudeDeclarDate = cudeDeclarDate;
	}

	@Column(name = "CUDE_CUSTOMER", length = 200)
	public String getCudeCustomer() {
		return this.cudeCustomer;
	}

	public void setCudeCustomer(String cudeCustomer) {
		this.cudeCustomer = cudeCustomer;
	}

	@Column(name = "CUDE_CARGO_COMPANY", length = 200)
	public String getCudeCargoCompany() {
		return this.cudeCargoCompany;
	}

	public void setCudeCargoCompany(String cudeCargoCompany) {
		this.cudeCargoCompany = cudeCargoCompany;
	}

	
	@Column(name = "CUDE_SHIPPER", length = 500)
	public String getCudeShipper() {
		return this.cudeShipper;
	}

	public void setCudeShipper(String cudeShipper) {
		this.cudeShipper = cudeShipper;
	}

	@Column(name = "CUDE_CONSIGNEE", length = 500)
	public String getCudeConsignee() {
		return this.cudeConsignee;
	}

	public void setCudeConsignee(String cudeConsignee) {
		this.cudeConsignee = cudeConsignee;
	}
	
	@Column(name = "TRAT_CODE", length = 32)
	public String getTratCode() {
		return this.tratCode;
	}

	public void setTratCode(String tratCode) {
		this.tratCode = tratCode;
	}

	@Column(name = "CUDE_CONVEYANCE", length = 64)
	public String getCudeConveyance() {
		return this.cudeConveyance;
	}

	public void setCudeConveyance(String cudeConveyance) {
		this.cudeConveyance = cudeConveyance;
	}

	@Column(name = "CUDE_BL_NO", length = 32)
	public String getCudeBlNo() {
		return this.cudeBlNo;
	}

	public void setCudeBlNo(String cudeBlNo) {
		this.cudeBlNo = cudeBlNo;
	}

	@Column(name = "TRTY_CODE", length = 32)
	public String getTrtyCode() {
		return this.trtyCode;
	}

	public void setTrtyCode(String trtyCode) {
		this.trtyCode = trtyCode;
	}

	@Column(name = "LETY_CODE", length = 32)
	public String getLetyCode() {
		return this.letyCode;
	}

	public void setLetyCode(String letyCode) {
		this.letyCode = letyCode;
	}

	@Column(name = "EXSE_CODE", length = 32)
	public String getExseCode() {
		return this.exseCode;
	}

	public void setExseCode(String exseCode) {
		this.exseCode = exseCode;
	}

	@Column(name = "EXSE_CODE_EN", length = 32)
	public String getExseCodeEn() {
		return this.exseCodeEn;
	}

	public void setExseCodeEn(String exseCodeEn) {
		this.exseCodeEn = exseCodeEn;
	}
	
	@Column(name = "USAG_NAME", length = 32)
	public String getUsagName() {
		return this.usagName;
	}

	public void setUsagName(String usagName) {
		this.usagName = usagName;
	}

	@Column(name = "CUDE_CERTIFICATE_NO", length = 32)
	public String getCudeCertificateNo() {
		return this.cudeCertificateNo;
	}

	public void setCudeCertificateNo(String cudeCertificateNo) {
		this.cudeCertificateNo = cudeCertificateNo;
	}

	@Column(name = "CUDE_LEVY_PERCENT", length = 32)
	public String getCudeLevyPercent() {
		return this.cudeLevyPercent;
	}

	public void setCudeLevyPercent(String cudeLevyPercent) {
		this.cudeLevyPercent = cudeLevyPercent;
	}

	@Column(name = "CUDE_APPROVAL_NO", length = 32)
	public String getCudeApprovalNo() {
		return this.cudeApprovalNo;
	}

	public void setCudeApprovalNo(String cudeApprovalNo) {
		this.cudeApprovalNo = cudeApprovalNo;
	}

	@Column(name = "CONS_CONTRACT_NO", length = 32)
	public String getConsContractNo() {
		return this.consContractNo;
	}

	public void setConsContractNo(String consContractNo) {
		this.consContractNo = consContractNo;
	}

	@Column(name = "CUDE_CONTAINER_NO", length = 500)
	public String getCudeContainerNo() {
		return this.cudeContainerNo;
	}

	public void setCudeContainerNo(String cudeContainerNo) {
		this.cudeContainerNo = cudeContainerNo;
	}

	@Column(name = "CUDE_LOAD_COUNTRY", length = 64)
	public String getCudeLoadCountry() {
		return this.cudeLoadCountry;
	}

	public void setCudeLoadCountry(String cudeLoadCountry) {
		this.cudeLoadCountry = cudeLoadCountry;
	}

	@Column(name = "CUDE_DISCHARGE_COUNTRY", length = 64)
	public String getCudeDischargeCountry() {
		return this.cudeDischargeCountry;
	}

	public void setCudeDischargeCountry(String cudeDischargeCountry) {
		this.cudeDischargeCountry = cudeDischargeCountry;
	}	
	
	@Column(name = "CUDE_PLACE", length = 32)
	public String getCudePlace() {
		return this.cudePlace;
	}

	public void setCudePlace(String cudePlace) {
		this.cudePlace = cudePlace;
	}

	@Column(name = "CUDE_PLACE_EN", length = 64)
	public String getCudePlaceEn() {
		return this.cudePlaceEn;
	}

	public void setCudePlaceEn(String cudePlaceEn) {
		this.cudePlaceEn = cudePlaceEn;
	}
	
	@Column(name = "TRTE_CODE", length = 32)
	public String getTrteCode() {
		return this.trteCode;
	}

	public void setTrteCode(String trteCode) {
		this.trteCode = trteCode;
	}

	@Column(name = "TRTE_CODE_EN", length = 32)
	public String getTrteCodeEn() {
		return this.trteCodeEn;
	}

	public void setTrteCodeEn(String trteCodeEn) {
		this.trteCodeEn = trteCodeEn;
	}
	
	@Column(name = "CUDE_FREIGHT", length = 32)
	public String getCudeFreight() {
		return this.cudeFreight;
	}

	public void setCudeFreight(String cudeFreight) {
		this.cudeFreight = cudeFreight;
	}

	@Column(name = "CUDE_INSURANCE", length = 32)
	public String getCudeInsurance() {
		return this.cudeInsurance;
	}

	public void setCudeInsurance(String cudeInsurance) {
		this.cudeInsurance = cudeInsurance;
	}

	@Column(name = "CUDE_CHARGE", length = 32)
	public String getCudeCharge() {
		return this.cudeCharge;
	}

	public void setCudeCharge(String cudeCharge) {
		this.cudeCharge = cudeCharge;
	}

	@Column(name = "CUDE_PACKAGE_NUM", length = 32)
	public String getCudePackageNum() {
		return this.cudePackageNum;
	}

	public void setCudePackageNum(String cudePackageNum) {
		this.cudePackageNum = cudePackageNum;
	}

	@Column(name = "PACK_CODE", length = 32)
	public String getPackCode() {
		return this.packCode;
	}

	public void setPackCode(String packCode) {
		this.packCode = packCode;
	}

	@Column(name = "PACK_CODE_EN", length = 32)
	public String getPackCodeEn() {
		return this.packCodeEn;
	}

	public void setPackCodeEn(String packCodeEn) {
		this.packCodeEn = packCodeEn;
	}
	
	@Column(name = "CUDE_GROSS_WEIGHT", length = 32)
	public String getCudeGrossWeight() {
		return this.cudeGrossWeight;
	}

	public void setCudeGrossWeight(String cudeGrossWeight) {
		this.cudeGrossWeight = cudeGrossWeight;
	}

	@Column(name = "CUDE_NET_WEIGHT", length = 32)
	public String getCudeNetWeight() {
		return this.cudeNetWeight;
	}

	public void setCudeNetWeight(String cudeNetWeight) {
		this.cudeNetWeight = cudeNetWeight;
	}

	@Column(name = "CUDE_MANU", length = 500)
	public String getCudeManu() {
		return this.cudeManu;
	}

	public void setCudeManu(String cudeManu) {
		this.cudeManu = cudeManu;
	}

	@Column(name = "CUDE_MARKS", length = 500)
	public String getCudeMarks() {
		return this.cudeMarks;
	}

	public void setCudeMarks(String cudeMarks) {
		this.cudeMarks = cudeMarks;
	}

	@Column(name = "CUDE_ATTACHMENT", length = 500)
	public String getCudeAttachment() {
		return this.cudeAttachment;
	}

	public void setCudeAttachment(String cudeAttachment) {
		this.cudeAttachment = cudeAttachment;
	}

	@Column(name = "CUDE_TAX_LEVY", length = 500)
	public String getCudeTaxLevy() {
		return this.cudeTaxLevy;
	}

	public void setCudeTaxLevy(String cudeTaxLevy) {
		this.cudeTaxLevy = cudeTaxLevy;
	}

	@Column(name = "CUDE_CREATOR", length = 16)
	public String getCudeCreator() {
		return this.cudeCreator;
	}

	public void setCudeCreator(String cudeCreator) {
		this.cudeCreator = cudeCreator;
	}

	@Column(name = "CUDE_COMPANY", length = 64)
	public String getCudeCompany() {
		return this.cudeCompany;
	}

	public void setCudeCompany(String cudeCompany) {
		this.cudeCompany = cudeCompany;
	}

	@Column(name = "CUDE_COMPANY_ADDRESS", length = 200)
	public String getCudeCompanyAddress() {
		return this.cudeCompanyAddress;
	}

	public void setCudeCompanyAddress(String cudeCompanyAddress) {
		this.cudeCompanyAddress = cudeCompanyAddress;
	}

	@Column(name = "CUDE_COMPANY_TEL", length = 32)
	public String getCudeCompanyTel() {
		return this.cudeCompanyTel;
	}

	public void setCudeCompanyTel(String cudeCompanyTel) {
		this.cudeCompanyTel = cudeCompanyTel;
	}

	@Column(name = "CUDE_COMPANY_ZIP", length = 16)
	public String getCudeCompanyZip() {
		return this.cudeCompanyZip;
	}

	public void setCudeCompanyZip(String cudeCompanyZip) {
		this.cudeCompanyZip = cudeCompanyZip;
	}

	@Column(name = "CUDE_DECLARENT", length = 16)
	public String getCudeDeclarent() {
		return this.cudeDeclarent;
	}

	public void setCudeDeclarent(String cudeDeclarent) {
		this.cudeDeclarent = cudeDeclarent;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_CREATE_DATE", length = 10)
	public Date getCudeCreateDate() {
		return this.cudeCreateDate;
	}

	public void setCudeCreateDate(Date cudeCreateDate) {
		this.cudeCreateDate = cudeCreateDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_DOC_SEND_DATE", length = 10)
	public Date getCudeDocSendDate() {
		return this.cudeDocSendDate;
	}

	public void setCudeDocSendDate(Date cudeDocSendDate) {
		this.cudeDocSendDate = cudeDocSendDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_DOC_RECV_DATE", length = 10)
	public Date getCudeDocRecvDate() {
		return this.cudeDocRecvDate;
	}

	public void setCudeDocRecvDate(Date cudeDocRecvDate) {
		this.cudeDocRecvDate = cudeDocRecvDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_REFUND_DATE", length = 10)
	public Date getCudeRefundDate() {
		return this.cudeRefundDate;
	}

	public void setCudeRefundDate(Date cudeRefundDate) {
		this.cudeRefundDate = cudeRefundDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_RELEASE_DATE", length = 10)
	public Date getCudeReleaseDate() {
		return this.cudeReleaseDate;
	}

	public void setCudeReleaseDate(Date cudeReleaseDate) {
		this.cudeReleaseDate = cudeReleaseDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_SHUTOUT_DATE", length = 10)
	public Date getCudeShutoutDate() {
		return this.cudeShutoutDate;
	}

	public void setCudeShutoutDate(Date cudeShutoutDate) {
		this.cudeShutoutDate = cudeShutoutDate;
	}

	@Column(name = "CUDE_INVOICE_NO", length = 32)
	public String getCudeInvoiceNo() {
		return this.cudeInvoiceNo;
	}

	public void setCudeInvoiceNo(String cudeInvoiceNo) {
		this.cudeInvoiceNo = cudeInvoiceNo;
	}
	
	@Column(name = "CUDE_CONTRACT_NO", length = 32)
	public String getCudeContractNo() {
		return this.cudeContractNo;
	}

	public void setCudeContractNo(String cudeContractNo) {
		this.cudeContractNo = cudeContractNo;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_INVOICE_DATE", length = 10)
	public Date getCudeInvoiceDate() {
		return this.cudeInvoiceDate;
	}

	public void setCudeInvoiceDate(Date cudeInvoiceDate) {
		this.cudeInvoiceDate = cudeInvoiceDate;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_CONTRACT_DATE", length = 10)
	public Date getCudeContractDate() {
		return this.cudeContractDate;
	}

	public void setCudeContractDate(Date cudeContractDate) {
		this.cudeContractDate = cudeContractDate;
	}
	
	@Column(name = "CUDE_DOC_NUM")
	public Integer getCudeDocNum() {
		return this.cudeDocNum;
	}

	public void setCudeDocNum(Integer cudeDocNum) {
		this.cudeDocNum = cudeDocNum;
	}

	@Column(name = "CUDE_DOC_COLOR", length = 1)
	public String getCudeDocColor() {
		return this.cudeDocColor;
	}

	public void setCudeDocColor(String cudeDocColor) {
		this.cudeDocColor = cudeDocColor;
	}

	@Column(name = "CUDE_REFUND_DOC_NUM")
	public Integer getCudeRefundDocNum() {
		return this.cudeRefundDocNum;
	}

	public void setCudeRefundDocNum(Integer cudeRefundDocNum) {
		this.cudeRefundDocNum = cudeRefundDocNum;
	}

	@Column(name = "CUDE_TRANSITED_FLAG")
	public Short getCudeTransitedFlag() {
		return this.cudeTransitedFlag;
	}

	public void setCudeTransitedFlag(Short cudeTransitedFlag) {
		this.cudeTransitedFlag = cudeTransitedFlag;
	}

	@Column(name = "CUDE_REFUND_FLAG")
	public Short getCudeRefundFlag() {
		return this.cudeRefundFlag;
	}

	public void setCudeRefundFlag(Short cudeRefundFlag) {
		this.cudeRefundFlag = cudeRefundFlag;
	}

	@Column(name = "CUDE_INSPECTION_FLAG")
	public Short getCudeInspectionFlag() {
		return this.cudeInspectionFlag;
	}

	public void setCudeInspectionFlag(Short cudeInspectionFlag) {
		this.cudeInspectionFlag = cudeInspectionFlag;
	}

	@Column(name = "CUDE_OPEN_FLAG")
	public Short getCudeOpenFlag() {
		return this.cudeOpenFlag;
	}

	public void setCudeOpenFlag(Short cudeOpenFlag) {
		this.cudeOpenFlag = cudeOpenFlag;
	}

	@Column(name = "CUDE_STATUS")
	public Short getCudeStatus() {
		return this.cudeStatus;
	}

	public void setCudeStatus(Short cudeStatus) {
		this.cudeStatus = cudeStatus;
	}

	@Column(name = "CUDE_DOC_STATUS")
	public Short getCudeDocStatus() {
		return this.cudeDocStatus;
	}

	public void setCudeDocStatus(Short cudeDocStatus) {
		this.cudeDocStatus = cudeDocStatus;
	}

	@Column(name = "CUDE_DOC_RELEASE_BY")
	public Integer getCudeDocReleaseBy() {
		return this.cudeDocReleaseBy;
	}

	public void setCudeDocReleaseBy(Integer cudeDocReleaseBy) {
		this.cudeDocReleaseBy = cudeDocReleaseBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CUDE_DOC_RELEASE_TIME", length = 19)
	public Date getCudeDocReleaseTime() {
		return this.cudeDocReleaseTime;
	}

	public void setCudeDocReleaseTime(Date cudeDocReleaseTime) {
		this.cudeDocReleaseTime = cudeDocReleaseTime;
	}

	@Column(name = "CUDE_DOC_RECEIVER", length = 32)
	public String getCudeDocReceiver() {
		return this.cudeDocReceiver;
	}

	public void setCudeDocReceiver(String cudeDocReceiver) {
		this.cudeDocReceiver = cudeDocReceiver;
	}

	@Column(name = "CUDE_TYPE")
	public String getCudeType() {
		return this.cudeType;
	}

	public void setCudeType(String cudeType) {
		this.cudeType = cudeType;
	}

	@Column(name = "CUDE_TOTAL_SAY", length = 200)
	public String getCudeTotalSay() {
		return this.cudeTotalSay;
	}

	public void setCudeTotalSay(String cudeTotalSay) {
		this.cudeTotalSay = cudeTotalSay;
	}
	
	@Column(name = "CUDE_TOTAL_AMOUNT")
	public Double getCudeTotalAmount() {
		return this.cudeTotalAmount;
	}

	public void setCudeTotalAmount(Double cudeTotalAmount) {
		this.cudeTotalAmount = cudeTotalAmount;
	}
	
	@Column(name = "CUDE_TOTAL_AMOUNT_CAP")
	public String getCudeTotalAmountCap() {
		return this.cudeTotalAmountCap;
	}

	public void setCudeTotalAmountCap(String cudeTotalAmountCap) {
		this.cudeTotalAmountCap = cudeTotalAmountCap;
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

	@Column(name = "CUDE_TRANS_FLAG")
	public Short getCudeTransFlag() {
		return this.cudeTransFlag;
	}

	public void setCudeTransFlag(Short cudeTransFlag) {
		this.cudeTransFlag = cudeTransFlag;
	}

	@Column(name = "CUDE_PARTIAL_FLAG")
	public Short getCudePartialFlag() {
		return this.cudePartialFlag;
	}

	public void setCudePartialFlag(Short cudePartialFlag) {
		this.cudePartialFlag = cudePartialFlag;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_SHIP_DATE_F", length = 10)
	public Date getCudeShipDateF() {
		return cudeShipDateF;
	}

	public void setCudeShipDateF(Date cudeShipDateF) {
		this.cudeShipDateF = cudeShipDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUDE_SHIP_DATE_T", length = 10)
	public Date getCudeShipDateT() {
		return cudeShipDateT;
	}

	public void setCudeShipDateT(Date cudeShipDateT) {
		this.cudeShipDateT = cudeShipDateT;
	}
}