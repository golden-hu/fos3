package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCVendorCategory extends BaseDomain {

	private static final long serialVersionUID = -4783999499981574058L;
	private Integer vecaId;
	private Integer version;
	private String vecaName;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue
	@Column(name = "VECA_ID", unique = true, nullable = false, insertable = true, updatable = true)
	public Integer getVecaId() {
		return this.vecaId;
	}

	public void setVecaId(Integer vecaId) {
		this.vecaId = vecaId;
	}

//	@Version
	@Column(name = "VERSION", unique = false, nullable = false, insertable = true, updatable = true)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "VECA_NAME", unique = false, nullable = false, insertable = true, updatable = true, length = 32)
	public String getVecaName() {
		return this.vecaName;
	}

	public void setVecaName(String vecaName) {
		this.vecaName = vecaName;
	}

	@Column(name = "COMP_CODE", unique = false, nullable = false, insertable = true, updatable = true, length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "REMOVED", unique = false, nullable = false, insertable = false, updatable = true)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}