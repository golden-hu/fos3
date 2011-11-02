package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IPMessageTopicDAO;
import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class PMessageTopicDAO extends GenericDAO<PMessageTopic, Integer> implements IPMessageTopicDAO {

	public PMessageTopicDAO() {
		super(PMessageTopic.class);
	}
}
