package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGUsage extends BaseDomain {

	private static final long serialVersionUID = -3199242492704092063L;
	private Integer usagId;
	private Integer version;
	private String usagCode;
	private String usagName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "USAG_ID", unique = true, nullable = false)
	public Integer getUsagId() {
		return this.usagId;
	}

	public void setUsagId(Integer usagId) {
		this.usagId = usagId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "USAG_CODE", nullable = false, length = 16)
	public String getUsagCode() {
		return this.usagCode;
	}

	public void setUsagCode(String usagCode) {
		this.usagCode = usagCode;
	}

	@Column(name = "USAG_NAME", nullable = false, length = 32)
	public String getUsagName() {
		return this.usagName;
	}

	public void setUsagName(String usagName) {
		this.usagName = usagName;
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