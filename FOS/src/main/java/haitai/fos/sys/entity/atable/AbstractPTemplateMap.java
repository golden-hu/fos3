package haitai.fos.sys.entity.atable;

import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractPTemplateMap extends BaseDomain {

	private static final long serialVersionUID = -6843146005032185808L;
	private Integer temaId;
	private Integer tetyId;
	private String temaName;
	private String temaTable;
	private String temaField;
	private String temaConverter;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TEMA_ID", unique = true, nullable = false)
	public Integer getTemaId() {
		return this.temaId;
	}

	public void setTemaId(Integer temaId) {
		this.temaId = temaId;
	}

	@Column(name = "TETY_ID", nullable = false)
	public Integer getTetyId() {
		return this.tetyId;
	}

	public void setTetyId(Integer tetyId) {
		this.tetyId = tetyId;
	}

	@Column(name = "TEMA_NAME", nullable = false, length = 64)
	public String getTemaName() {
		return this.temaName;
	}

	public void setTemaName(String temaName) {
		this.temaName = temaName;
	}

	@Column(name = "TEMA_TABLE", length = 32)
	public String getTemaTable() {
		return this.temaTable;
	}

	public void setTemaTable(String temaTable) {
		this.temaTable = temaTable;
	}

	@Column(name = "TEMA_FIELD", nullable = false, length = 32)
	public String getTemaField() {
		return this.temaField;
	}

	public void setTemaField(String temaField) {
		this.temaField = temaField;
	}

	@Column(name = "TEMA_CONVERTER", length = 64)
	public String getTemaConverter() {
		return this.temaConverter;
	}

	public void setTemaConverter(String temaConverter) {
		this.temaConverter = temaConverter;
	}

}