package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISInterestRateDAO;
import haitai.fos.ffse.entity.table.SInterestRate;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SInterestRateDAO extends GenericDAO<SInterestRate, Integer>
		implements ISInterestRateDAO {

	public SInterestRateDAO() {
		super(SInterestRate.class);
	}

}
