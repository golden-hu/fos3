package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGLinePort;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_LINE_PORT")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GLinePort extends AbstractGLinePort {

	private static final long serialVersionUID = -7862734893271569154L;
}
