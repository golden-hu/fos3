package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSBillItem;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_BILL_ITEM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SBillItem extends AbstractSBillItem  {

	private static final long serialVersionUID = -4427299394511690341L;
}
