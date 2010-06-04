package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCargoClass extends BaseDomain {

	private static final long serialVersionUID = 7696202593240897148L;
	private Integer caclId;
	private Integer version;
	private String caclCode;
	private String caclNameCn;
	private String caclNameEn;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CACL_ID", unique = true, nullable = false)
	public Integer getCaclId() {
		return this.caclId;
	}

	public void setCaclId(Integer caclId) {
		this.caclId = caclId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CACL_CODE", length = 32)
	public String getCaclCode() {
		return this.caclCode;
	}

	public void setCaclCode(String caclCode) {
		this.caclCode = caclCode;
	}

	@Column(name = "CACL_NAME_CN", length = 200)
	public String getCaclNameCn() {
		return this.caclNameCn;
	}

	public void setCaclNameCn(String caclNameCn) {
		this.caclNameCn = caclNameCn;
	}

	@Column(name = "CACL_NAME_EN", length = 200)
	public String getCaclNameEn() {
		return this.caclNameEn;
	}

	public void setCaclNameEn(String caclNameEn) {
		this.caclNameEn = caclNameEn;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
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