package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractPTemplateType extends BaseDomain {

	private static final long serialVersionUID = 4112567782618103581L;
	private Integer tetyId;
	private Integer version;
	private String tetyName;
	private String tetyCode;
	private String tetyDesc;
	private String tetyAction;
	private String tetyParent;
	private String tetyChild;
	private String tetyClass;
	private String tetyType;
	private Short tetyFormFlag;
	private Short active;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TETY_ID", unique = true, nullable = false)
	public Integer getTetyId() {
		return this.tetyId;
	}

	public void setTetyId(Integer tetyId) {
		this.tetyId = tetyId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TETY_NAME", nullable = false, length = 32)
	public String getTetyName() {
		return this.tetyName;
	}

	public void setTetyName(String tetyName) {
		this.tetyName = tetyName;
	}

	@Column(name = "TETY_CODE", length = 16)
	public String getTetyCode() {
		return this.tetyCode;
	}

	public void setTetyCode(String tetyCode) {
		this.tetyCode = tetyCode;
	}

	@Column(name = "TETY_DESC", length = 200)
	public String getTetyDesc() {
		return this.tetyDesc;
	}

	public void setTetyDesc(String tetyDesc) {
		this.tetyDesc = tetyDesc;
	}

	@Column(name = "TETY_ACTION", length = 32)
	public String getTetyAction() {
		return this.tetyAction;
	}

	public void setTetyAction(String tetyAction) {
		this.tetyAction = tetyAction;
	}

	@Column(name = "TETY_PARENT", length = 32)
	public String getTetyParent() {
		return this.tetyParent;
	}

	public void setTetyParent(String tetyParent) {
		this.tetyParent = tetyParent;
	}

	@Column(name = "TETY_CHILD", length = 32)
	public String getTetyChild() {
		return this.tetyChild;
	}

	public void setTetyChild(String tetyChild) {
		this.tetyChild = tetyChild;
	}

	@Column(name = "TETY_CLASS", length = 1)
	public String getTetyClass() {
		return this.tetyClass;
	}

	public void setTetyClass(String tetyClass) {
		this.tetyClass = tetyClass;
	}

	@Column(name = "TETY_TYPE", length = 1)
	public String getTetyType() {
		return this.tetyType;
	}

	public void setTetyType(String tetyType) {
		this.tetyType = tetyType;
	}

	@Column(name = "TETY_FORM_FLAG")
	public Short getTetyFormFlag() {
		return this.tetyFormFlag;
	}

	public void setTetyFormFlag(Short tetyFormFlag) {
		this.tetyFormFlag = tetyFormFlag;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}