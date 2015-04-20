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
public abstract class AbstractFReassign extends BaseDomain {

	private static final long serialVersionUID = 6437756083115592386L;
	private Integer reasId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private String reasType;
	private Integer reasVessIdO;
	private String reasVessNameO;
	private Integer reasVessIdN;
	private String reasVessNameN;
	private String reasDesc;
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
	@Column(name = "REAS_ID", unique = true, nullable = false)
	public Integer getReasId() {
		return this.reasId;
	}

	public void setReasId(Integer reasId) {
		this.reasId = reasId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CONS_ID")
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

	@Column(name = "REAS_TYPE", length = 1)
	public String getReasType() {
		return this.reasType;
	}

	public void setReasType(String reasType) {
		this.reasType = reasType;
	}

	@Column(name = "REAS_VESS_ID_O", nullable = false)
	public Integer getReasVessIdO() {
		return this.reasVessIdO;
	}

	public void setReasVessIdO(Integer reasVessIdO) {
		this.reasVessIdO = reasVessIdO;
	}

	@Column(name = "REAS_VESS_NAME_O", length = 64)
	public String getReasVessNameO() {
		return this.reasVessNameO;
	}

	public void setReasVessNameO(String reasVessNameO) {
		this.reasVessNameO = reasVessNameO;
	}

	@Column(name = "REAS_VESS_ID_N", nullable = false)
	public Integer getReasVessIdN() {
		return this.reasVessIdN;
	}

	public void setReasVessIdN(Integer reasVessIdN) {
		this.reasVessIdN = reasVessIdN;
	}

	@Column(name = "REAS_VESS_NAME_N", length = 64)
	public String getReasVessNameN() {
		return this.reasVessNameN;
	}

	public void setReasVessNameN(String reasVessNameN) {
		this.reasVessNameN = reasVessNameN;
	}

	@Column(name = "REAS_DESC", length = 500)
	public String getReasDesc() {
		return this.reasDesc;
	}

	public void setReasDesc(String reasDesc) {
		this.reasDesc = reasDesc;
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