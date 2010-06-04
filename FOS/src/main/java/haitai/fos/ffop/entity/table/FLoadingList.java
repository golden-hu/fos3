package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFLoadingList;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_LOADING_LIST")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FLoadingList extends AbstractFLoadingList {

	private static final long serialVersionUID = -3339810605722460218L;
	private String custName;
	private String charterName;
	private String fconPolEn;
	private String fconPodEn;
	private String fconCargoDesc;
	private String tranName;
	private Date fconLoadDate;
	private Date fconShipDateF;
	private Date fconShipDateT;

	@Transient
	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	@Transient
	public String getCharterName() {
		return charterName;
	}

	public void setCharterName(String charterName) {
		this.charterName = charterName;
	}

	@Transient
	public String getFconPolEn() {
		return fconPolEn;
	}

	public void setFconPolEn(String fconPolEn) {
		this.fconPolEn = fconPolEn;
	}

	@Transient
	public String getFconPodEn() {
		return fconPodEn;
	}

	public void setFconPodEn(String fconPodEn) {
		this.fconPodEn = fconPodEn;
	}

	@Transient
	public String getFconCargoDesc() {
		return fconCargoDesc;
	}

	public void setFconCargoDesc(String fconCargoDesc) {
		this.fconCargoDesc = fconCargoDesc;
	}

	@Transient
	public String getTranName() {
		return tranName;
	}

	public void setTranName(String tranName) {
		this.tranName = tranName;
	}

	@Transient
	public Date getFconLoadDate() {
		return fconLoadDate;
	}

	public void setFconLoadDate(Date fconLoadDate) {
		this.fconLoadDate = fconLoadDate;
	}

	@Transient
	public Date getFconShipDateF() {
		return fconShipDateF;
	}

	public void setFconShipDateF(Date fconShipDateF) {
		this.fconShipDateF = fconShipDateF;
	}

	@Transient
	public Date getFconShipDateT() {
		return fconShipDateT;
	}

	public void setFconShipDateT(Date fconShipDateT) {
		this.fconShipDateT = fconShipDateT;
	}
}
