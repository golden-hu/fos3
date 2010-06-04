package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGChargeClass;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CHARGE_CLASS")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GChargeClass extends AbstractGChargeClass {

	private static final long serialVersionUID = -2131513338897065193L;
}
