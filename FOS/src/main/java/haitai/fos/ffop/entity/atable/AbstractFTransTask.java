package haitai.fos.ffop.entity.atable;

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
public abstract class AbstractFTransTask extends BaseDomain {

	private static final long serialVersionUID = -202524819696875698L;
	private Integer trtaId;
	private Integer version;
	private Integer tranId;
	private Integer consId;
	private Integer cotyId;
	private Integer trtaVehicleType;
	private String trtaContainerNo;
	private String trtaSealNo;
	private Date trtaArriveTimeDemand;
	private Date trtaArriveTime;
	private Date trtaLoadTime;
	private Date trtaLeaveTime;
	private Date trtaBackTime;
	private String trtaDriver;
	private String trtaDriverTel;
	private String trtaTrackNo;
	private String trtaRemarks;
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
	@Column(name = "TRTA_ID", unique = true, nullable = false)
	public Integer getTrtaId() {
		return this.trtaId;
	}

	public void setTrtaId(Integer trtaId) {
		this.trtaId = trtaId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TRAN_ID", nullable = false)
	public Integer getTranId() {
		return this.tranId;
	}

	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "COTY_ID")
	public Integer getCotyId() {
		return this.cotyId;
	}

	public void setCotyId(Integer cotyId) {
		this.cotyId = cotyId;
	}

	@Column(name = "TRTA_VEHICLE_TYPE")
	public Integer getTrtaVehicleType() {
		return this.trtaVehicleType;
	}

	public void setTrtaVehicleType(Integer trtaVehicleType) {
		this.trtaVehicleType = trtaVehicleType;
	}

	@Column(name = "TRTA_CONTAINER_NO", length = 32)
	public String getTrtaContainerNo() {
		return this.trtaContainerNo;
	}

	public void setTrtaContainerNo(String trtaContainerNo) {
		this.trtaContainerNo = trtaContainerNo;
	}

	@Column(name = "TRTA_SEAL_NO", length = 32)
	public String getTrtaSealNo() {
		return this.trtaSealNo;
	}

	public void setTrtaSealNo(String trtaSealNo) {
		this.trtaSealNo = trtaSealNo;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "TRTA_ARRIVE_TIME_DEMAND", length = 19)
	public Date getTrtaArriveTimeDemand() {
		return this.trtaArriveTimeDemand;
	}

	public void setTrtaArriveTimeDemand(Date trtaArriveTimeDemand) {
		this.trtaArriveTimeDemand = trtaArriveTimeDemand;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "TRTA_ARRIVE_TIME", length = 19)
	public Date getTrtaArriveTime() {
		return this.trtaArriveTime;
	}

	public void setTrtaArriveTime(Date trtaArriveTime) {
		this.trtaArriveTime = trtaArriveTime;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "TRTA_LOAD_TIME", length = 19)
	public Date getTrtaLoadTime() {
		return this.trtaLoadTime;
	}

	public void setTrtaLoadTime(Date trtaLoadTime) {
		this.trtaLoadTime = trtaLoadTime;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "TRTA_LEAVE_TIME", length = 19)
	public Date getTrtaLeaveTime() {
		return this.trtaLeaveTime;
	}

	public void setTrtaLeaveTime(Date trtaLeaveTime) {
		this.trtaLeaveTime = trtaLeaveTime;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "TRTA_BACK_TIME", length = 19)
	public Date getTrtaBackTime() {
		return this.trtaBackTime;
	}

	public void setTrtaBackTime(Date trtaBackTime) {
		this.trtaBackTime = trtaBackTime;
	}

	@Column(name = "TRTA_DRIVER", length = 16)
	public String getTrtaDriver() {
		return this.trtaDriver;
	}

	public void setTrtaDriver(String trtaDriver) {
		this.trtaDriver = trtaDriver;
	}

	@Column(name = "TRTA_DRIVER_TEL", length = 16)
	public String getTrtaDriverTel() {
		return this.trtaDriverTel;
	}

	public void setTrtaDriverTel(String trtaDriverTel) {
		this.trtaDriverTel = trtaDriverTel;
	}

	@Column(name = "TRTA_TRACK_NO", length = 16)
	public String getTrtaTrackNo() {
		return this.trtaTrackNo;
	}

	public void setTrtaTrackNo(String trtaTrackNo) {
		this.trtaTrackNo = trtaTrackNo;
	}

	@Column(name = "TRTA_REMARKS", length = 200)
	public String getTrtaRemarks() {
		return this.trtaRemarks;
	}

	public void setTrtaRemarks(String trtaRemarks) {
		this.trtaRemarks = trtaRemarks;
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

	@Column(name = "COMP_CODE", length = 4)
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