package haitai.fos.ffop.entity.table;

import haitai.fos.ffop.entity.atable.AbstractFCustomsDeclaration;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "F_CUSTOMS_DECLARATION" )
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FCustomsDeclaration extends AbstractFCustomsDeclaration {

	private static final long serialVersionUID = 6645366168744192025L;
}
