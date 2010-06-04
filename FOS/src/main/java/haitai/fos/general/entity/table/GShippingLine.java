package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGShippingLine;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_SHIPPING_LINE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GShippingLine extends AbstractGShippingLine {

	private static final long serialVersionUID = -7619935132965968150L;
}
