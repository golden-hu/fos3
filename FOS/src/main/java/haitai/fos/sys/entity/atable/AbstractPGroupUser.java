package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPGroupUser extends BaseDomain {

	private static final long serialVersionUID = -9217684433965554135L;
	private Integer grusId;
	private Integer grouId;
	private Integer userId;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "GRUS_ID", unique = true, nullable = false)
	public Integer getGrusId() {
		return this.grusId;
	}

	public void setGrusId(Integer grusId) {
		this.grusId = grusId;
	}

	@Column(name = "GROU_ID", nullable = false)
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "USER_ID", nullable = false)
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

}