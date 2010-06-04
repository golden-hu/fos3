package haitai.fos.sys.entity.atable;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractPCompany extends BaseDomain {

	private static final long serialVersionUID = 5839125256848428161L;
	private Integer compId;
	private String compCode;
	private String compNameCn;
	private String compNameEn;
	private Short compActive;
	private Date compStartDate;
	private Date compEndDate;
	private Short compServiceLevel;
	private String compEmail;
	private String compTel;
	private String compFax;
	private String compAddress;
	private String compBank;
	private String compAccount;
	private String compContact;
	private String compAliBuyerId;
	private String compAliAppId;
	private Integer compAliUserAmount;
	private Integer compLicenseNumber;
	private Date createTime;
	private Date modifyTime;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COMP_ID", unique = true, nullable = false)
	public Integer getCompId() {
		return this.compId;
	}

	public void setCompId(Integer compId) {
		this.compId = compId;
	}

	@Column(name = "COMP_CODE", length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "COMP_NAME_CN", nullable = false, length = 32)
	public String getCompNameCn() {
		return this.compNameCn;
	}

	public void setCompNameCn(String compNameCn) {
		this.compNameCn = compNameCn;
	}

	@Column(name = "COMP_NAME_EN", length = 32)
	public String getCompNameEn() {
		return this.compNameEn;
	}

	public void setCompNameEn(String compNameEn) {
		this.compNameEn = compNameEn;
	}

	@Column(name = "COMP_ACTIVE", nullable = false)
	public Short getCompActive() {
		return this.compActive;
	}

	public void setCompActive(Short compActive) {
		this.compActive = compActive;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "COMP_START_DATE", length = 10)
	public Date getCompStartDate() {
		return this.compStartDate;
	}

	public void setCompStartDate(Date compStartDate) {
		this.compStartDate = compStartDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "COMP_END_DATE", length = 10)
	public Date getCompEndDate() {
		return this.compEndDate;
	}

	public void setCompEndDate(Date compEndDate) {
		this.compEndDate = compEndDate;
	}

	@Column(name = "COMP_SERVICE_LEVEL")
	public Short getCompServiceLevel() {
		return this.compServiceLevel;
	}

	public void setCompServiceLevel(Short compServiceLevel) {
		this.compServiceLevel = compServiceLevel;
	}

	@Column(name = "COMP_EMAIL", length = 64)
	public String getCompEmail() {
		return this.compEmail;
	}

	public void setCompEmail(String compEmail) {
		this.compEmail = compEmail;
	}

	@Column(name = "COMP_TEL", length = 32)
	public String getCompTel() {
		return this.compTel;
	}

	public void setCompTel(String compTel) {
		this.compTel = compTel;
	}

	@Column(name = "COMP_FAX", length = 32)
	public String getCompFax() {
		return this.compFax;
	}

	public void setCompFax(String compFax) {
		this.compFax = compFax;
	}

	@Column(name = "COMP_ADDRESS", length = 200)
	public String getCompAddress() {
		return this.compAddress;
	}

	public void setCompAddress(String compAddress) {
		this.compAddress = compAddress;
	}

	@Column(name = "COMP_BANK", length = 32)
	public String getCompBank() {
		return this.compBank;
	}

	public void setCompBank(String compBank) {
		this.compBank = compBank;
	}

	@Column(name = "COMP_ACCOUNT", length = 32)
	public String getCompAccount() {
		return this.compAccount;
	}

	public void setCompAccount(String compAccount) {
		this.compAccount = compAccount;
	}

	@Column(name = "COMP_CONTACT", length = 32)
	public String getCompContact() {
		return this.compContact;
	}

	public void setCompContact(String compContact) {
		this.compContact = compContact;
	}

	@Column(name = "COMP_ALI_BUYER_ID", length = 32)
	public String getCompAliBuyerId() {
		return this.compAliBuyerId;
	}

	public void setCompAliBuyerId(String compAliBuyerId) {
		this.compAliBuyerId = compAliBuyerId;
	}

	@Column(name = "COMP_ALI_APP_ID", length = 64)
	public String getCompAliAppId() {
		return this.compAliAppId;
	}

	public void setCompAliAppId(String compAliAppId) {
		this.compAliAppId = compAliAppId;
	}

	@Column(name = "COMP_ALI_USER_AMOUNT")
	public Integer getCompAliUserAmount() {
		return this.compAliUserAmount;
	}

	public void setCompAliUserAmount(Integer compAliUserAmount) {
		this.compAliUserAmount = compAliUserAmount;
	}

	@Column(name = "COMP_LICENSE_NUMBER")
	public Integer getCompLicenseNumber() {
		return compLicenseNumber;
	}

	public void setCompLicenseNumber(Integer compLicenseNumber) {
		this.compLicenseNumber = compLicenseNumber;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

}
