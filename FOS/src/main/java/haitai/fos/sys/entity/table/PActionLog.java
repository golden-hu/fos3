package haitai.fos.sys.entity.table;

import haitai.fos.sys.entity.atable.AbstractPActionLog;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "P_ACTION_LOG")
public class PActionLog extends AbstractPActionLog{

	private static final long serialVersionUID = -2927546070285019789L;
}
