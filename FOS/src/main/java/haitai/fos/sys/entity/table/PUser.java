package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPUser;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_USER" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PUser extends AbstractPUser {

	private static final long serialVersionUID = -6374891295336054098L;
	private String funcCode;
	private String ip;

	@Transient
	public String getFuncCode() {
		return funcCode;
	}

	public void setFuncCode(String funcCode) {
		this.funcCode = funcCode;
	}

	@Transient
	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}
	
}
