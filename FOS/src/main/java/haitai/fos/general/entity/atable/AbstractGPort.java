package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGPort extends BaseDomain {

	private static final long serialVersionUID = 2516175474349292228L;
	private Integer portId;
	private Integer version;
	private String portCode;
	private String portNameEn;
	private String portNameCn;
	private Short portType;
	private String portArea;
	private Short active;
	private Short portTransFlag;
	private String counCode;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PORT_ID", unique = true, nullable = false)
	public Integer getPortId() {
		return this.portId;
	}

	public void setPortId(Integer portId) {
		this.portId = portId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PORT_CODE", nullable = false, length = 16)
	public String getPortCode() {
		return this.portCode;
	}

	public void setPortCode(String portCode) {
		this.portCode = portCode;
	}

	@Column(name = "PORT_NAME_EN", nullable = false, length = 32)
	public String getPortNameEn() {
		return this.portNameEn;
	}

	public void setPortNameEn(String portNameEn) {
		this.portNameEn = portNameEn;
	}

	@Column(name = "PORT_NAME_CN", length = 32)
	public String getPortNameCn() {
		return this.portNameCn;
	}

	public void setPortNameCn(String portNameCn) {
		this.portNameCn = portNameCn;
	}

	@Column(name = "PORT_TYPE")
	public Short getPortType() {
		return this.portType;
	}

	public void setPortType(Short portType) {
		this.portType = portType;
	}

	@Column(name = "PORT_AREA", length = 32)
	public String getPortArea() {
		return this.portArea;
	}

	public void setPortArea(String portArea) {
		this.portArea = portArea;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

	@Column(name = "PORT_TRANS_FLAG")
	public Short getPortTransFlag() {
		return this.portTransFlag;
	}

	public void setPortTransFlag(Short portTransFlag) {
		this.portTransFlag = portTransFlag;
	}

	@Column(name = "COUN_CODE", nullable = false, length = 2)
	public String getCounCode() {
		return this.counCode;
	}

	public void setCounCode(String counCode) {
		this.counCode = counCode;
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