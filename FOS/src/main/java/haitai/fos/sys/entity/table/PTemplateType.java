package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPTemplateType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "P_TEMPLATE_TYPE" )
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
public class PTemplateType extends AbstractPTemplateType {

	private static final long serialVersionUID = 8569068021241320345L;
}
