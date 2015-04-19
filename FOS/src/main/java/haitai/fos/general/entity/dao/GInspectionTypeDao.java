package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGInspectionTypeDao;
import haitai.fos.general.entity.table.GInspectionType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GInspectionTypeDao extends GenericDAO<GInspectionType, Integer> implements IGInspectionTypeDao {

	public GInspectionTypeDao() {
		super(GInspectionType.class);
	}
}
