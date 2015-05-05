package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.OAnnouncement;
import haitai.fw.entity.FosQuery;

import java.util.Map;
import java.util.List;

public interface IOAnnouncementDAO {
	public void save(OAnnouncement entity);

	public void delete(Integer id);

	public OAnnouncement update(OAnnouncement entity);

	public OAnnouncement findById(Integer id);

	public List<OAnnouncement> findByProperties(
			final Map<String, Object> propertyMap);

	public abstract List<OAnnouncement> complexQuery(
			final List<FosQuery> conditions, final Map<String, Object> propertyMap);
}
