package haitai.fos.general.entity.table;

import haitai.fos.general.entity.atable.AbstractGTrainStation;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "G_TRAIN_STATION")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class GTrainStation extends AbstractGTrainStation {

	private static final long serialVersionUID = 7704155161386130631L;
}
