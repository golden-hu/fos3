package haitai.fos.sys.entity.dao;

import haitai.fos.sys.entity.idao.IOAnnouncementDAO;
import haitai.fos.sys.entity.table.OAnnouncement;
import haitai.fw.entity.GenericDAO;
import org.springframework.stereotype.Component;

@Component
public class OAnnouncementDAO extends GenericDAO<OAnnouncement, Integer> implements IOAnnouncementDAO {

	public OAnnouncementDAO() {
		super(OAnnouncement.class);
	}
}
