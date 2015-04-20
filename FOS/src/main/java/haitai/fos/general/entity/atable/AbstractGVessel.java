package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractGVessel extends BaseDomain {

	private static final long serialVersionUID = -6446981782111247445L;
	private Integer vessId;
	private Integer version;
	private String vessNameEn;
	private String vessNameCn;
	private String vessCode;
	private String vessLiner;
	private String vessDesc;
	private String counCode;
	private String vessType;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "VESS_ID", unique = true, nullable = false)
	public Integer getVessId() {
		return this.vessId;
	}

	public void setVessId(Integer vessId) {
		this.vessId = vessId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "VESS_NAME_EN", nullable = false, length = 64)
	public String getVessNameEn() {
		return this.vessNameEn;
	}

	public void setVessNameEn(String vessNameEn) {
		this.vessNameEn = vessNameEn;
	}

	@Column(name = "VESS_NAME_CN", length = 64)
	public String getVessNameCn() {
		return this.vessNameCn;
	}

	public void setVessNameCn(String vessNameCn) {
		this.vessNameCn = vessNameCn;
	}

	@Column(name = "VESS_CODE", length = 16)
	public String getVessCode() {
		return this.vessCode;
	}

	public void setVessCode(String vessCode) {
		this.vessCode = vessCode;
	}

	@Column(name = "VESS_LINER", length = 64)
	public String getVessLiner() {
		return this.vessLiner;
	}

	public void setVessLiner(String vessLiner) {
		this.vessLiner = vessLiner;
	}

	@Column(name = "VESS_DESC", length = 200)
	public String getVessDesc() {
		return this.vessDesc;
	}

	public void setVessDesc(String vessDesc) {
		this.vessDesc = vessDesc;
	}

	@Column(name = "COUN_CODE", length = 2)
	public String getCounCode() {
		return this.counCode;
	}

	public void setCounCode(String counCode) {
		this.counCode = counCode;
	}

	@Column(name = "VESS_TYPE", length = 1)
	public String getVessType() {
		return this.vessType;
	}

	public void setVessType(String vessType) {
		this.vessType = vessType;
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