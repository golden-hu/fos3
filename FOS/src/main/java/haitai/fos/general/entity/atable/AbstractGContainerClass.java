package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGContainerClass extends BaseDomain {

	private static final long serialVersionUID = 131793982282125813L;
	private Integer coclId;
	private Integer version;
	private String coclCode;
	private String coclName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COCL_ID", unique = true, nullable = false)
	public Integer getCoclId() {
		return this.coclId;
	}

	public void setCoclId(Integer coclId) {
		this.coclId = coclId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "COCL_CODE", nullable = false, length = 16)
	public String getCoclCode() {
		return this.coclCode;
	}

	public void setCoclCode(String coclCode) {
		this.coclCode = coclCode;
	}

	@Column(name = "COCL_NAME", length = 32)
	public String getCoclName() {
		return this.coclName;
	}

	public void setCoclName(String coclName) {
		this.coclName = coclName;
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