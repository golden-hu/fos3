package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGTradeType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_TRADE_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GTradeType extends AbstractGTradeType {

	private static final long serialVersionUID = 9186294876476268346L;
}
