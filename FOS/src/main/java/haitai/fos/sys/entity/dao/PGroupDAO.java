package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPGroupDAO;
import haitai.fos.sys.entity.table.PGroup;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PGroupDAO extends GenericDAO<PGroup, Integer> implements IPGroupDAO {

	public PGroupDAO() {
		super(PGroup.class);
	}
}
