package haitai.fos.cms.entity.table;

import haitai.fos.cms.entity.atable.AbstractHcmsTemplate;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "HCMS_TEMPLATE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class HcmsTemplate extends AbstractHcmsTemplate {

	private static final long serialVersionUID = 6949984445668277788L;

}
