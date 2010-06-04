package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPTaskTypeDAO;
import haitai.fos.sys.entity.table.PTaskType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PTaskTypeDAO extends GenericDAO<PTaskType, Integer> implements
		IPTaskTypeDAO {

	public PTaskTypeDAO() {
		super(PTaskType.class);
	}
}
