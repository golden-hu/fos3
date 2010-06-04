package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGIssueType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_ISSUE_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GIssueType extends AbstractGIssueType {

	private static final long serialVersionUID = -3532702516235308672L;
}
