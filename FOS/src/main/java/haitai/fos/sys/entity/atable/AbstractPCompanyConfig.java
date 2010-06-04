package haitai.fos.sys.entity.atable;

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
public abstract class AbstractPCompanyConfig extends BaseDomain {

	private static final long serialVersionUID = 3582828839473947721L;
	private Integer cocoId;
	private Integer version;
	private String cocoCode;
	private String cocoName;
	private String cocoValue;
	private Short cocoValueType;
	private String cocoValueOptions;
	private String cocoGroup;
	private String cocoType;
	private String cocoDesc;
	private String compCode;
	private Short removed;
	private Integer userId;
	private Integer grouId;
	private Integer modifyBy;
	private Date modifyTime;
	private Integer createBy;
	private Date createTime;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COCO_ID", unique = true, nullable = false)
	public Integer getCocoId() {
		return this.cocoId;
	}

	public void setCocoId(Integer cocoId) {
		this.cocoId = cocoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "COCO_CODE", nullable = false, length = 32)
	public String getCocoCode() {
		return this.cocoCode;
	}

	public void setCocoCode(String cocoCode) {
		this.cocoCode = cocoCode;
	}

	@Column(name = "COCO_NAME", nullable = false, length = 32)
	public String getCocoName() {
		return this.cocoName;
	}

	public void setCocoName(String cocoName) {
		this.cocoName = cocoName;
	}

	@Column(name = "COCO_VALUE", length = 1000)
	public String getCocoValue() {
		return this.cocoValue;
	}

	public void setCocoValue(String cocoValue) {
		this.cocoValue = cocoValue;
	}

	@Column(name = "COCO_VALUE_TYPE")
	public Short getCocoValueType() {
		return this.cocoValueType;
	}

	public void setCocoValueType(Short cocoValueType) {
		this.cocoValueType = cocoValueType;
	}

	@Column(name = "COCO_VALUE_OPTIONS", length = 200)
	public String getCocoValueOptions() {
		return this.cocoValueOptions;
	}

	public void setCocoValueOptions(String cocoValueOptions) {
		this.cocoValueOptions = cocoValueOptions;
	}

	@Column(name = "COCO_GROUP", length = 32)
	public String getCocoGroup() {
		return this.cocoGroup;
	}

	public void setCocoGroup(String cocoGroup) {
		this.cocoGroup = cocoGroup;
	}

	@Column(name = "COCO_TYPE", length = 1)
	public String getCocoType() {
		return this.cocoType;
	}

	public void setCocoType(String cocoType) {
		this.cocoType = cocoType;
	}

	@Column(name = "COCO_DESC", length = 200)
	public String getCocoDesc() {
		return this.cocoDesc;
	}

	public void setCocoDesc(String cocoDesc) {
		this.cocoDesc = cocoDesc;
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

}