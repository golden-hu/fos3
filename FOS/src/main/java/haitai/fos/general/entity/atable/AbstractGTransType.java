package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGTransType extends BaseDomain {

	private static final long serialVersionUID = 7701755793679083070L;
	private Integer tratId;
	private Integer version;
	private String tratCode;
	private String tratName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TRAT_ID", unique = true, nullable = false)
	public Integer getTratId() {
		return this.tratId;
	}

	public void setTratId(Integer tratId) {
		this.tratId = tratId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TRAT_CODE", nullable = false, length = 16)
	public String getTratCode() {
		return this.tratCode;
	}

	public void setTratCode(String tratCode) {
		this.tratCode = tratCode;
	}

	@Column(name = "TRAT_NAME", nullable = false, length = 32)
	public String getTratName() {
		return this.tratName;
	}

	public void setTratName(String tratName) {
		this.tratName = tratName;
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