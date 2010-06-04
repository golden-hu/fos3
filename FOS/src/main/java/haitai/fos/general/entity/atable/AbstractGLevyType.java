package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGLevyType extends BaseDomain {

	private static final long serialVersionUID = 1633256549734067838L;
	private Integer letyId;
	private Integer version;
	private String letyCode;
	private String letyName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "LETY_ID", unique = true, nullable = false)
	public Integer getLetyId() {
		return this.letyId;
	}

	public void setLetyId(Integer letyId) {
		this.letyId = letyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "LETY_CODE", nullable = false, length = 16)
	public String getLetyCode() {
		return this.letyCode;
	}

	public void setLetyCode(String letyCode) {
		this.letyCode = letyCode;
	}

	@Column(name = "LETY_NAME", nullable = false, length = 16)
	public String getLetyName() {
		return this.letyName;
	}

	public void setLetyName(String letyName) {
		this.letyName = letyName;
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