package haitai.fos.general.entity.atable;

import static javax.persistence.GenerationType.IDENTITY;
import haitai.fw.entity.BaseDomain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;


	
@MappedSuperclass
public abstract class AbstractShipSchedule extends BaseDomain {

	private static final long serialVersionUID = -3398658709214844747L;
	private Integer shscId;
	private String vesselName;
	private String vesselNameCn;
	private String voyage;
	private String planningUnberthing;
	private String actualUnberthing;
	private String planningBerthing;
	private String actualBerthing;
	private String planningBerth;
	private String actualBerth;
	private String isExport;
	private String isLate;
	private String cutOff;
	private String source;
	private String status;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "SHSC_ID", unique = true, nullable = false)
	public Integer getShscId() {
		return this.shscId;
	}

	public void setShscId(Integer shscId) {
		this.shscId = shscId;
	}
	
	@Column(name = "VESSEL_NAME")
	public String getVesselName() {
		return vesselName;
	}
	
	public void setVesselName(String vesselName) {
		this.vesselName = vesselName;
	}
	
	@Column(name = "VESSEL_NAME_CN")
	public String getVesselNameCn() {
		return vesselNameCn;
	}
	
	public void setVesselNameCn(String vesselNameCn) {
		this.vesselNameCn = vesselNameCn;
	}
	
	@Column(name = "VOYAGE")
	public String getVoyage() {
		return voyage;
	}
	
	public void setVoyage(String voyage) {
		this.voyage = voyage;
	}
	
	@Column(name = "PLANNING_UNBERTHING")
	public String getPlanningUnberthing() {
		return planningUnberthing;
	}
	
	public void setPlanningUnberthing(String planningUnberthing) {
		this.planningUnberthing = planningUnberthing;
	}
	
	@Column(name = "ACTUAL_UNBERTHING")
	public String getActualUnberthing() {
		return actualUnberthing;
	}
	
	public void setActualUnberthing(String actualUnberthing) {
		this.actualUnberthing = actualUnberthing;
	}
	
	@Column(name = "PLANNING_BERTHING")
	public String getPlanningBerthing() {
		return planningBerthing;
	}
	
	public void setPlanningBerthing(String planningBerthing) {
		this.planningBerthing = planningBerthing;
	}
	
	@Column(name = "ACTUAL_BERTHING")
	public String getActualBerthing() {
		return actualBerthing;
	}
	
	public void setActualBerthing(String actualBerthing) {
		this.actualBerthing = actualBerthing;
	}
	
	@Column(name = "PLANNING_BERTH")
	public String getPlanningBerth() {
		return planningBerth;
	}
	
	public void setPlanningBerth(String planningBerth) {
		this.planningBerth = planningBerth;
	}
	
	@Column(name = "ACTUAL_BERTH")
	public String getActualBerth() {
		return actualBerth;
	}
	
	public void setActualBerth(String actualBerth) {
		this.actualBerth = actualBerth;
	}
	
	@Column(name = "IS_EXPORT")
	public String getIsExport() {
		return isExport;
	}
	
	public void setIsExport(String isExport) {
		this.isExport = isExport;
	}
	
	@Column(name = "IS_LATE")
	public String getIsLate() {
		return isLate;
	}
	
	public void setIsLate(String isLate) {
		this.isLate = isLate;
	}
	
	@Column(name = "CUT_OFF")
	public String getCutOff() {
		return cutOff;
	}
	
	public void setCutOff(String cutOff) {
		this.cutOff = cutOff;
	}
	
	@Column(name = "SOURCE")
	public String getSource() {
		return source;
	}
	
	public void setSource(String source) {
		this.source = source;
	}
	
	@Column(name = "STATUS")
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
}