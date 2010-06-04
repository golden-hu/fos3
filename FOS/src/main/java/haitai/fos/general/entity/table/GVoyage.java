package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGVoyage;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_VOYAGE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GVoyage extends AbstractGVoyage {

	private static final long serialVersionUID = 407518185024634695L;
}
