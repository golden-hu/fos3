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
public abstract class AbstractCCustomerSite extends BaseDomain {

	private static final long serialVersionUID = 5557786883862243201L;
	private Integer cusiId;
	private Integer version;
	private Integer custId;
	private String cusiName;
	private String cusiContact;
	private String cusiTel;
	private String cusiAddress;
	
	private Integer cusiType;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "CUSI_ID", unique = true, nullable = false)
	public Integer getCusiId() {
		return this.cusiId;
	}

	public void setCusiId(Integer cusiId) {
		this.cusiId = cusiId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "CUST_ID", nullable = true)
	public Integer getCustId() {
		return this.custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	@Column(name = "CUSI_NAME", nullable = true, length = 200)
	public String getCusiName() {
		return this.cusiName;
	}

	public void setCusiName(String cusiName) {
		this.cusiName = cusiName;
	}
	
	@Column(name = "CUSI_CONTACT", nullable = true, length = 32)
	public String getCusiContact() {
		return this.cusiContact;
	}

	public void setCusiContact(String cusiContact) {
		this.cusiContact = cusiContact;
	}
	
	@Column(name = "CUSI_TEL", nullable = true, length = 32)
	public String getCusiTel() {
		return this.cusiTel;
	}

	public void setCusiTel(String cusiTel) {
		this.cusiTel = cusiTel;
	}
	
	@Column(name = "CUSI_ADDRESS", nullable = true, length = 200)
	public String getCusiAddress() {
		return this.cusiAddress;
	}

	public void setCusiAddress(String cusiAddress) {
		this.cusiAddress = cusiAddress;
	}
	
	@Column(name = "CUSI_TYPE")
	public Integer getCusiType() {
		return this.cusiType;
	}

	public void setCusiType(Integer cusiType) {
		this.cusiType = cusiType;
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