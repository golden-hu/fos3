package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGServiceItem;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_SERVICE_ITEM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GServiceItem extends AbstractGServiceItem {

	private static final long serialVersionUID = -4111378114431954372L;
}
