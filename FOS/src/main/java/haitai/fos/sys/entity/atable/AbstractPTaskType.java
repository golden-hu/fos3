package haitai.fos.sys.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractPTaskType extends BaseDomain {

	private static final long serialVersionUID = 1104549418016143625L;
	private Integer tatyId;
	private Integer version;
	private String tatyName;
	private Integer tatyDId;
	private String tatyDName;
	private Integer tatyOrder;
	private String tatyDesc;
	private String tatyDateType;
	private Integer tatyDateEstimated;
	private String tatyAction;
	private String tatyClass;
	private String tatyProperty;
	private Integer tatyDefaultOwner;
	private String tatyBizType;
	private String tatyBizClass;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TATY_ID", unique = true, nullable = false)
	public Integer getTatyId() {
		return this.tatyId;
	}

	public void setTatyId(Integer tatyId) {
		this.tatyId = tatyId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TATY_NAME", nullable = false, length = 64)
	public String getTatyName() {
		return this.tatyName;
	}

	public void setTatyName(String tatyName) {
		this.tatyName = tatyName;
	}

	@Column(name = "TATY_D_ID")
	public Integer getTatyDId() {
		return tatyDId;
	}

	public void setTatyDId(Integer tatyDId) {
		this.tatyDId = tatyDId;
	}

	@Column(name = "TATY_D_NAME", length = 64)
	public String getTatyDName() {
		return tatyDName;
	}

	public void setTatyDName(String tatyDName) {
		this.tatyDName = tatyDName;
	}

	@Column(name = "TATY_ORDER")
	public Integer getTatyOrder() {
		return tatyOrder;
	}

	public void setTatyOrder(Integer tatyOrder) {
		this.tatyOrder = tatyOrder;
	}

	@Column(name = "TATY_DESC", length = 200)
	public String getTatyDesc() {
		return this.tatyDesc;
	}

	public void setTatyDesc(String tatyDesc) {
		this.tatyDesc = tatyDesc;
	}

	@Column(name = "TATY_DATE_TYPE", length = 32)
	public String getTatyDateType() {
		return this.tatyDateType;
	}

	public void setTatyDateType(String tatyDateType) {
		this.tatyDateType = tatyDateType;
	}

	@Column(name = "TATY_DATE_ESTIMATED")
	public Integer getTatyDateEstimated() {
		return this.tatyDateEstimated;
	}

	public void setTatyDateEstimated(Integer tatyDateEstimated) {
		this.tatyDateEstimated = tatyDateEstimated;
	}

	@Column(name = "TATY_ACTION", length = 32)
	public String getTatyAction() {
		return this.tatyAction;
	}

	public void setTatyAction(String tatyAction) {
		this.tatyAction = tatyAction;
	}

	@Column(name = "TATY_CLASS", length = 200)
	public String getTatyClass() {
		return this.tatyClass;
	}

	public void setTatyClass(String tatyClass) {
		this.tatyClass = tatyClass;
	}

	@Column(name = "TATY_PROPERTY", length = 62)
	public String getTatyProperty() {
		return this.tatyProperty;
	}

	public void setTatyProperty(String tatyProperty) {
		this.tatyProperty = tatyProperty;
	}

	@Column(name = "TATY_DEFAULT_OWNER")
	public Integer getTatyDefaultOwner() {
		return this.tatyDefaultOwner;
	}

	public void setTatyDefaultOwner(Integer tatyDefaultOwner) {
		this.tatyDefaultOwner = tatyDefaultOwner;
	}

	@Column(name = "TATY_BIZ_TYPE", nullable = false, length = 1)
	public String getTatyBizType() {
		return this.tatyBizType;
	}

	public void setTatyBizType(String tatyBizType) {
		this.tatyBizType = tatyBizType;
	}

	@Column(name = "TATY_BIZ_CLASS", nullable = false, length = 1)
	public String getTatyBizClass() {
		return this.tatyBizClass;
	}

	public void setTatyBizClass(String tatyBizClass) {
		this.tatyBizClass = tatyBizClass;
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

	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}