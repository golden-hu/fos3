package haitai.fos.ws.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public class AbstractWUser extends BaseDomain {
	private static final long serialVersionUID = 6885795849939671402L;
	private Integer wusrId;
	private Integer version;
	private String wusrName;
	private String wusrPassword;
	private String wusrFirstName;
	private String wusrLastName;
	private String wusrTitle;
	private String wusrDept;
	private String wusrMobile;
	private String wusrEmail;
	private String wusrCompanyName;
	private String wusrAddress;
	private String wusrCity;
	private String wusrProvince;
	private String wusrZip;
	private String wusrCountry;
	private String wusrTel;
	private String wusrFax;
	private String wusrUrl;
	private Short wusrStatus;
	private Date wusrLastLoginTime;
	private Date createTime;
	private Integer custId;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name="WUSR_ID", unique=true, nullable=false)
	public Integer getWusrId() {
		return wusrId;
	}
	public void setWusrId(Integer wusrId) {
		this.wusrId = wusrId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name="WUSR_NAME", nullable=false, length=32)
	public String getWusrName() {
		return wusrName;
	}
	public void setWusrName(String wusrName) {
		this.wusrName = wusrName;
	}
	
	@Column(name="WUSR_PASSWORD", nullable=false, length=32)
	public String getWusrPassword() {
		return wusrPassword;
	}
	public void setWusrPassword(String wusrPassword) {
		this.wusrPassword = wusrPassword;
	}
	
	@Column(name="WUSR_FIRST_NAME", length=32)
	public String getWusrFirstName() {
		return wusrFirstName;
	}
	public void setWusrFirstName(String wusrFirstName) {
		this.wusrFirstName = wusrFirstName;
	}
	
	@Column(name="WUSR_LAST_NAME", length=32)
	public String getWusrLastName() {
		return wusrLastName;
	}
	public void setWusrLastName(String wusrLastName) {
		this.wusrLastName = wusrLastName;
	}
	
	@Column(name="WUSR_TITLE", length=32)
	public String getWusrTitle() {
		return wusrTitle;
	}
	public void setWusrTitle(String wusrTitle) {
		this.wusrTitle = wusrTitle;
	}
	
	@Column(name="WUSR_DEPT", length=32)
	public String getWusrDept() {
		return wusrDept;
	}
	public void setWusrDept(String wusrDept) {
		this.wusrDept = wusrDept;
	}
	
	@Column(name="WUSR_MOBILE", length=32)
	public String getWusrMobile() {
		return wusrMobile;
	}
	public void setWusrMobile(String wusrMobile) {
		this.wusrMobile = wusrMobile;
	}
	
	@Column(name="WUSR_EMAIL", nullable=false, length=200)
	public String getWusrEmail() {
		return wusrEmail;
	}
	public void setWusrEmail(String wusrEmail) {
		this.wusrEmail = wusrEmail;
	}
	
	@Column(name="WUSR_COMPANY_NAME", nullable=false, length=200)
	public String getWusrCompanyName() {
		return wusrCompanyName;
	}
	public void setWusrCompanyName(String wusrCompanyName) {
		this.wusrCompanyName = wusrCompanyName;
	}
	
	@Column(name="WUSR_ADDRESS", length=200)
	public String getWusrAddress() {
		return wusrAddress;
	}
	public void setWusrAddress(String wusrAddress) {
		this.wusrAddress = wusrAddress;
	}
	
	@Column(name="WUSR_CITY", length=32)
	public String getWusrCity() {
		return wusrCity;
	}
	public void setWusrCity(String wusrCity) {
		this.wusrCity = wusrCity;
	}
	
	@Column(name="WUSR_PROVINCE", length=32)
	public String getWusrProvince() {
		return wusrProvince;
	}
	public void setWusrProvince(String wusrProvince) {
		this.wusrProvince = wusrProvince;
	}
	
	@Column(name="WUSR_ZIP", length=16)
	public String getWusrZip() {
		return wusrZip;
	}
	public void setWusrZip(String wusrZip) {
		this.wusrZip = wusrZip;
	}
	
	@Column(name="WUSR_COUNTRY", length=200)
	public String getWusrCountry() {
		return wusrCountry;
	}
	public void setWusrCountry(String wusrCountry) {
		this.wusrCountry = wusrCountry;
	}
	
	@Column(name="WUSR_TEL", nullable=false, length=32)
	public String getWusrTel() {
		return wusrTel;
	}
	public void setWusrTel(String wusrTel) {
		this.wusrTel = wusrTel;
	}
	
	@Column(name="WUSR_FAX", length=32)
	public String getWusrFax() {
		return wusrFax;
	}
	public void setWusrFax(String wusrFax) {
		this.wusrFax = wusrFax;
	}
	
	@Column(name="WUSR_URL", length=200)
	public String getWusrUrl() {
		return wusrUrl;
	}
	public void setWusrUrl(String wusrUrl) {
		this.wusrUrl = wusrUrl;
	}
	
	@Column(name="WUSR_STATUS")
	public Short getWusrStatus() {
		return wusrStatus;
	}
	public void setWusrStatus(Short wusrStatus) {
		this.wusrStatus = wusrStatus;
	}
	
    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="WUSR_LAST_LOGIN_TIME")
	public Date getWusrLastLoginTime() {
		return wusrLastLoginTime;
	}
	public void setWusrLastLoginTime(Date wusrLastLoginTime) {
		this.wusrLastLoginTime = wusrLastLoginTime;
	}
	
    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="CREATE_TIME")
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
	@Column(name="CUST_ID")
	public Integer getCustId() {
		return custId;
	}
	public void setCustId(Integer custId) {
		this.custId = custId;
	}
	
	@Column(name="COMP_CODE", nullable=false, length=4)
	public String getCompCode() {
		return compCode;
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
