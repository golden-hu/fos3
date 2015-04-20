package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGContainerType extends BaseDomain {

	private static final long serialVersionUID = -244540974946488498L;
	private Integer cotyId;
	private Integer version;
	private String cotyCode;
	private String cotyLength;
	private String coclCode;
	private Integer cotyTeu;
	private String cotyIsoCode;
	private String cotyUnCode;
	private Double cotyTareWeight;
	private Double cotyMaxWeight;
	private Double cotyMaxMeasurement;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COTY_ID", unique = true, nullable = false)
	public Integer getCotyId() {
		return this.cotyId;
	}

	public void setCotyId(Integer cotyId) {
		this.cotyId = cotyId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "COTY_CODE", nullable = false, length = 16)
	public String getCotyCode() {
		return this.cotyCode;
	}

	public void setCotyCode(String cotyCode) {
		this.cotyCode = cotyCode;
	}

	@Column(name = "COTY_LENGTH", nullable = false, length = 2)
	public String getCotyLength() {
		return this.cotyLength;
	}

	public void setCotyLength(String cotyLength) {
		this.cotyLength = cotyLength;
	}

	@Column(name = "COCL_CODE", nullable = false, length = 16)
	public String getCoclCode() {
		return this.coclCode;
	}

	public void setCoclCode(String coclCode) {
		this.coclCode = coclCode;
	}

	@Column(name = "COTY_TEU")
	public Integer getCotyTeu() {
		return this.cotyTeu;
	}

	public void setCotyTeu(Integer cotyTeu) {
		this.cotyTeu = cotyTeu;
	}

	@Column(name = "COTY_ISO_CODE", length = 8)
	public String getCotyIsoCode() {
		return this.cotyIsoCode;
	}

	public void setCotyIsoCode(String cotyIsoCode) {
		this.cotyIsoCode = cotyIsoCode;
	}

	@Column(name = "COTY_UN_CODE", length = 8)
	public String getCotyUnCode() {
		return this.cotyUnCode;
	}

	public void setCotyUnCode(String cotyUnCode) {
		this.cotyUnCode = cotyUnCode;
	}

	@Column(name = "COTY_TARE_WEIGHT", precision = 9)
	public Double getCotyTareWeight() {
		return this.cotyTareWeight;
	}

	public void setCotyTareWeight(Double cotyTareWeight) {
		this.cotyTareWeight = cotyTareWeight;
	}

	@Column(name = "COTY_MAX_WEIGHT", precision = 9)
	public Double getCotyMaxWeight() {
		return this.cotyMaxWeight;
	}

	public void setCotyMaxWeight(Double cotyMaxWeight) {
		this.cotyMaxWeight = cotyMaxWeight;
	}

	@Column(name = "COTY_MAX_MEASUREMENT", precision = 9)
	public Double getCotyMaxMeasurement() {
		return this.cotyMaxMeasurement;
	}

	public void setCotyMaxMeasurement(Double cotyMaxMeasurement) {
		this.cotyMaxMeasurement = cotyMaxMeasurement;
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