package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSBill;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_BILL")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SBill extends AbstractSBill {
	private static final long serialVersionUID = 6019428985957943425L;
}
