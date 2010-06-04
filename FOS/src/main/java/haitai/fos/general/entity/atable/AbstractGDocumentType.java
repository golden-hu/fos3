package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractGDocumentType extends BaseDomain {

	private static final long serialVersionUID = 6696016836239797327L;
	private Integer dotyId;
	private Integer version;
	private String dotyCode;
	private String dotyName;
	private String dotyClass;
	private Short dotyReturnFlag;
	private Short dotyBackFlag;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "DOTY_ID", unique = true, nullable = false)
	public Integer getDotyId() {
		return this.dotyId;
	}

	public void setDotyId(Integer dotyId) {
		this.dotyId = dotyId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "DOTY_CODE", length = 32)
	public String getDotyCode() {
		return this.dotyCode;
	}

	public void setDotyCode(String dotyCode) {
		this.dotyCode = dotyCode;
	}

	@Column(name = "DOTY_NAME", nullable = false, length = 64)
	public String getDotyName() {
		return this.dotyName;
	}

	public void setDotyName(String dotyName) {
		this.dotyName = dotyName;
	}

	@Column(name = "DOTY_CLASS", nullable = false, length = 4)
	public String getDotyClass() {
		return this.dotyClass;
	}

	public void setDotyClass(String dotyClass) {
		this.dotyClass = dotyClass;
	}

	@Column(name = "DOTY_RETURN_FLAG")
	public Short getDotyReturnFlag() {
		return this.dotyReturnFlag;
	}

	public void setDotyReturnFlag(Short dotyReturnFlag) {
		this.dotyReturnFlag = dotyReturnFlag;
	}

	@Column(name = "DOTY_BACK_FLAG", nullable = false)
	public Short getDotyBackFlag() {
		return this.dotyBackFlag;
	}

	public void setDotyBackFlag(Short dotyBackFlag) {
		this.dotyBackFlag = dotyBackFlag;
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