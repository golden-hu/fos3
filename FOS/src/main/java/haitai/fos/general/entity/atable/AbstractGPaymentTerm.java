package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGPaymentTerm extends BaseDomain {

	private static final long serialVersionUID = 8283128771480518682L;
	private Integer pateId;
	private Integer version;
	private String pateCode;
	private String pateName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PATE_ID", unique = true, nullable = false)
	public Integer getPateId() {
		return this.pateId;
	}

	public void setPateId(Integer pateId) {
		this.pateId = pateId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PATE_CODE", nullable = false, length = 16)
	public String getPateCode() {
		return this.pateCode;
	}

	public void setPateCode(String pateCode) {
		this.pateCode = pateCode;
	}

	@Column(name = "PATE_NAME", nullable = false, length = 32)
	public String getPateName() {
		return this.pateName;
	}

	public void setPateName(String pateName) {
		this.pateName = pateName;
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

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}