package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFTransTaskDAO;
import haitai.fos.ffop.entity.table.FTransTask;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FTransTaskDAO extends GenericDAO<FTransTask, Integer> implements
		IFTransTaskDAO {

	public FTransTaskDAO() {
		super(FTransTask.class);
	}
}