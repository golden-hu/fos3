package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGSettlementWay extends BaseDomain {

	private static final long serialVersionUID = 3782571855117077857L;
	private Integer sewaId;
	private Integer version;
	private String sewaCode;
	private String sewaName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "SEWA_ID", unique = true, nullable = false)
	public Integer getSewaId() {
		return this.sewaId;
	}

	public void setSewaId(Integer sewaId) {
		this.sewaId = sewaId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "SEWA_CODE", nullable = false, length = 16)
	public String getSewaCode() {
		return this.sewaCode;
	}

	public void setSewaCode(String sewaCode) {
		this.sewaCode = sewaCode;
	}

	@Column(name = "SEWA_NAME", nullable = false, length = 16)
	public String getSewaName() {
		return this.sewaName;
	}

	public void setSewaName(String sewaName) {
		this.sewaName = sewaName;
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