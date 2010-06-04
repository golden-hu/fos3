package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFWarehouseDAO;
import haitai.fos.ffop.entity.table.FWarehouse;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FWarehouseDAO extends GenericDAO<FWarehouse, Integer> implements
		IFWarehouseDAO {

	public FWarehouseDAO() {
		super(FWarehouse.class);
	}
}