package haitai.fos.sys.entity.idao;

import haitai.fos.sys.entity.table.PMessageSubscribe;
import haitai.fw.entity.FosQuery;

import java.util.List;
import java.util.Map;

public interface IPMessageSubscribeDAO {
	public void save(PMessageSubscribe entity);

	public List<PMessageSubscribe> saveByRowAction(List<PMessageSubscribe> entityList);

	public void delete(Integer id);

	public PMessageSubscribe update(PMessageSubscribe entity);

	public PMessageSubscribe findById(Integer id);

	public List<PMessageSubscribe> findByProperties(
			final Map<String, Object> propertyMap);

	public List<PMessageSubscribe> complexQuery(
			final List<FosQuery> conditions,
			final Map<String, Object> propertyMap);

}
