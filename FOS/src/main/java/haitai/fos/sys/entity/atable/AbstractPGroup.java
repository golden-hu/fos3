package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractPGroup extends BaseDomain {

	private static final long serialVersionUID = 5191686588001563615L;
	private Integer grouId;
	private Integer version;
	private String grouName;
	private String grouDesc;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "GROU_ID", unique = true, nullable = false)
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "GROU_NAME", length = 16)
	public String getGrouName() {
		return this.grouName;
	}

	public void setGrouName(String grouName) {
		this.grouName = grouName;
	}

	@Column(name = "GROU_DESC", length = 200)
	public String getGrouDesc() {
		return this.grouDesc;
	}

	public void setGrouDesc(String grouDesc) {
		this.grouDesc = grouDesc;
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