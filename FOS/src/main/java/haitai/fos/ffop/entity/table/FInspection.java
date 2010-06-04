package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFInspection;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_INSPECTION" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FInspection extends AbstractFInspection {

	private static final long serialVersionUID = -4254862129634083427L;
}
