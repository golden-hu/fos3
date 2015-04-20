package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCurrency extends BaseDomain {

	private static final long serialVersionUID = -2257167486573797325L;
	private Integer currId;
	private Integer version;
	private String currCode;
	private String currName;
	private String currSymbol;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CURR_ID", unique = true, nullable = false)
	public Integer getCurrId() {
		return this.currId;
	}

	public void setCurrId(Integer currId) {
		this.currId = currId;
	}

	@Column(name = "VERSION")
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CURR_CODE", nullable = false, length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "CURR_NAME", nullable = false, length = 16)
	public String getCurrName() {
		return this.currName;
	}

	public void setCurrName(String currName) {
		this.currName = currName;
	}

	@Column(name = "CURR_SYMBOL", length = 1)
	public String getCurrSymbol() {
		return this.currSymbol;
	}

	public void setCurrSymbol(String currSymbol) {
		this.currSymbol = currSymbol;
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