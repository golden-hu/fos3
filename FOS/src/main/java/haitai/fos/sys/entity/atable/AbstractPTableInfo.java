package haitai.fos.sys.entity.atable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public abstract class AbstractPTableInfo extends BaseDomain {

	private static final long serialVersionUID = -8473149653826085361L;
	private Integer tainId;
	private String tainTableName;
	private String tainFieldType;
	private String tainFieldName;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TAIN_ID", unique = true, nullable = false)
	public Integer getTainId() {
		return this.tainId;
	}

	public void setTainId(Integer tainId) {
		this.tainId = tainId;
	}

	@Column(name = "TAIN_TABLE_NAME", nullable = false, length = 32)
	public String getTainTableName() {
		return this.tainTableName;
	}

	public void setTainTableName(String tainTableName) {
		this.tainTableName = tainTableName;
	}

	@Column(name = "TAIN_FIELD_TYPE", nullable = false, length = 16)
	public String getTainFieldType() {
		return this.tainFieldType;
	}

	public void setTainFieldType(String tainFieldType) {
		this.tainFieldType = tainFieldType;
	}

	@Column(name = "TAIN_FIELD_NAME", nullable = false, length = 32)
	public String getTainFieldName() {
		return this.tainFieldName;
	}

	public void setTainFieldName(String tainFieldName) {
		this.tainFieldName = tainFieldName;
	}

}
