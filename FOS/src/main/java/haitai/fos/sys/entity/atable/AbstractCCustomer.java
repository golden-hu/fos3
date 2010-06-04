package haitai.fos.sys.entity.atable;

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
public abstract class AbstractCCustomer extends BaseDomain {

	private static final long serialVersionUID = 5989628325096274731L;
	private Integer custId;
	private Integer version;
	private String custCode;
	private String custClass;
	private String custNameCn;
	private String custSnameCn;
	private String custNameEn;
	private String custSnameEn;
	private String custZip;
	private String custTel;
	private String custTel2;
	private String custFax;
	private String custFax2;
	private String custEmail;
	private String custUrl;
	private String custContact;
	private String custAddress;
	private String custAddress2;
	private String custAddress3;
	private Integer custIndustry;
	private Integer custType;
	private String custInvoiceHeader;
	private String custRemarks;
	private String custBankCny;
	private String custAccountCny;
	private String custBankUsd;
	private String custAccountUsd;
	private String custShipTo;
	private String custChargeTo;
	private String custShipper;
	private Integer custCreditDay;
	private Integer custCreditAmount;
	private String custActive;
	private Integer cucaId;
	private String counCode;
	private String custProvince;
	private String custCity;
	private Short custArFlag;
	private Short custApFlag;
	private Short custCarrierFlag;
	private Short custBookingAgencyFlag;
	private Short custCfsFlag;
	private Short custWarehouseFlag;
	private Short custTrackFlag;
	private Short custInspectionFlag;
	private Short custCustomFlag;
	private Short custInsuranceFlag;
	private Short custContainerFlag;
	private Short custOverseaAgencyFlag;
	private Short custDoAgencyFlag;
	private Short custBookerFlag;
	private Short custShipperFlag;
	private Short custConsigneeFlag;
	private Short custNotifyFlag;
	private Short custAirFlag;
	private Short custExpressFlag;
	private Short custSalesId;
	private String custSalesName;
	private Integer grouId;
	private Integer userId;
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
	@Column(name = "CUST_ID", unique = true, nullable = false)
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUST_CODE", nullable = false, length = 32)
	public String getCustCode() {
		return this.custCode;
	}

	public void setCustCode(String custCode) {
		this.custCode = custCode;
	}

	@Column(name = "CUST_CLASS", length = 1)
	public String getCustClass() {
		return this.custClass;
	}

	public void setCustClass(String custClass) {
		this.custClass = custClass;
	}

	@Column(name = "CUST_NAME_CN", nullable = false, length = 64)
	public String getCustNameCn() {
		return this.custNameCn;
	}

	public void setCustNameCn(String custNameCn) {
		this.custNameCn = custNameCn;
	}

	@Column(name = "CUST_SNAME_CN", length = 32)
	public String getCustSnameCn() {
		return this.custSnameCn;
	}

	public void setCustSnameCn(String custSnameCn) {
		this.custSnameCn = custSnameCn;
	}

	@Column(name = "CUST_NAME_EN", length = 64)
	public String getCustNameEn() {
		return this.custNameEn;
	}

	public void setCustNameEn(String custNameEn) {
		this.custNameEn = custNameEn;
	}

	@Column(name = "CUST_SNAME_EN", length = 32)
	public String getCustSnameEn() {
		return this.custSnameEn;
	}

	public void setCustSnameEn(String custSnameEn) {
		this.custSnameEn = custSnameEn;
	}

	@Column(name = "CUST_ZIP", length = 16)
	public String getCustZip() {
		return this.custZip;
	}

	public void setCustZip(String custZip) {
		this.custZip = custZip;
	}

	@Column(name = "CUST_TEL", length = 32)
	public String getCustTel() {
		return this.custTel;
	}

	public void setCustTel(String custTel) {
		this.custTel = custTel;
	}

	@Column(name = "CUST_TEL2", length = 32)
	public String getCustTel2() {
		return this.custTel2;
	}

	public void setCustTel2(String custTel2) {
		this.custTel2 = custTel2;
	}

	@Column(name = "CUST_FAX", length = 32)
	public String getCustFax() {
		return this.custFax;
	}

	public void setCustFax(String custFax) {
		this.custFax = custFax;
	}

	@Column(name = "CUST_FAX2", length = 32)
	public String getCustFax2() {
		return this.custFax2;
	}

	public void setCustFax2(String custFax2) {
		this.custFax2 = custFax2;
	}

	@Column(name = "CUST_EMAIL", length = 64)
	public String getCustEmail() {
		return this.custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	@Column(name = "CUST_URL", length = 200)
	public String getCustUrl() {
		return this.custUrl;
	}

	public void setCustUrl(String custUrl) {
		this.custUrl = custUrl;
	}

	@Column(name = "CUST_CONTACT", length = 32)
	public String getCustContact() {
		return this.custContact;
	}

	public void setCustContact(String custContact) {
		this.custContact = custContact;
	}

	@Column(name = "CUST_ADDRESS", length = 200)
	public String getCustAddress() {
		return this.custAddress;
	}

	public void setCustAddress(String custAddress) {
		this.custAddress = custAddress;
	}

	@Column(name = "CUST_ADDRESS2", length = 200)
	public String getCustAddress2() {
		return this.custAddress2;
	}

	public void setCustAddress2(String custAddress2) {
		this.custAddress2 = custAddress2;
	}

	@Column(name = "CUST_ADDRESS3", length = 200)
	public String getCustAddress3() {
		return this.custAddress3;
	}

	public void setCustAddress3(String custAddress3) {
		this.custAddress3 = custAddress3;
	}

	@Column(name = "CUST_INDUSTRY")
	public Integer getCustIndustry() {
		return this.custIndustry;
	}

	public void setCustIndustry(Integer custIndustry) {
		this.custIndustry = custIndustry;
	}

	@Column(name = "CUST_TYPE")
	public Integer getCustType() {
		return this.custType;
	}

	public void setCustType(Integer custType) {
		this.custType = custType;
	}

	@Column(name = "CUST_INVOICE_HEADER", length = 255)
	public String getCustInvoiceHeader() {
		return this.custInvoiceHeader;
	}

	public void setCustInvoiceHeader(String custInvoiceHeader) {
		this.custInvoiceHeader = custInvoiceHeader;
	}

	@Column(name = "CUST_REMARKS", length = 500)
	public String getCustRemarks() {
		return this.custRemarks;
	}

	public void setCustRemarks(String custRemarks) {
		this.custRemarks = custRemarks;
	}

	@Column(name = "CUST_BANK_CNY", length = 32)
	public String getCustBankCny() {
		return this.custBankCny;
	}

	public void setCustBankCny(String custBankCny) {
		this.custBankCny = custBankCny;
	}

	@Column(name = "CUST_ACCOUNT_CNY", length = 32)
	public String getCustAccountCny() {
		return this.custAccountCny;
	}

	public void setCustAccountCny(String custAccountCny) {
		this.custAccountCny = custAccountCny;
	}

	@Column(name = "CUST_BANK_USD", length = 32)
	public String getCustBankUsd() {
		return this.custBankUsd;
	}

	public void setCustBankUsd(String custBankUsd) {
		this.custBankUsd = custBankUsd;
	}

	@Column(name = "CUST_ACCOUNT_USD", length = 32)
	public String getCustAccountUsd() {
		return this.custAccountUsd;
	}

	public void setCustAccountUsd(String custAccountUsd) {
		this.custAccountUsd = custAccountUsd;
	}

	@Column(name = "CUST_SHIP_TO", length = 200)
	public String getCustShipTo() {
		return this.custShipTo;
	}

	public void setCustShipTo(String custShipTo) {
		this.custShipTo = custShipTo;
	}

	@Column(name = "CUST_CHARGE_TO", length = 200)
	public String getCustChargeTo() {
		return this.custChargeTo;
	}

	public void setCustChargeTo(String custChargeTo) {
		this.custChargeTo = custChargeTo;
	}

	@Column(name = "CUST_SHIPPER", length = 500)
	public String getCustShipper() {
		return this.custShipper;
	}

	public void setCustShipper(String custShipper) {
		this.custShipper = custShipper;
	}

	@Column(name = "CUST_CREDIT_DAY")
	public Integer getCustCreditDay() {
		return this.custCreditDay;
	}

	public void setCustCreditDay(Integer custCreditDay) {
		this.custCreditDay = custCreditDay;
	}

	@Column(name = "CUST_CREDIT_AMOUNT")
	public Integer getCustCreditAmount() {
		return this.custCreditAmount;
	}

	public void setCustCreditAmount(Integer custCreditAmount) {
		this.custCreditAmount = custCreditAmount;
	}

	@Column(name = "CUST_ACTIVE", length = 1)
	public String getCustActive() {
		return this.custActive;
	}

	public void setCustActive(String custActive) {
		this.custActive = custActive;
	}

	@Column(name = "CUCA_ID")
	public Integer getCucaId() {
		return this.cucaId;
	}

	public void setCucaId(Integer cucaId) {
		this.cucaId = cucaId;
	}

	@Column(name = "COUN_CODE", length = 2)
	public String getCounCode() {
		return this.counCode;
	}

	public void setCounCode(String counCode) {
		this.counCode = counCode;
	}

	@Column(name = "CUST_PROVINCE", length = 32)
	public String getCustProvince() {
		return this.custProvince;
	}

	public void setCustProvince(String custProvince) {
		this.custProvince = custProvince;
	}

	@Column(name = "CUST_CITY", length = 32)
	public String getCustCity() {
		return this.custCity;
	}

	public void setCustCity(String custCity) {
		this.custCity = custCity;
	}

	@Column(name = "CUST_AR_FLAG")
	public Short getCustArFlag() {
		return this.custArFlag;
	}

	public void setCustArFlag(Short custArFlag) {
		this.custArFlag = custArFlag;
	}

	@Column(name = "CUST_AP_FLAG")
	public Short getCustApFlag() {
		return this.custApFlag;
	}

	public void setCustApFlag(Short custApFlag) {
		this.custApFlag = custApFlag;
	}

	@Column(name = "CUST_CARRIER_FLAG")
	public Short getCustCarrierFlag() {
		return this.custCarrierFlag;
	}

	public void setCustCarrierFlag(Short custCarrierFlag) {
		this.custCarrierFlag = custCarrierFlag;
	}

	@Column(name = "CUST_BOOKING_AGENCY_FLAG")
	public Short getCustBookingAgencyFlag() {
		return this.custBookingAgencyFlag;
	}

	public void setCustBookingAgencyFlag(Short custBookingAgencyFlag) {
		this.custBookingAgencyFlag = custBookingAgencyFlag;
	}

	@Column(name = "CUST_CFS_FLAG")
	public Short getCustCfsFlag() {
		return this.custCfsFlag;
	}

	public void setCustCfsFlag(Short custCfsFlag) {
		this.custCfsFlag = custCfsFlag;
	}

	@Column(name = "CUST_WAREHOUSE_FLAG")
	public Short getCustWarehouseFlag() {
		return this.custWarehouseFlag;
	}

	public void setCustWarehouseFlag(Short custWarehouseFlag) {
		this.custWarehouseFlag = custWarehouseFlag;
	}

	@Column(name = "CUST_TRACK_FLAG")
	public Short getCustTrackFlag() {
		return this.custTrackFlag;
	}

	public void setCustTrackFlag(Short custTrackFlag) {
		this.custTrackFlag = custTrackFlag;
	}

	@Column(name = "CUST_INSPECTION_FLAG")
	public Short getCustInspectionFlag() {
		return this.custInspectionFlag;
	}

	public void setCustInspectionFlag(Short custInspectionFlag) {
		this.custInspectionFlag = custInspectionFlag;
	}

	@Column(name = "CUST_CUSTOM_FLAG")
	public Short getCustCustomFlag() {
		return this.custCustomFlag;
	}

	public void setCustCustomFlag(Short custCustomFlag) {
		this.custCustomFlag = custCustomFlag;
	}

	@Column(name = "CUST_INSURANCE_FLAG")
	public Short getCustInsuranceFlag() {
		return this.custInsuranceFlag;
	}

	public void setCustInsuranceFlag(Short custInsuranceFlag) {
		this.custInsuranceFlag = custInsuranceFlag;
	}

	@Column(name = "CUST_CONTAINER_FLAG")
	public Short getCustContainerFlag() {
		return this.custContainerFlag;
	}

	public void setCustContainerFlag(Short custContainerFlag) {
		this.custContainerFlag = custContainerFlag;
	}

	@Column(name = "CUST_OVERSEA_AGENCY_FLAG")
	public Short getCustOverseaAgencyFlag() {
		return this.custOverseaAgencyFlag;
	}

	public void setCustOverseaAgencyFlag(Short custOverseaAgencyFlag) {
		this.custOverseaAgencyFlag = custOverseaAgencyFlag;
	}

	@Column(name = "CUST_DO_AGENCY_FLAG")
	public Short getCustDoAgencyFlag() {
		return this.custDoAgencyFlag;
	}

	public void setCustDoAgencyFlag(Short custDoAgencyFlag) {
		this.custDoAgencyFlag = custDoAgencyFlag;
	}

	@Column(name = "CUST_BOOKER_FLAG")
	public Short getCustBookerFlag() {
		return this.custBookerFlag;
	}

	public void setCustBookerFlag(Short custBookerFlag) {
		this.custBookerFlag = custBookerFlag;
	}

	@Column(name = "CUST_SHIPPER_FLAG")
	public Short getCustShipperFlag() {
		return this.custShipperFlag;
	}

	public void setCustShipperFlag(Short custShipperFlag) {
		this.custShipperFlag = custShipperFlag;
	}

	@Column(name = "CUST_CONSIGNEE_FLAG")
	public Short getCustConsigneeFlag() {
		return this.custConsigneeFlag;
	}

	public void setCustConsigneeFlag(Short custConsigneeFlag) {
		this.custConsigneeFlag = custConsigneeFlag;
	}

	@Column(name = "CUST_NOTIFY_FLAG")
	public Short getCustNotifyFlag() {
		return this.custNotifyFlag;
	}

	public void setCustNotifyFlag(Short custNotifyFlag) {
		this.custNotifyFlag = custNotifyFlag;
	}

	@Column(name = "CUST_AIR_FLAG")
	public Short getCustAirFlag() {
		return this.custAirFlag;
	}

	public void setCustAirFlag(Short custAirFlag) {
		this.custAirFlag = custAirFlag;
	}

	@Column(name = "CUST_EXPRESS_FLAG")
	public Short getCustExpressFlag() {
		return this.custExpressFlag;
	}

	public void setCustExpressFlag(Short custExpressFlag) {
		this.custExpressFlag = custExpressFlag;
	}

	@Column(name = "CUST_SALES_ID")
	public Short getCustSalesId() {
		return this.custSalesId;
	}

	public void setCustSalesId(Short custSalesId) {
		this.custSalesId = custSalesId;
	}

	@Column(name = "CUST_SALES_NAME", length = 32)
	public String getCustSalesName() {
		return this.custSalesName;
	}

	public void setCustSalesName(String custSalesName) {
		this.custSalesName = custSalesName;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	@Column(name = "ATTR8", length = 2000)
	public String getAttr8() {
		return this.attr8;
	}

	public void setAttr8(String attr8) {
		this.attr8 = attr8;
	}

	@Column(name = "ATTR9", length = 2000)
	public String getAttr9() {
		return this.attr9;
	}

	public void setAttr9(String attr9) {
		this.attr9 = attr9;
	}

	@Column(name = "ATTR10", length = 2000)
	public String getAttr10() {
		return this.attr10;
	}

	public void setAttr10(String attr10) {
		this.attr10 = attr10;
	}

}