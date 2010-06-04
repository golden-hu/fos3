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
public abstract class AbstractPTemplate extends BaseDomain {

	private static final long serialVersionUID = 51404350898164176L;
	private Integer tempId;
	private Integer version;
	private String tempName;
	private String tempClass;
	private String tempType;
	private Integer tetyId;
	private String tetyCode;
	private String tetyName;
	private String tempFileName;
	private String tempDesc;
	private Short active;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
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

	@Column(name = "TEMP_NAME", nullable = false, length = 64)
	public String getTempName() {
		return this.tempName;
	}

	public void setTempName(String tempName) {
		this.tempName = tempName;
	}

	@Column(name = "TEMP_CLASS", nullable = false, length = 1)
	public String getTempClass() {
		return this.tempClass;
	}

	public void setTempClass(String tempClass) {
		this.tempClass = tempClass;
	}

	@Column(name = "TEMP_TYPE", nullable = false, length = 6)
	public String getTempType() {
		return this.tempType;
	}

	public void setTempType(String tempType) {
		this.tempType = tempType;
	}

	@Column(name = "TETY_ID")
	public Integer getTetyId() {
		return this.tetyId;
	}

	public void setTetyId(Integer tetyId) {
		this.tetyId = tetyId;
	}

	@Column(name = "TETY_CODE", length = 16)
	public String getTetyCode() {
		return this.tetyCode;
	}

	public void setTetyCode(String tetyCode) {
		this.tetyCode = tetyCode;
	}

	@Column(name = "TETY_NAME", length = 32)
	public String getTetyName() {
		return this.tetyName;
	}

	public void setTetyName(String tetyName) {
		this.tetyName = tetyName;
	}

	@Column(name = "TEMP_FILE_NAME", length = 200)
	public String getTempFileName() {
		return this.tempFileName;
	}

	public void setTempFileName(String tempFileName) {
		this.tempFileName = tempFileName;
	}

	@Column(name = "TEMP_DESC", length = 200)
	public String getTempDesc() {
		return this.tempDesc;
	}

	public void setTempDesc(String tempDesc) {
		this.tempDesc = tempDesc;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
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