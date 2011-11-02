package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGLevyTypeDAO;
import haitai.fos.general.entity.table.GLevyType;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GLevyTypeDAO extends GenericDAO<GLevyType, Integer> implements IGLevyTypeDAO {

	public GLevyTypeDAO() {
		super(GLevyType.class);
	}
}
