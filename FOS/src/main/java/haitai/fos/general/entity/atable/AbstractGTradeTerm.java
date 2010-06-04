package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGTradeTerm extends BaseDomain {

	private static final long serialVersionUID = -7104671712239664835L;
	private Integer trteId;
	private Integer version;
	private String trteCode;
	private String trteName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TRTE_ID", unique = true, nullable = false)
	public Integer getTrteId() {
		return this.trteId;
	}

	public void setTrteId(Integer trteId) {
		this.trteId = trteId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TRTE_CODE", nullable = false, length = 16)
	public String getTrteCode() {
		return this.trteCode;
	}

	public void setTrteCode(String trteCode) {
		this.trteCode = trteCode;
	}

	@Column(name = "TRTE_NAME", nullable = false, length = 16)
	public String getTrteName() {
		return this.trteName;
	}

	public void setTrteName(String trteName) {
		this.trteName = trteName;
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