package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFAttachDAO;
import haitai.fos.ffop.entity.table.FAttach;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FAttachDAO extends GenericDAO<FAttach, Integer> implements IFAttachDAO {

	public FAttachDAO() {
		super(FAttach.class);
	}

}
