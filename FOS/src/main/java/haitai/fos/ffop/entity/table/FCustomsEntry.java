package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFCustomsEntry;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CUSTOMS_ENTRY" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FCustomsEntry extends AbstractFCustomsEntry {

	private static final long serialVersionUID = 3482050683710571839L;
}
