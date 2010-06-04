package haitai.fos.ffop.entity.dao;

import haitai.fos.ffop.entity.idao.IFInspectionDocDAO;
import haitai.fos.ffop.entity.table.FInspectionDoc;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class FInspectionDocDAO extends GenericDAO<FInspectionDoc, Integer>
		implements IFInspectionDocDAO {

	public FInspectionDocDAO() {
		super(FInspectionDoc.class);
	}
}