package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGPackage;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_PACKAGE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GPackage extends AbstractGPackage {

	private static final long serialVersionUID = 2480806042139084691L;
}
