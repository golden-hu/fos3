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
public abstract class AbstractFLoadingList extends BaseDomain {

	private static final long serialVersionUID = 1238479128255611137L;
	private Integer loliId;
	private Integer version;
	private Integer fconId;
	private String fconNo;
	private String fconContractNo;
	private Integer carrierId;
	private String carrierName;
	private Integer vessId;
	private String vessName;
	private String vessNameCn;
	private Integer voyaId;
	private String voyaName;
	private Date voyaShipDateF;
	private Date voyaShipDateT;
	private Date voyaSailDate;
	private Integer unitId;
	private String unitName;
	private Double fconForcastQuantity;
	private Double fconShippedQuantity;
	private Double loliShippedQuantity;
	private Double loliFactQuantity;
	private Double fconForcastCbm;
	private Double fconShippedCbm;
	private Double loliShippedCbm;
	private Double loliFactCbm;
	private Short loliStatus;
	private String loliRemarks;
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
	@Column(name = "LOLI_ID", unique = true, nullable = false)
	public Integer getLoliId() {
		return this.loliId;
	}

	public void setLoliId(Integer loliId) {
		this.loliId = loliId;
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

	@Column(name = "CARRIER_ID")
	public Integer getCarrierId() {
		return this.carrierId;
	}

	public void setCarrierId(Integer carrierId) {
		this.carrierId = carrierId;
	}

	@Column(name = "CARRIER_NAME", length = 200)
	public String getCarrierName() {
		return this.carrierName;
	}

	public void setCarrierName(String carrierName) {
		this.carrierName = carrierName;
	}

	@Column(name = "VESS_ID", nullable = false)
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

	@Column(name = "VOYA_ID", nullable = false)
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
	@Column(name = "VOYA_SAIL_DATE", length = 10)
	public Date getVoyaSailDate() {
		return this.voyaSailDate;
	}

	public void setVoyaSailDate(Date voyaSailDate) {
		this.voyaSailDate = voyaSailDate;
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

	@Column(name = "FCON_FORCAST_QUANTITY", precision = 14, scale = 6)
	public Double getFconForcastQuantity() {
		return this.fconForcastQuantity;
	}

	public void setFconForcastQuantity(Double fconForcastQuantity) {
		this.fconForcastQuantity = fconForcastQuantity;
	}

	@Column(name = "FCON_SHIPPED_QUANTITY", precision = 14, scale = 6)
	public Double getFconShippedQuantity() {
		return this.fconShippedQuantity;
	}

	public void setFconShippedQuantity(Double fconShippedQuantity) {
		this.fconShippedQuantity = fconShippedQuantity;
	}

	@Column(name = "LOLI_SHIPPED_QUANTITY", precision = 14, scale = 6)
	public Double getLoliShippedQuantity() {
		return this.loliShippedQuantity;
	}

	public void setLoliShippedQuantity(Double loliShippedQuantity) {
		this.loliShippedQuantity = loliShippedQuantity;
	}

	@Column(name = "LOLI_FACT_QUANTITY", precision = 14, scale = 6)
	public Double getLoliFactQuantity() {
		return this.loliFactQuantity;
	}

	public void setLoliFactQuantity(Double loliFactQuantity) {
		this.loliFactQuantity = loliFactQuantity;
	}

	@Column(name = "FCON_FORCAST_CBM", precision = 14, scale = 6)
	public Double getFconForcastCbm() {
		return this.fconForcastCbm;
	}

	public void setFconForcastCbm(Double fconForcastCbm) {
		this.fconForcastCbm = fconForcastCbm;
	}

	@Column(name = "FCON_SHIPPED_CBM", precision = 14, scale = 6)
	public Double getFconShippedCbm() {
		return this.fconShippedCbm;
	}

	public void setFconShippedCbm(Double fconShippedCbm) {
		this.fconShippedCbm = fconShippedCbm;
	}

	@Column(name = "LOLI_SHIPPED_CBM", precision = 14, scale = 6)
	public Double getLoliShippedCbm() {
		return this.loliShippedCbm;
	}

	public void setLoliShippedCbm(Double loliShippedCbm) {
		this.loliShippedCbm = loliShippedCbm;
	}

	@Column(name = "LOLI_FACT_CBM", precision = 14, scale = 6)
	public Double getLoliFactCbm() {
		return this.loliFactCbm;
	}

	public void setLoliFactCbm(Double loliFactCbm) {
		this.loliFactCbm = loliFactCbm;
	}

	@Column(name = "LOLI_STATUS")
	public Short getLoliStatus() {
		return this.loliStatus;
	}

	public void setLoliStatus(Short loliStatus) {
		this.loliStatus = loliStatus;
	}

	@Column(name = "LOLI_REMARKS", length = 500)
	public String getLoliRemarks() {
		return this.loliRemarks;
	}

	public void setLoliRemarks(String loliRemarks) {
		this.loliRemarks = loliRemarks;
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