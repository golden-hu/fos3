package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISBalanceDAO;
import haitai.fos.ffse.entity.table.SBalance;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class SBalanceDAO extends GenericDAO<SBalance, Integer> implements
		ISBalanceDAO {

	public SBalanceDAO() {
		super(SBalance.class);
	}
}
