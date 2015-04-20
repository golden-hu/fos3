package haitai.fos.exp.entity.atable;

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
public abstract class AbstractTExportHistory extends BaseDomain {

	private static final long serialVersionUID = -8035400028874521450L;
	private Integer exhiId;
	private Integer version;
	private Short exhiType;
	private Date exhiCheckDateF;
	private Date exhiCheckDateT;
	private String exhiFileName;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "EXHI_ID", unique = true, nullable = false)
	public Integer getExhiId() {
		return this.exhiId;
	}

	public void setExhiId(Integer exhiId) {
		this.exhiId = exhiId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "EXHI_TYPE", nullable = false)
	public Short getExhiType() {
		return this.exhiType;
	}

	public void setExhiType(Short exhiType) {
		this.exhiType = exhiType;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXHI_CHECK_DATE_F", nullable = false, length = 10)
	public Date getExhiCheckDateF() {
		return this.exhiCheckDateF;
	}

	public void setExhiCheckDateF(Date exhiCheckDateF) {
		this.exhiCheckDateF = exhiCheckDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "EXHI_CHECK_DATE_T", nullable = false, length = 10)
	public Date getExhiCheckDateT() {
		return this.exhiCheckDateT;
	}

	public void setExhiCheckDateT(Date exhiCheckDateT) {
		this.exhiCheckDateT = exhiCheckDateT;
	}

	@Column(name = "EXHI_FILE_NAME", nullable = false, length = 64)
	public String getExhiFileName() {
		return this.exhiFileName;
	}

	public void setExhiFileName(String exhiFileName) {
		this.exhiFileName = exhiFileName;
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

	@Column(name = "COMP_CODE", nullable = false)
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
