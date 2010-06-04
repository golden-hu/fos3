package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGTransTerm;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_TRANS_TERM")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GTransTerm extends AbstractGTransTerm {

	private static final long serialVersionUID = -3241889151541858791L;
}
