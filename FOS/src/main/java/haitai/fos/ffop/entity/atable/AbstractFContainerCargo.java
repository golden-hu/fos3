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
public abstract class AbstractFContainerCargo extends BaseDomain {

	private static final long serialVersionUID = -3972711796657623228L;
	private Integer cocaId;
	private Integer version;
	private Integer consId;
	private Integer contId;
	private Integer cargId;
	private String contNo;
	private String consNo;
	private String consMblNo;
	private String consHblNo;
	private String consCustName;
	private Integer packId;
	private String packName;
	private String cocaMarks;
	private String cocaCargoName;
	private Integer cocaPackageNum;
	private Double cocaGrossWeight;
	private Double cocaMeasurement;
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
	@Column(name = "COCA_ID", unique = true, nullable = false)
	public Integer getCocaId() {
		return this.cocaId;
	}

	public void setCocaId(Integer cocaId) {
		this.cocaId = cocaId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONT_ID", nullable = false)
	public Integer getContId() {
		return this.contId;
	}

	public void setContId(Integer contId) {
		this.contId = contId;
	}

	@Column(name = "CARG_ID")
	public Integer getCargId() {
		return this.cargId;
	}

	public void setCargId(Integer cargId) {
		this.cargId = cargId;
	}

	@Column(name = "CONT_NO", length = 16)
	public String getContNo() {
		return this.contNo;
	}

	public void setContNo(String contNo) {
		this.contNo = contNo;
	}

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_MBL_NO", length = 32)
	public String getConsMblNo() {
		return this.consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Column(name = "CONS_HBL_NO", length = 32)
	public String getConsHblNo() {
		return this.consHblNo;
	}

	public void setConsHblNo(String consHblNo) {
		this.consHblNo = consHblNo;
	}

	@Column(name = "CONS_CUST_NAME", length = 64)
	public String getConsCustName() {
		return this.consCustName;
	}

	public void setConsCustName(String consCustName) {
		this.consCustName = consCustName;
	}

	@Column(name = "PACK_ID")
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "PACK_NAME", length = 32)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "COCA_MARKS", length = 64)
	public String getCocaMarks() {
		return this.cocaMarks;
	}

	public void setCocaMarks(String cocaMarks) {
		this.cocaMarks = cocaMarks;
	}

	@Column(name = "COCA_CARGO_NAME", length = 64)
	public String getCocaCargoName() {
		return this.cocaCargoName;
	}

	public void setCocaCargoName(String cocaCargoName) {
		this.cocaCargoName = cocaCargoName;
	}

	@Column(name = "COCA_PACKAGE_NUM")
	public Integer getCocaPackageNum() {
		return this.cocaPackageNum;
	}

	public void setCocaPackageNum(Integer cocaPackageNum) {
		this.cocaPackageNum = cocaPackageNum;
	}

	@Column(name = "COCA_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getCocaGrossWeight() {
		return this.cocaGrossWeight;
	}

	public void setCocaGrossWeight(Double cocaGrossWeight) {
		this.cocaGrossWeight = cocaGrossWeight;
	}

	@Column(name = "COCA_MEASUREMENT", precision = 14, scale = 6)
	public Double getCocaMeasurement() {
		return this.cocaMeasurement;
	}

	public void setCocaMeasurement(Double cocaMeasurement) {
		this.cocaMeasurement = cocaMeasurement;
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