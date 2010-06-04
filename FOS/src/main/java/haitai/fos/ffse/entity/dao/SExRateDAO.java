package haitai.fos.ffse.entity.dao;

import haitai.fos.ffse.entity.idao.ISExRateDAO;
import haitai.fos.ffse.entity.table.SExRate;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class SExRateDAO extends GenericDAO<SExRate, Integer> implements
		ISExRateDAO {

	public SExRateDAO() {
		super(SExRate.class);
	}

}
