package haitai.fos.sys.entity.table;

import haitai.fw.entity.BaseDomain;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "P_SERIAL_RULE" )
public class PSerialRule extends BaseDomain {

	private static final long serialVersionUID = -7387649809775828773L;
	private Integer seruId;
	private String seruCode;
	private String seruName;
	private String compCode;
	private String seruRule;
	private Integer seruSnLength;
	private String seruUniqSuffix;
	private Short seruLoopPeriod;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "seru_id", unique = true, nullable = false)
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

	@Column(name = "seru_name", nullable = false, length = 50)
	public String getSeruName() {
		return this.seruName;
	}

	public void setSeruName(String seruName) {
		this.seruName = seruName;
	}

	@Column(name = "comp_code", nullable = false, length = 4)
	public String getCompCode() {
		return this.compCode;
	}

	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}

	@Column(name = "seru_rule", nullable = false, length = 30)
	public String getSeruRule() {
		return this.seruRule;
	}

	public void setSeruRule(String seruRule) {
		this.seruRule = seruRule;
	}

	@Column(name = "seru_sn_length", nullable = false)
	public Integer getSeruSnLength() {
		return this.seruSnLength;
	}

	public void setSeruSnLength(Integer seruSnLength) {
		this.seruSnLength = seruSnLength;
	}

	@Column(name = "seru_uniq_suffix", nullable = false, length = 30)
	public String getSeruUniqSuffix() {
		return this.seruUniqSuffix;
	}

	public void setSeruUniqSuffix(String seruUniqSuffix) {
		this.seruUniqSuffix = seruUniqSuffix;
	}

	@Column(name = "seru_loop_period", nullable = false)
	public Short getSeruLoopPeriod() {
		return this.seruLoopPeriod;
	}

	public void setSeruLoopPeriod(Short seruLoopPeriod) {
		this.seruLoopPeriod = seruLoopPeriod;
	}
}
