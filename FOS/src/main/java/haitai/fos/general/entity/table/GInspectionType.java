package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGInspectionType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_INSPECTION_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GInspectionType extends AbstractGInspectionType {

	private static final long serialVersionUID = 1L;
}