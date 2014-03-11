package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractGVoyage extends BaseDomain {

	private static final long serialVersionUID = -3398658709214844747L;
	private Integer voyaId;
	private Integer version;
	private String voyaName;
	private Integer vessId;
	private String vessName;
	private String vessNameCn;
	private String voyaClass;
	private String voyaType;
	private Integer voyaCarrier;
	private String voyaCarrierName;
	private Integer voyaHarbourId;
	private String voyaHarbourName;
	private String voyaPorts;
	private Integer shliId;
	private String shliName;
	private String voyaCarrierLine;
	private Double voyaQuantity;
	private Double voyaShippedQuantity;
	private Double voyaFactQuantity;
	private Date voyaShipDateF;
	private Date voyaShipDateT;
	private Date voyaLoadDateF;
	private Date voyaLoadDateT;
	private Date voyaEtd;
	private String voyaEtdT;
	private Date voyaEta;
	private String voyaEtaT;
	private Date voyaBerthingDate;
	private String voyaBerthingDateT;
	private Date voyaSailDate;
	private String voyaSailDateT;
	private Short voyaShipMapFlag;
	private Short voyaSailedFlag;
	private Integer voyaDispatcherId;
	private String voyaDispatcherName;
	private Integer voyaOperatorId;
	private String voyaOperatorName;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "VOYA_ID", unique = true, nullable = false)
	public Integer getVoyaId() {
		return this.voyaId;
	}

	public void setVoyaId(Integer voyaId) {
		this.voyaId = voyaId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "VOYA_NAME", nullable = false, length = 32)
	public String getVoyaName() {
		return this.voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Column(name = "VESS_ID")
	public Integer getVessId() {
		return this.vessId;
	}

	public void setVessId(Integer vessId) {
		this.vessId = vessId;
	}

	@Column(name = "VESS_NAME", length = 64)
	public String getVessName() {
		return this.vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Column(name = "VESS_NAME_CN", length = 32)
	public String getVessNameCn() {
		return this.vessNameCn;
	}

	public void setVessNameCn(String vessNameCn) {
		this.vessNameCn = vessNameCn;
	}

	@Column(name = "VOYA_CLASS", length = 1)
	public String getVoyaClass() {
		return this.voyaClass;
	}

	public void setVoyaClass(String voyaClass) {
		this.voyaClass = voyaClass;
	}

	@Column(name = "VOYA_TYPE", length = 1)
	public String getVoyaType() {
		return this.voyaType;
	}

	public void setVoyaType(String voyaType) {
		this.voyaType = voyaType;
	}

	@Column(name = "VOYA_CARRIER")
	public Integer getVoyaCarrier() {
		return this.voyaCarrier;
	}

	public void setVoyaCarrier(Integer voyaCarrier) {
		this.voyaCarrier = voyaCarrier;
	}

	@Column(name = "VOYA_CARRIER_NAME", length = 64)
	public String getVoyaCarrierName() {
		return this.voyaCarrierName;
	}

	public void setVoyaCarrierName(String voyaCarrierName) {
		this.voyaCarrierName = voyaCarrierName;
	}

	@Column(name = "VOYA_HARBOUR_ID")
	public Integer getVoyaHarbourId() {
		return this.voyaHarbourId;
	}

	public void setVoyaHarbourId(Integer voyaHarbourId) {
		this.voyaHarbourId = voyaHarbourId;
	}

	@Column(name = "VOYA_HARBOUR_NAME", length = 32)
	public String getVoyaHarbourName() {
		return this.voyaHarbourName;
	}

	public void setVoyaHarbourName(String voyaHarbourName) {
		this.voyaHarbourName = voyaHarbourName;
	}

	@Column(name = "VOYA_PORTS", length = 500)
	public String getVoyaPorts() {
		return this.voyaPorts;
	}

	public void setVoyaPorts(String voyaPorts) {
		this.voyaPorts = voyaPorts;
	}

	@Column(name = "SHLI_ID")
	public Integer getShliId() {
		return this.shliId;
	}

	public void setShliId(Integer shliId) {
		this.shliId = shliId;
	}

	@Column(name = "SHLI_NAME", length = 32)
	public String getShliName() {
		return this.shliName;
	}

	public void setShliName(String shliName) {
		this.shliName = shliName;
	}

	@Column(name = "VOYA_CARRIER_LINE", length = 32)
	public String getVoyaCarrierLine() {
		return this.voyaCarrierLine;
	}

	public void setVoyaCarrierLine(String voyaCarrierLine) {
		this.voyaCarrierLine = voyaCarrierLine;
	}

	@Column(name = "VOYA_QUANTITY", precision = 12, scale = 4)
	public Double getVoyaQuantity() {
		return this.voyaQuantity;
	}

	public void setVoyaQuantity(Double voyaQuantity) {
		this.voyaQuantity = voyaQuantity;
	}

	@Column(name = "VOYA_SHIPPED_QUANTITY", precision = 12, scale = 4)
	public Double getVoyaShippedQuantity() {
		return this.voyaShippedQuantity;
	}

	public void setVoyaShippedQuantity(Double voyaShippedQuantity) {
		this.voyaShippedQuantity = voyaShippedQuantity;
	}

	@Column(name = "VOYA_FACT_QUANTITY", precision = 12, scale = 4)
	public Double getVoyaFactQuantity() {
		return this.voyaFactQuantity;
	}

	public void setVoyaFactQuantity(Double voyaFactQuantity) {
		this.voyaFactQuantity = voyaFactQuantity;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SHIP_DATE_F", length = 10)
	public Date getVoyaShipDateF() {
		return this.voyaShipDateF;
	}

	public void setVoyaShipDateF(Date voyaShipDateF) {
		this.voyaShipDateF = voyaShipDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SHIP_DATE_T", length = 10)
	public Date getVoyaShipDateT() {
		return this.voyaShipDateT;
	}

	public void setVoyaShipDateT(Date voyaShipDateT) {
		this.voyaShipDateT = voyaShipDateT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_LOAD_DATE_F", length = 10)
	public Date getVoyaLoadDateF() {
		return this.voyaLoadDateF;
	}

	public void setVoyaLoadDateF(Date voyaLoadDateF) {
		this.voyaLoadDateF = voyaLoadDateF;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_LOAD_DATE_T", length = 10)
	public Date getVoyaLoadDateT() {
		return this.voyaLoadDateT;
	}

	public void setVoyaLoadDateT(Date voyaLoadDateT) {
		this.voyaLoadDateT = voyaLoadDateT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_ETD", length = 10)
	public Date getVoyaEtd() {
		return this.voyaEtd;
	}

	public void setVoyaEtd(Date voyaEtd) {
		this.voyaEtd = voyaEtd;
	}

	@Column(name = "VOYA_ETD_T", length = 16)
	public String getVoyaEtdT() {
		return this.voyaEtdT;
	}

	public void setVoyaEtdT(String voyaEtdT) {
		this.voyaEtdT = voyaEtdT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_ETA", length = 10)
	public Date getVoyaEta() {
		return this.voyaEta;
	}

	public void setVoyaEta(Date voyaEta) {
		this.voyaEta = voyaEta;
	}

	@Column(name = "VOYA_ETA_T", length = 16)
	public String getVoyaEtaT() {
		return this.voyaEtaT;
	}

	public void setVoyaEtaT(String voyaEtaT) {
		this.voyaEtaT = voyaEtaT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_BERTHING_DATE", length = 10)
	public Date getVoyaBerthingDate() {
		return this.voyaBerthingDate;
	}

	public void setVoyaBerthingDate(Date voyaBerthingDate) {
		this.voyaBerthingDate = voyaBerthingDate;
	}

	@Column(name = "VOYA_BERTHING_DATE_T", length = 16)
	public String getVoyaBerthingDateT() {
		return this.voyaBerthingDateT;
	}

	public void setVoyaBerthingDateT(String voyaBerthingDateT) {
		this.voyaBerthingDateT = voyaBerthingDateT;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "VOYA_SAIL_DATE", length = 10)
	public Date getVoyaSailDate() {
		return this.voyaSailDate;
	}

	public void setVoyaSailDate(Date voyaSailDate) {
		this.voyaSailDate = voyaSailDate;
	}

	@Column(name = "VOYA_SAIL_DATE_T", length = 16)
	public String getVoyaSailDateT() {
		return this.voyaSailDateT;
	}

	public void setVoyaSailDateT(String voyaSailDateT) {
		this.voyaSailDateT = voyaSailDateT;
	}

	@Column(name = "VOYA_SHIP_MAP_FLAG")
	public Short getVoyaShipMapFlag() {
		return this.voyaShipMapFlag;
	}

	public void setVoyaShipMapFlag(Short voyaShipMapFlag) {
		this.voyaShipMapFlag = voyaShipMapFlag;
	}

	@Column(name = "VOYA_SAILED_FLAG")
	public Short getVoyaSailedFlag() {
		return this.voyaSailedFlag;
	}

	public void setVoyaSailedFlag(Short voyaSailedFlag) {
		this.voyaSailedFlag = voyaSailedFlag;
	}

	@Column(name = "VOYA_DISPATCHER_ID")
	public Integer getVoyaDispatcherId() {
		return this.voyaDispatcherId;
	}

	public void setVoyaDispatcherId(Integer voyaDispatcherId) {
		this.voyaDispatcherId = voyaDispatcherId;
	}

	@Column(name = "VOYA_DISPATCHER_NAME", length = 32)
	public String getVoyaDispatcherName() {
		return this.voyaDispatcherName;
	}

	public void setVoyaDispatcherName(String voyaDispatcherName) {
		this.voyaDispatcherName = voyaDispatcherName;
	}
	@Column(name = "VOYA_OPERATOR_ID")
	public Integer getVoyaOperatorId() {
		return this.voyaOperatorId;
	}

	public void setVoyaOperatorId(Integer voyaOperatorId) {
		this.voyaOperatorId = voyaOperatorId;
	}

	@Column(name = "VOYA_OPERATOR_NAME", length = 32)
	public String getVoyaOperatorName() {
		return this.voyaOperatorName;
	}

	public void setVoyaOperatorName(String voyaOperatorName) {
		this.voyaOperatorName = voyaOperatorName;
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