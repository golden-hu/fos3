package haitai.fos.ws.entity.table;

import haitai.fos.ws.entity.atable.AbstractWUser;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name="W_USER")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class WUser extends AbstractWUser {
	private static final long serialVersionUID = 6756796816883469044L;
}