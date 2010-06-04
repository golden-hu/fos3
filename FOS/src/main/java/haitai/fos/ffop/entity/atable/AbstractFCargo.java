package haitai.fos.ffop.entity.atable;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractFCargo extends BaseDomain {

	private static final long serialVersionUID = 3229205075201456676L;
	private Integer cargId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private Integer consMasterId;
	private String consMasterNo;
	private String cargMarks;
	private String cargNameEn;
	private String cargNameCn;
	private String cargManuNo;
	private String cargSpec;
	private String cargNo;
	private Integer packId;
	private String packName;
	private Integer cargPackageNum;
	private Integer packSId;
	private Double cargPackageSNum;
	private Integer unitId;
	private String unitName;
	private Double cargNetWeight;
	private Double cargGrossWeight;
	private Double cargMeasurement;
	private String cargBigFlag;
	private Double cargLength;
	private Double cargWidth;
	private Double cargHigh;
	private String cargReeterFlag;
	private Double cargTemperature;
	private String cargTemperatureUnit;
	private Double cargTemperatureLow;
	private Double cargTemperatureHigh;
	private Double cargHumidity;
	private String cargVentOutlet;
	private String cargDanagerFlag;
	private String cargDanagerClass;
	private String cargPollutionFlag;
	private String cargDanagerProperty;
	private String cargImdgPage;
	private String cargSubLabel;
	private String cargUnNo;
	private String cargFlashPoint;
	private String cargMfagNo;
	private String cargEmsNo;
	private String cargPkgGroup;
	private String cargEmgTel;
	private Short cargQuitFlag;
	private Short cargCudeType;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CARG_ID", unique = true, nullable = false)
	public Integer getCargId() {
		return this.cargId;
	}

	public void setCargId(Integer cargId) {
		this.cargId = cargId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 16)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_MASTER_ID")
	public Integer getConsMasterId() {
		return this.consMasterId;
	}

	public void setConsMasterId(Integer consMasterId) {
		this.consMasterId = consMasterId;
	}

	@Column(name = "CONS_MASTER_NO", length = 32)
	public String getConsMasterNo() {
		return this.consMasterNo;
	}

	public void setConsMasterNo(String consMasterNo) {
		this.consMasterNo = consMasterNo;
	}

	@Column(name = "CARG_MARKS", length = 1000)
	public String getCargMarks() {
		return this.cargMarks;
	}

	public void setCargMarks(String cargMarks) {
		this.cargMarks = cargMarks;
	}

	@Column(name = "CARG_NAME_EN", length = 2000)
	public String getCargNameEn() {
		return this.cargNameEn;
	}

	public void setCargNameEn(String cargNameEn) {
		this.cargNameEn = cargNameEn;
	}

	@Column(name = "CARG_NAME_CN", length = 200)
	public String getCargNameCn() {
		return this.cargNameCn;
	}

	public void setCargNameCn(String cargNameCn) {
		this.cargNameCn = cargNameCn;
	}

	@Column(name = "CARG_MANU_NO", length = 32)
	public String getCargManuNo() {
		return this.cargManuNo;
	}

	public void setCargManuNo(String cargManuNo) {
		this.cargManuNo = cargManuNo;
	}

	@Column(name = "CARG_SPEC", length = 32)
	public String getCargSpec() {
		return this.cargSpec;
	}

	public void setCargSpec(String cargSpec) {
		this.cargSpec = cargSpec;
	}

	@Column(name = "CARG_NO", length = 32)
	public String getCargNo() {
		return this.cargNo;
	}

	public void setCargNo(String cargNo) {
		this.cargNo = cargNo;
	}

	@Column(name = "PACK_ID")
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "PACK_NAME", length = 32)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "CARG_PACKAGE_NUM")
	public Integer getCargPackageNum() {
		return this.cargPackageNum;
	}

	public void setCargPackageNum(Integer cargPackageNum) {
		this.cargPackageNum = cargPackageNum;
	}

	@Column(name = "PACK_S_ID")
	public Integer getPackSId() {
		return this.packSId;
	}

	public void setPackSId(Integer packSId) {
		this.packSId = packSId;
	}

	@Column(name = "CARG_PACKAGE_S_NUM", precision = 9)
	public Double getCargPackageSNum() {
		return this.cargPackageSNum;
	}

	public void setCargPackageSNum(Double cargPackageSNum) {
		this.cargPackageSNum = cargPackageSNum;
	}

	@Column(name = "UNIT_ID")
	public Integer getUnitId() {
		return this.unitId;
	}

	public void setUnitId(Integer unitId) {
		this.unitId = unitId;
	}

	@Column(name = "UNIT_NAME", length = 32)
	public String getUnitName() {
		return this.unitName;
	}

	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	@Column(name = "CARG_NET_WEIGHT", precision = 14, scale = 6)
	public Double getCargNetWeight() {
		return this.cargNetWeight;
	}

	public void setCargNetWeight(Double cargNetWeight) {
		this.cargNetWeight = cargNetWeight;
	}

	@Column(name = "CARG_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getCargGrossWeight() {
		return this.cargGrossWeight;
	}

	public void setCargGrossWeight(Double cargGrossWeight) {
		this.cargGrossWeight = cargGrossWeight;
	}

	@Column(name = "CARG_MEASUREMENT", precision = 14, scale = 6)
	public Double getCargMeasurement() {
		return this.cargMeasurement;
	}

	public void setCargMeasurement(Double cargMeasurement) {
		this.cargMeasurement = cargMeasurement;
	}

	@Column(name = "CARG_BIG_FLAG", length = 1)
	public String getCargBigFlag() {
		return this.cargBigFlag;
	}

	public void setCargBigFlag(String cargBigFlag) {
		this.cargBigFlag = cargBigFlag;
	}

	@Column(name = "CARG_LENGTH", precision = 9)
	public Double getCargLength() {
		return this.cargLength;
	}

	public void setCargLength(Double cargLength) {
		this.cargLength = cargLength;
	}

	@Column(name = "CARG_WIDTH", precision = 9)
	public Double getCargWidth() {
		return this.cargWidth;
	}

	public void setCargWidth(Double cargWidth) {
		this.cargWidth = cargWidth;
	}

	@Column(name = "CARG_HIGH", precision = 9)
	public Double getCargHigh() {
		return this.cargHigh;
	}

	public void setCargHigh(Double cargHigh) {
		this.cargHigh = cargHigh;
	}

	@Column(name = "CARG_REETER_FLAG", length = 1)
	public String getCargReeterFlag() {
		return this.cargReeterFlag;
	}

	public void setCargReeterFlag(String cargReeterFlag) {
		this.cargReeterFlag = cargReeterFlag;
	}

	@Column(name = "CARG_TEMPERATURE", precision = 9)
	public Double getCargTemperature() {
		return this.cargTemperature;
	}

	public void setCargTemperature(Double cargTemperature) {
		this.cargTemperature = cargTemperature;
	}

	@Column(name = "CARG_TEMPERATURE_UNIT", length = 1)
	public String getCargTemperatureUnit() {
		return this.cargTemperatureUnit;
	}

	public void setCargTemperatureUnit(String cargTemperatureUnit) {
		this.cargTemperatureUnit = cargTemperatureUnit;
	}

	@Column(name = "CARG_TEMPERATURE_LOW", precision = 9)
	public Double getCargTemperatureLow() {
		return this.cargTemperatureLow;
	}

	public void setCargTemperatureLow(Double cargTemperatureLow) {
		this.cargTemperatureLow = cargTemperatureLow;
	}

	@Column(name = "CARG_TEMPERATURE_HIGH", precision = 9)
	public Double getCargTemperatureHigh() {
		return this.cargTemperatureHigh;
	}

	public void setCargTemperatureHigh(Double cargTemperatureHigh) {
		this.cargTemperatureHigh = cargTemperatureHigh;
	}

	@Column(name = "CARG_HUMIDITY", precision = 9)
	public Double getCargHumidity() {
		return this.cargHumidity;
	}

	public void setCargHumidity(Double cargHumidity) {
		this.cargHumidity = cargHumidity;
	}

	@Column(name = "CARG_VENT_OUTLET", length = 64)
	public String getCargVentOutlet() {
		return this.cargVentOutlet;
	}

	public void setCargVentOutlet(String cargVentOutlet) {
		this.cargVentOutlet = cargVentOutlet;
	}

	@Column(name = "CARG_DANAGER_FLAG", length = 1)
	public String getCargDanagerFlag() {
		return this.cargDanagerFlag;
	}

	public void setCargDanagerFlag(String cargDanagerFlag) {
		this.cargDanagerFlag = cargDanagerFlag;
	}

	@Column(name = "CARG_DANAGER_CLASS", length = 16)
	public String getCargDanagerClass() {
		return this.cargDanagerClass;
	}

	public void setCargDanagerClass(String cargDanagerClass) {
		this.cargDanagerClass = cargDanagerClass;
	}

	@Column(name = "CARG_POLLUTION_FLAG", length = 1)
	public String getCargPollutionFlag() {
		return this.cargPollutionFlag;
	}

	public void setCargPollutionFlag(String cargPollutionFlag) {
		this.cargPollutionFlag = cargPollutionFlag;
	}

	@Column(name = "CARG_DANAGER_PROPERTY", length = 32)
	public String getCargDanagerProperty() {
		return this.cargDanagerProperty;
	}

	public void setCargDanagerProperty(String cargDanagerProperty) {
		this.cargDanagerProperty = cargDanagerProperty;
	}

	@Column(name = "CARG_IMDG_PAGE", length = 32)
	public String getCargImdgPage() {
		return this.cargImdgPage;
	}

	public void setCargImdgPage(String cargImdgPage) {
		this.cargImdgPage = cargImdgPage;
	}

	@Column(name = "CARG_SUB_LABEL", length = 32)
	public String getCargSubLabel() {
		return this.cargSubLabel;
	}

	public void setCargSubLabel(String cargSubLabel) {
		this.cargSubLabel = cargSubLabel;
	}

	@Column(name = "CARG_UN_NO", length = 32)
	public String getCargUnNo() {
		return this.cargUnNo;
	}

	public void setCargUnNo(String cargUnNo) {
		this.cargUnNo = cargUnNo;
	}

	@Column(name = "CARG_FLASH_POINT", length = 16)
	public String getCargFlashPoint() {
		return this.cargFlashPoint;
	}

	public void setCargFlashPoint(String cargFlashPoint) {
		this.cargFlashPoint = cargFlashPoint;
	}

	@Column(name = "CARG_MFAG_NO", length = 32)
	public String getCargMfagNo() {
		return this.cargMfagNo;
	}

	public void setCargMfagNo(String cargMfagNo) {
		this.cargMfagNo = cargMfagNo;
	}

	@Column(name = "CARG_EMS_NO", length = 32)
	public String getCargEmsNo() {
		return this.cargEmsNo;
	}

	public void setCargEmsNo(String cargEmsNo) {
		this.cargEmsNo = cargEmsNo;
	}

	@Column(name = "CARG_PKG_GROUP", length = 32)
	public String getCargPkgGroup() {
		return this.cargPkgGroup;
	}

	public void setCargPkgGroup(String cargPkgGroup) {
		this.cargPkgGroup = cargPkgGroup;
	}

	@Column(name = "CARG_EMG_TEL", length = 16)
	public String getCargEmgTel() {
		return this.cargEmgTel;
	}

	public void setCargEmgTel(String cargEmgTel) {
		this.cargEmgTel = cargEmgTel;
	}

	@Column(name = "CARG_QUIT_FLAG")
	public Short getCargQuitFlag() {
		return this.cargQuitFlag;
	}

	public void setCargQuitFlag(Short cargQuitFlag) {
		this.cargQuitFlag = cargQuitFlag;
	}

	@Column(name = "CARG_CUDE_TYPE")
	public Short getCargCudeType() {
		return this.cargCudeType;
	}

	public void setCargCudeType(Short cargCudeType) {
		this.cargCudeType = cargCudeType;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return this.modifyBy;
	}

	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
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