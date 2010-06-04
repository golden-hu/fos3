package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGPortDAO;
import haitai.fos.general.entity.table.GPort;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GPortDAO extends GenericDAO<GPort, Integer> implements IGPortDAO {

	public GPortDAO() {
		super(GPort.class);
	}
}
