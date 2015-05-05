package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractOAnnouncement;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "O_ANNOUNCEMENT" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class OAnnouncement extends AbstractOAnnouncement {

	private static final long serialVersionUID = -4744046776200957023L;
}
