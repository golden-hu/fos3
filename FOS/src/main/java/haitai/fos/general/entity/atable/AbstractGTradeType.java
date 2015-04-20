package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGTradeType extends BaseDomain {

	private static final long serialVersionUID = -1564623856888204315L;
	private Integer trtyId;
	private Integer version;
	private String trtyCode;
	private String trtyName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TRTY_ID", unique = true, nullable = false)
	public Integer getTrtyId() {
		return this.trtyId;
	}

	public void setTrtyId(Integer trtyId) {
		this.trtyId = trtyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TRTY_CODE", nullable = false, length = 16)
	public String getTrtyCode() {
		return this.trtyCode;
	}

	public void setTrtyCode(String trtyCode) {
		this.trtyCode = trtyCode;
	}

	@Column(name = "TRTY_NAME", nullable = false, length = 64)
	public String getTrtyName() {
		return this.trtyName;
	}

	public void setTrtyName(String trtyName) {
		this.trtyName = trtyName;
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