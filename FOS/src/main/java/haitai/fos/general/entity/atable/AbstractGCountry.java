package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCountry extends BaseDomain {

	private static final long serialVersionUID = 7235850157365790714L;
	private Integer counId;
	private Integer version;
	private String counCode;
	private String counNameCn;
	private String counNameEn;
	private Short active;
	private String compCode;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COUN_ID", unique = true, nullable = false)
	public Integer getCounId() {
		return this.counId;
	}

	public void setCounId(Integer counId) {
		this.counId = counId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "COUN_CODE", nullable = false, length = 16)
	public String getCounCode() {
		return this.counCode;
	}

	public void setCounCode(String counCode) {
		this.counCode = counCode;
	}

	@Column(name = "COUN_NAME_CN", nullable = false, length = 32)
	public String getCounNameCn() {
		return this.counNameCn;
	}

	public void setCounNameCn(String counNameCn) {
		this.counNameCn = counNameCn;
	}

	@Column(name = "COUN_NAME_EN", nullable = false, length = 32)
	public String getCounNameEn() {
		return this.counNameEn;
	}

	public void setCounNameEn(String counNameEn) {
		this.counNameEn = counNameEn;
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

}