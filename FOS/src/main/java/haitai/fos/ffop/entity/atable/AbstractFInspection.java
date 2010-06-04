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
public abstract class AbstractFInspection extends BaseDomain {

	private static final long serialVersionUID = 3526199414632874698L;
	private Integer inspId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private String inspNo;
	private String inspRefNo;
	private Integer inspVendorId;
	private String inspVendorName;
	private String inspVendorContact;
	private String inspVendorTel;
	private Date inspDate;
	private String inspShipperEn;
	private String inspShipperCn;
	private String inspConsigneeEn;
	private String inspConsigneeCn;
	private String inspCargoName;
	private String inspHsNo;
	private String inspMadeIn;
	private String inspNum;
	private String inspValue;
	private String inspPackages;
	private String inspConveyance;
	private String inspTradeType;
	private String inspCargoAddress;
	private String inspContractNo;
	private String inspCreditNo;
	private String inspUsage;
	private Date inspShippingDate;
	private Date inspClaimDate;
	private String inspTradeCountry;
	private String inspCertificateNo;
	private String inspPol;
	private String inspPot;
	private String inspPod;
	private String inspRegisterNo;
	private String inspContainerInfo;
	private String inspSpecialTerm;
	private String inspMarks;
	private Date inspReceiveDate;
	private String inspReceiver;
	private Short inspStatus;
	private String inspPassNo;
	private String inspNoteNo;
	private Date inspStartDate;
	private Date inspCompleteDate;
	private Short inspCheckFlag;
	private String inspRemarks;
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
	@Column(name = "INSP_ID", unique = true, nullable = false)
	public Integer getInspId() {
		return this.inspId;
	}

	public void setInspId(Integer inspId) {
		this.inspId = inspId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
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

	@Column(name = "INSP_NO", length = 32)
	public String getInspNo() {
		return this.inspNo;
	}

	public void setInspNo(String inspNo) {
		this.inspNo = inspNo;
	}

	@Column(name = "INSP_REF_NO", length = 32)
	public String getInspRefNo() {
		return this.inspRefNo;
	}

	public void setInspRefNo(String inspRefNo) {
		this.inspRefNo = inspRefNo;
	}

	@Column(name = "INSP_VENDOR_ID")
	public Integer getInspVendorId() {
		return this.inspVendorId;
	}

	public void setInspVendorId(Integer inspVendorId) {
		this.inspVendorId = inspVendorId;
	}

	@Column(name = "INSP_VENDOR_NAME", length = 64)
	public String getInspVendorName() {
		return this.inspVendorName;
	}

	public void setInspVendorName(String inspVendorName) {
		this.inspVendorName = inspVendorName;
	}

	@Column(name = "INSP_VENDOR_CONTACT", length = 16)
	public String getInspVendorContact() {
		return this.inspVendorContact;
	}

	public void setInspVendorContact(String inspVendorContact) {
		this.inspVendorContact = inspVendorContact;
	}

	@Column(name = "INSP_VENDOR_TEL", length = 16)
	public String getInspVendorTel() {
		return this.inspVendorTel;
	}

	public void setInspVendorTel(String inspVendorTel) {
		this.inspVendorTel = inspVendorTel;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INSP_DATE", length = 10)
	public Date getInspDate() {
		return this.inspDate;
	}

	public void setInspDate(Date inspDate) {
		this.inspDate = inspDate;
	}

	@Column(name = "INSP_SHIPPER_EN", length = 200)
	public String getInspShipperEn() {
		return this.inspShipperEn;
	}

	public void setInspShipperEn(String inspShipperEn) {
		this.inspShipperEn = inspShipperEn;
	}

	@Column(name = "INSP_SHIPPER_CN", length = 200)
	public String getInspShipperCn() {
		return this.inspShipperCn;
	}

	public void setInspShipperCn(String inspShipperCn) {
		this.inspShipperCn = inspShipperCn;
	}

	@Column(name = "INSP_CONSIGNEE_EN", length = 200)
	public String getInspConsigneeEn() {
		return this.inspConsigneeEn;
	}

	public void setInspConsigneeEn(String inspConsigneeEn) {
		this.inspConsigneeEn = inspConsigneeEn;
	}

	@Column(name = "INSP_CONSIGNEE_CN", length = 200)
	public String getInspConsigneeCn() {
		return this.inspConsigneeCn;
	}

	public void setInspConsigneeCn(String inspConsigneeCn) {
		this.inspConsigneeCn = inspConsigneeCn;
	}

	@Column(name = "INSP_CARGO_NAME", length = 200)
	public String getInspCargoName() {
		return this.inspCargoName;
	}

	public void setInspCargoName(String inspCargoName) {
		this.inspCargoName = inspCargoName;
	}

	@Column(name = "INSP_HS_NO", length = 200)
	public String getInspHsNo() {
		return this.inspHsNo;
	}

	public void setInspHsNo(String inspHsNo) {
		this.inspHsNo = inspHsNo;
	}

	@Column(name = "INSP_MADE_IN", length = 200)
	public String getInspMadeIn() {
		return this.inspMadeIn;
	}

	public void setInspMadeIn(String inspMadeIn) {
		this.inspMadeIn = inspMadeIn;
	}

	@Column(name = "INSP_NUM", length = 200)
	public String getInspNum() {
		return this.inspNum;
	}

	public void setInspNum(String inspNum) {
		this.inspNum = inspNum;
	}

	@Column(name = "INSP_VALUE", length = 200)
	public String getInspValue() {
		return this.inspValue;
	}

	public void setInspValue(String inspValue) {
		this.inspValue = inspValue;
	}

	@Column(name = "INSP_PACKAGES", length = 200)
	public String getInspPackages() {
		return this.inspPackages;
	}

	public void setInspPackages(String inspPackages) {
		this.inspPackages = inspPackages;
	}

	@Column(name = "INSP_CONVEYANCE", length = 64)
	public String getInspConveyance() {
		return this.inspConveyance;
	}

	public void setInspConveyance(String inspConveyance) {
		this.inspConveyance = inspConveyance;
	}

	@Column(name = "INSP_TRADE_TYPE", length = 32)
	public String getInspTradeType() {
		return this.inspTradeType;
	}

	public void setInspTradeType(String inspTradeType) {
		this.inspTradeType = inspTradeType;
	}

	@Column(name = "INSP_CARGO_ADDRESS", length = 64)
	public String getInspCargoAddress() {
		return this.inspCargoAddress;
	}

	public void setInspCargoAddress(String inspCargoAddress) {
		this.inspCargoAddress = inspCargoAddress;
	}

	@Column(name = "INSP_CONTRACT_NO", length = 32)
	public String getInspContractNo() {
		return this.inspContractNo;
	}

	public void setInspContractNo(String inspContractNo) {
		this.inspContractNo = inspContractNo;
	}

	@Column(name = "INSP_CREDIT_NO", length = 32)
	public String getInspCreditNo() {
		return this.inspCreditNo;
	}

	public void setInspCreditNo(String inspCreditNo) {
		this.inspCreditNo = inspCreditNo;
	}

	@Column(name = "INSP_USAGE", length = 32)
	public String getInspUsage() {
		return this.inspUsage;
	}

	public void setInspUsage(String inspUsage) {
		this.inspUsage = inspUsage;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INSP_SHIPPING_DATE", length = 10)
	public Date getInspShippingDate() {
		return this.inspShippingDate;
	}

	public void setInspShippingDate(Date inspShippingDate) {
		this.inspShippingDate = inspShippingDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INSP_CLAIM_DATE", length = 10)
	public Date getInspClaimDate() {
		return this.inspClaimDate;
	}

	public void setInspClaimDate(Date inspClaimDate) {
		this.inspClaimDate = inspClaimDate;
	}

	@Column(name = "INSP_TRADE_COUNTRY", length = 64)
	public String getInspTradeCountry() {
		return this.inspTradeCountry;
	}

	public void setInspTradeCountry(String inspTradeCountry) {
		this.inspTradeCountry = inspTradeCountry;
	}

	@Column(name = "INSP_CERTIFICATE_NO", length = 32)
	public String getInspCertificateNo() {
		return this.inspCertificateNo;
	}

	public void setInspCertificateNo(String inspCertificateNo) {
		this.inspCertificateNo = inspCertificateNo;
	}

	@Column(name = "INSP_POL", length = 32)
	public String getInspPol() {
		return this.inspPol;
	}

	public void setInspPol(String inspPol) {
		this.inspPol = inspPol;
	}

	@Column(name = "INSP_POT", length = 32)
	public String getInspPot() {
		return this.inspPot;
	}

	public void setInspPot(String inspPot) {
		this.inspPot = inspPot;
	}

	@Column(name = "INSP_POD", length = 32)
	public String getInspPod() {
		return this.inspPod;
	}

	public void setInspPod(String inspPod) {
		this.inspPod = inspPod;
	}

	@Column(name = "INSP_REGISTER_NO", length = 32)
	public String getInspRegisterNo() {
		return this.inspRegisterNo;
	}

	public void setInspRegisterNo(String inspRegisterNo) {
		this.inspRegisterNo = inspRegisterNo;
	}

	@Column(name = "INSP_CONTAINER_INFO", length = 1000)
	public String getInspContainerInfo() {
		return this.inspContainerInfo;
	}

	public void setInspContainerInfo(String inspContainerInfo) {
		this.inspContainerInfo = inspContainerInfo;
	}

	@Column(name = "INSP_SPECIAL_TERM", length = 1000)
	public String getInspSpecialTerm() {
		return this.inspSpecialTerm;
	}

	public void setInspSpecialTerm(String inspSpecialTerm) {
		this.inspSpecialTerm = inspSpecialTerm;
	}

	@Column(name = "INSP_MARKS", length = 1000)
	public String getInspMarks() {
		return this.inspMarks;
	}

	public void setInspMarks(String inspMarks) {
		this.inspMarks = inspMarks;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INSP_RECEIVE_DATE", length = 10)
	public Date getInspReceiveDate() {
		return this.inspReceiveDate;
	}

	public void setInspReceiveDate(Date inspReceiveDate) {
		this.inspReceiveDate = inspReceiveDate;
	}

	@Column(name = "INSP_RECEIVER", length = 16)
	public String getInspReceiver() {
		return this.inspReceiver;
	}

	public void setInspReceiver(String inspReceiver) {
		this.inspReceiver = inspReceiver;
	}

	@Column(name = "INSP_STATUS")
	public Short getInspStatus() {
		return this.inspStatus;
	}

	public void setInspStatus(Short inspStatus) {
		this.inspStatus = inspStatus;
	}

	@Column(name = "INSP_PASS_NO", length = 32)
	public String getInspPassNo() {
		return this.inspPassNo;
	}

	public void setInspPassNo(String inspPassNo) {
		this.inspPassNo = inspPassNo;
	}

	@Column(name = "INSP_NOTE_NO", length = 32)
	public String getInspNoteNo() {
		return this.inspNoteNo;
	}

	public void setInspNoteNo(String inspNoteNo) {
		this.inspNoteNo = inspNoteNo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INSP_START_DATE", length = 10)
	public Date getInspStartDate() {
		return this.inspStartDate;
	}

	public void setInspStartDate(Date inspStartDate) {
		this.inspStartDate = inspStartDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INSP_COMPLETE_DATE", length = 10)
	public Date getInspCompleteDate() {
		return this.inspCompleteDate;
	}

	public void setInspCompleteDate(Date inspCompleteDate) {
		this.inspCompleteDate = inspCompleteDate;
	}

	@Column(name = "INSP_CHECK_FLAG")
	public Short getInspCheckFlag() {
		return this.inspCheckFlag;
	}

	public void setInspCheckFlag(Short inspCheckFlag) {
		this.inspCheckFlag = inspCheckFlag;
	}

	@Column(name = "INSP_REMARKS", length = 1000)
	public String getInspRemarks() {
		return this.inspRemarks;
	}

	public void setInspRemarks(String inspRemarks) {
		this.inspRemarks = inspRemarks;
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