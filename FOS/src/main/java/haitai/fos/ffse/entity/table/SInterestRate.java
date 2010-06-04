package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSInterestRate;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_INTEREST_RATE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SInterestRate extends AbstractSInterestRate {

	private static final long serialVersionUID = -5180184326611055779L;
}
