package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCargoProperty extends BaseDomain {

	private static final long serialVersionUID = 1633256549734067838L;
	private Integer caprId;
	private Integer version;
	private String caprName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CAPR_ID", unique = true, nullable = false)
	public Integer getCaprId() {
		return this.caprId;
	}

	public void setCaprId(Integer caprId) {
		this.caprId = caprId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	

	@Column(name = "CAPR_NAME", nullable = false, length = 32)
	public String getCaprName() {
		return this.caprName;
	}

	public void setCaprName(String caprName) {
		this.caprName = caprName;
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