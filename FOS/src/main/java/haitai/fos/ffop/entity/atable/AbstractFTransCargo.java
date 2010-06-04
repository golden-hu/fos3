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
public abstract class AbstractFTransCargo extends BaseDomain {

	private static final long serialVersionUID = -7674103927946190060L;
	private Integer trcaId;
	private Integer version;
	private Integer tranId;
	private Integer consId;
	private Integer cargId;
	private Integer packId;
	private String packName;
	private String trcaCargoName;
	private Integer trcaPackageNum;
	private Double trcaGrossWeight;
	private Double trcaMeasurement;
	private String trcaRemarks;
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
	@Column(name = "TRCA_ID", unique = true, nullable = false)
	public Integer getTrcaId() {
		return this.trcaId;
	}

	public void setTrcaId(Integer trcaId) {
		this.trcaId = trcaId;
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

	@Column(name = "CARG_ID")
	public Integer getCargId() {
		return this.cargId;
	}

	public void setCargId(Integer cargId) {
		this.cargId = cargId;
	}

	@Column(name = "PACK_ID")
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "PACK_NAME", length = 64)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "TRCA_CARGO_NAME", length = 200)
	public String getTrcaCargoName() {
		return this.trcaCargoName;
	}

	public void setTrcaCargoName(String trcaCargoName) {
		this.trcaCargoName = trcaCargoName;
	}

	@Column(name = "TRCA_PACKAGE_NUM")
	public Integer getTrcaPackageNum() {
		return this.trcaPackageNum;
	}

	public void setTrcaPackageNum(Integer trcaPackageNum) {
		this.trcaPackageNum = trcaPackageNum;
	}

	@Column(name = "TRCA_GROSS_WEIGHT", precision = 9)
	public Double getTrcaGrossWeight() {
		return this.trcaGrossWeight;
	}

	public void setTrcaGrossWeight(Double trcaGrossWeight) {
		this.trcaGrossWeight = trcaGrossWeight;
	}

	@Column(name = "TRCA_MEASUREMENT", precision = 9)
	public Double getTrcaMeasurement() {
		return this.trcaMeasurement;
	}

	public void setTrcaMeasurement(Double trcaMeasurement) {
		this.trcaMeasurement = trcaMeasurement;
	}

	@Column(name = "TRCA_REMARKS", length = 200)
	public String getTrcaRemarks() {
		return this.trcaRemarks;
	}

	public void setTrcaRemarks(String trcaRemarks) {
		this.trcaRemarks = trcaRemarks;
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

	@Column(name = "REMOVED")
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}