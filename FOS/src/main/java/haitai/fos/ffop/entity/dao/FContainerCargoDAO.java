package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFContainerCargoDAO;
import haitai.fos.ffop.entity.table.FContainerCargo;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FContainerCargoDAO extends GenericDAO<FContainerCargo, Integer>
		implements IFContainerCargoDAO {

	public FContainerCargoDAO() {
		super(FContainerCargo.class);
	}

}
