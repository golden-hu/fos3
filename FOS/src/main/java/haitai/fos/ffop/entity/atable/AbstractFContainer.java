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
public abstract class AbstractFContainer extends BaseDomain {

	private static final long serialVersionUID = -126663786830677349L;
	private Integer contId;
	private Integer version;
	private Integer consId;
	private String consNo;
	private String contPreFlag;
	private String contPartOfFlag;
	private Integer contMConsId;
	private String contMConsNo;
	private String contNo;
	private Integer contNum;
	private String contSealNo;
	private String contSealNo2;
	private String contSealNo3;
	private Integer cotyId;
	private String cotyCode;
	private String contFl;
	private Integer packId;
	private String packName;
	private Integer contPackageNum;
	private String contCargoNameEn;
	private String contCargoNameCn;
	private Double contGrossWeight;
	private Double contMeasurement;
	private Short contSocFlag;
	private Date contLoadDate;
	private String contRemarks;
	private String cargTemperature;
	private String cargDanagerClass;
	private String cargFlashPoint;
	private String cargImdgPage;
	private String cargUnNo;
	private String contVessel;
	private String contVoyage;
	private String contPol;
	private String contPod;
	private String contDeliveryPlace;
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
	@Column(name = "CONT_ID", unique = true, nullable = false)
	public Integer getContId() {
		return this.contId;
	}

	public void setContId(Integer contId) {
		this.contId = contId;
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

	@Column(name = "CONS_NO", length = 32)
	public String getConsNo() {
		return this.consNo;
	}

	public void setConsNo(String consNo) {
		this.consNo = consNo;
	}

	@Column(name = "CONT_PRE_FLAG", length = 1)
	public String getContPreFlag() {
		return this.contPreFlag;
	}

	public void setContPreFlag(String contPreFlag) {
		this.contPreFlag = contPreFlag;
	}

	@Column(name = "CONT_PART_OF_FLAG", length = 1)
	public String getContPartOfFlag() {
		return this.contPartOfFlag;
	}

	public void setContPartOfFlag(String contPartOfFlag) {
		this.contPartOfFlag = contPartOfFlag;
	}

	@Column(name = "CONT_M_CONS_ID")
	public Integer getContMConsId() {
		return this.contMConsId;
	}

	public void setContMConsId(Integer contMConsId) {
		this.contMConsId = contMConsId;
	}

	@Column(name = "CONT_M_CONS_NO", length = 32)
	public String getContMConsNo() {
		return this.contMConsNo;
	}

	public void setContMConsNo(String contMConsNo) {
		this.contMConsNo = contMConsNo;
	}

	@Column(name = "CONT_NO", length = 32)
	public String getContNo() {
		return this.contNo;
	}

	public void setContNo(String contNo) {
		this.contNo = contNo;
	}

	@Column(name = "CONT_NUM")
	public Integer getContNum() {
		return this.contNum;
	}

	public void setContNum(Integer contNum) {
		this.contNum = contNum;
	}

	@Column(name = "CONT_SEAL_NO", length = 32)
	public String getContSealNo() {
		return this.contSealNo;
	}

	public void setContSealNo(String contSealNo) {
		this.contSealNo = contSealNo;
	}

	@Column(name = "CONT_SEAL_NO2", length = 32)
	public String getContSealNo2() {
		return this.contSealNo2;
	}

	public void setContSealNo2(String contSealNo2) {
		this.contSealNo2 = contSealNo2;
	}

	@Column(name = "CONT_SEAL_NO3", length = 32)
	public String getContSealNo3() {
		return this.contSealNo3;
	}

	public void setContSealNo3(String contSealNo3) {
		this.contSealNo3 = contSealNo3;
	}

	@Column(name = "COTY_ID")
	public Integer getCotyId() {
		return this.cotyId;
	}

	public void setCotyId(Integer cotyId) {
		this.cotyId = cotyId;
	}

	@Column(name = "COTY_CODE", length = 16)
	public String getCotyCode() {
		return this.cotyCode;
	}

	public void setCotyCode(String cotyCode) {
		this.cotyCode = cotyCode;
	}
	
	@Column(name = "CONT_FL", length = 3)
	public String getContFl() {
		return this.contFl;
	}

	public void setContFl(String contFl) {
		this.contFl = contFl;
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

	@Column(name = "CONT_PACKAGE_NUM")
	public Integer getContPackageNum() {
		return this.contPackageNum;
	}

	public void setContPackageNum(Integer contPackageNum) {
		this.contPackageNum = contPackageNum;
	}

	@Column(name = "CONT_CARGO_NAME_EN", length = 64)
	public String getContCargoNameEn() {
		return this.contCargoNameEn;
	}

	public void setContCargoNameEn(String contCargoNameEn) {
		this.contCargoNameEn = contCargoNameEn;
	}

	@Column(name = "CONT_CARGO_NAME_CN", length = 64)
	public String getContCargoNameCn() {
		return this.contCargoNameCn;
	}

	public void setContCargoNameCn(String contCargoNameCn) {
		this.contCargoNameCn = contCargoNameCn;
	}

	@Column(name = "CONT_GROSS_WEIGHT", precision = 9)
	public Double getContGrossWeight() {
		return this.contGrossWeight;
	}

	public void setContGrossWeight(Double contGrossWeight) {
		this.contGrossWeight = contGrossWeight;
	}

	@Column(name = "CONT_MEASUREMENT", precision = 9)
	public Double getContMeasurement() {
		return this.contMeasurement;
	}

	public void setContMeasurement(Double contMeasurement) {
		this.contMeasurement = contMeasurement;
	}

	@Column(name = "CONT_SOC_FLAG")
	public Short getContSocFlag() {
		return this.contSocFlag;
	}

	public void setContSocFlag(Short contSocFlag) {
		this.contSocFlag = contSocFlag;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "CONT_LOAD_DATE", length = 10)
	public Date getContLoadDate() {
		return this.contLoadDate;
	}

	public void setContLoadDate(Date contLoadDate) {
		this.contLoadDate = contLoadDate;
	}

	@Column(name = "CONT_REMARKS", length = 200)
	public String getContRemarks() {
		return this.contRemarks;
	}

	public void setContRemarks(String contRemarks) {
		this.contRemarks = contRemarks;
	}

	@Column(name = "CARG_TEMPERATURE", length = 32)
	public String getCargTemperature() {
		return this.cargTemperature;
	}

	public void setCargTemperature(String cargTemperature) {
		this.cargTemperature = cargTemperature;
	}

	@Column(name = "CARG_DANAGER_CLASS", length = 32)
	public String getCargDanagerClass() {
		return this.cargDanagerClass;
	}

	public void setCargDanagerClass(String cargDanagerClass) {
		this.cargDanagerClass = cargDanagerClass;
	}

	@Column(name = "CARG_FLASH_POINT", length = 16)
	public String getCargFlashPoint() {
		return this.cargFlashPoint;
	}

	public void setCargFlashPoint(String cargFlashPoint) {
		this.cargFlashPoint = cargFlashPoint;
	}

	@Column(name = "CARG_IMDG_PAGE", length = 32)
	public String getCargImdgPage() {
		return this.cargImdgPage;
	}

	public void setCargImdgPage(String cargImdgPage) {
		this.cargImdgPage = cargImdgPage;
	}

	@Column(name = "CARG_UN_NO", length = 32)
	public String getCargUnNo() {
		return this.cargUnNo;
	}

	public void setCargUnNo(String cargUnNo) {
		this.cargUnNo = cargUnNo;
	}

	@Column(name = "CONT_VESSEL", length = 32)
	public String getContVessel() {
		return this.contVessel;
	}

	public void setContVessel(String contVessel) {
		this.contVessel = contVessel;
	}

	@Column(name = "CONT_VOYAGE", length = 32)
	public String getContVoyage() {
		return this.contVoyage;
	}

	public void setContVoyage(String contVoyage) {
		this.contVoyage = contVoyage;
	}

	@Column(name = "CONT_POL", length = 64)
	public String getContPol() {
		return this.contPol;
	}

	public void setContPol(String contPol) {
		this.contPol = contPol;
	}

	@Column(name = "CONT_POD", length = 64)
	public String getContPod() {
		return this.contPod;
	}

	public void setContPod(String contPod) {
		this.contPod = contPod;
	}

	@Column(name = "CONT_DELIVERY_PLACE", length = 64)
	public String getContDeliveryPlace() {
		return this.contDeliveryPlace;
	}

	public void setContDeliveryPlace(String contDeliveryPlace) {
		this.contDeliveryPlace = contDeliveryPlace;
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