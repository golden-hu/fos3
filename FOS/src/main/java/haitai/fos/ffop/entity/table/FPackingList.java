package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFPackingList;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_PACKING_LIST")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FPackingList extends AbstractFPackingList {

	private static final long serialVersionUID = 8813532580601692874L;
	private String charterName;
	private String custName;
	private String fconPodEn;
	private Short fconInvoiceFlag;
	private Short fconInspectionFlag;
	private Short fconCudeType;

	@Transient
	public String getCharterName() {
		return charterName;
	}

	public void setCharterName(String charterName) {
		this.charterName = charterName;
	}

	@Transient
	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Transient
	public String getFconPodEn() {
		return fconPodEn;
	}

	public void setFconPodEn(String fconPodEn) {
		this.fconPodEn = fconPodEn;
	}

	@Transient
	public Short getFconInvoiceFlag() {
		return fconInvoiceFlag;
	}

	public void setFconInvoiceFlag(Short fconInvoiceFlag) {
		this.fconInvoiceFlag = fconInvoiceFlag;
	}

	@Transient
	public Short getFconInspectionFlag() {
		return fconInspectionFlag;
	}

	public void setFconInspectionFlag(Short fconInspectionFlag) {
		this.fconInspectionFlag = fconInspectionFlag;
	}

	@Transient
	public Short getFconCudeType() {
		return fconCudeType;
	}

	public void setFconCudeType(Short fconCudeType) {
		this.fconCudeType = fconCudeType;
	}
	
}
