package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPCompanyConfig;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_COMPANY_CONFIG" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class PCompanyConfig extends AbstractPCompanyConfig {

	private static final long serialVersionUID = -4578834837151540011L;
}
