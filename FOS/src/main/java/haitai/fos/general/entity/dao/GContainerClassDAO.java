package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGContainerClassDAO;
import haitai.fos.general.entity.table.GContainerClass;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GContainerClassDAO extends GenericDAO<GContainerClass, Integer>
		implements IGContainerClassDAO {

	public GContainerClassDAO() {
		super(GContainerClass.class);
	}
}
