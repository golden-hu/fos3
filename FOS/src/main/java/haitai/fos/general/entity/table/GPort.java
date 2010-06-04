package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGPort;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_PORT")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GPort extends AbstractGPort {

	private static final long serialVersionUID = 7704155161386130631L;
}
