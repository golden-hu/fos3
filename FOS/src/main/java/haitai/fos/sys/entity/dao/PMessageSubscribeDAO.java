package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPMessageSubscribeDAO;
import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PMessageSubscribeDAO extends
		GenericDAO<PMessageSubscribe, Integer> implements IPMessageSubscribeDAO {

	public PMessageSubscribeDAO() {
		super(PMessageSubscribe.class);
	}
}
