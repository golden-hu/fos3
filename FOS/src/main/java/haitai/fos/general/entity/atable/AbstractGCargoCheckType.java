package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCargoCheckType extends BaseDomain {

	private static final long serialVersionUID = 1633256549734067838L;
	private Integer cctyId;
	private Integer version;
	private String cctyName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CCTY_ID", unique = true, nullable = false)
	public Integer getCctyId() {
		return this.cctyId;
	}

	public void setCctyId(Integer cctyId) {
		this.cctyId = cctyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	
	@Column(name = "CCTY_NAME", nullable = false, length = 16)
	public String getCctyName() {
		return this.cctyName;
	}

	public void setCctyName(String cctyName) {
		this.cctyName = cctyName;
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