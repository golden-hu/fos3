package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCCustomerCategory extends BaseDomain {

	private static final long serialVersionUID = 8070373675210995940L;
	private Integer cucaId;
	private Integer version;
	private String cucaName;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue
	@Column(name = "CUCA_ID", unique = true, nullable = false, insertable = true, updatable = true)
	public Integer getCucaId() {
		return this.cucaId;
	}

	public void setCucaId(Integer cucaId) {
		this.cucaId = cucaId;
	}

//	@Version
	@Column(name = "VERSION", unique = false, nullable = false, insertable = true, updatable = true)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUCA_NAME", unique = false, nullable = false, insertable = true, updatable = true, length = 32)
	public String getCucaName() {
		return this.cucaName;
	}

	public void setCucaName(String cucaName) {
		this.cucaName = cucaName;
	}

	@Column(name = "COMP_CODE", unique = false, nullable = false, insertable = true, updatable = true)
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