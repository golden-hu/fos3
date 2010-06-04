package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFDoDAO;
import haitai.fos.ffop.entity.table.FDo;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FDoDAO extends GenericDAO<FDo, Integer> implements IFDoDAO {

	public FDoDAO() {
		super(FDo.class);
	}

}
