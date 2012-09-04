package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractGTrainStation extends BaseDomain {

	private static final long serialVersionUID = 2516175474349292228L;
	private Integer trainId;
	private String trainCode;
	private String trainNameCn;
	private String trainNameEn;
	private Short trainType;
	private String trainTypeFlag;
	private Short active;
	private String counCode;
	private String compCode;
	private Short removed;
	private Integer version;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TRAIN_ID", unique = true, nullable = false)
	public Integer getTrainId() {
		return trainId;
	}
	public void setTrainId(Integer trainId) {
		this.trainId = trainId;
	}
	
	@Column(name = "TRAIN_CODE", nullable = false, length = 16)
	public String getTrainCode() {
		return trainCode;
	}
	public void setTrainCode(String trainCode) {
		this.trainCode = trainCode;
	}
	
	@Column(name = "TRAIN_NAME_CN",length = 64)
	public String getTrainNameCn() {
		return trainNameCn;
	}
	public void setTrainNameCn(String trainNameCn) {
		this.trainNameCn = trainNameCn;
	}
	
	@Column(name = "TRAIN_NAME_EN",length = 64)
	public String getTrainNameEn() {
		return trainNameEn;
	}
	public void setTrainNameEn(String trainNameEn) {
		this.trainNameEn = trainNameEn;
	}
	
	@Column(name = "TRAIN_TYPE")
	public Short getTrainType() {
		return trainType;
	}
	public void setTrainType(Short trainType) {
		this.trainType = trainType;
	}
	
	@Column(name = "TRAIN_TYPE_FLAG")
	public String getTrainTypeFlag() {
		return trainTypeFlag;
	}
	public void setTrainTypeFlag(String trainTypeFlag) {
		this.trainTypeFlag = trainTypeFlag;
	}
	
	@Column(name = "ACTIVE")
	public Short getActive() {
		return active;
	}
	public void setActive(Short active) {
		this.active = active;
	}
	
	@Column(name = "COUN_CODE",length = 2)
	public String getCounCode() {
		return counCode;
	}
	public void setCounCode(String counCode) {
		this.counCode = counCode;
	}
	
	@Column(name = "COMP_CODE", nullable = false, length = 4)
	public String getCompCode() {
		return compCode;
	}
	public void setCompCode(String compCode) {
		this.compCode = compCode;
	}
	
	@Column(name = "REMOVED", nullable = false)
	public Short getRemoved() {
		return removed;
	}
	public void setRemoved(Short removed) {
		this.removed = removed;
	}
	
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
}