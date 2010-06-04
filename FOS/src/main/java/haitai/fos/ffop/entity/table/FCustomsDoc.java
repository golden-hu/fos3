package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFCustomsDoc;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CUSTOMS_DOC" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FCustomsDoc extends AbstractFCustomsDoc {

	private static final long serialVersionUID = -8223738257244890218L;
}
