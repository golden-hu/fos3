package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGInspectionType extends BaseDomain {

	private static final long serialVersionUID = 1L;
	private Integer intyId;
	private String intyCode;
	private String intyName;
	private Short active;
	private Integer version;
	private String compCode;
	private Short removed;
	
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "INTY_ID", unique = true, nullable = false)
	public Integer getIntyId() {
		return intyId;
	}
	public void setIntyId(Integer intyId) {
		this.intyId = intyId;
	}
	
	@Column(name = "INTY_CODE", nullable = false, length = 11)
	public String getIntyCode() {
		return intyCode;
	}
	public void setIntyCode(String intyCode) {
		this.intyCode = intyCode;
	}
	
	@Column(name = "INTY_NAME", nullable = false, length = 32)
	public String getIntyName() {
		return intyName;
	}
	public void setIntyName(String intyName) {
		this.intyName = intyName;
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