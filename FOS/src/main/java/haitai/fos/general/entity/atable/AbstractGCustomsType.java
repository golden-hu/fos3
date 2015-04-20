package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCustomsType extends BaseDomain {

	private static final long serialVersionUID = 1L;
	private Integer cutyId;
	private String cutyCode;
	private String cutyName;
	private Short active;
	private Integer version;
	private String compCode;
	private Short removed;
	
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CUTY_ID", unique = true, nullable = false)
	public Integer getCutyId() {
		return cutyId;
	}
	public void setCutyId(Integer cutyId) {
		this.cutyId = cutyId;
	}
	
	@Column(name = "CUTY_CODE", nullable = false, length = 11)
	public String getCutyCode() {
		return cutyCode;
	}
	public void setCutyCode(String cutyCode) {
		this.cutyCode = cutyCode;
	}
	
	@Column(name = "CUTY_NAME", nullable = false, length = 32)
	public String getCutyName() {
		return cutyName;
	}
	public void setCutyName(String cutyName) {
		this.cutyName = cutyName;
	}
	
	@Column(name = "ACTIVE")
	public Short getActive() {
		return active;
	}
	public void setActive(Short active) {
		this.active = active;
	}
	
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	
	@Column(name = "COMP_CODE", nullable = false)
	public String getCompCode() {
		return compCode;
	}
	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}
	
	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return removed;
	}
	public void setRemoved(Short removed) {
		this.removed = removed;
	}
	
	
	

}