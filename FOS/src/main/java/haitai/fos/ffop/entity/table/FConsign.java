package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFConsign;
import haitai.fw.util.ConstUtil;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="F_CONSIGN")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FConsign extends AbstractFConsign {

	private static final long serialVersionUID = 2337963319182853941L;
	private Double sumR;
	private Double sumP;
	private Double grossProfit;
	private String grossProfitRate;
	private Double sumRUsd;
	private Double sumRCny;
	private Double sumPUsd;
	private Double sumPCny;
	private Double sumRUsdInvoice;
	private Double sumRCnyInvoice;
	private Double sumPUsdInvoice;
	private Double sumPCnyInvoice;
	private Double sumRUsdWriteOff;
	private Double sumRCnyWriteOff;
	private Double sumPUsdWriteOff;
	private Double sumPCnyWriteOff;
	private Short editable;
	private Integer wconId;
	private String settlementObject;
	
	@Transient
	public Double getSumR() {
		return sumR;
	}

	public void setSumR(Double sumR) {
		this.sumR = sumR;
	}

	@Transient
	public Double getSumP() {
		return sumP;
	}

	public void setSumP(Double sumP) {
		this.sumP = sumP;
	}

	@Transient
	public Double getGrossProfit() {
		return grossProfit;
	}

	public void setGrossProfit(Double grossProfit) {
		this.grossProfit = grossProfit;
	}

	@Transient
	public String getGrossProfitRate() {
		return grossProfitRate;
	}

	public void setGrossProfitRate(String grossProfitRate) {
		this.grossProfitRate = grossProfitRate;
	}

	@Transient
	public Double getSumRUsd() {
		return sumRUsd;
	}

	public void setSumRUsd(Double sumRUsd) {
		this.sumRUsd = sumRUsd;
	}

	@Transient
	public Double getSumRCny() {
		return sumRCny;
	}

	public void setSumRCny(Double sumRCny) {
		this.sumRCny = sumRCny;
	}

	@Transient
	public Double getSumPUsd() {
		return sumPUsd;
	}

	public void setSumPUsd(Double sumPUsd) {
		this.sumPUsd = sumPUsd;
	}

	@Transient
	public Double getSumPCny() {
		return sumPCny;
	}

	public void setSumPCny(Double sumPCny) {
		this.sumPCny = sumPCny;
	}

	@Transient
	public Double getSumRUsdInvoice() {
		return sumRUsdInvoice;
	}

	public void setSumRUsdInvoice(Double sumRUsdInvoice) {
		this.sumRUsdInvoice = sumRUsdInvoice;
	}

	@Transient
	public Double getSumRCnyInvoice() {
		return sumRCnyInvoice;
	}

	public void setSumRCnyInvoice(Double sumRCnyInvoice) {
		this.sumRCnyInvoice = sumRCnyInvoice;
	}

	@Transient
	public Double getSumPUsdInvoice() {
		return sumPUsdInvoice;
	}

	public void setSumPUsdInvoice(Double sumPUsdInvoice) {
		this.sumPUsdInvoice = sumPUsdInvoice;
	}

	@Transient
	public Double getSumPCnyInvoice() {
		return sumPCnyInvoice;
	}

	public void setSumPCnyInvoice(Double sumPCnyInvoice) {
		this.sumPCnyInvoice = sumPCnyInvoice;
	}

	@Transient
	public Double getSumRUsdWriteOff() {
		return sumRUsdWriteOff;
	}

	public void setSumRUsdWriteOff(Double sumRUsdWriteOff) {
		this.sumRUsdWriteOff = sumRUsdWriteOff;
	}

	@Transient
	public Double getSumRCnyWriteOff() {
		return sumRCnyWriteOff;
	}

	public void setSumRCnyWriteOff(Double sumRCnyWriteOff) {
		this.sumRCnyWriteOff = sumRCnyWriteOff;
	}

	@Transient
	public Double getSumPUsdWriteOff() {
		return sumPUsdWriteOff;
	}

	public void setSumPUsdWriteOff(Double sumPUsdWriteOff) {
		this.sumPUsdWriteOff = sumPUsdWriteOff;
	}

	@Transient
	public Double getSumPCnyWriteOff() {
		return sumPCnyWriteOff;
	}

	public void setSumPCnyWriteOff(Double sumPCnyWriteOff) {
		this.sumPCnyWriteOff = sumPCnyWriteOff;
	}

	@Transient
	public String getClassType() {
		String s = getConsBizType();
		if(ConstUtil.CONS_BIZ_TYPE_CONTAINER.equals(getConsBizType()) &&
				ConstUtil.CONS_SHIP_TYPE_LCL.equals(getConsShipType())){
				s = ConstUtil.CONS_NO_LCL;
		}
		return s;
	}
	
	@Transient
	public String getExternal() {
		String s = "";
		Short flag = getConsExternalFlag();
		if(ConstUtil.TrueShort.equals(flag)) {
			s = ConstUtil.CONS_NO_WAIGUA;
		}
		return s;
	}

	@Transient
	public Short getEditable() {
		return editable;
	}

	public void setEditable(Short editable) {
		this.editable = editable;
	}

	@Transient
	public Integer getWconId() {
		return wconId;
	}

	public void setWconId(Integer wconId) {
		this.wconId = wconId;
	}
	
	@Transient
	public String getSettlementObject() {
		return settlementObject;
	}

	public void setSettlement(String settlementObject) {
		this.settlementObject = settlementObject;
	}
}
