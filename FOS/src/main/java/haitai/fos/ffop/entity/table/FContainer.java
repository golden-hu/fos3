package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFContainer;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="F_CONTAINER")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FContainer extends AbstractFContainer {

	private static final long serialVersionUID = -4203658765389842260L;
	private String consMblNo;
	private String consPodEn;

	@Transient
	public String getConsMblNo() {
		return consMblNo;
	}

	public void setConsMblNo(String consMblNo) {
		this.consMblNo = consMblNo;
	}

	@Transient
	public String getConsPodEn() {
		return consPodEn;
	}

	public void setConsPodEn(String consPodEn) {
		this.consPodEn = consPodEn;
	}
}
