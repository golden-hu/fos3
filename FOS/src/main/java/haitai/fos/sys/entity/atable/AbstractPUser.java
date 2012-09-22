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
public abstract class AbstractPUser extends BaseDomain {

	private static final long serialVersionUID = -5858512208060652468L;
	private Integer userId;
	private Integer version;
	private String userName;
	private String userLoginName;
	private String userPassword;
	private String userTel;
	private String userMobile;
	private String userEmail;
	private String userMsn;
	private String userQq;
	private Integer userDefaultGroup;
	private Integer userDefaultBranch;
	private Integer userDefaultRole;
	private Short userSalesFlag;
	private Short userOperatorFlag;
	private Short userSystemUserFlag;
	private Short userGrouViewFlag;
	private Short userGrouEditFlag;
	private Short userAllViewFlag;
	private Short userAllEditFlag;
	private Date userPasswordModifyDate;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "USER_ID", unique = true, nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "USER_NAME", length = 64)
	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column(name = "USER_LOGIN_NAME", unique = true, length = 64)
	public String getUserLoginName() {
		return this.userLoginName;
	}

	public void setUserLoginName(String userLoginName) {
		this.userLoginName = userLoginName;
	}

	@Column(name = "USER_PASSWORD", length = 64)
	public String getUserPassword() {
		return this.userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	@Column(name = "USER_TEL", length = 32)
	public String getUserTel() {
		return this.userTel;
	}

	public void setUserTel(String userTel) {
		this.userTel = userTel;
	}

	@Column(name = "USER_MOBILE", length = 32)
	public String getUserMobile() {
		return this.userMobile;
	}

	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}

	@Column(name = "USER_EMAIL", length = 32)
	public String getUserEmail() {
		return this.userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	@Column(name = "USER_MSN", length = 32)
	public String getUserMsn() {
		return this.userMsn;
	}

	public void setUserMsn(String userMsn) {
		this.userMsn = userMsn;
	}

	@Column(name = "USER_QQ", length = 32)
	public String getUserQq() {
		return this.userQq;
	}

	public void setUserQq(String userQq) {
		this.userQq = userQq;
	}

	@Column(name = "USER_DEFAULT_GROUP")
	public Integer getUserDefaultGroup() {
		return this.userDefaultGroup;
	}

	public void setUserDefaultGroup(Integer userDefaultGroup) {
		this.userDefaultGroup = userDefaultGroup;
	}
	
	@Column(name = "USER_DEFAULT_BRANCH")
	public Integer getUserDefaultBranch() {
		return userDefaultBranch;
	}

	public void setUserDefaultBranch(Integer userDefaultBranch) {
		this.userDefaultBranch = userDefaultBranch;
	}

	@Column(name = "USER_DEFAULT_ROLE")
	public Integer getUserDefaultRole() {
		return this.userDefaultRole;
	}

	public void setUserDefaultRole(Integer userDefaultRole) {
		this.userDefaultRole = userDefaultRole;
	}

	@Column(name = "USER_SALES_FLAG")
	public Short getUserSalesFlag() {
		return this.userSalesFlag;
	}

	public void setUserSalesFlag(Short userSalesFlag) {
		this.userSalesFlag = userSalesFlag;
	}

	@Column(name = "USER_OPERATOR_FLAG")
	public Short getUserOperatorFlag() {
		return this.userOperatorFlag;
	}

	public void setUserOperatorFlag(Short userOperatorFlag) {
		this.userOperatorFlag = userOperatorFlag;
	}

	@Column(name = "USER_SYSTEM_USER_FLAG")
	public Short getUserSystemUserFlag() {
		return this.userSystemUserFlag;
	}

	public void setUserSystemUserFlag(Short userSystemUserFlag) {
		this.userSystemUserFlag = userSystemUserFlag;
	}
	
	@Column(name = "USER_GROU_VIEW_FLAG")
	public Short getUserGrouViewFlag() {
		return this.userGrouViewFlag;
	}

	public void setUserGrouViewFlag(Short userGrouViewFlag) {
		this.userGrouViewFlag = userGrouViewFlag;
	}
	
	@Column(name = "USER_GROU_EDIT_FLAG")
	public Short getUserGrouEditFlag() {
		return this.userGrouEditFlag;
	}

	public void setUserGrouEditFlag(Short userGrouEditFlag) {
		this.userGrouEditFlag = userGrouEditFlag;
	}
	
	@Column(name = "USER_ALL_VIEW_FLAG")
	public Short getUserAllViewFlag() {
		return this.userAllViewFlag;
	}

	public void setUserAllViewFlag(Short userAllViewFlag) {
		this.userAllViewFlag = userAllViewFlag;
	}

	@Column(name = "USER_ALL_EDIT_FLAG")
	public Short getUserAllEditFlag() {
		return this.userAllEditFlag;
	}

	public void setUserAllEditFlag(Short userAllEditFlag) {
		this.userAllEditFlag = userAllEditFlag;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "USER_PASSWORD_MODIFY_DATE", length = 10)
	public Date getUserPasswordModifyDate() {
		return this.userPasswordModifyDate;
	}

	public void setUserPasswordModifyDate(Date userPasswordModifyDate) {
		this.userPasswordModifyDate = userPasswordModifyDate;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
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