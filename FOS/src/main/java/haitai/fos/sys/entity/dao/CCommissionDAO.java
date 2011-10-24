package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICCommissionDAO;
import haitai.fos.sys.entity.table.CCommission;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class CCommissionDAO extends GenericDAO<CCommission, Integer> implements ICCommissionDAO {

	public CCommissionDAO() {
		super(CCommission.class);
	}
}
