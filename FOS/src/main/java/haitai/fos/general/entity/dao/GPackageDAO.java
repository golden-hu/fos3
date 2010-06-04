package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGPackageDAO;
import haitai.fos.general.entity.table.GPackage;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GPackageDAO extends GenericDAO<GPackage, Integer> implements
		IGPackageDAO {

	public GPackageDAO() {
		super(GPackage.class);
	}
}
