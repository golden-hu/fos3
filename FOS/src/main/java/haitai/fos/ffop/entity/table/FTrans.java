package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFTrans;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_TRANS" , uniqueConstraints = {})
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FTrans extends AbstractFTrans {

	private static final long serialVersionUID = 9182235640631290177L;
}
