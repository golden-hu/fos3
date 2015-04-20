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
public abstract class AbstractFTask extends BaseDomain {

	private static final long serialVersionUID = 2347825229044532310L;
	private Integer taskId;
	private Integer version;
	private Integer tatyId;
	private String tatyName;
	private Integer tatyDId;
	private String tatyDName;
	private Integer tatyOrder;
	private Integer consId;
	private Integer consMasterId;
	private String consMasterNo;
	private String consNo;
	private Integer taskOwner;
	private String taskOwnerName;
	private Date taskEstimatedDate;
	private Date taskFinishedDate;
	private Short taskFinishedFlag;
	private String tatyBizType;
	private String tatyBizClass;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TASK_ID", unique = true, nullable = false)
	public Integer getTaskId() {
		return this.taskId;
	}

	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TATY_ID", nullable = false)
	public Integer getTatyId() {
		return this.tatyId;
	}

	public void setTatyId(Integer tatyId) {
		this.tatyId = tatyId;
	}

	@Column(name = "TATY_NAME", nullable = false, length = 64)
	public String getTatyName() {
		return this.tatyName;
	}

	public void setTatyName(String tatyName) {
		this.tatyName = tatyName;
	}

	@Column(name = "TATY_D_ID")
	public Integer getTatyDId() {
		return tatyDId;
	}

	public void setTatyDId(Integer tatyDId) {
		this.tatyDId = tatyDId;
	}

	@Column(name = "TATY_D_NAME", length = 32)
	public String getTatyDName() {
		return tatyDName;
	}

	public void setTatyDName(String tatyDName) {
		this.tatyDName = tatyDName;
	}

	@Column(name = "TATY_ORDER")
	public Integer getTatyOrder() {
		return tatyOrder;
	}

	public void setTatyOrder(Integer tatyOrder) {
		this.tatyOrder = tatyOrder;
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

	@Column(name = "CONS_MASTER_ID")
	public Integer getConsMasterId() {
		return consMasterId;
	}

	public void setConsMasterId(Integer consMasterId) {
		this.consMasterId = consMasterId;
	}

	@Column(name = "CONS_MASTER_NO", length = 32)
	public String getConsMasterNo() {
		return consMasterNo;
	}

	public void setConsMasterNo(String consMasterNo) {
		this.consMasterNo = consMasterNo;
	}

	@Column(name = "TASK_OWNER")
	public Integer getTaskOwner() {
		return this.taskOwner;
	}

	public void setTaskOwner(Integer taskOwner) {
		this.taskOwner = taskOwner;
	}

	@Column(name = "TASK_OWNER_NAME", length = 32)
	public String getTaskOwnerName() {
		return this.taskOwnerName;
	}

	public void setTaskOwnerName(String taskOwnerName) {
		this.taskOwnerName = taskOwnerName;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TASK_ESTIMATED_DATE", length = 10)
	public Date getTaskEstimatedDate() {
		return this.taskEstimatedDate;
	}

	public void setTaskEstimatedDate(Date taskEstimatedDate) {
		this.taskEstimatedDate = taskEstimatedDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TASK_FINISHED_DATE", length = 10)
	public Date getTaskFinishedDate() {
		return this.taskFinishedDate;
	}

	public void setTaskFinishedDate(Date taskFinishedDate) {
		this.taskFinishedDate = taskFinishedDate;
	}

	@Column(name = "TASK_FINISHED_FLAG", nullable = false)
	public Short getTaskFinishedFlag() {
		return this.taskFinishedFlag;
	}

	public void setTaskFinishedFlag(Short taskFinishedFlag) {
		this.taskFinishedFlag = taskFinishedFlag;
	}

	@Column(name = "TATY_BIZ_TYPE", nullable = false, length = 1)
	public String getTatyBizType() {
		return this.tatyBizType;
	}

	public void setTatyBizType(String tatyBizType) {
		this.tatyBizType = tatyBizType;
	}

	@Column(name = "TATY_BIZ_CLASS", nullable = false, length = 1)
	public String getTatyBizClass() {
		return this.tatyBizClass;
	}

	public void setTatyBizClass(String tatyBizClass) {
		this.tatyBizClass = tatyBizClass;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
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