package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGShippingLine extends BaseDomain {

	private static final long serialVersionUID = 1942839735328292746L;
	private Integer shliId;
	private Integer version;
	private String shliCode;
	private String shliName;
	private String shliNameEn;
	private Short shliBulkFlag;
	private Short shliContFlag;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "SHLI_ID", unique = true, nullable = false)
	public Integer getShliId() {
		return this.shliId;
	}

	public void setShliId(Integer shliId) {
		this.shliId = shliId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "SHLI_CODE", nullable = false, length = 16)
	public String getShliCode() {
		return this.shliCode;
	}

	public void setShliCode(String shliCode) {
		this.shliCode = shliCode;
	}

	@Column(name = "SHLI_NAME", nullable = false, length = 32)
	public String getShliName() {
		return this.shliName;
	}

	public void setShliName(String shliName) {
		this.shliName = shliName;
	}

	@Column(name = "SHLI_NAME_EN", length = 32)
	public String getShliNameEn() {
		return this.shliNameEn;
	}

	public void setShliNameEn(String shliNameEn) {
		this.shliNameEn = shliNameEn;
	}

	@Column(name = "SHLI_BULK_FLAG")
	public Short getShliBulkFlag() {
		return this.shliBulkFlag;
	}

	public void setShliBulkFlag(Short shliBulkFlag) {
		this.shliBulkFlag = shliBulkFlag;
	}

	@Column(name = "SHLI_CONT_FLAG")
	public Short getShliContFlag() {
		return this.shliContFlag;
	}

	public void setShliContFlag(Short shliContFlag) {
		this.shliContFlag = shliContFlag;
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