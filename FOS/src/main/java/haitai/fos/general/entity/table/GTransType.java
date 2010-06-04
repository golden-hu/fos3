package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGTransType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_TRANS_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GTransType extends AbstractGTransType {

	private static final long serialVersionUID = -4301666530333732708L;
}
