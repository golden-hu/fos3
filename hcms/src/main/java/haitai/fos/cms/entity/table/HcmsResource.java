package haitai.fos.cms.entity.table;

import haitai.fos.cms.entity.atable.AbstractHcmsResource;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "HCMS_RESOURCE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class HcmsResource extends AbstractHcmsResource {
	private static final long serialVersionUID = 7998677315098160028L;

}
