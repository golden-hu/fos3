package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Version;

import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPUserExpePermission extends BaseDomain {

	private static final long serialVersionUID = 4305020801041752233L;
	private Integer usepId;
	private Integer version;
	private Integer userId;
	private Integer chclId;
	private String chclName;
	private String expeType;
	private Short usepEditable;
	private Short usepViewAll;
	private Short usepEditAll;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "USEP_ID", unique = true, nullable = false)
	public Integer getUsepId() {
		return this.usepId;
	}

	public void setUsepId(Integer usepId) {
		this.usepId = usepId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "USER_ID", nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "CHCL_ID", nullable = false)
	public Integer getChclId() {
		return chclId;
	}

	public void setChclId(Integer chclId) {
		this.chclId = chclId;
	}

	@Column(name = "CHCL_NAME", length = 32)
	public String getChclName() {
		return chclName;
	}

	public void setChclName(String chclName) {
		this.chclName = chclName;
	}

	@Column(name = "EXPE_TYPE", nullable = false, length = 1)
	public String getExpeType() {
		return expeType;
	}

	public void setExpeType(String expeType) {
		this.expeType = expeType;
	}

	@Column(name = "USEP_EDITABLE", nullable = false)
	public Short getUsepEditable() {
		return usepEditable;
	}

	public void setUsepEditable(Short usepEditable) {
		this.usepEditable = usepEditable;
	}

	@Column(name = "USEP_VIEW_ALL")
	public Short getUsepViewAll() {
		return usepViewAll;
	}

	public void setUsepViewAll(Short usepViewAll) {
		this.usepViewAll = usepViewAll;
	}

	@Column(name = "USEP_EDIT_ALL")
	public Short getUsepEditAll() {
		return usepEditAll;
	}

	public void setUsepEditAll(Short usepEditAll) {
		this.usepEditAll = usepEditAll;
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