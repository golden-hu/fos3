package haitai.fos.cms.entity.atable;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractHcmsTemplate extends BaseDomain {

	private static final long serialVersionUID = -3169511206063932682L;
	private Integer tempId;
	private Integer version;
	private String tempName;
	private String tempType;
	private String tempContent;
	private Integer userId;
	private String userName;
	private Integer grouId;
	private String grouName;
	private Integer createBy;
	private String createByName;
	private Date createTime;
	private Integer modifyBy;
	private String modifyByName;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TEMP_ID", unique = true, nullable = false)
	public Integer getTempId() {
		return this.tempId;
	}

	public void setTempId(Integer tempId) {
		this.tempId = tempId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TEMP_NAME", nullable = false, length = 200)
	public String getTempName() {
		return this.tempName;
	}

	public void setTempName(String tempName) {
		this.tempName = tempName;
	}

	@Column(name = "TEMP_TYPE", length = 1)
	public String getTempType() {
		return this.tempType;
	}

	public void setTempType(String tempType) {
		this.tempType = tempType;
	}

	@Column(name = "TEMP_CONTENT", length = 65535)
	public String getTempContent() {
		return this.tempContent;
	}

	public void setTempContent(String tempContent) {
		this.tempContent = tempContent;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "USER_NAME", length = 32)
	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "GROU_NAME", length = 32)
	public String getGrouName() {
		return this.grouName;
	}

	public void setGrouName(String grouName) {
		this.grouName = grouName;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Column(name = "CREATE_BY_NAME", length = 32)
	public String getCreateByName() {
		return this.createByName;
	}

	public void setCreateByName(String createByName) {
		this.createByName = createByName;
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

	@Column(name = "MODIFY_BY_NAME", length = 32)
	public String getModifyByName() {
		return this.modifyByName;
	}

	public void setModifyByName(String modifyByName) {
		this.modifyByName = modifyByName;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}

	@Column(name = "COMP_CODE", length = 8)
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
