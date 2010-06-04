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
public abstract class AbstractFRailwayBl extends BaseDomain {

	private static final long serialVersionUID = -6024494118235979254L;
	private Integer rablId;
	private Integer version;
	private String rablNo;
	private Integer consId;
	private String consNo;
	private String rablContractNo;
	private Integer custId;
	private String custName;
	private String rablShipper;
	private String rablConsignee;
	private String rablNotifyParty;
	private String rablShipperNotes;
	private String rablAgencyName;
	private String rablDeliveryPlace;
	private String rablStationD;
	private String rablStationT;
	private Date rablEtd;
	private String rablContainerNo;
	private String rablContainerNoO;
	private String rablContainerType;
	private String rablContainerDesc;
	private String rablContainerWeight;
	private String rablChargeRemarks;
	private String rablSealNo;
	private String rablSealNo2;
	private String rablRailwayNotes;
	private String rablHsCode;
	private Short rablSocFlag;
	private String rablInvoicePrice;
	private String rablCargoNameCn;
	private String rablCargoNameEn;
	private Short rablBulkFlag;
	private Short rablContainerStatus;
	private String rablReturnPlace;
	private String currCode;
	private String rablCountry;
	private String rablPackages;
	private Integer packId;
	private String packName;
	private String rablCargoMarks;
	private String rablGrossWeight;
	private String rablMeasurement;
	private String rablRemarks;
	private Short rablStatus;
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
	@Column(name = "RABL_ID", unique = true, nullable = false)
	public Integer getRablId() {
		return this.rablId;
	}

	public void setRablId(Integer rablId) {
		this.rablId = rablId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "RABL_NO", length = 32)
	public String getRablNo() {
		return this.rablNo;
	}

	public void setRablNo(String rablNo) {
		this.rablNo = rablNo;
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

	@Column(name = "RABL_CONTRACT_NO", length = 32)
	public String getRablContractNo() {
		return this.rablContractNo;
	}

	public void setRablContractNo(String rablContractNo) {
		this.rablContractNo = rablContractNo;
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

	@Column(name = "RABL_SHIPPER", length = 500)
	public String getRablShipper() {
		return this.rablShipper;
	}

	public void setRablShipper(String rablShipper) {
		this.rablShipper = rablShipper;
	}

	@Column(name = "RABL_CONSIGNEE", length = 500)
	public String getRablConsignee() {
		return this.rablConsignee;
	}

	public void setRablConsignee(String rablConsignee) {
		this.rablConsignee = rablConsignee;
	}

	@Column(name = "RABL_NOTIFY_PARTY", length = 500)
	public String getRablNotifyParty() {
		return this.rablNotifyParty;
	}

	public void setRablNotifyParty(String rablNotifyParty) {
		this.rablNotifyParty = rablNotifyParty;
	}

	@Column(name = "RABL_SHIPPER_NOTES", length = 500)
	public String getRablShipperNotes() {
		return this.rablShipperNotes;
	}

	public void setRablShipperNotes(String rablShipperNotes) {
		this.rablShipperNotes = rablShipperNotes;
	}

	@Column(name = "RABL_AGENCY_NAME", length = 64)
	public String getRablAgencyName() {
		return this.rablAgencyName;
	}

	public void setRablAgencyName(String rablAgencyName) {
		this.rablAgencyName = rablAgencyName;
	}

	@Column(name = "RABL_DELIVERY_PLACE", length = 200)
	public String getRablDeliveryPlace() {
		return this.rablDeliveryPlace;
	}

	public void setRablDeliveryPlace(String rablDeliveryPlace) {
		this.rablDeliveryPlace = rablDeliveryPlace;
	}

	@Column(name = "RABL_STATION_D", length = 200)
	public String getRablStationD() {
		return this.rablStationD;
	}

	public void setRablStationD(String rablStationD) {
		this.rablStationD = rablStationD;
	}

	@Column(name = "RABL_STATION_T", length = 200)
	public String getRablStationT() {
		return this.rablStationT;
	}

	public void setRablStationT(String rablStationT) {
		this.rablStationT = rablStationT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "RABL_ETD", length = 10)
	public Date getRablEtd() {
		return this.rablEtd;
	}

	public void setRablEtd(Date rablEtd) {
		this.rablEtd = rablEtd;
	}

	@Column(name = "RABL_CONTAINER_NO", length = 16)
	public String getRablContainerNo() {
		return this.rablContainerNo;
	}

	public void setRablContainerNo(String rablContainerNo) {
		this.rablContainerNo = rablContainerNo;
	}

	@Column(name = "RABL_CONTAINER_NO_O", length = 16)
	public String getRablContainerNoO() {
		return this.rablContainerNoO;
	}

	public void setRablContainerNoO(String rablContainerNoO) {
		this.rablContainerNoO = rablContainerNoO;
	}

	@Column(name = "RABL_CONTAINER_TYPE", length = 16)
	public String getRablContainerType() {
		return this.rablContainerType;
	}

	public void setRablContainerType(String rablContainerType) {
		this.rablContainerType = rablContainerType;
	}

	@Column(name = "RABL_CONTAINER_DESC", length = 500)
	public String getRablContainerDesc() {
		return this.rablContainerDesc;
	}

	public void setRablContainerDesc(String rablContainerDesc) {
		this.rablContainerDesc = rablContainerDesc;
	}

	@Column(name = "RABL_CONTAINER_WEIGHT", length = 32)
	public String getRablContainerWeight() {
		return this.rablContainerWeight;
	}

	public void setRablContainerWeight(String rablContainerWeight) {
		this.rablContainerWeight = rablContainerWeight;
	}

	@Column(name = "RABL_CHARGE_REMARKS", length = 500)
	public String getRablChargeRemarks() {
		return this.rablChargeRemarks;
	}

	public void setRablChargeRemarks(String rablChargeRemarks) {
		this.rablChargeRemarks = rablChargeRemarks;
	}

	@Column(name = "RABL_SEAL_NO", length = 64)
	public String getRablSealNo() {
		return this.rablSealNo;
	}

	public void setRablSealNo(String rablSealNo) {
		this.rablSealNo = rablSealNo;
	}

	@Column(name = "RABL_SEAL_NO2", length = 64)
	public String getRablSealNo2() {
		return this.rablSealNo2;
	}

	public void setRablSealNo2(String rablSealNo2) {
		this.rablSealNo2 = rablSealNo2;
	}

	@Column(name = "RABL_RAILWAY_NOTES", length = 500)
	public String getRablRailwayNotes() {
		return this.rablRailwayNotes;
	}

	public void setRablRailwayNotes(String rablRailwayNotes) {
		this.rablRailwayNotes = rablRailwayNotes;
	}

	@Column(name = "RABL_HS_CODE", length = 32)
	public String getRablHsCode() {
		return this.rablHsCode;
	}

	public void setRablHsCode(String rablHsCode) {
		this.rablHsCode = rablHsCode;
	}

	@Column(name = "RABL_SOC_FLAG")
	public Short getRablSocFlag() {
		return this.rablSocFlag;
	}

	public void setRablSocFlag(Short rablSocFlag) {
		this.rablSocFlag = rablSocFlag;
	}

	@Column(name = "RABL_INVOICE_PRICE", length = 32)
	public String getRablInvoicePrice() {
		return this.rablInvoicePrice;
	}

	public void setRablInvoicePrice(String rablInvoicePrice) {
		this.rablInvoicePrice = rablInvoicePrice;
	}

	@Column(name = "RABL_CARGO_NAME_CN", length = 500)
	public String getRablCargoNameCn() {
		return this.rablCargoNameCn;
	}

	public void setRablCargoNameCn(String rablCargoNameCn) {
		this.rablCargoNameCn = rablCargoNameCn;
	}

	@Column(name = "RABL_CARGO_NAME_EN", length = 500)
	public String getRablCargoNameEn() {
		return this.rablCargoNameEn;
	}

	public void setRablCargoNameEn(String rablCargoNameEn) {
		this.rablCargoNameEn = rablCargoNameEn;
	}

	@Column(name = "RABL_BULK_FLAG")
	public Short getRablBulkFlag() {
		return this.rablBulkFlag;
	}

	public void setRablBulkFlag(Short rablBulkFlag) {
		this.rablBulkFlag = rablBulkFlag;
	}

	@Column(name = "RABL_CONTAINER_STATUS")
	public Short getRablContainerStatus() {
		return this.rablContainerStatus;
	}

	public void setRablContainerStatus(Short rablContainerStatus) {
		this.rablContainerStatus = rablContainerStatus;
	}

	@Column(name = "RABL_RETURN_PLACE", length = 64)
	public String getRablReturnPlace() {
		return this.rablReturnPlace;
	}

	public void setRablReturnPlace(String rablReturnPlace) {
		this.rablReturnPlace = rablReturnPlace;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "RABL_COUNTRY", length = 2)
	public String getRablCountry() {
		return this.rablCountry;
	}

	public void setRablCountry(String rablCountry) {
		this.rablCountry = rablCountry;
	}

	@Column(name = "RABL_PACKAGES", length = 64)
	public String getRablPackages() {
		return this.rablPackages;
	}

	public void setRablPackages(String rablPackages) {
		this.rablPackages = rablPackages;
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

	@Column(name = "RABL_CARGO_MARKS", length = 500)
	public String getRablCargoMarks() {
		return this.rablCargoMarks;
	}

	public void setRablCargoMarks(String rablCargoMarks) {
		this.rablCargoMarks = rablCargoMarks;
	}

	@Column(name = "RABL_GROSS_WEIGHT", length = 64)
	public String getRablGrossWeight() {
		return this.rablGrossWeight;
	}

	public void setRablGrossWeight(String rablGrossWeight) {
		this.rablGrossWeight = rablGrossWeight;
	}

	@Column(name = "RABL_MEASUREMENT", length = 64)
	public String getRablMeasurement() {
		return this.rablMeasurement;
	}

	public void setRablMeasurement(String rablMeasurement) {
		this.rablMeasurement = rablMeasurement;
	}

	@Column(name = "RABL_REMARKS", length = 500)
	public String getRablRemarks() {
		return this.rablRemarks;
	}

	public void setRablRemarks(String rablRemarks) {
		this.rablRemarks = rablRemarks;
	}

	@Column(name = "RABL_STATUS")
	public Short getRablStatus() {
		return this.rablStatus;
	}

	public void setRablStatus(Short rablStatus) {
		this.rablStatus = rablStatus;
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