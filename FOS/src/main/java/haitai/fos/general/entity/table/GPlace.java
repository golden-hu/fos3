package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGPlace;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_PLACE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GPlace extends AbstractGPlace {

	private static final long serialVersionUID = 3884536526905184809L;
}
