package haitai.fos.sys.entity.idao;

import java.util.Map;

import haitai.fos.sys.entity.table.PMessageTopic;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IPMessageTopicDAO {
	public void save(PMessageTopic entity);

	public void delete(Integer id);

	public PMessageTopic update(PMessageTopic entity);

	public PMessageTopic findById(Integer id);

	public List<PMessageTopic> findByProperties(
			final Map<String, Object> propertyMap);

	public List<PMessageTopic> complexQuery(final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
