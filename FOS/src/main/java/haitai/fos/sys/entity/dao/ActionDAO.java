package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IActionDAO;
import haitai.fos.sys.entity.table.Action;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component("ActionDAO")
public class ActionDAO extends GenericDAO<Action, Integer> implements IActionDAO{

	public ActionDAO() {
		super(Action.class);
	}
}