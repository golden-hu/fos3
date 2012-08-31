package haitai.fos.sys.entity.atable;

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
public abstract class AbstractCSalesCommission extends BaseDomain {

	private static final long serialVersionUID = -4220524572923096962L;
	private Integer sacoId;
	private Integer version;
	private Integer sacoSalesId;
	private String sacoSalesName;
	private Integer commId;
	private String commName;
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
	@Column(name = "SACO_ID", unique = true, nullable = false)
	public Integer getSacoId() {
		return this.sacoId;
	}

	public void setSacoId(Integer sacoId) {
		this.sacoId = sacoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "SACO_SALES_ID", nullable = false)
	public Integer getSacoSalesId() {
		return this.sacoSalesId;
	}

	public void setSacoSalesId(Integer sacoSalesId) {
		this.sacoSalesId = sacoSalesId;
	}

	@Column(name = "SACO_SALES_NAME", nullable = false, length = 32)
	public String getSacoSalesName() {
		return this.sacoSalesName;
	}

	public void setSacoSalesName(String sacoSalesName) {
		this.sacoSalesName = sacoSalesName;
	}

	@Column(name = "COMM_ID", nullable = false)
	public Integer getCommId() {
		return this.commId;
	}

	public void setCommId(Integer commId) {
		this.commId = commId;
	}

	@Column(name = "COMM_NAME", nullable = false, length = 200)
	public String getCommName() {
		return this.commName;
	}

	public void setCommName(String commName) {
		this.commName = commName;
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