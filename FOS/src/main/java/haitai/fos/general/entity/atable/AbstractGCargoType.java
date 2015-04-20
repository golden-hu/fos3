package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGCargoType extends BaseDomain {

	private static final long serialVersionUID = -2986527149630312797L;
	private Integer catyId;
	private Integer version;
	private Integer caclId;
	private String catyCode;
	private String catyNameCn;
	private String catyNameEn;
	private String catyManuNo;
	private String catySpec;
	private String catyCargoType;
	private Short catyDanagerFlag;
	private String catyDanagerNo;
	private String catyDanagerProperty;
	private String catyRemarks;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CATY_ID", unique = true, nullable = false)
	public Integer getCatyId() {
		return this.catyId;
	}

	public void setCatyId(Integer catyId) {
		this.catyId = catyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CACL_ID")
	public Integer getCaclId() {
		return this.caclId;
	}

	public void setCaclId(Integer caclId) {
		this.caclId = caclId;
	}

	@Column(name = "CATY_CODE", length = 16)
	public String getCatyCode() {
		return this.catyCode;
	}

	public void setCatyCode(String catyCode) {
		this.catyCode = catyCode;
	}

	@Column(name = "CATY_NAME_CN", length = 200)
	public String getCatyNameCn() {
		return this.catyNameCn;
	}

	public void setCatyNameCn(String catyNameCn) {
		this.catyNameCn = catyNameCn;
	}

	@Column(name = "CATY_NAME_EN", length = 200)
	public String getCatyNameEn() {
		return this.catyNameEn;
	}

	public void setCatyNameEn(String catyNameEn) {
		this.catyNameEn = catyNameEn;
	}
	
	@Column(name = "CATY_MANU_NO", length = 64)
	public String getCatyManuNo() {
		return catyManuNo;
	}

	public void setCatyManuNo(String catyManuNo) {
		this.catyManuNo = catyManuNo;
	}

	@Column(name = "CATY_SPEC", length = 64)
	public String getCatySpec() {
		return catySpec;
	}

	public void setCatySpec(String catySpec) {
		this.catySpec = catySpec;
	}

	@Column(name = "CATY_CARGO_TYPE", length = 64)
	public String getCatyCargoType() {
		return catyCargoType;
	}

	public void setCatyCargoType(String catyCargoType) {
		this.catyCargoType = catyCargoType;
	}


	@Column(name = "CATY_DANAGER_FLAG")
	public Short getCatyDanagerFlag() {
		return this.catyDanagerFlag;
	}

	public void setCatyDanagerFlag(Short catyDanagerFlag) {
		this.catyDanagerFlag = catyDanagerFlag;
	}

	@Column(name = "CATY_DANAGER_NO", length = 16)
	public String getCatyDanagerNo() {
		return this.catyDanagerNo;
	}

	public void setCatyDanagerNo(String catyDanagerNo) {
		this.catyDanagerNo = catyDanagerNo;
	}

	@Column(name = "CATY_DANAGER_PROPERTY", length = 200)
	public String getCatyDanagerProperty() {
		return this.catyDanagerProperty;
	}

	public void setCatyDanagerProperty(String catyDanagerProperty) {
		this.catyDanagerProperty = catyDanagerProperty;
	}

	@Column(name = "CATY_REMARKS", length = 200)
	public String getCatyRemarks() {
		return this.catyRemarks;
	}

	public void setCatyRemarks(String catyRemarks) {
		this.catyRemarks = catyRemarks;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

	@Column(name = "COMP_CODE")
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "REMOVED")
	public Short getRemoved() {
		return this.removed;
	}

	public void setRemoved(Short removed) {
		this.removed = removed;
	}

}