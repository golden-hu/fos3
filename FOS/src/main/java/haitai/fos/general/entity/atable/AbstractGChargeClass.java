package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGChargeClass extends BaseDomain {

	private static final long serialVersionUID = -926006576774568054L;
	private Integer chclId;
	private Integer version;
	private String chclCode;
	private String chclName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CHCL_ID", unique = true, nullable = false)
	public Integer getChclId() {
		return this.chclId;
	}

	public void setChclId(Integer chclId) {
		this.chclId = chclId;
	}

	@Column(name = "VERSION")
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CHCL_CODE", nullable = false, length = 16)
	public String getChclCode() {
		return this.chclCode;
	}

	public void setChclCode(String chclCode) {
		this.chclCode = chclCode;
	}

	@Column(name = "CHCL_NAME", nullable = false, length = 16)
	public String getChclName() {
		return this.chclName;
	}

	public void setChclName(String chclName) {
		this.chclName = chclName;
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