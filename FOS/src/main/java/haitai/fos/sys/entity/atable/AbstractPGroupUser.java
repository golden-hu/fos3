package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Version;

import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPGroupUser extends BaseDomain {

	private static final long serialVersionUID = -9217684433965554139L;
	private Integer grusId;
	private Integer grouId;
	private Integer userId;
	private String compCode;
	private Short removed;
	private Integer version;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "GRUS_ID", unique = true, nullable = false)
	public Integer getGrusId() {
		return this.grusId;
	}

	public void setGrusId(Integer grusId) {
		this.grusId = grusId;
	}

	@Column(name = "GROU_ID", nullable = false)
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "USER_ID", nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
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