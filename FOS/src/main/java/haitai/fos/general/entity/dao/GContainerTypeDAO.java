package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGContainerTypeDAO;
import haitai.fos.general.entity.table.GContainerType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GContainerTypeDAO extends GenericDAO<GContainerType, Integer> implements IGContainerTypeDAO {

	public GContainerTypeDAO() {
		super(GContainerType.class);
	}
}
