package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFSecondShipDAO;
import haitai.fos.ffop.entity.table.FSecondShip;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FSecondShipDAO extends GenericDAO<FSecondShip, Integer> implements
		IFSecondShipDAO {

	public FSecondShipDAO() {
		super(FSecondShip.class);
	}
}
