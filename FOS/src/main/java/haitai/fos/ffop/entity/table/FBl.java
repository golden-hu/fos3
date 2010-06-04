package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFBl;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_BL")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FBl extends AbstractFBl {

	private static final long serialVersionUID = 150298514339620698L;
}
