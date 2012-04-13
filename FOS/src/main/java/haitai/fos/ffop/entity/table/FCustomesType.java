package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFCustomsType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CUSTOMS_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FCustomesType extends AbstractFCustomsType {

	private static final long serialVersionUID = 1L;
}