package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCustomsType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_CUSTOMS_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCustomsType extends AbstractGCustomsType {

	private static final long serialVersionUID = 1L;
}