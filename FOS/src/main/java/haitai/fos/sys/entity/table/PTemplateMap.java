package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPTemplateMap;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_TEMPLATE_MAP" )
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
public class PTemplateMap extends AbstractPTemplateMap {

	private static final long serialVersionUID = -2344609610134309676L;
}
