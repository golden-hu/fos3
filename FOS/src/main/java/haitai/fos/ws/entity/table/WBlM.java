package haitai.fos.ws.entity.table;

import haitai.fos.ws.entity.atable.AbstractWBlM;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="W_BL_M")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class WBlM extends AbstractWBlM {

	private static final long serialVersionUID = -6126438882117637988L;
}