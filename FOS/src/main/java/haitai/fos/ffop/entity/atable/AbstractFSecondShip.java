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
public abstract class AbstractFSecondShip extends BaseDomain {

	private static final long serialVersionUID = 3408630768206591950L;
	private Integer seshId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private String seshCarrier;
	private String seshVessel;
	private String seshVoyage;
	private String seshBlNo;
	private String seshPot;
	private String seshPotAgency;
	private Date seshEta;
	private Date seshEtd;
	private String seshTransNo;
	private String seshSealNo;
	private String seshRemarks;
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
	@Column(name = "SESH_ID", unique = true, nullable = false)
	public Integer getSeshId() {
		return this.seshId;
	}

	public void setSeshId(Integer seshId) {
		this.seshId = seshId;
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

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "SESH_CARRIER", length = 64)
	public String getSeshCarrier() {
		return this.seshCarrier;
	}

	public void setSeshCarrier(String seshCarrier) {
		this.seshCarrier = seshCarrier;
	}

	@Column(name = "SESH_VESSEL", length = 64)
	public String getSeshVessel() {
		return this.seshVessel;
	}

	public void setSeshVessel(String seshVessel) {
		this.seshVessel = seshVessel;
	}

	@Column(name = "SESH_VOYAGE", length = 32)
	public String getSeshVoyage() {
		return this.seshVoyage;
	}

	public void setSeshVoyage(String seshVoyage) {
		this.seshVoyage = seshVoyage;
	}

	@Column(name = "SESH_BL_NO", length = 32)
	public String getSeshBlNo() {
		return this.seshBlNo;
	}

	public void setSeshBlNo(String seshBlNo) {
		this.seshBlNo = seshBlNo;
	}

	@Column(name = "SESH_POT", length = 64)
	public String getSeshPot() {
		return this.seshPot;
	}

	public void setSeshPot(String seshPot) {
		this.seshPot = seshPot;
	}

	@Column(name = "SESH_POT_AGENCY", length = 64)
	public String getSeshPotAgency() {
		return this.seshPotAgency;
	}

	public void setSeshPotAgency(String seshPotAgency) {
		this.seshPotAgency = seshPotAgency;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "SESH_ETA", length = 10)
	public Date getSeshEta() {
		return this.seshEta;
	}

	public void setSeshEta(Date seshEta) {
		this.seshEta = seshEta;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "SESH_ETD", length = 10)
	public Date getSeshEtd() {
		return this.seshEtd;
	}

	public void setSeshEtd(Date seshEtd) {
		this.seshEtd = seshEtd;
	}

	@Column(name = "SESH_TRANS_NO", length = 32)
	public String getSeshTransNo() {
		return this.seshTransNo;
	}

	public void setSeshTransNo(String seshTransNo) {
		this.seshTransNo = seshTransNo;
	}

	@Column(name = "SESH_SEAL_NO", length = 32)
	public String getSeshSealNo() {
		return this.seshSealNo;
	}

	public void setSeshSealNo(String seshSealNo) {
		this.seshSealNo = seshSealNo;
	}

	@Column(name = "SESH_REMARKS", length = 1000)
	public String getSeshRemarks() {
		return this.seshRemarks;
	}

	public void setSeshRemarks(String seshRemarks) {
		this.seshRemarks = seshRemarks;
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