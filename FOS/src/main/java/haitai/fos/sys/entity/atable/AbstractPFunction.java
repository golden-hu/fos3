package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPFunction extends BaseDomain {

	private static final long serialVersionUID = -837041513700129459L;
	private String funcCode;
	private String funcName;
	private String funcType;
	private Short active;
	@Id
	@Column(name = "FUNC_CODE", unique = true, nullable = false, length = 32)
	public String getFuncCode() {
		return this.funcCode;
	}

	public void setFuncCode(String funcCode) {
		this.funcCode = funcCode;
	}

	@Column(name = "FUNC_NAME", nullable = false, length = 32)
	public String getFuncName() {
		return this.funcName;
	}

	public void setFuncName(String funcName) {
		this.funcName = funcName;
	}

	@Column(name = "FUNC_TYPE", length = 1)
	public String getFuncType() {
		return this.funcType;
	}

	public void setFuncType(String funcType) {
		this.funcType = funcType;
	}

	@Column(name = "ACTIVE", nullable = false)
	public Short getActive() {
		return this.active;
	}

	public void setActive(Short active) {
		this.active = active;
	}

}