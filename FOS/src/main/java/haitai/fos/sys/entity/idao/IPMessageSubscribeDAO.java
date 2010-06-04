package haitai.fos.sys.entity.idao;

import java.util.Map;

import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fw.entity.FosQuery;
import java.util.List;

public interface IPMessageSubscribeDAO {
	public void save(PMessageSubscribe entity);

	public void delete(Integer id);

	public PMessageSubscribe update(PMessageSubscribe entity);

	public PMessageSubscribe findById(Integer id);

	public List<PMessageSubscribe> findByProperties(
			final Map<String, Object> propertyMap);

	public List<PMessageSubscribe> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
