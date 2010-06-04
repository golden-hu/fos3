package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPRoleFunction extends BaseDomain {

	private static final long serialVersionUID = -7168544666824984775L;
	private Integer rofuId;
	private Integer roleId;
	private String funcCode;
	private String compCode;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ROFU_ID", unique = true, nullable = false)
	public Integer getRofuId() {
		return this.rofuId;
	}

	public void setRofuId(Integer rofuId) {
		this.rofuId = rofuId;
	}

	@Column(name = "ROLE_ID", nullable = false)
	public Integer getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	@Column(name = "FUNC_CODE", length = 32)
	public String getFuncCode() {
		return this.funcCode;
	}

	public void setFuncCode(String funcCode) {
		this.funcCode = funcCode;
	}

	@Column(name = "COMP_CODE", nullable = false, length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

}