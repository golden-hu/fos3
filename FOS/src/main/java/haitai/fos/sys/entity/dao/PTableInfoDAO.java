package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPTableInfoDAO;
import haitai.fos.sys.entity.table.PTableInfo;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PTableInfoDAO extends GenericDAO<PTableInfo, Integer> implements
		IPTableInfoDAO {

	public PTableInfoDAO() {
		super(PTableInfo.class);
	}
}
