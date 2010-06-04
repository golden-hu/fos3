package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGIssueType extends BaseDomain {

	private static final long serialVersionUID = 2805929620074799089L;
	private Integer istyId;
	private Integer version;
	private String istyCode;
	private String istyName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ISTY_ID", unique = true, nullable = false)
	public Integer getIstyId() {
		return this.istyId;
	}

	public void setIstyId(Integer istyId) {
		this.istyId = istyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "ISTY_CODE", nullable = false, length = 16)
	public String getIstyCode() {
		return this.istyCode;
	}

	public void setIstyCode(String istyCode) {
		this.istyCode = istyCode;
	}

	@Column(name = "ISTY_NAME", nullable = false, length = 32)
	public String getIstyName() {
		return this.istyName;
	}

	public void setIstyName(String istyName) {
		this.istyName = istyName;
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