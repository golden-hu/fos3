package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGExchangeSettlement extends BaseDomain {

	private static final long serialVersionUID = 1049493545899000517L;
	private Integer exseId;
	private Integer version;
	private String exseCode;
	private String exseName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "EXSE_ID", unique = true, nullable = false)
	public Integer getExseId() {
		return this.exseId;
	}

	public void setExseId(Integer exseId) {
		this.exseId = exseId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "EXSE_CODE", nullable = false, length = 16)
	public String getExseCode() {
		return this.exseCode;
	}

	public void setExseCode(String exseCode) {
		this.exseCode = exseCode;
	}

	@Column(name = "EXSE_NAME", nullable = false, length = 32)
	public String getExseName() {
		return this.exseName;
	}

	public void setExseName(String exseName) {
		this.exseName = exseName;
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