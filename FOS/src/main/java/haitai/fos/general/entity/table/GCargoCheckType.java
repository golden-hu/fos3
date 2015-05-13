package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGCargoCheckType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * GCargoCheckType entity.
 * 
 * @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "G_CARGO_CHECK_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GCargoCheckType extends AbstractGCargoCheckType {

	private static final long serialVersionUID = 7903806207725466438L;
}
