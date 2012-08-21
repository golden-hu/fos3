package haitai.fos.ffse.entity.table;

import java.util.Date;

import haitai.fos.ffse.entity.atable.AbstractSBillItem;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_BILL_ITEM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SBillItem extends AbstractSBillItem  {

	private static final long serialVersionUID = -4427299394511690341L;
	
	private String consRefNo;
	private String consPodEn;
	private String consPolEn;
	private String consCargoNameCn;
	private String consPackName;
	private Integer consTotalPackages;
	private Double consTotalGrossWeight;
	private Double consTotalNetWeight;
	private Double consTotalMeasurement;
	private String consContainersInfo;
	private Date consSailDate;
	
	@Transient
	public String getConsRefNo() {
		return consRefNo;
	}
	
	public void setConsRefNo(String consRefNo) {
		this.consRefNo = consRefNo;
	}
	
	@Transient
	public String getConsPodEn() {
		return consPodEn;
	}
	
	public void setConsPodEn(String consPodEn) {
		this.consPodEn = consPodEn;
	}
	
	@Transient
	public String getConsPolEn() {
		return consPolEn;
	}
	
	public void setConsPolEn(String consPolEn) {
		this.consPolEn = consPolEn;
	}
	
	@Transient
	public String getConsCargoNameCn() {
		return consCargoNameCn;
	}
	
	public void setConsCargoNameCn(String consCargoNameCn) {
		this.consCargoNameCn = consCargoNameCn;
	}
	
	@Transient
	public String getConsPackName() {
		return consPackName;
	}
	
	public void setConsPackName(String consPackName) {
		this.consPackName = consPackName;
	}
	
	@Transient
	public Integer getConsTotalPackages() {
		return consTotalPackages;
	}
	
	public void setConsTotalPackages(Integer consTotalPackages) {
		this.consTotalPackages = consTotalPackages;
	}
	
	@Transient
	public Double getConsTotalGrossWeight() {
		return consTotalGrossWeight;
	}
	
	public void setConsTotalGrossWeight(Double consTotalGrossWeight) {
		this.consTotalGrossWeight = consTotalGrossWeight;
	}
	
	@Transient
	public Double getConsTotalNetWeight() {
		return consTotalNetWeight;
	}
	
	public void setConsTotalNetWeight(Double consTotalNetWeight) {
		this.consTotalNetWeight = consTotalNetWeight;
	}
	
	@Transient
	public Double getConsTotalMeasurement() {
		return consTotalMeasurement;
	}
	
	public void setConsTotalMeasurement(Double consTotalMeasurement) {
		this.consTotalMeasurement = consTotalMeasurement;
	}
	
	@Transient
	public String getConsContainersInfo() {
		return consContainersInfo;
	}
	
	public void setConsContainersInfo(String consContainersInfo) {
		this.consContainersInfo = consContainersInfo;
	}
	
	@Transient
	public Date getConsSailDate() {
		return consSailDate;
	}
	
	public void setConsSailDate(Date consSailDate) {
		this.consSailDate = consSailDate;
	}
	
}
