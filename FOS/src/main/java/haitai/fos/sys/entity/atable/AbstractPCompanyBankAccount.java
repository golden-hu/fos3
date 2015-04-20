package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractPCompanyBankAccount extends BaseDomain {

	private static final long serialVersionUID = -6916303999036122108L;
	private Integer cobaId;
	private Integer version;
	private String cobaName;
	private String cobaBank;
	private String cobaAccount;
	private String currCode;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "COBA_ID", unique = true, nullable = false)
	public Integer getCobaId() {
		return this.cobaId;
	}

	public void setCobaId(Integer cobaId) {
		this.cobaId = cobaId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "COBA_NAME", length = 32)
	public String getCobaName() {
		return this.cobaName;
	}

	public void setCobaName(String cobaName) {
		this.cobaName = cobaName;
	}

	@Column(name = "COBA_BANK", nullable = false, length = 32)
	public String getCobaBank() {
		return this.cobaBank;
	}

	public void setCobaBank(String cobaBank) {
		this.cobaBank = cobaBank;
	}

	@Column(name = "COBA_ACCOUNT", nullable = false, length = 64)
	public String getCobaAccount() {
		return this.cobaAccount;
	}

	public void setCobaAccount(String cobaAccount) {
		this.cobaAccount = cobaAccount;
	}

	@Column(name = "CURR_CODE", nullable = false, length = 3)
	public String getCurrCode() {
		return this.currCode;
	}

	public void setCurrCode(String currCode) {
		this.currCode = currCode;
	}

	@Column(name = "ACTIVE")
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
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