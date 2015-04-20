package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGTransTerm extends BaseDomain {

	private static final long serialVersionUID = -6528587844598235428L;
	private Integer tranId;
	private Integer version;
	private String tranCode;
	private String tranName;
	private Short tranBulkFlag;
	private Short tranContFlag;
	private Short active;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TRAN_ID", unique = true, nullable = false)
	public Integer getTranId() {
		return this.tranId;
	}

	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}

	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "TRAN_CODE", nullable = false, length = 32)
	public String getTranCode() {
		return this.tranCode;
	}

	public void setTranCode(String tranCode) {
		this.tranCode = tranCode;
	}

	@Column(name = "TRAN_NAME", nullable = false, length = 32)
	public String getTranName() {
		return this.tranName;
	}

	public void setTranName(String tranName) {
		this.tranName = tranName;
	}

	@Column(name = "TRAN_BULK_FLAG")
	public Short getTranBulkFlag() {
		return this.tranBulkFlag;
	}

	public void setTranBulkFlag(Short tranBulkFlag) {
		this.tranBulkFlag = tranBulkFlag;
	}

	@Column(name = "TRAN_CONT_FLAG")
	public Short getTranContFlag() {
		return this.tranContFlag;
	}

	public void setTranContFlag(Short tranContFlag) {
		this.tranContFlag = tranContFlag;
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