package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGPaymentWay extends BaseDomain {

	private static final long serialVersionUID = 3782571855117077857L;
	private Integer paywId;
	private Integer version;
	private String paywCode;
	private String paywName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PAYW_ID", unique = true, nullable = false)
	public Integer getPaywId() {
		return this.paywId;
	}

	public void setPaywId(Integer paywId) {
		this.paywId = paywId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PAYW_CODE", nullable = false, length = 16)
	public String getPaywCode() {
		return this.paywCode;
	}

	public void setPaywCode(String paywCode) {
		this.paywCode = paywCode;
	}

	@Column(name = "PAYW_NAME", nullable = false, length = 16)
	public String getPaywName() {
		return this.paywName;
	}

	public void setPaywName(String paywName) {
		this.paywName = paywName;
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