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
public abstract class AbstractFWarehouseCargo extends BaseDomain {

	private static final long serialVersionUID = -2028695922907873487L;
	private Integer wacaId;
	private Integer version;
	private Integer wareId;
	private Integer consId;
	private Integer cargId;
	private String wacaCargoName;
	private String wacaCargoMarks;
	private Integer packId;
	private String packName;
	private Integer wacaPackagesNum;
	private Double wacaGrossWeight;
	private Double wacaNetWeight;
	private Double wacaMeasurement;
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
	@Column(name = "WACA_ID", unique = true, nullable = false)
	public Integer getWacaId() {
		return this.wacaId;
	}

	public void setWacaId(Integer wacaId) {
		this.wacaId = wacaId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "WARE_ID", nullable = false)
	public Integer getWareId() {
		return this.wareId;
	}

	public void setWareId(Integer wareId) {
		this.wareId = wareId;
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

	@Column(name = "WACA_CARGO_NAME", length = 200)
	public String getWacaCargoName() {
		return this.wacaCargoName;
	}

	public void setWacaCargoName(String wacaCargoName) {
		this.wacaCargoName = wacaCargoName;
	}

	@Column(name = "WACA_CARGO_MARKS", length = 200)
	public String getWacaCargoMarks() {
		return this.wacaCargoMarks;
	}

	public void setWacaCargoMarks(String wacaCargoMarks) {
		this.wacaCargoMarks = wacaCargoMarks;
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

	@Column(name = "WACA_PACKAGES_NUM")
	public Integer getWacaPackagesNum() {
		return this.wacaPackagesNum;
	}

	public void setWacaPackagesNum(Integer wacaPackagesNum) {
		this.wacaPackagesNum = wacaPackagesNum;
	}

	@Column(name = "WACA_GROSS_WEIGHT", precision = 9)
	public Double getWacaGrossWeight() {
		return this.wacaGrossWeight;
	}

	public void setWacaGrossWeight(Double wacaGrossWeight) {
		this.wacaGrossWeight = wacaGrossWeight;
	}

	@Column(name = "WACA_NET_WEIGHT", precision = 9)
	public Double getWacaNetWeight() {
		return this.wacaNetWeight;
	}

	public void setWacaNetWeight(Double wacaNetWeight) {
		this.wacaNetWeight = wacaNetWeight;
	}

	@Column(name = "WACA_MEASUREMENT", precision = 9)
	public Double getWacaMeasurement() {
		return this.wacaMeasurement;
	}

	public void setWacaMeasurement(Double wacaMeasurement) {
		this.wacaMeasurement = wacaMeasurement;
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