package haitai.fos.sys.entity.atable;

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
public abstract class AbstractCPriceLine extends BaseDomain {

	private static final long serialVersionUID = 3331062487809509678L;
	private Integer prliId;
	private Integer version;
	private Integer prshId;
	private String prliCountryD;
	private String prliCountryDName;
	private Integer prliPod;
	private String prliPodEn;
	private String prliPodHarbour;
	private String prliCountryT;
	private String prliCountryTName;
	private Integer prliPot;
	private String prliPotEn;
	private Integer caclId;
	private String caclName;
	private Integer pateId;
	private String pateName;
	private Integer tranId;
	private String tranName;
	private String prliShipDate;
	private Short prliCompositeFlag;
	private Integer prliDuration;
	private String prliRemarks;
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
	@Column(name = "PRLI_ID", unique = true, nullable = false)
	public Integer getPrliId() {
		return this.prliId;
	}

	public void setPrliId(Integer prliId) {
		this.prliId = prliId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	@Column(name = "PRSH_ID", nullable = false)
	public Integer getPrshId() {
		return this.prshId;
	}

	public void setPrshId(Integer prshId) {
		this.prshId = prshId;
	}

	@Column(name = "PRLI_COUNTRY_D", length = 2)
	public String getPrliCountryD() {
		return this.prliCountryD;
	}

	public void setPrliCountryD(String prliCountryD) {
		this.prliCountryD = prliCountryD;
	}

	@Column(name = "PRLI_COUNTRY_D_NAME", length = 64)
	public String getPrliCountryDName() {
		return this.prliCountryDName;
	}

	public void setPrliCountryDName(String prliCountryDName) {
		this.prliCountryDName = prliCountryDName;
	}

	@Column(name = "PRLI_POD")
	public Integer getPrliPod() {
		return this.prliPod;
	}

	public void setPrliPod(Integer prliPod) {
		this.prliPod = prliPod;
	}

	@Column(name = "PRLI_POD_EN", length = 64)
	public String getPrliPodEn() {
		return this.prliPodEn;
	}

	public void setPrliPodEn(String prliPodEn) {
		this.prliPodEn = prliPodEn;
	}

	@Column(name = "PRLI_POD_HARBOUR", length = 200)
	public String getPrliPodHarbour() {
		return this.prliPodHarbour;
	}

	public void setPrliPodHarbour(String prliPodHarbour) {
		this.prliPodHarbour = prliPodHarbour;
	}

	@Column(name = "PRLI_COUNTRY_T", length = 2)
	public String getPrliCountryT() {
		return this.prliCountryT;
	}

	public void setPrliCountryT(String prliCountryT) {
		this.prliCountryT = prliCountryT;
	}

	@Column(name = "PRLI_COUNTRY_T_NAME", length = 64)
	public String getPrliCountryTName() {
		return this.prliCountryTName;
	}

	public void setPrliCountryTName(String prliCountryTName) {
		this.prliCountryTName = prliCountryTName;
	}

	@Column(name = "PRLI_POT")
	public Integer getPrliPot() {
		return this.prliPot;
	}

	public void setPrliPot(Integer prliPot) {
		this.prliPot = prliPot;
	}

	@Column(name = "PRLI_POT_EN", length = 64)
	public String getPrliPotEn() {
		return this.prliPotEn;
	}

	public void setPrliPotEn(String prliPotEn) {
		this.prliPotEn = prliPotEn;
	}

	@Column(name = "CACL_ID")
	public Integer getCaclId() {
		return this.caclId;
	}

	public void setCaclId(Integer caclId) {
		this.caclId = caclId;
	}

	@Column(name = "CACL_NAME", length = 64)
	public String getCaclName() {
		return this.caclName;
	}

	public void setCaclName(String caclName) {
		this.caclName = caclName;
	}

	@Column(name = "PATE_ID")
	public Integer getPateId() {
		return this.pateId;
	}

	public void setPateId(Integer pateId) {
		this.pateId = pateId;
	}

	@Column(name = "PATE_NAME", length = 32)
	public String getPateName() {
		return this.pateName;
	}

	public void setPateName(String pateName) {
		this.pateName = pateName;
	}

	@Column(name = "TRAN_ID")
	public Integer getTranId() {
		return this.tranId;
	}

	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}

	@Column(name = "TRAN_NAME", length = 32)
	public String getTranName() {
		return this.tranName;
	}

	public void setTranName(String tranName) {
		this.tranName = tranName;
	}

	@Column(name = "PRLI_SHIP_DATE", length = 32)
	public String getPrliShipDate() {
		return this.prliShipDate;
	}

	public void setPrliShipDate(String prliShipDate) {
		this.prliShipDate = prliShipDate;
	}

	@Column(name = "PRLI_COMPOSITE_FLAG")
	public Short getPrliCompositeFlag() {
		return this.prliCompositeFlag;
	}

	public void setPrliCompositeFlag(Short prliCompositeFlag) {
		this.prliCompositeFlag = prliCompositeFlag;
	}

	@Column(name = "PRLI_DURATION")
	public Integer getPrliDuration() {
		return this.prliDuration;
	}

	public void setPrliDuration(Integer prliDuration) {
		this.prliDuration = prliDuration;
	}

	@Column(name = "PRLI_REMARKS", length = 500)
	public String getPrliRemarks() {
		return this.prliRemarks;
	}

	public void setPrliRemarks(String prliRemarks) {
		this.prliRemarks = prliRemarks;
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

	@Column(name = "COMP_CODE", nullable = false, length = 4)
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