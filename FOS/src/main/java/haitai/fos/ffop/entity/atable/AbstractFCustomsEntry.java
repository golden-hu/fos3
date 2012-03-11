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
public abstract class AbstractFCustomsEntry extends BaseDomain {

	private static final long serialVersionUID = 7289212855990872070L;
	private Integer cuenId;
	private Integer version;
	private Integer cudeId;
	private Integer consId;
	private Integer cargId;
	private String cuenNo;
	private String cuenCargoNo;
	private String cuenManuNo;
	private String cuenCargoNameEn;
	private String cuenCargoNameCn;
	private String cuenCargoSpec;
	private Double cuenCargoNum;
	private String cuenCargoUnit;
	private Double cuenCargoGrossWeight;
	private Double cuenCargoNetWeight;
	private Double cuenCargoMeasurement;
	private String cuenCountry;
	private Double cuenUnitPrice;
	private Double cuenTotalPrice;
	private String currCode;
	private String cuenLevyType;
	private String cuenRemarks;
	private String cuenVersion;
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
	@Column(name = "CUEN_ID", unique = true, nullable = false)
	public Integer getCuenId() {
		return this.cuenId;
	}

	public void setCuenId(Integer cuenId) {
		this.cuenId = cuenId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUDE_ID", nullable = false)
	public Integer getCudeId() {
		return this.cudeId;
	}

	public void setCudeId(Integer cudeId) {
		this.cudeId = cudeId;
	}

	@Column(name = "CONS_ID", nullable = false)
	public Integer getConsId() {
		return this.consId;
	}

	public void setConsId(Integer consId) {
		this.consId = consId;
	}

	@Column(name = "CARG_ID")
	public Integer getCargId() {
		return this.cargId;
	}

	public void setCargId(Integer cargId) {
		this.cargId = cargId;
	}

	@Column(name = "CUEN_NO", length = 4)
	public String getCuenNo() {
		return this.cuenNo;
	}

	public void setCuenNo(String cuenNo) {
		this.cuenNo = cuenNo;
	}

	@Column(name = "CUEN_CARGO_NO", length = 32)
	public String getCuenCargoNo() {
		return this.cuenCargoNo;
	}

	public void setCuenCargoNo(String cuenCargoNo) {
		this.cuenCargoNo = cuenCargoNo;
	}

	@Column(name = "CUEN_MANU_NO", length = 32)
	public String getCuenManuNo() {
		return this.cuenManuNo;
	}

	public void setCuenManuNo(String cuenManuNo) {
		this.cuenManuNo = cuenManuNo;
	}

	@Column(name = "CUEN_CARGO_NAME_EN", length = 1000)
	public String getCuenCargoNameEn() {
		return this.cuenCargoNameEn;
	}

	public void setCuenCargoNameEn(String cuenCargoNameEn) {
		this.cuenCargoNameEn = cuenCargoNameEn;
	}

	@Column(name = "CUEN_CARGO_NAME_CN", length = 200)
	public String getCuenCargoNameCn() {
		return this.cuenCargoNameCn;
	}

	public void setCuenCargoNameCn(String cuenCargoNameCn) {
		this.cuenCargoNameCn = cuenCargoNameCn;
	}

	@Column(name = "CUEN_CARGO_SPEC", length = 64)
	public String getCuenCargoSpec() {
		return this.cuenCargoSpec;
	}

	public void setCuenCargoSpec(String cuenCargoSpec) {
		this.cuenCargoSpec = cuenCargoSpec;
	}

	@Column(name = "CUEN_CARGO_NUM", precision = 9)
	public Double getCuenCargoNum() {
		return this.cuenCargoNum;
	}

	public void setCuenCargoNum(Double cuenCargoNum) {
		this.cuenCargoNum = cuenCargoNum;
	}

	@Column(name = "CUEN_CARGO_UNIT", length = 32)
	public String getCuenCargoUnit() {
		return this.cuenCargoUnit;
	}

	public void setCuenCargoUnit(String cuenCargoUnit) {
		this.cuenCargoUnit = cuenCargoUnit;
	}

	@Column(name = "CUEN_CARGO_GROSS_WEIGHT", precision = 9)
	public Double getCuenCargoGrossWeight() {
		return this.cuenCargoGrossWeight;
	}

	public void setCuenCargoGrossWeight(Double cuenCargoGrossWeight) {
		this.cuenCargoGrossWeight = cuenCargoGrossWeight;
	}
	
	@Column(name = "CUEN_CARGO_NET_WEIGHT", precision = 9)
	public Double getCuenCargoNetWeight() {
		return this.cuenCargoNetWeight;
	}

	public void setCuenCargoNetWeight(Double cuenCargoNetWeight) {
		this.cuenCargoNetWeight = cuenCargoNetWeight;
	}
	
	@Column(name = "CUEN_CARGO_MEASUREMENT", precision = 9)
	public Double getCuenCargoMeasurement() {
		return this.cuenCargoMeasurement;
	}

	public void setCuenCargoMeasurement(Double cuenCargoMeasurement) {
		this.cuenCargoMeasurement = cuenCargoMeasurement;
	}
	
	@Column(name = "CUEN_COUNTRY", length = 64)
	public String getCuenCountry() {
		return this.cuenCountry;
	}

	public void setCuenCountry(String cuenCountry) {
		this.cuenCountry = cuenCountry;
	}

	@Column(name = "CUEN_UNIT_PRICE", precision = 9)
	public Double getCuenUnitPrice() {
		return this.cuenUnitPrice;
	}

	public void setCuenUnitPrice(Double cuenUnitPrice) {
		this.cuenUnitPrice = cuenUnitPrice;
	}

	@Column(name = "CUEN_TOTAL_PRICE", precision = 12)
	public Double getCuenTotalPrice() {
		return this.cuenTotalPrice;
	}

	public void setCuenTotalPrice(Double cuenTotalPrice) {
		this.cuenTotalPrice = cuenTotalPrice;
	}

	@Column(name = "CURR_CODE", length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "CUEN_LEVY_TYPE", length = 32)
	public String getCuenLevyType() {
		return this.cuenLevyType;
	}

	public void setCuenLevyType(String cuenLevyType) {
		this.cuenLevyType = cuenLevyType;
	}

	@Column(name = "CUEN_REMARKS", length = 200)
	public String getCuenRemarks() {
		return this.cuenRemarks;
	}

	public void setCuenRemarks(String cuenRemarks) {
		this.cuenRemarks = cuenRemarks;
	}

	@Column(name = "CUEN_VERSION", length = 32)
	public String getCuenVersion() {
		return this.cuenVersion;
	}

	public void setCuenVersion(String cuenVersion) {
		this.cuenVersion = cuenVersion;
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