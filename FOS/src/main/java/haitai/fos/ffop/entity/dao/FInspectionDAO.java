package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFInspectionDAO;
import haitai.fos.ffop.entity.table.FInspection;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FInspectionDAO extends GenericDAO<FInspection, Integer> implements IFInspectionDAO {

	public FInspectionDAO() {
		super(FInspection.class);
	}
}