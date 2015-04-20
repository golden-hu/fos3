package haitai.fos.general.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractGPlace extends BaseDomain {

	private static final long serialVersionUID = -5318738841071380372L;
	private Integer placId;
	private Integer version;
	private String placCode;
	private String placName;
	private String placNameEn;
	private Short placType;
	private String placDesc;
	private String counCode;
	private Integer placProvinceId;
	private String placProvinceName;
	private String placCityName;
	private Integer custId;
	private String custName;
	private String custSname;
	private String placAddress;
	private String placStation;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PLAC_ID", unique = true, nullable = false)
	public Integer getPlacId() {
		return this.placId;
	}

	public void setPlacId(Integer placId) {
		this.placId = placId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PLAC_CODE", nullable = false, length = 16)
	public String getPlacCode() {
		return this.placCode;
	}

	public void setPlacCode(String placCode) {
		this.placCode = placCode;
	}

	@Column(name = "PLAC_NAME", nullable = false, length = 32)
	public String getPlacName() {
		return this.placName;
	}

	public void setPlacName(String placName) {
		this.placName = placName;
	}

	@Column(name = "PLAC_NAME_EN", length = 32)
	public String getPlacNameEn() {
		return this.placNameEn;
	}

	public void setPlacNameEn(String placNameEn) {
		this.placNameEn = placNameEn;
	}

	@Column(name = "PLAC_TYPE")
	public Short getPlacType() {
		return this.placType;
	}

	public void setPlacType(Short placType) {
		this.placType = placType;
	}

	@Column(name = "PLAC_DESC", length = 2000)
	public String getPlacDesc() {
		return this.placDesc;
	}

	public void setPlacDesc(String placDesc) {
		this.placDesc = placDesc;
	}

	@Column(name = "COUN_CODE", length = 2)
	public String getCounCode() {
		return this.counCode;
	}

	public void setCounCode(String counCode) {
		this.counCode = counCode;
	}

	@Column(name = "PLAC_PROVINCE_ID")
	public Integer getPlacProvinceId() {
		return this.placProvinceId;
	}

	public void setPlacProvinceId(Integer placProvinceId) {
		this.placProvinceId = placProvinceId;
	}

	@Column(name = "PLAC_PROVINCE_NAME", length = 32)
	public String getPlacProvinceName() {
		return this.placProvinceName;
	}

	public void setPlacProvinceName(String placProvinceName) {
		this.placProvinceName = placProvinceName;
	}

	@Column(name = "PLAC_CITY_NAME", length = 32)
	public String getPlacCityName() {
		return this.placCityName;
	}

	public void setPlacCityName(String placCityName) {
		this.placCityName = placCityName;
	}

	@Column(name = "CUST_ID")
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Column(name = "CUST_NAME", length = 64)
	public String getCustName() {
		return this.custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Column(name = "CUST_SNAME", length = 32)
	public String getCustSname() {
		return this.custSname;
	}

	public void setCustSname(String custSname) {
		this.custSname = custSname;
	}

	@Column(name = "PLAC_ADDRESS", length = 2000)
	public String getPlacAddress() {
		return placAddress;
	}

	public void setPlacAddress(String placAddress) {
		this.placAddress = placAddress;
	}

	@Column(name = "PLAC_STATION", length = 2000)
	public String getPlacStation() {
		return placStation;
	}

	public void setPlacStation(String placStation) {
		this.placStation = placStation;
	}

	@Column(name = "ACTIVE", nullable = false)
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