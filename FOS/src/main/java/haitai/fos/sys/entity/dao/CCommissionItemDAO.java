package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.ICCommissionItemDAO;
import haitai.fos.sys.entity.table.CCommissionItem;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class CCommissionItemDAO extends GenericDAO<CCommissionItem, Integer> implements
		ICCommissionItemDAO {

	public CCommissionItemDAO() {
		super(CCommissionItem.class);
	}
}
