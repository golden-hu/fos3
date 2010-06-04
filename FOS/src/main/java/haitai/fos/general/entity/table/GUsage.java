package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGUsage;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_USAGE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GUsage extends AbstractGUsage {

	private static final long serialVersionUID = 5991104983302323637L;
}
