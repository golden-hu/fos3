package haitai.fos.sys.entity.atable;

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
public abstract class AbstractCCustomerContact extends BaseDomain {

	private static final long serialVersionUID = 5557786883862243201L;
	private Integer cucoId;
	private Integer version;
	private Integer custId;
	private String cucoName;
	private String cucoTitle;
	private String cucoAddress1;
	private String cucoAddress2;
	private String cucoTel;
	private String cucoHomeTel;
	private String cucoMobile;
	private String cucoEmail;
	private String cucoGender;
	private String cucoMsn;
	private String cucoQq;
	private String cucoFax;
	private String cucoZip;
	private Date cucoBirthday;
	private String cucoRemarks;
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
	@Column(name = "CUCO_ID", unique = true, nullable = false)
	public Integer getCucoId() {
		return this.cucoId;
	}

	public void setCucoId(Integer cucoId) {
		this.cucoId = cucoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUST_ID", nullable = false)
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Column(name = "CUCO_NAME", nullable = false, length = 64)
	public String getCucoName() {
		return this.cucoName;
	}

	public void setCucoName(String cucoName) {
		this.cucoName = cucoName;
	}

	@Column(name = "CUCO_TITLE", length = 32)
	public String getCucoTitle() {
		return this.cucoTitle;
	}

	public void setCucoTitle(String cucoTitle) {
		this.cucoTitle = cucoTitle;
	}

	@Column(name = "CUCO_ADDRESS1", length = 200)
	public String getCucoAddress1() {
		return this.cucoAddress1;
	}

	public void setCucoAddress1(String cucoAddress1) {
		this.cucoAddress1 = cucoAddress1;
	}

	@Column(name = "CUCO_ADDRESS2", length = 200)
	public String getCucoAddress2() {
		return this.cucoAddress2;
	}

	public void setCucoAddress2(String cucoAddress2) {
		this.cucoAddress2 = cucoAddress2;
	}

	@Column(name = "CUCO_TEL", length = 16)
	public String getCucoTel() {
		return this.cucoTel;
	}

	public void setCucoTel(String cucoTel) {
		this.cucoTel = cucoTel;
	}

	@Column(name = "CUCO_HOME_TEL", length = 16)
	public String getCucoHomeTel() {
		return this.cucoHomeTel;
	}

	public void setCucoHomeTel(String cucoHomeTel) {
		this.cucoHomeTel = cucoHomeTel;
	}

	@Column(name = "CUCO_MOBILE", length = 16)
	public String getCucoMobile() {
		return this.cucoMobile;
	}

	public void setCucoMobile(String cucoMobile) {
		this.cucoMobile = cucoMobile;
	}

	@Column(name = "CUCO_EMAIL", length = 64)
	public String getCucoEmail() {
		return this.cucoEmail;
	}

	public void setCucoEmail(String cucoEmail) {
		this.cucoEmail = cucoEmail;
	}

	@Column(name = "CUCO_GENDER", length = 1)
	public String getCucoGender() {
		return this.cucoGender;
	}

	public void setCucoGender(String cucoGender) {
		this.cucoGender = cucoGender;
	}

	@Column(name = "CUCO_MSN", length = 32)
	public String getCucoMsn() {
		return this.cucoMsn;
	}

	public void setCucoMsn(String cucoMsn) {
		this.cucoMsn = cucoMsn;
	}

	@Column(name = "CUCO_QQ", length = 32)
	public String getCucoQq() {
		return this.cucoQq;
	}

	public void setCucoQq(String cucoQq) {
		this.cucoQq = cucoQq;
	}

	@Column(name = "CUCO_FAX", length = 16)
	public String getCucoFax() {
		return this.cucoFax;
	}

	public void setCucoFax(String cucoFax) {
		this.cucoFax = cucoFax;
	}

	@Column(name = "CUCO_ZIP", length = 6)
	public String getCucoZip() {
		return this.cucoZip;
	}

	public void setCucoZip(String cucoZip) {
		this.cucoZip = cucoZip;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CUCO_BIRTHDAY", length = 10)
	public Date getCucoBirthday() {
		return this.cucoBirthday;
	}

	public void setCucoBirthday(Date cucoBirthday) {
		this.cucoBirthday = cucoBirthday;
	}

	@Column(name = "CUCO_REMARKS", length = 1000)
	public String getCucoRemarks() {
		return this.cucoRemarks;
	}

	public void setCucoRemarks(String cucoRemarks) {
		this.cucoRemarks = cucoRemarks;
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

}