package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPMessageSubscribe;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_MESSAGE_SUBSCRIBE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PMessageSubscribe extends AbstractPMessageSubscribe {

	private static final long serialVersionUID = -5578386792035004238L;

}
