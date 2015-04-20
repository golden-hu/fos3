package haitai.fos.ffse.entity.atable;

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
public abstract class AbstractSInvoiceNo extends BaseDomain {

	private static final long serialVersionUID = 1207164351404815615L;
	private Integer innoId;
	private Integer version;
	private String innoPrefix;
	private Long innoStartNo;
	private Long innoEndNo;
	private Long innoNextNo;
	private Integer innoNumLen;
	private Date innoStartDate;
	private Short active;
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
	@Column(name = "INNO_ID", unique = true, nullable = false)
	public Integer getInnoId() {
		return this.innoId;
	}

	public void setInnoId(Integer innoId) {
		this.innoId = innoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "INNO_PREFIX", length = 16)
	public String getInnoPrefix() {
		return this.innoPrefix;
	}

	public void setInnoPrefix(String innoPrefix) {
		this.innoPrefix = innoPrefix;
	}

	@Column(name = "INNO_START_NO", nullable = false)
	public Long getInnoStartNo() {
		return this.innoStartNo;
	}

	public void setInnoStartNo(Long innoStartNo) {
		this.innoStartNo = innoStartNo;
	}

	@Column(name = "INNO_END_NO", nullable = false)
	public Long getInnoEndNo() {
		return this.innoEndNo;
	}

	public void setInnoEndNo(Long innoEndNo) {
		this.innoEndNo = innoEndNo;
	}

	@Column(name = "INNO_NEXT_NO")
	public Long getInnoNextNo() {
		return this.innoNextNo;
	}

	public void setInnoNextNo(Long innoNextNo) {
		this.innoNextNo = innoNextNo;
	}

	@Column(name = "INNO_NUM_LEN")
	public Integer getInnoNumLen() {
		return this.innoNumLen;
	}

	public void setInnoNumLen(Integer innoNumLen) {
		this.innoNumLen = innoNumLen;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "INNO_START_DATE", length = 10)
	public Date getInnoStartDate() {
		return this.innoStartDate;
	}

	public void setInnoStartDate(Date innoStartDate) {
		this.innoStartDate = innoStartDate;
	}

	@Column(name = "ACTIVE", nullable = false)
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
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