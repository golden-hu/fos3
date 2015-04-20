package haitai.fos.sys.entity.atable;

import java.util.Date;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractPComments extends BaseDomain {

	private static final long serialVersionUID = -7160314421219444969L;
	private Integer commId;	
	private String objectType;
	private Integer objectId;
	private String commBody;
	private String commBy;
	private String compCode;
	private Short removed;
	private Integer version;
	private Date createTime;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COMM_ID", unique = true, nullable = false)
	public Integer getCommId() {
		return this.commId;
	}

	public void setCommId(Integer commId) {
		this.commId = commId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Version
	@Column(name = "OBJECT_ID", nullable = false)
	public Integer getObjectId() {
		return this.objectId;
	}

	public void setObjectId(Integer objectId) {
		this.objectId = objectId;
	}
	
	@Column(name = "OBJECT_TYPE", length = 32)
	public String getObjectType() {
		return this.objectType;
	}

	public void setObjectType(String objectType) {
		this.objectType = objectType;
	}

	@Column(name = "COMM_BODY")
	public String getCommBody() {
		return this.commBody;
	}

	public void setCommBody(String commBody) {
		this.commBody = commBody;
	}
	
	@Column(name = "COMM_BY")
	public String getCommBy() {
		return this.commBy;
	}

	public void setCommBy(String commBy) {
		this.commBy = commBy;
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

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", nullable = false, length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
}