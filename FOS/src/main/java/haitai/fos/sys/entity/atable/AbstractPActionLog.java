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

@MappedSuperclass
public abstract class AbstractPActionLog extends BaseDomain {

	private static final long serialVersionUID = -6005799586115547765L;
	private Integer acloId;
	private String acloActName;
	private String acloActRemark;
	private String acloTable;
	private Integer acloTid;
	private String acloTno;
	private Integer acloUserId;
	private String acloUserName;
	private String acloIp;
	private String compCode;
	private Date createTime;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ACLO_ID", unique = true, nullable = false)
	public Integer getAcloId() {
		return this.acloId;
	}

	public void setAcloId(Integer acloId) {
		this.acloId = acloId;
	}

	@Column(name = "ACLO_ACT_NAME", nullable = false, length = 32)
	public String getAcloActName() {
		return this.acloActName;
	}

	public void setAcloActName(String acloActName) {
		this.acloActName = acloActName;
	}

	@Column(name = "ACLO_ACT_REMARK", length = 100)
	public String getAcloActRemark() {
		return this.acloActRemark;
	}

	public void setAcloActRemark(String acloActRemark) {
		this.acloActRemark = acloActRemark;
	}

	@Column(name = "ACLO_TABLE", length = 32)
	public String getAcloTable() {
		return this.acloTable;
	}

	public void setAcloTable(String acloTable) {
		this.acloTable = acloTable;
	}

	@Column(name = "ACLO_TID")
	public Integer getAcloTid() {
		return this.acloTid;
	}

	public void setAcloTid(Integer acloTid) {
		this.acloTid = acloTid;
	}

	@Column(name = "ACLO_TNO", length = 32)
	public String getAcloTno() {
		return this.acloTno;
	}

	public void setAcloTno(String acloTno) {
		this.acloTno = acloTno;
	}

	@Column(name = "ACLO_USER_ID")
	public Integer getAcloUserId() {
		return this.acloUserId;
	}

	public void setAcloUserId(Integer acloUserId) {
		this.acloUserId = acloUserId;
	}

	@Column(name = "ACLO_USER_NAME", length = 16)
	public String getAcloUserName() {
		return this.acloUserName;
	}

	public void setAcloUserName(String acloUserName) {
		this.acloUserName = acloUserName;
	}

	@Column(name = "ACLO_IP", length = 32)
	public String getAcloIp() {
		return this.acloIp;
	}

	public void setAcloIp(String acloIp) {
		this.acloIp = acloIp;
	}

	@Column(name = "COMP_CODE")
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
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