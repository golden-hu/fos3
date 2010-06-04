package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFContract;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CONTRACT")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FContract extends AbstractFContract {

	private static final long serialVersionUID = -7545075943184720945L;
	private Double fconRemainQuantity;
	private Double fconRemainCbm;
	@Transient
	public Double getFconRemainQuantity() {
		return fconRemainQuantity;
	}
	public void setFconRemainQuantity(Double fconRemainQuantity) {
		this.fconRemainQuantity = fconRemainQuantity;
	}
	@Transient
	public Double getFconRemainCbm() {
		return fconRemainCbm;
	}
	public void setFconRemainCbm(Double fconRemainCbm) {
		this.fconRemainCbm = fconRemainCbm;
	}
	
}
