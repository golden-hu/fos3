package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractCCommissionItem;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "C_COMMISSION_ITEM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CCommissionItem extends AbstractCCommissionItem implements
		Comparable<CCommissionItem> {
	private static final long serialVersionUID = -6922532373928429916L;

	@Override
	public int compareTo(CCommissionItem o) {
		int code = 0;
		if (getCoitLower() == null && o.getCoitLower() == null) {
			code = 0;
		} else if (getCoitLower() == null) {
			code = -1;
		} else if (o.getCoitLower() == null) {
			code = 1;
		} else if (getCoitLower().compareTo(o.getCoitLower()) != 0) {
			code = getCoitLower().compareTo(o.getCoitLower());
		} else {
			code = getCoitLimit().compareTo(o.getCoitLimit());
		}
		
		return code;
	}
	
}
