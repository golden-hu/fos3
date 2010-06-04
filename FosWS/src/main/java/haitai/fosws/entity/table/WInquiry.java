package haitai.fosws.entity.table;

import haitai.fosws.entity.atable.AbstractWInquiry;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="W_INQUIRY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class WInquiry extends AbstractWInquiry {
	private static final long serialVersionUID = 2954940834022618659L;
	private String wusrFirstName;
	private String wusrName;
	private String wusrMobile;
	private String wusrEmail;
	private String wusrCompanyName;
	private String wusrTel;
	private Integer custId;
	
	@Transient
	public String getWusrFirstName() {
		return wusrFirstName;
	}
	public void setWusrFirstName(String wusrFirstName) {
		this.wusrFirstName = wusrFirstName;
	}
	@Transient
	public String getWusrName() {
		return wusrName;
	}
	public void setWusrName(String wusrName) {
		this.wusrName = wusrName;
	}
	@Transient
	public String getWusrMobile() {
		return wusrMobile;
	}
	public void setWusrMobile(String wusrMobile) {
		this.wusrMobile = wusrMobile;
	}
	@Transient
	public String getWusrEmail() {
		return wusrEmail;
	}
	public void setWusrEmail(String wusrEmail) {
		this.wusrEmail = wusrEmail;
	}
	@Transient
	public String getWusrCompanyName() {
		return wusrCompanyName;
	}
	public void setWusrCompanyName(String wusrCompanyName) {
		this.wusrCompanyName = wusrCompanyName;
	}
	@Transient
	public String getWusrTel() {
		return wusrTel;
	}
	public void setWusrTel(String wusrTel) {
		this.wusrTel = wusrTel;
	}
	@Transient
	public Integer getCustId() {
		return custId;
	}
	public void setCustId(Integer custId) {
		this.custId = custId;
	}

}