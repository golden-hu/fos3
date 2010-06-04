package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGLevyType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * GLevyType entity.
 * 
 * @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "G_LEVY_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GLevyType extends AbstractGLevyType {

	private static final long serialVersionUID = 7903806207725466438L;
}
