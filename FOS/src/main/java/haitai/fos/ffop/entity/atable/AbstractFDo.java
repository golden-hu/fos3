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
public abstract class AbstractFDo extends BaseDomain {

	private static final long serialVersionUID = 5557826245611415934L;
	private Integer doId;
	private Integer version;
	private String doNo;
	private Integer blId;
	private String hblNo;
	private Integer consId;
	private String consNo;
	private String doConsignee;
	private String doPort;
	private String doHarbour;
	private Date doArriveDate;
	private String doVessel;
	private String doVoyage;
	private Integer doWarehouseId;
	private String doWarehouseName;
	private String doWarehouseContact;
	private String doWarehouseTel;
	private String doWarehouseAddress;
	private Date doInDate;
	private Date doOutDate;
	private String doContainerNo;
	private String doMarks;
	private String doCargoName;
	private String doCargoDirection;
	private Integer packId;
	private String packName;
	private Double doPackages;
	private Double doGrossWeight;
	private Double doNetWeight;
	private Double doMeasurement;
	private String doRemarks;
	private Short doStatus;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;
	private String attr1;
	private String attr2;
	private String attr3;
	private String attr4;
	private String attr5;
	private String attr6;
	private String attr7;
	private String attr8;
	private String attr9;
	private String attr10;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "DO_ID", unique = true, nullable = false)
	public Integer getDoId() {
		return this.doId;
	}

	public void setDoId(Integer doId) {
		this.doId = doId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "DO_NO", length = 16)
	public String getDoNo() {
		return this.doNo;
	}

	public void setDoNo(String doNo) {
		this.doNo = doNo;
	}

	@Column(name = "BL_ID")
	public Integer getBlId() {
		return this.blId;
	}

	public void setBlId(Integer blId) {
		this.blId = blId;
	}

	@Column(name = "HBL_NO", length = 32)
	public String getHblNo() {
		return this.hblNo;
	}

	public void setHblNo(String hblNo) {
		this.hblNo = hblNo;
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

	@Column(name = "DO_CONSIGNEE", length = 64)
	public String getDoConsignee() {
		return this.doConsignee;
	}

	public void setDoConsignee(String doConsignee) {
		this.doConsignee = doConsignee;
	}

	@Column(name = "DO_PORT", length = 32)
	public String getDoPort() {
		return this.doPort;
	}

	public void setDoPort(String doPort) {
		this.doPort = doPort;
	}

	@Column(name = "DO_HARBOUR", length = 32)
	public String getDoHarbour() {
		return this.doHarbour;
	}

	public void setDoHarbour(String doHarbour) {
		this.doHarbour = doHarbour;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DO_ARRIVE_DATE", length = 10)
	public Date getDoArriveDate() {
		return this.doArriveDate;
	}

	public void setDoArriveDate(Date doArriveDate) {
		this.doArriveDate = doArriveDate;
	}

	@Column(name = "DO_VESSEL", length = 64)
	public String getDoVessel() {
		return this.doVessel;
	}

	public void setDoVessel(String doVessel) {
		this.doVessel = doVessel;
	}

	@Column(name = "DO_VOYAGE", length = 32)
	public String getDoVoyage() {
		return this.doVoyage;
	}

	public void setDoVoyage(String doVoyage) {
		this.doVoyage = doVoyage;
	}

	@Column(name = "DO_WAREHOUSE_ID")
	public Integer getDoWarehouseId() {
		return this.doWarehouseId;
	}

	public void setDoWarehouseId(Integer doWarehouseId) {
		this.doWarehouseId = doWarehouseId;
	}

	@Column(name = "DO_WAREHOUSE_NAME", length = 64)
	public String getDoWarehouseName() {
		return this.doWarehouseName;
	}

	public void setDoWarehouseName(String doWarehouseName) {
		this.doWarehouseName = doWarehouseName;
	}

	@Column(name = "DO_WAREHOUSE_CONTACT", length = 32)
	public String getDoWarehouseContact() {
		return this.doWarehouseContact;
	}

	public void setDoWarehouseContact(String doWarehouseContact) {
		this.doWarehouseContact = doWarehouseContact;
	}

	@Column(name = "DO_WAREHOUSE_TEL", length = 16)
	public String getDoWarehouseTel() {
		return this.doWarehouseTel;
	}

	public void setDoWarehouseTel(String doWarehouseTel) {
		this.doWarehouseTel = doWarehouseTel;
	}

	@Column(name = "DO_WAREHOUSE_ADDRESS", length = 500)
	public String getDoWarehouseAddress() {
		return this.doWarehouseAddress;
	}

	public void setDoWarehouseAddress(String doWarehouseAddress) {
		this.doWarehouseAddress = doWarehouseAddress;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DO_IN_DATE", length = 10)
	public Date getDoInDate() {
		return this.doInDate;
	}

	public void setDoInDate(Date doInDate) {
		this.doInDate = doInDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DO_OUT_DATE", length = 10)
	public Date getDoOutDate() {
		return this.doOutDate;
	}

	public void setDoOutDate(Date doOutDate) {
		this.doOutDate = doOutDate;
	}

	@Column(name = "DO_CONTAINER_NO", length = 200)
	public String getDoContainerNo() {
		return this.doContainerNo;
	}

	public void setDoContainerNo(String doContainerNo) {
		this.doContainerNo = doContainerNo;
	}

	@Column(name = "DO_MARKS", length = 500)
	public String getDoMarks() {
		return this.doMarks;
	}

	public void setDoMarks(String doMarks) {
		this.doMarks = doMarks;
	}

	@Column(name = "DO_CARGO_NAME", length = 200)
	public String getDoCargoName() {
		return this.doCargoName;
	}

	public void setDoCargoName(String doCargoName) {
		this.doCargoName = doCargoName;
	}

	@Column(name = "DO_CARGO_DIRECTION", length = 32)
	public String getDoCargoDirection() {
		return this.doCargoDirection;
	}

	public void setDoCargoDirection(String doCargoDirection) {
		this.doCargoDirection = doCargoDirection;
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

	@Column(name = "DO_PACKAGES", precision = 9)
	public Double getDoPackages() {
		return this.doPackages;
	}

	public void setDoPackages(Double doPackages) {
		this.doPackages = doPackages;
	}

	@Column(name = "DO_GROSS_WEIGHT", precision = 9)
	public Double getDoGrossWeight() {
		return this.doGrossWeight;
	}

	public void setDoGrossWeight(Double doGrossWeight) {
		this.doGrossWeight = doGrossWeight;
	}

	@Column(name = "DO_NET_WEIGHT", precision = 9)
	public Double getDoNetWeight() {
		return this.doNetWeight;
	}

	public void setDoNetWeight(Double doNetWeight) {
		this.doNetWeight = doNetWeight;
	}

	@Column(name = "DO_MEASUREMENT", precision = 9)
	public Double getDoMeasurement() {
		return this.doMeasurement;
	}

	public void setDoMeasurement(Double doMeasurement) {
		this.doMeasurement = doMeasurement;
	}

	@Column(name = "DO_REMARKS", length = 500)
	public String getDoRemarks() {
		return this.doRemarks;
	}

	public void setDoRemarks(String doRemarks) {
		this.doRemarks = doRemarks;
	}

	@Column(name = "DO_STATUS")
	public Short getDoStatus() {
		return this.doStatus;
	}

	public void setDoStatus(Short doStatus) {
		this.doStatus = doStatus;
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

	@Column(name = "COMP_CODE")
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

	@Column(name = "ATTR1", length = 32)
	public String getAttr1() {
		return this.attr1;
	}

	public void setAttr1(String attr1) {
		this.attr1 = attr1;
	}

	@Column(name = "ATTR2", length = 32)
	public String getAttr2() {
		return this.attr2;
	}

	public void setAttr2(String attr2) {
		this.attr2 = attr2;
	}

	@Column(name = "ATTR3", length = 32)
	public String getAttr3() {
		return this.attr3;
	}

	public void setAttr3(String attr3) {
		this.attr3 = attr3;
	}

	@Column(name = "ATTR4", length = 32)
	public String getAttr4() {
		return this.attr4;
	}

	public void setAttr4(String attr4) {
		this.attr4 = attr4;
	}

	@Column(name = "ATTR5", length = 32)
	public String getAttr5() {
		return this.attr5;
	}

	public void setAttr5(String attr5) {
		this.attr5 = attr5;
	}

	@Column(name = "ATTR6", length = 32)
	public String getAttr6() {
		return this.attr6;
	}

	public void setAttr6(String attr6) {
		this.attr6 = attr6;
	}

	@Column(name = "ATTR7", length = 32)
	public String getAttr7() {
		return this.attr7;
	}

	public void setAttr7(String attr7) {
		this.attr7 = attr7;
	}

	@Column(name = "ATTR8", length = 32)
	public String getAttr8() {
		return this.attr8;
	}

	public void setAttr8(String attr8) {
		this.attr8 = attr8;
	}

	@Column(name = "ATTR9", length = 500)
	public String getAttr9() {
		return this.attr9;
	}

	public void setAttr9(String attr9) {
		this.attr9 = attr9;
	}

	@Column(name = "ATTR10", length = 500)
	public String getAttr10() {
		return this.attr10;
	}

	public void setAttr10(String attr10) {
		this.attr10 = attr10;
	}

}