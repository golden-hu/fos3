package haitai.fos.sys.entity.atable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractPMessageTopic extends BaseDomain {

	private static final long serialVersionUID = -8880393264970306442L;
	private Integer metoId;
	private Integer version;
	private String metoName;
	private String metoDesc;
	private String metoTemplate;
	private String metoRule;
	private String actName;
	private Integer tetyId;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "METO_ID", unique = true, nullable = false)
	public Integer getMetoId() {
		return this.metoId;
	}

	public void setMetoId(Integer metoId) {
		this.metoId = metoId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "METO_NAME", length = 200)
	public String getMetoName() {
		return this.metoName;
	}

	public void setMetoName(String metoName) {
		this.metoName = metoName;
	}

	@Column(name = "METO_DESC", length = 200)
	public String getMetoDesc() {
		return this.metoDesc;
	}

	public void setMetoDesc(String metoDesc) {
		this.metoDesc = metoDesc;
	}

	@Column(name = "METO_TEMPLATE")
	public String getMetoTemplate() {
		return this.metoTemplate;
	}

	public void setMetoTemplate(String metoTemplate) {
		this.metoTemplate = metoTemplate;
	}

	@Column(name = "METO_RULE", length = 2000)
	public String getMetoRule() {
		return this.metoRule;
	}

	public void setMetoRule(String metoRule) {
		this.metoRule = metoRule;
	}

	@Column(name = "ACT_NAME", length = 32)
	public String getActName() {
		return this.actName;
	}

	public void setActName(String actName) {
		this.actName = actName;
	}

	@Column(name = "TETY_ID")
	public Integer getTetyId() {
		return this.tetyId;
	}

	public void setTetyId(Integer tetyId) {
		this.tetyId = tetyId;
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
