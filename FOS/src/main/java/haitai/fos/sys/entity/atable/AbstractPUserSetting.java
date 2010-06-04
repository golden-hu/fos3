package haitai.fos.sys.entity.atable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractPUserSetting extends BaseDomain {

	private static final long serialVersionUID = 1104399494734700128L;
	private Integer usseId;
	private Integer userId;
	private String usseName;
	private String usseValue;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "USSE_ID", unique = true, nullable = false)
	public Integer getUsseId() {
		return this.usseId;
	}

	public void setUsseId(Integer usseId) {
		this.usseId = usseId;
	}

	@Column(name = "USER_ID", nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "USSE_NAME", nullable = false, length = 200)
	public String getUsseName() {
		return this.usseName;
	}

	public void setUsseName(String usseName) {
		this.usseName = usseName;
	}

	@Column(name = "USSE_VALUE", length = 65535)
	public String getUsseValue() {
		return this.usseValue;
	}

	public void setUsseValue(String usseValue) {
		this.usseValue = usseValue;
	}

}
