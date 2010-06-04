package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPActionLogDAO;
import haitai.fos.sys.entity.table.PActionLog;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class PActionLogDAO extends GenericDAO<PActionLog, Integer> implements
		IPActionLogDAO {

	public PActionLogDAO() {
		super(PActionLog.class);
	}
}
