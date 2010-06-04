package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFWarehouseCargoDAO;
import haitai.fos.ffop.entity.table.FWarehouseCargo;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FWarehouseCargoDAO extends GenericDAO<FWarehouseCargo, Integer>
		implements IFWarehouseCargoDAO {

	public FWarehouseCargoDAO() {
		super(FWarehouseCargo.class);
	}
}