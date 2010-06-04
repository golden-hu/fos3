package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCountry;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_COUNTRY")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCountry extends AbstractGCountry {

	private static final long serialVersionUID = 3199914402543642214L;
}
