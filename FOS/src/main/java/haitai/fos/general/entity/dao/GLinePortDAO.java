package haitai.fos.general.entity.dao;

import haitai.fos.general.entity.idao.IGLinePortDAO;
import haitai.fos.general.entity.table.GLinePort;
import haitai.fw.entity.GenericDAO;

import org.springframework.stereotype.Component;

@Component
public class GLinePortDAO extends GenericDAO<GLinePort, Integer> implements IGLinePortDAO {

	public GLinePortDAO() {
		super(GLinePort.class);
	}
}
