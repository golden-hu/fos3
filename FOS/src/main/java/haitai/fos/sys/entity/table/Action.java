package haitai.fos.sys.entity.table;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_ACTION", uniqueConstraints = { @UniqueConstraint(columnNames = { "ACT_NAME" }) })
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
public class Action extends BaseDomain {

	private static final long serialVersionUID = -8656366731371432446L;
	private Integer actId;
	private String actName;
	private String actClass;
	private String actMethod;
	private String actService;
	private String actRemark;
	private boolean actDaemonFlag;
	private boolean actSingletonFlag;

	@Id
	@Column(name = "ACT_ID", unique = true, nullable = false, insertable = true, updatable = true)
	public Integer getActId() {
		return this.actId;
	}

	public void setActId(Integer actId) {
		this.actId = actId;
	}

	@Column(name = "ACT_NAME", unique = true, nullable = false, insertable = true, updatable = true, length = 32)
	public String getActName() {
		return this.actName;
	}

	public void setActName(String actName) {
		this.actName = actName;
	}

	@Column(name = "ACT_CLASS", unique = false, nullable = false, insertable = true, updatable = true, length = 50)
	public String getActClass() {
		return this.actClass;
	}

	public void setActClass(String actClass) {
		this.actClass = actClass;
	}

	@Column(name = "ACT_METHOD", unique = false, nullable = false, insertable = true, updatable = true, length = 32)
	public String getActMethod() {
		return this.actMethod;
	}

	public void setActMethod(String actMethod) {
		this.actMethod = actMethod;
	}

	@Column(name = "ACT_SERVICE", unique = false, nullable = true, insertable = true, updatable = true, length = 50)
	public String getActService() {
		return this.actService;
	}

	public void setActService(String actService) {
		this.actService = actService;
	}

	@Column(name = "ACT_REMARK", unique = false, nullable = true, insertable = true, updatable = true, length = 100)
	public String getActRemark() {
		return this.actRemark;
	}

	public void setActRemark(String actRemark) {
		this.actRemark = actRemark;
	}

	@Column(name = "ACT_DAEMON_FLAG", unique = false, nullable = false, insertable = true, updatable = true)
	public boolean getActDaemonFlag() {
		return this.actDaemonFlag;
	}

	public void setActDaemonFlag(boolean actDaemonFlag) {
		this.actDaemonFlag = actDaemonFlag;
	}

	@Column(name = "ACT_SINGLETON_FLAG", unique = false, nullable = false, insertable = true, updatable = true)
	public boolean getActSingletonFlag() {
		return this.actSingletonFlag;
	}

	public void setActSingletonFlag(boolean actSingletonFlag) {
		this.actSingletonFlag = actSingletonFlag;
	}

}