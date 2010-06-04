package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGDocumentType;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_DOCUMENT_TYPE")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GDocumentType extends AbstractGDocumentType {

	private static final long serialVersionUID = 1026235846498618302L;
}
