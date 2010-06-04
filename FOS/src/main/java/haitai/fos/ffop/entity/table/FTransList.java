package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFTransList;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_TRANS_LIST")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FTransList extends AbstractFTransList {

	private static final long serialVersionUID = 350441259726850263L;
}
