package haitai.fos.ffse.entity.table;

import haitai.fos.ffse.entity.atable.AbstractSPr;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "S_PR" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SPr extends AbstractSPr {

	private static final long serialVersionUID = -4000255504440119400L;
}
