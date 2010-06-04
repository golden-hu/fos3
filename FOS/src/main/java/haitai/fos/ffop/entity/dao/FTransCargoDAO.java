package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFTransCargoDAO;
import haitai.fos.ffop.entity.table.FTransCargo;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FTransCargoDAO extends GenericDAO<FTransCargo, Integer> implements
		IFTransCargoDAO {

	public FTransCargoDAO() {
		super(FTransCargo.class);
	}
}
