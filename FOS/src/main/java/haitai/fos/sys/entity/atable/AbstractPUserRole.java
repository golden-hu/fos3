package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPUserRole extends BaseDomain {

	private static final long serialVersionUID = -6394366846115469242L;
	private Integer usroId;
	private Integer userId;
	private Integer roleId;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "USRO_ID", unique = true, nullable = false)
	public Integer getUsroId() {
		return this.usroId;
	}

	public void setUsroId(Integer usroId) {
		this.usroId = usroId;
	}

	@Column(name = "USER_ID", nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "ROLE_ID", nullable = false)
	public Integer getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

}