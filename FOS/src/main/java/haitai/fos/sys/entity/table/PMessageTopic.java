package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPMessageTopic;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_MESSAGE_TOPIC")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PMessageTopic extends AbstractPMessageTopic {

	private static final long serialVersionUID = -658504055708515544L;

}
