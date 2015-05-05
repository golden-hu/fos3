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
public abstract class AbstractOAnnouncement extends BaseDomain {

	private static final long serialVersionUID = 3331062487809509678L;
	
	private Integer annoId;
	private Integer version;
	private String annoTitle;
	private String annoType;
	private Date annoDate;
	private String annoContent;
	private String fileName;
	private Integer createBy;
	private Date createTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ANNO_ID", unique = true, nullable = false)
	public Integer getAnnoId() {
		return annoId;
	}

	public void setAnnoId(Integer annoId) {
		this.annoId = annoId;
	}
	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}


	@Column(name = "ANNO_TITLE")
	public String getAnnoTitle() {
		return annoTitle;
	}

	public void setAnnoTitle(String annoTitle) {
		this.annoTitle = annoTitle;
	}
	@Column(name = "ANNO_TYPE")
	public String getAnnoType() {
		return annoType;
	}

	public void setAnnoType(String annoType) {
		this.annoType = annoType;
	}
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ANNO_DATE", length = 19)
	public Date getAnnoDate() {
		return annoDate;
	}

	public void setAnnoDate(Date annoDate) {
		this.annoDate = annoDate;
	}
	@Column(name = "ANNO_CONTENT")
	public String getAnnoContent() {
		return annoContent;
	}

	public void setAnnoContent(String annoContent) {
		this.annoContent = annoContent;
	}
	@Column(name = "FILE_NAME")
	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
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