package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCPriceRecord;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_PRICE_RECORD" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CPriceRecord extends AbstractCPriceRecord {

	private static final long serialVersionUID = 4362305575021778840L;
	private String prshVendorName;
	private String prshCarrierName;
	private String prshBizType;
	private String prshContractNo;
	private String prshPolEn;
	private String shliName;
	private String vessName;
	private String voyaName;
	private Date prshStartDate;
	private Date prshEndDate;
	private String prshRemarks;
	private Short prshStatus;
	
	private String prliCountryDName;
	private String prliPodEn;
	private String prliCountryTName;
	private String prliPotEn;
	private String caclName;
	private String pateName;
	private String tranName;
	private String prliShipDate;
	private Short prliCompositeFlag;
	private Integer prliDuration;
	private String prliRemarks;

	@Transient
	public String getPrshVendorName() {
		return prshVendorName;
	}

	public void setPrshVendorName(String prshVendorName) {
		this.prshVendorName = prshVendorName;
	}

	@Transient
	public String getPrshCarrierName() {
		return prshCarrierName;
	}

	public void setPrshCarrierName(String prshCarrierName) {
		this.prshCarrierName = prshCarrierName;
	}

	@Transient
	public String getPrshBizType() {
		return prshBizType;
	}

	public void setPrshBizType(String prshBizType) {
		this.prshBizType = prshBizType;
	}

	@Transient
	public String getPrshContractNo() {
		return prshContractNo;
	}

	public void setPrshContractNo(String prshContractNo) {
		this.prshContractNo = prshContractNo;
	}

	@Transient
	public String getPrshPolEn() {
		return prshPolEn;
	}

	public void setPrshPolEn(String prshPolEn) {
		this.prshPolEn = prshPolEn;
	}

	@Transient
	public String getShliName() {
		return shliName;
	}

	public void setShliName(String shliName) {
		this.shliName = shliName;
	}

	@Transient
	public String getVessName() {
		return vessName;
	}

	public void setVessName(String vessName) {
		this.vessName = vessName;
	}

	@Transient
	public String getVoyaName() {
		return voyaName;
	}

	public void setVoyaName(String voyaName) {
		this.voyaName = voyaName;
	}

	@Transient
	public Date getPrshStartDate() {
		return prshStartDate;
	}

	public void setPrshStartDate(Date prshStartDate) {
		this.prshStartDate = prshStartDate;
	}

	@Transient
	public Date getPrshEndDate() {
		return prshEndDate;
	}

	public void setPrshEndDate(Date prshEndDate) {
		this.prshEndDate = prshEndDate;
	}

	@Transient
	public String getPrshRemarks() {
		return prshRemarks;
	}

	public void setPrshRemarks(String prshRemarks) {
		this.prshRemarks = prshRemarks;
	}

	@Transient
	public Short getPrshStatus() {
		return prshStatus;
	}

	public void setPrshStatus(Short prshStatus) {
		this.prshStatus = prshStatus;
	}

	@Transient
	public String getPrliCountryDName() {
		return prliCountryDName;
	}

	public void setPrliCountryDName(String prliCountryDName) {
		this.prliCountryDName = prliCountryDName;
	}

	@Transient
	public String getPrliPodEn() {
		return prliPodEn;
	}

	public void setPrliPodEn(String prliPodEn) {
		this.prliPodEn = prliPodEn;
	}

	@Transient
	public String getPrliCountryTName() {
		return prliCountryTName;
	}

	public void setPrliCountryTName(String prliCountryTName) {
		this.prliCountryTName = prliCountryTName;
	}

	@Transient
	public String getPrliPotEn() {
		return prliPotEn;
	}

	public void setPrliPotEn(String prliPotEn) {
		this.prliPotEn = prliPotEn;
	}

	@Transient
	public String getCaclName() {
		return caclName;
	}

	public void setCaclName(String caclName) {
		this.caclName = caclName;
	}

	@Transient
	public String getPateName() {
		return pateName;
	}

	public void setPateName(String pateName) {
		this.pateName = pateName;
	}

	@Transient
	public String getTranName() {
		return tranName;
	}

	public void setTranName(String tranName) {
		this.tranName = tranName;
	}

	@Transient
	public String getPrliShipDate() {
		return prliShipDate;
	}

	public void setPrliShipDate(String prliShipDate) {
		this.prliShipDate = prliShipDate;
	}

	@Transient
	public Short getPrliCompositeFlag() {
		return prliCompositeFlag;
	}

	public void setPrliCompositeFlag(Short prliCompositeFlag) {
		this.prliCompositeFlag = prliCompositeFlag;
	}

	@Transient
	public Integer getPrliDuration() {
		return prliDuration;
	}

	public void setPrliDuration(Integer prliDuration) {
		this.prliDuration = prliDuration;
	}

	@Transient
	public String getPrliRemarks() {
		return prliRemarks;
	}

	public void setPrliRemarks(String prliRemarks) {
		this.prliRemarks = prliRemarks;
	}
}
