package haitai.fos.ws.entity.atable;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import haitai.fw.entity.BaseDomain;

@MappedSuperclass
public class AbstractWInquiry extends BaseDomain {
	private static final long serialVersionUID = -5585401528007021751L;
	private Integer winqId;
	private Integer version;
	private String winqCargoDesc;
	private Integer winqCargoPackages;
	private Double winqCargoGw;
	private Double winqCargoMeasurement;
	private String winqReceiptPlace;
	private String winqDeliveryPlace;
	private Integer winqPol;
	private String winqPolEn;
	private Integer winqPod;
	private String winqPodEn;
	private Integer tranId;
	private String tranCode;
	private Integer pateId;
	private String pateName;
	private String winqBizType;
	private String winqRemarks;
	private Date createTime;
	private Date modifyTime;
	private Short winqStatus;
	private Integer wusrId;
	private String compCode;
	private Short removed;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="WINQ_ID", unique=true, nullable=false)
	public Integer getWinqId() {
		return winqId;
	}
	public void setWinqId(Integer winqId) {
		this.winqId = winqId;
	}

	@Version
	@Column(name = "VERSION", nullable = false)
	public Integer getVersion() {
		return this.version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

    @Lob()
	@Column(name="WINQ_CARGO_DESC")
	public String getWinqCargoDesc() {
		return winqCargoDesc;
	}
	public void setWinqCargoDesc(String winqCargoDesc) {
		this.winqCargoDesc = winqCargoDesc;
	}
	
	@Column(name="WINQ_CARGO_PACKAGES")
	public Integer getWinqCargoPackages() {
		return winqCargoPackages;
	}
	public void setWinqCargoPackages(Integer winqCargoPackages) {
		this.winqCargoPackages = winqCargoPackages;
	}
	
	@Column(name="WINQ_CARGO_GW", precision=10, scale=6)
	public Double getWinqCargoGw() {
		return winqCargoGw;
	}
	public void setWinqCargoGw(Double winqCargoGw) {
		this.winqCargoGw = winqCargoGw;
	}
	
	@Column(name="WINQ_CARGO_MEASUREMENT", precision=10, scale=6)
	public Double getWinqCargoMeasurement() {
		return winqCargoMeasurement;
	}
	public void setWinqCargoMeasurement(Double winqCargoMeasurement) {
		this.winqCargoMeasurement = winqCargoMeasurement;
	}

	@Column(name="WINQ_RECEIPT_PLACE", length=200)
	public String getWinqReceiptPlace() {
		return winqReceiptPlace;
	}
	public void setWinqReceiptPlace(String winqReceiptPlace) {
		this.winqReceiptPlace = winqReceiptPlace;
	}
	
	@Column(name="WINQ_DELIVERY_PLACE", length=200)
	public String getWinqDeliveryPlace() {
		return winqDeliveryPlace;
	}
	public void setWinqDeliveryPlace(String winqDeliveryPlace) {
		this.winqDeliveryPlace = winqDeliveryPlace;
	}

	@Column(name="WINQ_POL")
	public Integer getWinqPol() {
		return winqPol;
	}
	public void setWinqPol(Integer winqPol) {
		this.winqPol = winqPol;
	}
	
	@Column(name="WINQ_POL_EN", length=200)
	public String getWinqPolEn() {
		return winqPolEn;
	}
	public void setWinqPolEn(String winqPolEn) {
		this.winqPolEn = winqPolEn;
	}
	
	@Column(name="WINQ_POD")
	public Integer getWinqPod() {
		return winqPod;
	}
	public void setWinqPod(Integer winqPod) {
		this.winqPod = winqPod;
	}
	
	@Column(name="WINQ_POD_EN", length=200)
	public String getWinqPodEn() {
		return winqPodEn;
	}
	public void setWinqPodEn(String winqPodEn) {
		this.winqPodEn = winqPodEn;
	}
	
	@Column(name="TRAN_ID")
	public Integer getTranId() {
		return tranId;
	}
	public void setTranId(Integer tranId) {
		this.tranId = tranId;
	}
	
	@Column(name="TRAN_CODE", length=32)
	public String getTranCode() {
		return tranCode;
	}
	public void setTranCode(String tranCode) {
		this.tranCode = tranCode;
	}
	
	@Column(name="PATE_ID")
	public Integer getPateId() {
		return pateId;
	}
	public void setPateId(Integer pateId) {
		this.pateId = pateId;
	}
	
	@Column(name="PATE_NAME", length=32)
	public String getPateName() {
		return pateName;
	}
	public void setPateName(String pateName) {
		this.pateName = pateName;
	}
	
	@Column(name="WINQ_BIZ_TYPE", length=1)
	public String getWinqBizType() {
		return winqBizType;
	}
	public void setWinqBizType(String winqBizType) {
		this.winqBizType = winqBizType;
	}

    @Lob()
	@Column(name="WINQ_REMARKS")
	public String getWinqRemarks() {
		return winqRemarks;
	}
	public void setWinqRemarks(String winqRemarks) {
		this.winqRemarks = winqRemarks;
	}
	
    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="CREATE_TIME")
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
    @Temporal( TemporalType.TIMESTAMP)
	@Column(name="MODIFY_TIME")
	public Date getModifyTime() {
		return modifyTime;
	}
	public void setModifyTime(Date modifyTime) {
		this.modifyTime = modifyTime;
	}
	
	@Column(name="WINQ_STATUS")
	public Short getWinqStatus() {
		return winqStatus;
	}
	public void setWinqStatus(Short winqStatus) {
		this.winqStatus = winqStatus;
	}
	
	@Column(name="WUSR_ID")
	public Integer getWusrId() {
		return wusrId;
	}
	public void setWusrId(Integer wusrId) {
		this.wusrId = wusrId;
	}
	
	@Column(name="COMP_CODE", nullable=false, length=4)
	public String getCompCode() {
		return compCode;
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
