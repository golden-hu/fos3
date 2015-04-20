package haitai.fos.ffop.entity.atable;

import haitai.fw.entity.BaseDomain;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

@MappedSuperclass
public abstract class AbstractFTransList extends BaseDomain {

	private static final long serialVersionUID = -4587699311038480214L;
	private Integer trliId;
	private Integer version;
	private Integer fconId;
	private Integer paliId;
	private Integer trliTrackType;
	private Date trliTranDate;
	private Date trliArriveDate;
	private Integer trliStationId;
	private String trliStationName;
	private String trliLocation;
	private Integer trliStationIdO;
	private String trliStationNameO;
	private String trliLocationO;
	private String trliRemarks;
	private Integer userId;
	private Integer grouId;
	private Integer createBy;
	private Date createTime;
	private Integer modifyBy;
	private Date modifyTime;
	private String compCode;
	private Short removed;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TRLI_ID", unique = true, nullable = false)
	public Integer getTrliId() {
		return this.trliId;
	}

	public void setTrliId(Integer trliId) {
		this.trliId = trliId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "FCON_ID", nullable = false)
	public Integer getFconId() {
		return this.fconId;
	}

	public void setFconId(Integer fconId) {
		this.fconId = fconId;
	}

	@Column(name = "PALI_ID")
	public Integer getPaliId() {
		return this.paliId;
	}

	public void setPaliId(Integer paliId) {
		this.paliId = paliId;
	}

	@Column(name = "TRLI_TRACK_TYPE")
	public Integer getTrliTrackType() {
		return this.trliTrackType;
	}

	public void setTrliTrackType(Integer trliTrackType) {
		this.trliTrackType = trliTrackType;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRLI_TRAN_DATE", length = 10)
	public Date getTrliTranDate() {
		return this.trliTranDate;
	}

	public void setTrliTranDate(Date trliTranDate) {
		this.trliTranDate = trliTranDate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "TRLI_ARRIVE_DATE", length = 10)
	public Date getTrliArriveDate() {
		return this.trliArriveDate;
	}

	public void setTrliArriveDate(Date trliArriveDate) {
		this.trliArriveDate = trliArriveDate;
	}

	@Column(name = "TRLI_STATION_ID")
	public Integer getTrliStationId() {
		return this.trliStationId;
	}

	public void setTrliStationId(Integer trliStationId) {
		this.trliStationId = trliStationId;
	}

	@Column(name = "TRLI_STATION_NAME", length = 64)
	public String getTrliStationName() {
		return this.trliStationName;
	}

	public void setTrliStationName(String trliStationName) {
		this.trliStationName = trliStationName;
	}

	@Column(name = "TRLI_LOCATION", length = 1000)
	public String getTrliLocation() {
		return this.trliLocation;
	}

	public void setTrliLocation(String trliLocation) {
		this.trliLocation = trliLocation;
	}

	@Column(name = "TRLI_STATION_ID_O")
	public Integer getTrliStationIdO() {
		return this.trliStationIdO;
	}

	public void setTrliStationIdO(Integer trliStationIdO) {
		this.trliStationIdO = trliStationIdO;
	}

	@Column(name = "TRLI_STATION_NAME_O", length = 64)
	public String getTrliStationNameO() {
		return this.trliStationNameO;
	}

	public void setTrliStationNameO(String trliStationNameO) {
		this.trliStationNameO = trliStationNameO;
	}

	@Column(name = "TRLI_LOCATION_O", length = 1000)
	public String getTrliLocationO() {
		return this.trliLocationO;
	}

	public void setTrliLocationO(String trliLocationO) {
		this.trliLocationO = trliLocationO;
	}

	@Column(name = "TRLI_REMARKS", length = 500)
	public String getTrliRemarks() {
		return this.trliRemarks;
	}

	public void setTrliRemarks(String trliRemarks) {
		this.trliRemarks = trliRemarks;
	}

	@Column(name = "USER_ID")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "GROU_ID")
	public Integer getGrouId() {
		return this.grouId;
	}

	public void setGrouId(Integer grouId) {
		this.grouId = grouId;
	}

	@Column(name = "CREATE_BY")
	public Integer getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(Integer createBy) {
		this.createBy = createBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATE_TIME", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Column(name = "MODIFY_BY")
	public Integer getModifyBy() {
		return this.modifyBy;
	}

	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFY_TIME", length = 19)
	public Date getModifyTime() {
		return this.modifyTime;
	}

	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
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