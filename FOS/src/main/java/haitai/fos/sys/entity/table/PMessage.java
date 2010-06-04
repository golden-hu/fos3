package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPMessage;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_MESSAGE" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PMessage extends AbstractPMessage {

	private static final long serialVersionUID = 6268263598278763416L;
}
