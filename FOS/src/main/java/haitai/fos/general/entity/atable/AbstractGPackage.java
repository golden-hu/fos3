package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGPackage extends BaseDomain {

	private static final long serialVersionUID = -2605227023925716429L;
	private Integer packId;
	private Integer version;
	private String packCode;
	private String packName;
	private String packNameCn;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PACK_ID", unique = true, nullable = false)
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PACK_CODE", nullable = false, length = 16)
	public String getPackCode() {
		return this.packCode;
	}

	public void setPackCode(String packCode) {
		this.packCode = packCode;
	}

	@Column(name = "PACK_NAME", nullable = false, length = 64)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "PACK_NAME_CN", length = 64)
	public String getPackNameCn() {
		return this.packNameCn;
	}

	public void setPackNameCn(String packNameCn) {
		this.packNameCn = packNameCn;
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