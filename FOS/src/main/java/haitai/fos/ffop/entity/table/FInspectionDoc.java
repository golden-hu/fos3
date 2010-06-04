package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFInspectionDoc;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_INSPECTION_DOC" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FInspectionDoc extends AbstractFInspectionDoc {

	private static final long serialVersionUID = 5163758844799358178L;
}
