package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGVesselType extends BaseDomain {

	private static final long serialVersionUID = 8137028524160782040L;
	private Integer vetyId;
	private Integer version;
	private String vetyNameCn;
	private String vetyNameEn;
	private Short active;
	private String compCode;
	private Short removed;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "VETY_ID", unique = true, nullable = false)
	public Integer getVetyId() {
		return this.vetyId;
	}

	public void setVetyId(Integer vetyId) {
		this.vetyId = vetyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "VETY_NAME_CN", nullable = false, length = 64)
	public String getVetyNameCn() {
		return this.vetyNameCn;
	}

	public void setVetyNameCn(String vetyNameCn) {
		this.vetyNameCn = vetyNameCn;
	}

	@Column(name = "VETY_NAME_EN", length = 64)
	public String getVetyNameEn() {
		return this.vetyNameEn;
	}

	public void setVetyNameEn(String vetyNameEn) {
		this.vetyNameEn = vetyNameEn;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

	@Column(name = "COMP_CODE")
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