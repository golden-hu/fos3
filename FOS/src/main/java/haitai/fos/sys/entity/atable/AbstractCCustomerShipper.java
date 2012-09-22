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
public abstract class AbstractCCustomerShipper extends BaseDomain {

	private static final long serialVersionUID = 5557786883862243201L;
	private Integer cushId;
	private Integer version;
	private Integer custId;
	private String cushName;
	
	private Integer cushType;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CUSH_ID", unique = true, nullable = false)
	public Integer getCushId() {
		return this.cushId;
	}

	public void setCushId(Integer cushId) {
		this.cushId = cushId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUST_ID")
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Column(name = "CUSH_NAME", nullable = false, length = 2000)
	public String getCushName() {
		return this.cushName;
	}

	public void setCushName(String cushName) {
		this.cushName = cushName;
	}
	
	@Column(name = "CUSH_TYPE")
	public Integer getCushType() {
		return this.cushType;
	}

	public void setCushType(Integer cushType) {
		this.cushType = cushType;
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