package haitai.fos.ffop.entity.atable;

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
public abstract class AbstractFPackingList extends BaseDomain {

	private static final long serialVersionUID = -7005955179247262036L;
	private Integer paliId;
	private Integer version;
	private Integer fconId;
	private String fconNo;
	private String fconContractNo;
	private String paliLabel;
	private Integer paliTrackType;
	private Integer paliTrackTypeP;
	private Integer paliTransTimes;
	private String paliTrackNo;
	private String paliLineNo;
	private String paliSpec;
	private Integer paliPackages;
	private Double paliGrossWeight;
	private Double paliCbm;
	private Double paliCbmC;
	private Integer paliPieces;
	private Double paliLength;
	private Double paliTotalLength;
	private Integer unitIdLen;
	private String unitNameLen;
	private Date paliLoadDate;
	private Date paliArriveDate;
	private Integer paliHarbourId;
	private String paliHarbourName;
	private Integer paliStationId;
	private String paliStationName;
	private String paliLocation;
	private Integer paliStationIdNow;
	private String paliStationNameNow;
	private String paliLocationNow;
	private Short paliTransFlag;
	private String paliRemarks;
	private Short paliStatus;
	private Integer packId;
	private String packName;
	private String cargNameCn;
	private String cargNameEn;
	private Integer vessId;
	private String vessName;
	private String vessNameCn;
	private Integer voyaId;
	private String voyaName;
	private Short voyaSailedFlag;
	private Integer loliId;
	private Integer consId;
	private String consNo;
	private String consMblNo;
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
	@Column(name = "PALI_ID", unique = true, nullable = false)
	public Integer getPaliId() {
		return this.paliId;
	}

	public void setPaliId(Integer paliId) {
		this.paliId = paliId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FCON_ID", nullable = false)
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Column(name = "FCON_NO", length = 32)
	public String getFconNo() {
		return this.fconNo;
	}

	public void setFconNo(String fconNo) {
		this.fconNo = fconNo;
	}

	@Column(name = "FCON_CONTRACT_NO", length = 32)
	public String getFconContractNo() {
		return this.fconContractNo;
	}

	public void setFconContractNo(String fconContractNo) {
		this.fconContractNo = fconContractNo;
	}

	@Column(name = "PALI_LABEL", length = 32)
	public String getPaliLabel() {
		return this.paliLabel;
	}

	public void setPaliLabel(String paliLabel) {
		this.paliLabel = paliLabel;
	}

	@Column(name = "PALI_TRACK_TYPE")
	public Integer getPaliTrackType() {
		return this.paliTrackType;
	}

	public void setPaliTrackType(Integer paliTrackType) {
		this.paliTrackType = paliTrackType;
	}

	@Column(name = "PALI_TRACK_TYPE_P")
	public Integer getPaliTrackTypeP() {
		return this.paliTrackTypeP;
	}

	public void setPaliTrackTypeP(Integer paliTrackTypeP) {
		this.paliTrackTypeP = paliTrackTypeP;
	}

	@Column(name = "PALI_TRANS_TIMES")
	public Integer getPaliTransTimes() {
		return this.paliTransTimes;
	}

	public void setPaliTransTimes(Integer paliTransTimes) {
		this.paliTransTimes = paliTransTimes;
	}

	@Column(name = "PALI_TRACK_NO", length = 32)
	public String getPaliTrackNo() {
		return this.paliTrackNo;
	}

	public void setPaliTrackNo(String paliTrackNo) {
		this.paliTrackNo = paliTrackNo;
	}

	@Column(name = "PALI_LINE_NO", length = 32)
	public String getPaliLineNo() {
		return this.paliLineNo;
	}

	public void setPaliLineNo(String paliLineNo) {
		this.paliLineNo = paliLineNo;
	}

	@Column(name = "PALI_SPEC", length = 200)
	public String getPaliSpec() {
		return this.paliSpec;
	}

	public void setPaliSpec(String paliSpec) {
		this.paliSpec = paliSpec;
	}

	@Column(name = "PALI_PACKAGES")
	public Integer getPaliPackages() {
		return this.paliPackages;
	}

	public void setPaliPackages(Integer paliPackages) {
		this.paliPackages = paliPackages;
	}

	@Column(name = "PALI_GROSS_WEIGHT", precision = 14, scale = 6)
	public Double getPaliGrossWeight() {
		return this.paliGrossWeight;
	}

	public void setPaliGrossWeight(Double paliGrossWeight) {
		this.paliGrossWeight = paliGrossWeight;
	}

	@Column(name = "PALI_CBM", precision = 14, scale = 6)
	public Double getPaliCbm() {
		return this.paliCbm;
	}

	public void setPaliCbm(Double paliCbm) {
		this.paliCbm = paliCbm;
	}

	@Column(name = "PALI_CBM_C", precision = 14, scale = 6)
	public Double getPaliCbmC() {
		return this.paliCbmC;
	}

	public void setPaliCbmC(Double paliCbmC) {
		this.paliCbmC = paliCbmC;
	}

	@Column(name = "PALI_PIECES")
	public Integer getPaliPieces() {
		return this.paliPieces;
	}

	public void setPaliPieces(Integer paliPieces) {
		this.paliPieces = paliPieces;
	}

	@Column(name = "PALI_LENGTH", precision = 14, scale = 4)
	public Double getPaliLength() {
		return this.paliLength;
	}

	public void setPaliLength(Double paliLength) {
		this.paliLength = paliLength;
	}

	@Column(name = "PALI_TOTAL_LENGTH", precision = 14, scale = 4)
	public Double getPaliTotalLength() {
		return this.paliTotalLength;
	}

	public void setPaliTotalLength(Double paliTotalLength) {
		this.paliTotalLength = paliTotalLength;
	}

	@Column(name = "UNIT_ID_LEN")
	public Integer getUnitIdLen() {
		return this.unitIdLen;
	}

	public void setUnitIdLen(Integer unitIdLen) {
		this.unitIdLen = unitIdLen;
	}

	@Column(name = "UNIT_NAME_LEN", length = 32)
	public String getUnitNameLen() {
		return this.unitNameLen;
	}

	public void setUnitNameLen(String unitNameLen) {
		this.unitNameLen = unitNameLen;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PALI_LOAD_DATE", length = 10)
	public Date getPaliLoadDate() {
		return this.paliLoadDate;
	}

	public void setPaliLoadDate(Date paliLoadDate) {
		this.paliLoadDate = paliLoadDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "PALI_ARRIVE_DATE", length = 10)
	public Date getPaliArriveDate() {
		return this.paliArriveDate;
	}

	public void setPaliArriveDate(Date paliArriveDate) {
		this.paliArriveDate = paliArriveDate;
	}

	@Column(name = "PALI_HARBOUR_ID")
	public Integer getPaliHarbourId() {
		return this.paliHarbourId;
	}

	public void setPaliHarbourId(Integer paliHarbourId) {
		this.paliHarbourId = paliHarbourId;
	}

	@Column(name = "PALI_HARBOUR_NAME", length = 64)
	public String getPaliHarbourName() {
		return this.paliHarbourName;
	}

	public void setPaliHarbourName(String paliHarbourName) {
		this.paliHarbourName = paliHarbourName;
	}

	@Column(name = "PALI_STATION_ID")
	public Integer getPaliStationId() {
		return this.paliStationId;
	}

	public void setPaliStationId(Integer paliStationId) {
		this.paliStationId = paliStationId;
	}

	@Column(name = "PALI_STATION_NAME", length = 64)
	public String getPaliStationName() {
		return this.paliStationName;
	}

	public void setPaliStationName(String paliStationName) {
		this.paliStationName = paliStationName;
	}

	@Column(name = "PALI_LOCATION", length = 1000)
	public String getPaliLocation() {
		return this.paliLocation;
	}

	public void setPaliLocation(String paliLocation) {
		this.paliLocation = paliLocation;
	}

	@Column(name = "PALI_STATION_ID_NOW")
	public Integer getPaliStationIdNow() {
		return this.paliStationIdNow;
	}

	public void setPaliStationIdNow(Integer paliStationIdNow) {
		this.paliStationIdNow = paliStationIdNow;
	}

	@Column(name = "PALI_STATION_NAME_NOW", length = 32)
	public String getPaliStationNameNow() {
		return this.paliStationNameNow;
	}

	public void setPaliStationNameNow(String paliStationNameNow) {
		this.paliStationNameNow = paliStationNameNow;
	}

	@Column(name = "PALI_LOCATION_NOW", length = 1000)
	public String getPaliLocationNow() {
		return this.paliLocationNow;
	}

	public void setPaliLocationNow(String paliLocationNow) {
		this.paliLocationNow = paliLocationNow;
	}

	@Column(name = "PALI_TRANS_FLAG")
	public Short getPaliTransFlag() {
		return this.paliTransFlag;
	}

	public void setPaliTransFlag(Short paliTransFlag) {
		this.paliTransFlag = paliTransFlag;
	}

	@Column(name = "PALI_REMARKS", length = 500)
	public String getPaliRemarks() {
		return this.paliRemarks;
	}

	public void setPaliRemarks(String paliRemarks) {
		this.paliRemarks = paliRemarks;
	}

	@Column(name = "PALI_STATUS")
	public Short getPaliStatus() {
		return this.paliStatus;
	}

	public void setPaliStatus(Short paliStatus) {
		this.paliStatus = paliStatus;
	}

	@Column(name = "PACK_ID")
	public Integer getPackId() {
		return this.packId;
	}

	public void setPackId(Integer packId) {
		this.packId = packId;
	}

	@Column(name = "PACK_NAME", length = 64)
	public String getPackName() {
		return this.packName;
	}

	public void setPackName(String packName) {
		this.packName = packName;
	}

	@Column(name = "CARG_NAME_CN", length = 200)
	public String getCargNameCn() {
		return this.cargNameCn;
	}

	public void setCargNameCn(String cargNameCn) {
		this.cargNameCn = cargNameCn;
	}

	@Column(name = "CARG_NAME_EN", length = 200)
	public String getCargNameEn() {
		return this.cargNameEn;
	}

	public void setCargNameEn(String cargNameEn) {
		this.cargNameEn = cargNameEn;
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

	@Column(name = "VOYA_ID")
	public Integer getVoyaId() {
		return this.voyaId;
	}

	public void setVoyaId(Integer voyaId) {
		this.voyaId = voyaId;
	}

	@Column(name = "VOYA_NAME", length = 32)
	public String getVoyaName() {
		return this.voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Column(name = "VOYA_SAILED_FLAG")
	public Short getVoyaSailedFlag() {
		return this.voyaSailedFlag;
	}

	public void setVoyaSailedFlag(Short voyaSailedFlag) {
		this.voyaSailedFlag = voyaSailedFlag;
	}

	@Column(name = "LOLI_ID")
	public Integer getLoliId() {
		return this.loliId;
	}

	public void setLoliId(Integer loliId) {
		this.loliId = loliId;
	}

	@Column(name = "CONS_ID")
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONS_MBL_NO", length = 32)
	public String getConsMblNo() {
		return this.consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
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