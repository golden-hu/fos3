package haitai.fos.sys.entity.table;

import static javax.persistence.GenerationType.IDENTITY;

import haitai.fw.entity.BaseDomain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "P_SERIAL_NO" )
public class PSerialNo extends BaseDomain {

	private static final long serialVersionUID = -5189978628960114035L;
	private Integer senoId;
	private Integer seruId;
	private String seruCode;
	private String compCode;
	private String senoSuffix;
	private Long senoCurrentNo;
	private Date senoExpire;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "seno_id", unique = true, nullable = false)
	public Integer getSenoId() {
		return this.senoId;
	}

	public void setSenoId(Integer senoId) {
		this.senoId = senoId;
	}

	@Column(name = "seru_id", nullable = false)
	public Integer getSeruId() {
		return this.seruId;
	}

	public void setSeruId(Integer seruId) {
		this.seruId = seruId;
	}
	
	@Column(name = "seru_code", nullable = false, length = 30)
	public String getSeruCode() {
		return this.seruCode;
	}

	public void setSeruCode(String seruCode) {
		this.seruCode = seruCode;
	}

	@Column(name = "comp_code", nullable = false, length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "seno_suffix", nullable = false, length = 30)
	public String getSenoSuffix() {
		return this.senoSuffix;
	}

	public void setSenoSuffix(String senoSuffix) {
		this.senoSuffix = senoSuffix;
	}

	@Column(name = "seno_current_no", nullable = false)
	public Long getSenoCurrentNo() {
		return this.senoCurrentNo;
	}

	public void setSenoCurrentNo(Long senoCurrentNo) {
		this.senoCurrentNo = senoCurrentNo;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "seno_expire", nullable = false, length = 19)
	public Date getSenoExpire() {
		return this.senoExpire;
	}

	public void setSenoExpire(Date senoExpire) {
		this.senoExpire = senoExpire;
	}

	private String rowAction;

	@Transient
	public String getRowAction() {
		return rowAction;
	}

	public void setRowAction(String rowAction) {
		this.rowAction = rowAction;
	}
}
