package haitai.fos.sys.entity.atable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractPMessageSubscribe extends BaseDomain {

	private static final long serialVersionUID = -1400429014409033331L;
	private Integer mesuId;
	private Integer version;
	private Integer metoId;
	private Short mesuMailFlag;
	private Short mesuImFlag;
	private Short mesuSmFlag;
	private Short mesuSubscriberType;
	private Integer mesuSubscriberId;
	private String mesuSubscriberName;
	private String mesuSubscriberEmail;
	private String mesuSubscriberMobile;
	private Short mesuCustomerType;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "MESU_ID", unique = true, nullable = false)
	public Integer getMesuId() {
		return this.mesuId;
	}

	public void setMesuId(Integer mesuId) {
		this.mesuId = mesuId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "METO_ID")
	public Integer getMetoId() {
		return this.metoId;
	}

	public void setMetoId(Integer metoId) {
		this.metoId = metoId;
	}

	@Column(name = "MESU_MAIL_FLAG")
	public Short getMesuMailFlag() {
		return this.mesuMailFlag;
	}

	public void setMesuMailFlag(Short mesuMailFlag) {
		this.mesuMailFlag = mesuMailFlag;
	}

	@Column(name = "MESU_IM_FLAG")
	public Short getMesuImFlag() {
		return this.mesuImFlag;
	}

	public void setMesuImFlag(Short mesuImFlag) {
		this.mesuImFlag = mesuImFlag;
	}

	@Column(name = "MESU_SM_FLAG")
	public Short getMesuSmFlag() {
		return this.mesuSmFlag;
	}

	public void setMesuSmFlag(Short mesuSmFlag) {
		this.mesuSmFlag = mesuSmFlag;
	}

	@Column(name = "MESU_SUBSCRIBER_TYPE")
	public Short getMesuSubscriberType() {
		return this.mesuSubscriberType;
	}

	public void setMesuSubscriberType(Short mesuSubscriberType) {
		this.mesuSubscriberType = mesuSubscriberType;
	}

	@Column(name = "MESU_SUBSCRIBER_ID")
	public Integer getMesuSubscriberId() {
		return this.mesuSubscriberId;
	}

	public void setMesuSubscriberId(Integer mesuSubscriberId) {
		this.mesuSubscriberId = mesuSubscriberId;
	}

	@Column(name = "MESU_SUBSCRIBER_NAME", length = 200)
	public String getMesuSubscriberName() {
		return this.mesuSubscriberName;
	}

	public void setMesuSubscriberName(String mesuSubscriberName) {
		this.mesuSubscriberName = mesuSubscriberName;
	}

	@Column(name = "MESU_SUBSCRIBER_EMAIL", length = 200)
	public String getMesuSubscriberEmail() {
		return this.mesuSubscriberEmail;
	}

	public void setMesuSubscriberEmail(String mesuSubscriberEmail) {
		this.mesuSubscriberEmail = mesuSubscriberEmail;
	}

	@Column(name = "MESU_SUBSCRIBER_MOBILE", length = 32)
	public String getMesuSubscriberMobile() {
		return this.mesuSubscriberMobile;
	}

	public void setMesuSubscriberMobile(String mesuSubscriberMobile) {
		this.mesuSubscriberMobile = mesuSubscriberMobile;
	}

	@Column(name = "MESU_CUSTOMER_TYPE")
	public Short getMesuCustomerType() {
		return this.mesuCustomerType;
	}

	public void setMesuCustomerType(Short mesuCustomerType) {
		this.mesuCustomerType = mesuCustomerType;
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
